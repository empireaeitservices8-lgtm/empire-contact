"use client";

import Link from "next/link";
import { CSSProperties } from "react";

const u = (n: number) => `calc(var(--u, 1px) * ${n})`;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#consult" },
];

export default function Header({ style }: { style?: CSSProperties }) {
  return (
    <header
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: u(78),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: u(54),
        zIndex: 45,
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
              fontWeight: 400,
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
