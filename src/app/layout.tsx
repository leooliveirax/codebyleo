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
  metadataBase: new URL("https://codebyleo.dev"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Leo Oliveira",
    template: "%s | Leo Oliveira",
  },
  description: "Software Engineer, scaling solutions with strong fundamentals.",
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
        <div className="min-h-screen w-full mx-auto max-w-5xl p-6">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
