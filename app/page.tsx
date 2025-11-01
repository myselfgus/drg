import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhatIsMentalHealth } from "@/components/what-is-art"
import { ServicesOffered } from "@/components/featured-artists"
import { TreatmentApproach } from "@/components/artwork-grid"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SpecialtyAreas } from "@/components/art-spaces"
import { ConditionsTreated } from "@/components/art-types"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhatIsMentalHealth />
      <ServicesOffered />
      <ConditionsTreated />
      <SpecialtyAreas />
      <TreatmentApproach />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
