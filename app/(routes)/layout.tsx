import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yogi's Space",
  description: "this is gio's web portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Danfo:ELSH@0..100&family=Kode+Mono:wght@400..700&family=Roboto+Flex:opsz,slnt,wght@8..144,-10,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
