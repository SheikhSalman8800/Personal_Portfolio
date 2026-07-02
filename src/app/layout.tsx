import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://sheikhsalman.dev";
const baseUrl = rawUrl.endsWith("/") ? rawUrl.slice(0, -1) : rawUrl;

export const metadata: Metadata = {
  title: "Sheikh Salman | Full-Stack Developer & AI Automation Engineer",
  description: "Sheikh Salman is a professional Full-Stack Developer and AI Automation Engineer building intelligent LLM pipelines, n8n orchestrations, low-latency custom Voice AI (Vapi), and high-performance React/Next.js systems.",
  keywords: ["Sheikh Salman", "Full-Stack Developer", "AI Automation Engineer", "N8N Developer", "Make.com Expert", "Next.js Portfolio", "Voice AI Engineer", "Bangladesh"],
  manifest: "/site.webmanifest",
  robots: "index, follow",
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Sheikh Salman | Full-Stack Developer & AI Automation Engineer",
    description: "Sheikh Salman builds responsive web platforms and autonomous AI pipelines that eliminate operational friction.",
    url: baseUrl,
    siteName: "Sheikh Salman Portfolio",
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || process.env.GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
