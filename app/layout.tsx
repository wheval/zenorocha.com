import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Wheval Meze-Egbe | Frontend Developer",
  description: "Creating innovative solutions.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent"
      lang="en"
    >
      <body className="text-center flex items-center justify-center h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
