import type React from "react"
import type { Metadata } from "next"
import { Hind_Siliguri } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { FooterSection } from "@/components/footer-section"

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-hind-siliguri",
})

export const metadata: Metadata = {
  title: "DOHaD India - Developmental Origins of Health and Disease",
  description: "DOHaD India Regional Society - Research, Capacity Building, Communication, and Advocacy",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${hindSiliguri.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans min-h-screen flex flex-col">
        <ThemeProvider>
          <main className="flex-1">
            {children}
          </main>
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  )
}
