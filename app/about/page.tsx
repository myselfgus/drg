import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
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
          <h1 className="font-serif text-4xl lg:text-6xl font-light mb-6">About Dr. Gustavo Mendes e Silva</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A dedicated psychiatrist committed to providing compassionate, evidence-based mental health care with over
            15 years of clinical experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-24">
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6">Professional Background</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dr. Gustavo Mendes e Silva is a board-certified psychiatrist with extensive experience in treating a wide
              range of mental health conditions. His approach combines the latest advances in psychiatric medicine with
              a deep commitment to understanding each patient's unique circumstances and needs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a focus on building therapeutic relationships based on trust and mutual respect, Dr. Silva works
              collaboratively with patients to develop personalized treatment plans that address both immediate concerns
              and long-term wellness goals.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/modern-medical-office-consultation-room.jpg"
              alt="Dr. Silva's consultation office"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-16 lg:mb-24">
          <h2 className="font-serif text-3xl lg:text-4xl font-light mb-8 text-center">Education & Credentials</h2>
          <div className="bg-muted/30 rounded-lg p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl lg:text-2xl mb-2">Medical Degree</h3>
                <p className="text-muted-foreground">
                  Doctor of Medicine (M.D.), University of São Paulo Medical School
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl lg:text-2xl mb-2">Residency</h3>
                <p className="text-muted-foreground">
                  Psychiatry Residency, Hospital das Clínicas, University of São Paulo
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl lg:text-2xl mb-2">Board Certification</h3>
                <p className="text-muted-foreground">Brazilian Board of Psychiatry (ABP)</p>
              </div>
              <div>
                <h3 className="font-serif text-xl lg:text-2xl mb-2">Specializations</h3>
                <p className="text-muted-foreground">
                  Cognitive Behavioral Therapy, Psychopharmacology, Mood Disorders
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl lg:text-2xl mb-2">Professional Memberships</h3>
                <p className="text-muted-foreground">
                  Brazilian Psychiatric Association, International Society for Bipolar Disorders
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-24">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-2 lg:order-1">
            <Image
              src="/peaceful-therapy-office-with-natural-light.jpg"
              alt="Peaceful therapy environment"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6">Treatment Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dr. Silva believes that effective psychiatric care requires a holistic approach that considers the
              biological, psychological, and social factors affecting mental health. He emphasizes the importance of
              accurate diagnosis, evidence-based treatment, and ongoing support.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              His practice is built on the principles of empathy, respect, and collaboration. Every patient receives
              individualized attention in a safe, confidential environment where they can openly discuss their concerns
              and work toward meaningful recovery.
            </p>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 lg:p-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6 text-center">Areas of Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <h3 className="font-serif text-xl lg:text-2xl mb-3">Mood Disorders</h3>
              <p className="text-muted-foreground leading-relaxed">
                Specialized treatment for depression, bipolar disorder, and related conditions using the latest
                therapeutic approaches.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl lg:text-2xl mb-3">Anxiety Disorders</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive care for generalized anxiety, panic disorder, social anxiety, and phobias.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl lg:text-2xl mb-3">Psychotherapy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Evidence-based psychotherapy including CBT, supportive therapy, and psychodynamic approaches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
