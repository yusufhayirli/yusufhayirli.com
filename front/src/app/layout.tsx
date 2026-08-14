import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { PortfolioProvider } from "@/providers/PortfolioProvider";
import { PreferenceBootstrap } from "@/components/system/PreferenceBootstrap/PreferenceBootstrap";
import "./globals.css";

const siteUrl = "https://yusufhayirli.com";
const siteTitle = "Yusuf Hayırlı — Full-Stack Software Engineer";
const siteDescription =
  "Full-stack software engineer building commerce products, web platforms and durable delivery systems with React, Next.js, .NET and Salesforce Commerce Cloud.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Yusuf Hayırlı Portfolio",
  title: {
    default: siteTitle,
    template: "%s | Yusuf Hayırlı"
  },
  description: siteDescription,
  keywords: [
    "Yusuf Hayırlı",
    "Full-Stack Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    ".NET",
    "C#",
    "Node.js",
    "Salesforce Commerce Cloud",
    "PostgreSQL",
    "Docker",
    "commerce engineering"
  ],
  authors: [{ name: "Yusuf Hayırlı", url: siteUrl }],
  creator: "Yusuf Hayırlı",
  publisher: "Yusuf Hayırlı",
  category: "technology",
  alternates: {
    canonical: "/"
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    address: false,
    email: false,
    telephone: false
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Yusuf Hayırlı",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3eadb" },
    { media: "(prefers-color-scheme: dark)", color: "#111917" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body>
        <PreferenceBootstrap />
        <PortfolioProvider>{children}</PortfolioProvider>
      </body>
    </html>
  );
}
