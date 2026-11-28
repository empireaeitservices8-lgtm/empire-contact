"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export const NAV_LINKS = [
  { label: "Home", href: "/#" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  // Close menu on ESC key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-black/85 backdrop-blur-md border-b border-white/10 px-4 py-3 shadow-lg shadow-black/40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2" aria-label="Empire AE Home" onClick={() => setOpen(false)}>
            <img
              src="/images/logo.png"
              alt="Empire AE"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Action Button & Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#consult"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#006eef] text-white text-xs font-semibold hover:bg-[#005cd0] transition-colors"
            >
              Get Consultation
            </a>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="p-2 text-white hover:text-[#18c4ff] focus:outline-none focus:ring-2 focus:ring-[#18c4ff] rounded-md transition-colors"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""
                    }`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-opacity duration-300 ${open ? "opacity-0" : ""
                    }`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""
                    }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {open && (
          <div className="fixed inset-0 top-[65px] bg-black/95 backdrop-blur-lg z-50 flex flex-col px-6 py-8 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-6 text-lg font-medium">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white hover:text-[#18c4ff] border-b border-white/5 pb-3 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#18c4ff] text-sm">→</span>
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-8 flex flex-col gap-3">
              <a
                href="#consult"
                onClick={() => setOpen(false)}
                className="w-full text-center py-3.5 rounded-xl bg-[#006eef] hover:bg-[#005cd0] text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-500/20"
              >
                Get a Free Consultation →
              </a>
              <a
                href="tel:+919895280605"
                className="w-full text-center py-3 rounded-xl border border-white/20 bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-colors"
              >
                Call +91 98952 80605
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Spacer so page content starts cleanly below the fixed header */}
      <div className="h-[65px] w-full" aria-hidden="true" />
    </>
  );
}
