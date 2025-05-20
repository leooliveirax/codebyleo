import { Dock } from "@/components/dock/Dock";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
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
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background text-foreground antialiased",
          geistSans.variable,
          geistMono.variable,
          geistSans.className
        )}>
        <ThemeProvider enableSystem disableTransitionOnChange attribute="class" defaultTheme="system">
          <main className="mx-auto w-full max-w-6xl px-6">{children}</main>

          <Dock />
        </ThemeProvider>
      </body>
    </html>
  );
}
