import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emmanuel Ngoka - Software Engineer",
  description: "Creating innovative solutions.",
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
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
