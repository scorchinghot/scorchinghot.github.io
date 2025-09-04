import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pfolio.pages.dev"),
  title: "Pfolio | Web Developer Portfolio",
  description:
    "Pfolio is a personal portfolio website showcasing web development projects, skills, and experience. Built with Next.js and Tailwind CSS.",
  applicationName: "Pfolio",
  robots: "index, follow",
  authors: [{ name: "Pfolio" }],
  creator: "Pfolio",
  publisher: "Pfolio",
  alternates: {
    canonical: "https://pfolio.pages.dev",
  },
  keywords:
    "portfolio, web developer, projects, skills, experience, next.js, tailwind css, personal website, pfolio",
  openGraph: {
    title: "Pfolio | Web Developer Portfolio",
    description:
      "Pfolio is a personal portfolio website showcasing web development projects, skills, and experience. Built with Next.js and Tailwind CSS.",
    url: "https://pfolio.pages.dev",
    siteName: "Pfolio",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Pfolio – Personal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pfolio | Bringing Brands to Life",
    description:
      "Pfolio is a personal portfolio website showcasing web development projects, skills, and experience. Built with Next.js and Tailwind CSS.",
    images: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
