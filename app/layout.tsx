import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nirvania.ai — Cognitive infrastructure for enterprise workflows",
  description:
    "Nirvania.ai is building cognitive infrastructure to coordinate complex, high-value enterprise workflows with AI agents and human oversight.",
  applicationName: "Nirvania.ai",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
