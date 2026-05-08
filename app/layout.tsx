import type React from "react"
import type { Metadata } from "next"
import { Hind_Siliguri } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { FooterSection } from "@/components/footer-section"
import dbConnect from "@/lib/mongodb"
import SiteSettings from "@/lib/models/SiteSettings"

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-hind-siliguri",
})

export const metadata: Metadata = {
  title: "DOHaD India – Developmental Origins of Health and Disease Regional Society",
  description: "DOHaD India Regional Society advances research, training, and policy on the developmental origins of health and disease in India, connecting researchers, clinicians, and policymakers.",
  generator: "v0.app",
}

async function getSiteSettings() {
  try {
    await dbConnect();
    const settings = await SiteSettings.findOne();
    return settings ? JSON.parse(JSON.stringify(settings)) : null;
  } catch (error) {
    return null;
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const settings = await getSiteSettings();

  return (
    <html lang="en" className={`${hindSiliguri.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans min-h-screen flex flex-col">
        <ThemeProvider>
          <main className="flex-1">{children}</main>
          <FooterSection settings={settings} />
        </ThemeProvider>
      </body>
    </html>
  )
}
