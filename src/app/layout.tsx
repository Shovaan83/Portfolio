import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shovan - Portfolio",
    template: "%s | Shovan"
  },
  description: "Personal portfolio showcasing my skills, projects, and experiences in web development and technology.",
  keywords: ["portfolio", "web developer", "Next.js", "React", "TypeScript", "Shovan"],
  authors: [{ name: "Shovan" }],
  creator: "Shovan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Shovan - Portfolio",
    description: "Personal portfolio showcasing my skills, projects, and experiences in web development and technology.",
    siteName: "Shovan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shovan - Portfolio",
    description: "Personal portfolio showcasing my skills, projects, and experiences in web development and technology.",
    creator: "@yourusername",
  },
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
  verification: {
    google: "your-google-verification-code",
  },
  metadataBase: new URL('https://your-domain.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
