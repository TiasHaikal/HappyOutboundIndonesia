import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Outbound Lampung - Happy Outbound Indonesia",
  description:
    "Penyedia jasa training, outbound, dan event organizer profesional di Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
