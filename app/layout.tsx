import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aaqib Mouhi Ud Din — Software Engineer",
  description:
    "Computer Science Engineering Graduate with internship experience at J&K Bank and PHN Technology. Focused on full-stack development and innovative solutions, working from Srinagar, J&K, India.",
  generator: "Next.js",
  applicationName: "Aaqib Mouhi Ud Din",
  keywords: [
    "software engineer",
    "developer",
    "full-stack developer",
    "frontend",
    "backend",
    "react",
    "node.js",
    "javascript",
    "php",
    "mysql",
    "mongodb",
    "software developer",
    "computer science",
    "kashmir",
    "india",
    "portfolio",
    "full-stack developer portfolio",
    "software engineer portfolio",
    "AI integration",
    "machine learning",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Aaqib Mouhi Ud Din — Software Engineer",
    description:
      "Computer Science Engineering Graduate with internship experience at J&K Bank and PHN Technology. Focused on full-stack development and innovative solutions, working from Srinagar, J&K, India.",
    url: "https://github.com/Aqibabass",
    siteName: "Aaqib Mouhi Ud Din Portfolio",
    images: [
      {
        url: "/profile.webp",
        width: 1200,
        height: 630,
        alt: "Aaqib Mouhi Ud Din — Software Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
