"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-base-100/95 backdrop-blur border-b border-base-300 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition-opacity"
            onClick={() => setOpen(false)}
          >
            <Logo theme="light" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-lg font-medium text-base-content/80 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/devis"
              className="hidden lg:inline-flex btn btn-primary btn-sm sm:btn-md gap-2"
            >
              <FileText className="w-4 h-4" />
              Demander un devis
            </Link>

            <button
              type="button"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden btn btn-ghost btn-square"
            >
              <span className="relative w-6 h-6 block">
                <Menu
                  className={`w-6 h-6 absolute inset-0 transition-all duration-500 ease-out ${
                    open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`w-6 h-6 absolute inset-0 transition-all duration-500 ease-out ${
                    open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden grid transition-all duration-700 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="bg-base-100 border-t border-base-300 px-4 sm:px-6 py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((l, idx) => (
                <li
                  key={l.href}
                  className={`transition-all duration-500 ease-out ${
                    open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                  }`}
                  style={{
                    transitionDelay: open ? `${idx * 80 + 100}ms` : "0ms",
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg font-semibold text-base-content/80 hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li
                className={`pt-2 mt-2 border-t border-base-300 transition-all duration-500 ease-out ${
                  open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                }`}
                style={{
                  transitionDelay: open ? `${navLinks.length * 80 + 100}ms` : "0ms",
                }}
              >
                <Link
                  href="/devis"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary w-full gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Demander un devis
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}