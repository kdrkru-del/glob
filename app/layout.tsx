import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Globerion Group — B2B products from Vietnam",
  description: "B2B catalog of Vietnamese products with sourcing, quality control, logistics and trade support.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
