"use client";

import Link from "next/link";
import { useState, useEffect, CSSProperties } from "react";

const u = (n: number) => `calc(var(--u, calc(100vw / 1024)) * ${n})`;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Works", href: "/#portfolio" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Header({ style }: { style?: CSSProperties }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: u(78),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: u(54),
        zIndex: 50,
        ["--u" as any]: "calc(100vw / 1024)",
        background: scrolled ? "rgba(3, 10, 20, 0.88)" : "rgba(0, 0, 0, 0.45)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(24, 196, 255, 0.18)"
          : "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow: scrolled ? "0 10px 30px rgba(0, 0, 0, 0.5)" : "none",
        transition:
          "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
        ...style,
      }}
    >
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          width: u(46),
          height: u(58),
          textDecoration: "none",
          flexShrink: 0,
        }}
        aria-label="Empire AE Home"
      >
        <img
          src="/images/logo.png"
          alt="Empire AE"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Link>

      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: u(30),
          flexShrink: 0,
        }}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            style={{
              fontSize: u(14),
              lineHeight: u(17),
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 500,
              whiteSpace: "nowrap",
              transition: "color 0.15s ease",
            }}
            className="hover:text-[#18c4ff]"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
