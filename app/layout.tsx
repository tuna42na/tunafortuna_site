import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tuna Fortuna",
  description: "Frontend Developer and lead bassist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
