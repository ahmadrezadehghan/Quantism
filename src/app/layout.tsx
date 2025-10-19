import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quantism — Data Analysis Team | Biography, Research & Tools",
  description:
    "Quantism is a research–engineering team building reliable data analytics and ML systems with privacy, governance, and reproducibility by design.",
  metadataBase: new URL("https://quantism.example.com"),
  openGraph: {
    title: "Quantism — Data Analysis Team",
    description: "Biography, publications, projects, and data tools by Quantism.",
    url: "https://quantism.example.com",
    siteName: "Quantism",
    images: [{ url: "/og-cover.png", width: 1200, height: 630, alt: "Quantism" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantism — Data Analysis Team",
    description: "Biography, publications, projects, and data tools.",
    images: ["/og-cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
