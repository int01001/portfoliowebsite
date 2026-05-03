import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piyush Kumar | Portfolio",
  description:
    "Portfolio and social hub for Piyush Kumar, editor, full stack developer, and AI/ML enthusiast.",
  openGraph: {
    title: "Piyush Kumar | Portfolio",
    description:
      "Editor, full stack developer, and AI/ML enthusiast. View projects, socials, and video editing samples.",
    type: "website"
  }
};

export const viewport: Viewport = {
  themeColor: "#050608",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
