import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Depression: Signs, Symptoms, and Treatment Options",
    excerpt:
      "Depression is more than just feeling sad. Learn about the clinical signs of depression and the evidence-based treatments that can help.",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/peaceful-therapy-office-with-natural-light.jpg",
    slug: "understanding-depression",
  },
  {
    id: 2,
    title: "Managing Anxiety in Daily Life: Practical Strategies",
    excerpt:
      "Discover practical, evidence-based techniques for managing anxiety symptoms and improving your quality of life.",
    date: "March 8, 2024",
    readTime: "6 min read",
    image: "/modern-medical-office-consultation-room.jpg",
    slug: "managing-anxiety",
  },
  {
    id: 3,
    title: "The Importance of Sleep for Mental Health",
    excerpt:
      "Quality sleep is essential for mental wellbeing. Learn how sleep affects your mood and what you can do to improve your sleep hygiene.",
    date: "February 28, 2024",
    readTime: "7 min read",
    image: "/peaceful-therapy-office-with-natural-light.jpg",
    slug: "sleep-mental-health",
  },
  {
    id: 4,
    title: "When to Seek Professional Help for Mental Health Concerns",
    excerpt:
      "Understanding when it's time to reach out to a mental health professional and what to expect from your first appointment.",
    date: "February 20, 2024",
    readTime: "5 min read",
    image: "/modern-medical-office-consultation-room.jpg",
    slug: "when-to-seek-help",
  },
  {
    id: 5,
    title: "Cognitive Behavioral Therapy: What to Expect",
    excerpt:
      "An overview of CBT, one of the most effective forms of psychotherapy, and how it can help with various mental health conditions.",
    date: "February 12, 2024",
    readTime: "9 min read",
    image: "/peaceful-therapy-office-with-natural-light.jpg",
    slug: "cbt-overview",
  },
  {
    id: 6,
    title: "Medication and Mental Health: Common Questions Answered",
    excerpt:
      "Addressing common concerns about psychiatric medications, including how they work, side effects, and what to expect.",
    date: "February 5, 2024",
    readTime: "10 min read",
    image: "/modern-medical-office-consultation-room.jpg",
    slug: "medication-questions",
  },
]

export default function BlogPage() {
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
          <h1 className="font-serif text-4xl lg:text-6xl font-light mb-6">Mental Health Insights</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Articles and resources about mental health, psychiatric treatment, and wellness strategies from Dr. Gustavo
            Mendes e Silva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-xl lg:text-2xl font-light group-hover:text-muted-foreground transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 lg:mt-24 bg-muted/30 rounded-lg p-8 lg:p-12 max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-light mb-4">Stay Informed</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to receive the latest articles and mental health insights directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 rounded-md border border-border bg-background"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
