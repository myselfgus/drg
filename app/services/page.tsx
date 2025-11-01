import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ServicesPage() {
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
          <h1 className="font-serif text-4xl lg:text-6xl font-light mb-6">Psychiatric Services</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive mental health care tailored to your individual needs, combining medication management,
            psychotherapy, and ongoing support.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {/* Service 1 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6">Psychiatric Evaluation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A comprehensive initial assessment to understand your mental health concerns, medical history, and
                treatment goals. This thorough evaluation forms the foundation for developing an effective, personalized
                treatment plan.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Detailed clinical interview</li>
                <li>• Mental status examination</li>
                <li>• Diagnostic assessment</li>
                <li>• Treatment planning</li>
              </ul>
              <Button asChild>
                <Link href="/contact">Schedule Evaluation</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/modern-medical-office-consultation-room.jpg"
                alt="Consultation room"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/peaceful-therapy-office-with-natural-light.jpg"
                alt="Therapy office"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6">Medication Management</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Expert psychopharmacological treatment using evidence-based medications to address symptoms of mental
                health conditions. Regular monitoring ensures optimal effectiveness and minimal side effects.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Careful medication selection</li>
                <li>• Dosage optimization</li>
                <li>• Side effect management</li>
                <li>• Regular follow-up appointments</li>
              </ul>
              <Button asChild>
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6">Psychotherapy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Individual therapy sessions using evidence-based approaches including Cognitive Behavioral Therapy
                (CBT), supportive therapy, and psychodynamic techniques tailored to your specific needs and goals.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Cognitive Behavioral Therapy</li>
                <li>• Supportive psychotherapy</li>
                <li>• Insight-oriented therapy</li>
                <li>• Crisis intervention</li>
              </ul>
              <Button asChild>
                <Link href="/contact">Book Session</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/modern-medical-office-consultation-room.jpg"
                alt="Therapy session"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Service 4 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/peaceful-therapy-office-with-natural-light.jpg"
                alt="Treatment planning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6">Ongoing Care & Support</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Continuous monitoring and adjustment of treatment plans to ensure optimal outcomes. Regular follow-up
                appointments provide ongoing support as you progress toward your mental health goals.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Regular progress monitoring</li>
                <li>• Treatment plan adjustments</li>
                <li>• Crisis support availability</li>
                <li>• Coordination with other providers</li>
              </ul>
              <Button asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 lg:mt-24 bg-muted/30 rounded-lg p-8 lg:p-12 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-light mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Take the first step toward better mental health. Schedule a consultation to discuss your concerns and
            explore treatment options.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Dr. Silva</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
