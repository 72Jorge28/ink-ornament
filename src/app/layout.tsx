// src/app/layout.tsx
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ink Ornament",
  description:
    "Custom tattoo studio focused on fine line, blackwork and ornamental tattoo design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}