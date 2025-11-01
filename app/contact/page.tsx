import { ContactSection } from "@/components/contact-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Início
          </Link>
        </Button>

        <div className="max-w-3xl mb-12 lg:mb-16">
          <h1 className="font-serif text-4xl lg:text-6xl font-light mb-6">Schedule a Consultation</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Take the first step toward better mental health. Contact Dr. Gustavo Mendes e Silva to schedule an
            appointment or learn more about psychiatric services.
          </p>
        </div>
        <ContactSection />
      </div>
    </main>
  )
}
