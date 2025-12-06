"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800 font-[Arial]">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="text-white text-xl font-bold tracking-[0.15em] uppercase hover:opacity-80 transition"
        >
          Black Iron Quantum AI
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center space-x-10 text-white text-sm tracking-wide">
          <li>
            <Link
              href="/"
              className="relative py-1 hover:opacity-80 transition after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-white after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="relative py-1 hover:opacity-80 transition after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-white after:transition-[width] after:duration-300 hover:after:w-full"
            >
              About
            </Link>
          </li>

          {/* SERVICES DROPDOWN (DESKTOP) */}
          <li className="relative group">
            <button
              className="flex items-center gap-1 py-1 hover:opacity-80 transition"
            >
              <span>Services</span>
              <ChevronDown
                size={16}
                className="mt-[1px] group-hover:rotate-180 transition-transform duration-200"
              />
            </button>

            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 absolute left-0 mt-2 w-56 bg-black/95 border border-gray-800 rounded-lg shadow-lg backdrop-blur-md">
              <ul className="py-2 text-sm">
                <li>
                  <Link
                    href="/services/ai-strategy"
                    className="block px-4 py-2 hover:bg-white/10"
                  >
                    AI Strategy & Advisory
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/agentic-ai"
                    className="block px-4 py-2 hover:bg-white/10"
                  >
                    Agentic AI Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/quant-research"
                    className="block px-4 py-2 hover:bg-white/10"
                  >
                    Quant Research & FinTech
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link
              href="/products"
              className="relative py-1 hover:opacity-80 transition after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-white after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/portfolio"
              className="relative py-1 hover:opacity-80 transition after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-white after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link
              href="/blog"
              className="relative py-1 hover:opacity-80 transition after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-white after:transition-[width] after:duration-300 hover:after:w-full"
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="px-4 py-2 border border-white/80 rounded-full hover:bg-white hover:text-black transition tracking-wide"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU (ANIMATED) */}
      <div
        className={`md:hidden bg-black border-t border-gray-800 px-6 text-white font-[Arial] overflow-hidden transition-all duration-300 ${
          open ? "max-h-[480px] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="space-y-3">
          <Link href="/" className="block hover:opacity-70" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="block hover:opacity-70" onClick={() => setOpen(false)}>
            About
          </Link>

          {/* MOBILE SERVICES DROPDOWN */}
          <div>
            <button
              className="flex w-full items-center justify-between hover:opacity-80"
              onClick={() => setServicesOpen((prev) => !prev)}
            >
              <span>Services</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`pl-4 mt-2 space-y-2 text-sm overflow-hidden transition-all duration-200 ${
                servicesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <Link
                href="/services/ai-strategy"
                className="block hover:opacity-80"
                onClick={() => setOpen(false)}
              >
                AI Strategy & Advisory
              </Link>
              <Link
                href="/services/agentic-ai"
                className="block hover:opacity-80"
                onClick={() => setOpen(false)}
              >
                Agentic AI Systems
              </Link>
              <Link
                href="/services/quant-research"
                className="block hover:opacity-80"
                onClick={() => setOpen(false)}
              >
                Quant Research & FinTech
              </Link>
            </div>
          </div>

          <Link href="/products" className="block hover:opacity-70" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link href="/portfolio" className="block hover:opacity-70" onClick={() => setOpen(false)}>
            Portfolio
          </Link>
          <Link href="/blog" className="block hover:opacity-70" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link
            href="/contact"
            className="block text-center mt-2 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
