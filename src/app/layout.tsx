import type { Metadata } from "next";
import "./globals.css"; // MUST be here only

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Black Iron Quantum AI",
  description:
    "Engineering Intelligence Beyond the Surface — Advanced Agentic AI Systems, Quantum Analytics, and Cyber-Intelligence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* FONT AWESOME FOR ICONS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>

      <body className="bg-[#080808] text-white antialiased">

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="pt-24">{children}</main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
