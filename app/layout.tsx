import type React from "react"
import type { Metadata } from "next"
import { Hind_Siliguri } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { FooterSection } from "@/components/footer-section"
import { Toaster } from "@/components/ui/sonner"
import { getSiteSettings } from "@/lib/data/site-settings"

export const revalidate = 60

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-hind-siliguri",
})

const siteUrl = "https://dohadindia.org"
const siteTitle = "DOHaD India – Developmental Origins of Health and Disease Regional Society"
const siteDescription =
  "DOHaD India Regional Society advances research, training, and policy on the developmental origins of health and disease in India, connecting researchers, clinicians, and policymakers."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "DOHaD India",
    type: "website",
    images: [{ url: "/dohad-india-rgb.png", width: 1024, height: 640, alt: "DOHaD India Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/dohad-india-rgb.png"],
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  let settings = null
  try {
    settings = JSON.parse(JSON.stringify(await getSiteSettings()))
  } catch {
    settings = null
  }

  return (
    <html lang="en" className={`${hindSiliguri.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans min-h-screen flex flex-col">
        <ThemeProvider>
          <main className="flex-1">{children}</main>
          <FooterSection settings={settings} />
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
