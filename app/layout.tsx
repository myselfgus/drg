import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Chatbot } from "@/components/chatbot"
import { BackToTop } from "@/components/back-to-top"
import Script from "next/script"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://drgustavomendes.com"),
  title: {
    default: "Dr. Gustavo Mendes e Silva - Psiquiatra CRM 218133/SP",
    template: "%s | Dr. Gustavo Mendes e Silva",
  },
  description:
    "Psiquiatria humanizada em São José do Rio Preto. Consultas de 2 horas, atendimento domiciliar para autistas e idosos, narrativas fenomenológicas. CRM 218133/SP.",
  keywords: [
    "psiquiatra são josé do rio preto",
    "psiquiatra rio preto",
    "consulta psiquiatra 2 horas",
    "atendimento domiciliar psiquiatra",
    "narrativas fenomenológicas",
    "psiquiatria humanizada",
    "autismo são josé rio preto",
    "medicina canabinoide",
    "transtornos do sono",
    "dr gustavo mendes",
    "CRM 218133",
  ],
  authors: [{ name: "Dr. Gustavo Mendes e Silva" }],
  creator: "Dr. Gustavo Mendes e Silva",
  publisher: "Dr. Gustavo Mendes e Silva",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Dr. Gustavo Mendes e Silva - Psiquiatria Humanizada",
    description:
      "Consultas de 2 horas, atendimento domiciliar e narrativas fenomenológicas personalizadas. Psiquiatria que vai além do sintoma.",
    url: "https://drgustavomendes.com",
    siteName: "Dr. Gustavo Mendes e Silva",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Gustavo Mendes e Silva - Psiquiatra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Gustavo Mendes e Silva - Psiquiatra CRM 218133/SP",
    description: "Psiquiatria humanizada em São José do Rio Preto",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "seu-codigo-google-search-console",
  },
  alternates: {
    canonical: "https://drgustavomendes.com",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=0.75, maximum-scale=1, user-scalable=no" />

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'SEU_PIXEL_ID_AQUI');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=SEU_PIXEL_ID_AQUI&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            name: "Dr. Gustavo Mendes e Silva",
            image: "https://drgustavomendes.com/og-image.jpg",
            description:
              "Psiquiatra CRM 218133/SP. Consultas de 2 horas, atendimento domiciliar para autistas e idosos, narrativas fenomenológicas personalizadas.",
            medicalSpecialty: ["Psychiatry", "Sleep Medicine", "Cannabinoid Medicine"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Amadeu Segundo Cherubini, 504",
              addressLocality: "São José do Rio Preto",
              addressRegion: "SP",
              addressCountry: "BR",
            },
            telephone: "+55-17-2110-1228",
            url: "https://drgustavomendes.com",
            priceRange: "$$",
            areaServed: {
              "@type": "City",
              name: "São José do Rio Preto",
            },
          })}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} ${robotoMono.variable} font-mono font-light antialiased`}
      >
        {children}
        <BackToTop />
        <Chatbot />
        <Analytics />
      </body>
    </html>
  )
}
