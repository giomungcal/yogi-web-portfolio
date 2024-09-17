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
      <body>{children}</body>
    </html>
  );
}
