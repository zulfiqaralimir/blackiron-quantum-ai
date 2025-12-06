import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Black Iron Quantum AI",
  description:
    "A next-generation AI company building Agentic AI systems, quantum-inspired analytics, and enterprise-grade automation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>

      <body className="bg-black text-white antialiased">
        <Navbar />

        <main className="pt-24 min-h-screen relative z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
