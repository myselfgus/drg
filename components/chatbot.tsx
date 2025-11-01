"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, Send, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Olá! Seja bem-vindo! Como posso te ajudar?",
      timestamp: new Date(),
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatWindowRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Unknown error" }))
        throw new Error(errorData.error || "Failed to get response")
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error("No response body")

      const decoder = new TextDecoder()
      let assistantMessage = ""
      let buffer = ""

      const assistantId = (Date.now() + 1).toString()
      setMessages((prev) => [
        ...prev,
        {
          id: assistantId,
          role: "assistant",
          content: "",
          timestamp: new Date(),
        },
      ])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        buffer += chunk
        const lines = buffer.split("\n")

        buffer = lines.pop() || ""

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6).trim()
            if (data === "[DONE]") continue
            if (!data) continue

            try {
              const parsed = JSON.parse(data)
              const content = parsed.choices?.[0]?.delta?.content
              if (content) {
                assistantMessage += content
                setMessages((prev) => prev.map((m) => (m.id === assistantId ? { ...m, content: assistantMessage } : m)))
              }
            } catch (e) {
              console.error("[v0] Parse error:", e, "Data:", data)
            }
          }
        }
      }
    } catch (error) {
      console.error("[v0] Chat error:", error)
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: "Desculpe, encontrei um erro. Por favor, tente novamente.",
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105 active:scale-95 p-3.5 flex items-center gap-3 border border-gray-100"
          aria-label="Abrir chat"
        >
          <div className="relative w-9 h-9">
            <Image src="/logo-simple.jpg" alt="Logo" fill className="object-contain" />
          </div>
          <div className="bg-black text-white rounded-full p-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
            <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
          </div>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0 md:items-end md:justify-end">
          <div className="absolute inset-0 bg-black/20 md:hidden" onClick={() => setIsOpen(false)} />

          <div
            ref={chatWindowRef}
            className="relative w-full max-w-md md:max-w-md md:mb-6 md:mr-6 bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-300 max-h-[85vh] md:max-h-[680px] font-mono"
          >
            <div className="relative p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="relative w-10 h-10">
                  <Image src="/logo-simple.jpg" alt="Logo" fill className="object-contain" />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full p-1.5 transition-all duration-200"
                  aria-label="Fechar chat"
                >
                  <X className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="flex items-start gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300"
                >
                  {message.role === "assistant" && (
                    <div className="relative w-6 h-6 flex-shrink-0 mt-0.5">
                      <Image src="/logo-simple.jpg" alt="Assistente" fill className="object-contain opacity-30" />
                    </div>
                  )}
                  <div
                    className={`rounded-2xl px-3.5 py-2.5 max-w-[85%] transition-all duration-200 ${
                      message.role === "user"
                        ? "iridescent-bg text-white ml-auto shadow-sm"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap font-light">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-2 animate-in fade-in duration-300">
                  <div className="relative w-6 h-6 flex-shrink-0 mt-0.5">
                    <Image src="/logo-simple.jpg" alt="Assistente" fill className="object-contain opacity-30" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-3.5 py-2.5">
                    <div className="flex gap-1">
                      <div
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms", animationDuration: "1s" }}
                      />
                      <div
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "200ms", animationDuration: "1s" }}
                      />
                      <div
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "400ms", animationDuration: "1s" }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-gray-100">
              <div className="relative">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enviar mensagem..."
                  className="w-full rounded-full border border-gray-200 px-4 py-3 pr-12 text-sm focus:border-gray-300 focus:ring-0 font-light placeholder:text-gray-400 transition-all duration-200"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isLoading}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-gray-600 text-white rounded-full p-2 hover:bg-gray-700 active:scale-95 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
