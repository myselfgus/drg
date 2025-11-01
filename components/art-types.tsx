"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const conditions = [
  {
    name: "Depressão",
    description:
      "Um transtorno de humor que causa sentimentos persistentes de tristeza e perda de interesse. O tratamento inclui terapia, medicação e modificações no estilo de vida.",
    image: "/peaceful-therapy-office-with-natural-light.jpg",
    approaches: "TCC, Medicação, Mudanças no Estilo de Vida, Psicoterapia",
  },
  {
    name: "Transtornos de Ansiedade",
    description:
      "Condições caracterizadas por preocupação excessiva, medo ou nervosismo. Inclui ansiedade generalizada, transtorno do pânico e ansiedade social.",
    image: "/modern-medical-office-consultation-room.jpg",
    approaches: "TCC, Terapia de Exposição, Medicação, Técnicas de Relaxamento",
  },
  {
    name: "Transtorno Bipolar",
    description:
      "Uma condição que envolve mudanças extremas de humor entre altos emocionais (mania) e baixos (depressão).",
    image: "/peaceful-therapy-office-with-natural-light.jpg",
    approaches: "Estabilizadores de Humor, Psicoterapia, Gestão do Estilo de Vida",
  },
  {
    name: "TEPT",
    description:
      "O Transtorno de Estresse Pós-Traumático se desenvolve após vivenciar ou testemunhar eventos traumáticos. Os sintomas incluem flashbacks, pesadelos e ansiedade severa.",
    image: "/modern-medical-office-consultation-room.jpg",
    approaches: "Terapia Focada no Trauma, EMDR, Medicação, Grupos de Apoio",
  },
  {
    name: "TOC",
    description:
      "O Transtorno Obsessivo-Compulsivo envolve pensamentos repetitivos indesejados (obsessões) e comportamentos (compulsões).",
    image: "/peaceful-therapy-office-with-natural-light.jpg",
    approaches: "Terapia ERP, TCC, Medicação, Mindfulness",
  },
  {
    name: "TDAH",
    description:
      "O Transtorno de Déficit de Atenção e Hiperatividade afeta o foco, controle de impulsos e níveis de atividade em crianças e adultos.",
    image: "/modern-medical-office-consultation-room.jpg",
    approaches: "Medicação, Terapia Comportamental, Coaching, Treinamento de Habilidades",
  },
  {
    name: "Transtornos Alimentares",
    description:
      "Condições envolvendo relacionamentos não saudáveis com comida e imagem corporal, incluindo anorexia, bulimia e transtorno de compulsão alimentar.",
    image: "/peaceful-therapy-office-with-natural-light.jpg",
    approaches: "Aconselhamento Nutricional, Psicoterapia, Monitoramento Médico",
  },
  {
    name: "Transtornos por Uso de Substâncias",
    description:
      "Condições envolvendo padrões problemáticos de uso de substâncias que levam a prejuízo ou sofrimento significativo.",
    image: "/modern-medical-office-consultation-room.jpg",
    approaches: "Suporte à Desintoxicação, Terapia, Tratamento Assistido por Medicação, Programas de Recuperação",
  },
  {
    name: "Transtornos de Personalidade",
    description:
      "Padrões de longo prazo de pensamentos e comportamentos que diferem significativamente das expectativas culturais e causam sofrimento.",
    image: "/peaceful-therapy-office-with-natural-light.jpg",
    approaches: "Terapia Comportamental Dialética, Terapia de Esquemas, Psicoterapia de Longo Prazo",
  },
]

export function ConditionsTreated() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance">Condições que Tratamos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cuidado psiquiátrico abrangente para uma ampla gama de condições de saúde mental
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conditions.map((condition) => (
            <Card
              key={condition.name}
              className="overflow-hidden hover:shadow-lg transition-shadow shadow-[4px_2px_2px_rgba(0,0,0,0.08)]"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={condition.image || "/placeholder.svg"}
                  alt={`Tratamento de ${condition.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl mb-3">{condition.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{condition.description}</p>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-1">Abordagens de Tratamento:</p>
                  <p className="text-sm text-muted-foreground">{condition.approaches}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
