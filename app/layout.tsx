import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import CommandPalette from "@/components/command-palette";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { contact } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = "https://chakkrit-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chakkrit Jongkraijak — Full-stack Web Developer",
  description:
    "Portfolio of Chakkrit Jongkraijak, a Computer Engineering graduate and full-stack web developer working with React, Next.js and TypeScript.",
  keywords: [
    "Chakkrit Jongkraijak",
    "full-stack developer",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
    "Thailand",
    "portfolio",
  ],
  authors: [{ name: "Chakkrit Jongkraijak" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Chakkrit Jongkraijak — Full-stack Web Developer",
    description:
      "Computer Engineering graduate and full-stack web developer. React, Next.js, TypeScript.",
    siteName: "Chakkrit Jongkraijak",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chakkrit Jongkraijak — Full-stack Web Developer",
    description:
      "Computer Engineering graduate and full-stack web developer. React, Next.js, TypeScript.",
  },
};

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark || !stored) document.documentElement.classList.add('dark');
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chakkrit Jongkraijak",
  jobTitle: "Full-stack Web Developer",
  url: siteUrl,
  sameAs: [contact.github, contact.linkedin],
  alumniOf: "Chulalongkorn University",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`!scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="relative min-h-screen bg-bg font-sans text-fg antialiased">
        <div className="site-bg" aria-hidden="true" />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <main className="relative z-10 px-4 pt-28 sm:pt-36">{children}</main>
            <Footer />
            <ThemeSwitch />
            <CommandPalette />
            <Toaster position="bottom-center" reverseOrder={false} />
            <Analytics />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
