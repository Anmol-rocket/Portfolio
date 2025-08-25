import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"
import "@/styles/globals.css" // Import globals.css here

export const metadata: Metadata = {
  title: "Anmol Upadhyay | Computer Science Student & Software Developer",
  description:
    "Portfolio of Anmol Upadhyay, a Computer Science student at IIIT Kota specializing in Full Stack Development, Machine Learning, and competitive programming.",
  keywords: [
    "Anmol Upadhyay",
    "Computer Science Student",
    "Full Stack Developer",
    "IIIT Kota",
    "Spring Boot",
    "React",
    "Flutter",
    "Machine Learning",
  ],
  authors: [{ name: "Anmol Upadhyay" }],
  creator: "Anmol Upadhyay",
  icons: {
    icon: [
      { url: "/favicon.svg", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.svg" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anmolupadhyay.dev",
    title: "Anmol Upadhyay | Computer Science Student & Software Developer",
    description:
      "Portfolio of Anmol Upadhyay, a Computer Science student at IIIT Kota specializing in Full Stack Development, Machine Learning, and competitive programming.",
    siteName: "Anmol Upadhyay Portfolio",
    images: [
      {
        url: "/favicon.svg",
        width: 64,
        height: 64,
        alt: "AU Favicon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anmol Upadhyay | Computer Science Student & Software Developer",
    description:
      "Portfolio of Anmol Upadhyay, a Computer Science student at IIIT Kota specializing in Full Stack Development, Machine Learning, and competitive programming.",
    creator: "@anmol_rocket",
  images: ["/favicon.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}
