"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-3xl font-light tracking-wide hover:text-cyan-400 transition"
        >
          <span className="text-cyan-400">Black Iron</span> Quantum AI
        </Link>

        {/* NAV LINKS */}
        <div className="flex gap-10 text-lg">

          {/* Services */}
          <div
            className="relative cursor-pointer hover:text-cyan-300"
            onClick={() => toggleMenu("services")}
          >
            Services ▾
            {openMenu === "services" && (
              <div className="absolute mt-3 bg-black/80 backdrop-blur-lg border border-white/10 py-3 px-5 rounded-lg w-48 shadow-xl">
                <Link href="/services/ai" className="block py-2 hover:text-cyan-300">
                  AI Systems
                </Link>
                <Link href="/services/cyber" className="block py-2 hover:text-cyan-300">
                  Cyber Intelligence
                </Link>
                <Link href="/services/quantum" className="block py-2 hover:text-cyan-300">
                  Quantum Analytics
                </Link>
              </div>
            )}
          </div>

          {/* Products */}
          <div
            className="relative cursor-pointer hover:text-cyan-300"
            onClick={() => toggleMenu("products")}
          >
            Products ▾
            {openMenu === "products" && (
              <div className="absolute mt-3 bg-black/80 backdrop-blur-lg border border-white/10 py-3 px-5 rounded-lg w-48 shadow-xl">
                <Link href="/products/afiw" className="block py-2 hover:text-cyan-300">
                  AFIW Agentic Suite
                </Link>
                <Link href="/products/neo" className="block py-2 hover:text-cyan-300">
                  NeoGraph Engine
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-cyan-300">
            About
          </Link>

          <Link href="/contact" className="hover:text-cyan-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
