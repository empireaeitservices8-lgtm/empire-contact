"use client";

import { CSSProperties, ReactNode } from "react";
import { Outfit } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Header";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const u = (n: number) => `calc(var(--u) * ${n})`;
const abs = (x: number, y: number, w?: number, h?: number): CSSProperties => ({
  position: "absolute",
  left: u(x),
  top: u(y),
  ...(w !== undefined ? { width: u(w) } : {}),
  ...(h !== undefined ? { height: u(h) } : {}),
});

type TProps = {
  x: number; y: number; s: number; lh?: number; c?: string; b?: boolean; w?: number;
  center?: boolean; ls?: string; children: ReactNode;
};
function T({ x, y, s, lh, c = "#fff", b, w, center, ls, children }: TProps) {
  return (
    <div
      style={{
        ...abs(x, y, w),
        fontSize: u(s),
        lineHeight: u(lh ?? Math.round(s * 1.25)),
        color: c,
        fontWeight: b ? 600 : 400,
        whiteSpace: "nowrap",
        textAlign: center ? "center" : "left",
        letterSpacing: ls,
      }}
    >
      {children}
    </div>
  );
}

// Vector checkmark badge from the original PDF
const CheckmarkBadge = () => (
  <svg
    viewBox="0 0 95 95"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "100%" }}
  >
    <g transform="translate(5, 88) scale(1, -1)">
      {/* Checkmark tick */}
      <path
        d="M 38.56 47.09 L 31.37 36.78 C 28.99 33.36 16.57 42.02 18.95 45.44 L 32.34 64.63 C 34.72 68.04 39.46 68.89 42.88 66.50 C 43.85 65.83 44.60 64.95 45.15 63.98 L 45.15 63.98 C 45.15 63.98 45.17 63.95 45.18 63.92 C 45.35 63.60 45.51 63.27 45.63 62.93 C 48.39 57.01 62.97 27.06 83.34 11.67 C 83.34 11.67 57.69 12.32 38.56 47.09 Z"
        fill="white"
      />
      {/* Outer badge ring */}
      <path
        d="M 61.97 39.78 C 62.72 42.17 63.12 44.71 63.12 47.35 C 63.12 61.40 51.69 72.83 37.64 72.83 C 23.59 72.83 12.16 61.40 12.16 47.35 C 12.16 33.30 23.59 21.87 37.64 21.87 C 42.60 21.87 47.24 23.30 51.16 25.77 C 52.72 24.43 54.24 23.21 55.62 22.14 C 50.55 18.51 44.34 16.37 37.64 16.37 C 20.55 16.37 6.66 30.26 6.66 47.35 C 6.66 64.43 20.55 78.33 37.64 78.33 C 54.72 78.33 68.62 64.43 68.62 47.35 C 68.62 42.50 67.50 37.92 65.51 33.83 C 64.45 35.45 63.25 37.44 61.97 39.78 Z"
        fill="white"
      />
    </g>
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ThreadsIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098c1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015c-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164c1.43 1.783 3.631 2.698 6.54 2.717c2.623-.02 4.358-.631 5.8-2.045c1.647-1.613 1.618-3.593 1.09-4.798c-.31-.71-.873-1.3-1.634-1.75c-.192 1.352-.622 2.446-1.284 3.272c-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801c-1.063-.689-1.685-1.74-1.752-2.964c-.065-1.19.408-2.285 1.33-3.082c.88-.76 2.119-1.207 3.583-1.291a14 14 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757c-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32l-1.757-1.18c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388q.163.07.321.142c1.49.7 2.58 1.761 3.154 3.07c.797 1.82.871 4.79-1.548 7.158c-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69q-.362 0-.739.021c-1.836.103-2.98.946-2.916 2.143c.067 1.256 1.452 1.839 2.784 1.767c1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221"/>
  </svg>
);

export default function ThankYouPage() {
  return (
    <main className={`${outfit.className} min-h-screen bg-black text-white selection:bg-[#1f97ff] selection:text-white`}>
      {/* Desktop Canvas (>= 768px) */}
      <div className="hidden md:block w-full">
        <Header />
        <div style={{ containerType: "inline-size" }}>
          <div
            style={
              {
                "--u": "calc(100cqw / 1024)",
                position: "relative",
                height: "calc(100cqw / 1024 * 576)",
                overflow: "hidden",
                background: "#000",
              } as CSSProperties
            }
          >
            {/* ============ BACKGROUND ============ */}
            {/* Exact PDF background (Obj 263 extracted from PDF) */}
            <div
              style={{
                ...abs(0, 0, 1024, 576),
                background: "url(/images/thank-you-bg.png) center/100% 100% no-repeat",
              }}
            />

            {/* ============ CENTER CARD ============ */}
            <div
              style={{
                ...abs(279, 143, 430, 167),
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.18) 55%, rgba(255, 255, 255, 0.02) 100%)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                borderRadius: u(12),
                boxShadow: `inset 0 0 0 ${u(1)} rgba(255, 255, 255, 0.4), 0 8px 32px 0 rgba(0, 0, 0, 0.25)`,
                zIndex: 30,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: `${u(18)} ${u(24)}`,
              }}
            >
              {/* Shield Checkmark Icon */}
              <div style={{ width: u(49), height: u(43), marginBottom: u(8) }}>
                <CheckmarkBadge />
              </div>

              {/* Title */}
              <h1
                style={{
                  margin: 0,
                  fontSize: u(44),
                  lineHeight: u(48),
                  fontWeight: 400,
                  color: "#ffffff",
                  letterSpacing: "0.01em",
                }}
              >
                Thank You!
              </h1>

              {/* Subtext */}
              <p
                style={{
                  margin: `${u(6)} 0 0 0`,
                  fontSize: u(12.5),
                  lineHeight: u(16),
                  color: "#e6f0ff",
                  fontFamily: "Georgia, 'Times New Roman', Times, serif",
                  letterSpacing: "0.01em",
                }}
              >
                Your submission has been sent.We will be in touch with you shortly.
              </p>
            </div>

            {/* ============ FOOTER ============ */}
            {/* Left Column: Logo & Mission & Copyright */}
            <Link href="/" style={{ ...abs(110, 405, 36, 45), zIndex: 30 }} aria-label="Empire AE">
              <img src="/images/logo.png" alt="Empire AE" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </Link>

            <T x={110} y={456} s={11} lh={16} c="rgba(255,255,255,0.88)" w={340}>
              A full-service digital solutions company dedicated to<br />
              helping businesses build, grow, and strengthen their digital<br />
              presence.
            </T>

            <T x={110} y={528} s={9.5} lh={12} c="rgba(255,255,255,0.7)">
              © 2026 Empire AE. All Rights Reserved.
            </T>

            {/* Right Column: Phone, Email, Socials, Designer */}
            <a
              href="tel:+919847980605"
              style={{
                ...abs(745, 405),
                display: "flex",
                alignItems: "center",
                gap: u(8),
                fontSize: u(14.5),
                color: "#ffffff",
                textDecoration: "none",
                zIndex: 30,
              }}
            >
              <span style={{ display: "inline-flex" }}><PhoneIcon /></span>
              <span>+91 9847980605</span>
            </a>

            <a
              href="mailto:info@empireae.xyz"
              style={{
                ...abs(745, 436),
                display: "flex",
                alignItems: "center",
                gap: u(8),
                fontSize: u(14.5),
                color: "#ffffff",
                textDecoration: "none",
                zIndex: 30,
              }}
            >
              <span style={{ display: "inline-flex" }}><MailIcon /></span>
              <span>info@empireae.xyz</span>
            </a>

            {/* Social Icons (Instagram, Facebook, LinkedIn, Threads) */}
            <div style={{ ...abs(730, 470), display: "flex", gap: u(8), zIndex: 30 }}>
              {[
                { icon: <InstagramIcon />, href: "https://www.instagram.com/empire_ae_official", label: "Instagram" },
                { icon: <FacebookIcon />, href: "https://www.facebook.com/empireaeitservices", label: "Facebook" },
                { icon: <LinkedinIcon />, href: "https://www.linkedin.com/company/empireaeitservices/?originalSubdomain=in", label: "LinkedIn" },
                { icon: <ThreadsIcon />, href: "https://www.threads.net/@empire_ae_official", label: "Threads" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: u(26),
                    height: u(26),
                    borderRadius: "50%",
                    border: `${u(1)} solid rgba(255,255,255,0.35)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    textDecoration: "none",
                    transition: "border-color 0.2s ease, color 0.2s ease",
                  }}
                  className="hover:border-[#18c4ff] hover:text-[#18c4ff]"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <T x={715} y={528} s={9.5} lh={12} c="rgba(255,255,255,0.7)">
              Designed with precision by Empire AE
            </T>
          </div>
        </div>
      </div>

      {/* Mobile Layout (< 768px) */}
      <div className="block md:hidden min-h-screen flex flex-col justify-between bg-black relative px-4 py-8">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background: "url(/images/thank-you-bg.png) center/cover no-repeat",
          }}
        />

        {/* Top Header */}
        <div className="relative z-10 flex justify-center pb-8 border-b border-white/10">
          <Link href="/" aria-label="Empire AE">
            <img src="/images/logo.png" alt="Empire AE" className="h-12 w-auto object-contain" />
          </Link>
        </div>

        {/* Center Card */}
        <div className="relative z-10 my-auto py-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 text-center max-w-sm mx-auto shadow-2xl">
            <div className="w-14 h-14 mx-auto mb-4">
              <CheckmarkBadge />
            </div>
            <h1 className="text-3xl font-semibold text-white tracking-tight">
              Thank You!
            </h1>
            <p className="mt-3 text-sm text-blue-100 font-serif leading-relaxed">
              Your submission has been sent. We will be in touch with you shortly.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-[#006eef] hover:bg-[#005cd0] text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-500/20"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="relative z-10 pt-8 border-t border-white/10 flex flex-col items-center text-center gap-4">
          <div className="flex flex-col gap-2 text-sm">
            <a href="tel:+919847980605" className="inline-flex items-center justify-center gap-2 text-white hover:text-[#18c4ff]">
              <PhoneIcon /> <span>+91 9847980605</span>
            </a>
            <a href="mailto:info@empireae.xyz" className="inline-flex items-center justify-center gap-2 text-white hover:text-[#18c4ff]">
              <MailIcon /> <span>info@empireae.xyz</span>
            </a>
          </div>

          <div className="flex gap-3">
            {[
              { icon: <InstagramIcon />, href: "https://www.instagram.com/empire_ae_official", label: "Instagram" },
              { icon: <FacebookIcon />, href: "https://www.facebook.com/empireaeitservices", label: "Facebook" },
              { icon: <LinkedinIcon />, href: "https://www.linkedin.com/company/empireaeitservices/?originalSubdomain=in", label: "LinkedIn" },
              { icon: <ThreadsIcon />, href: "https://www.threads.net/@empire_ae_official", label: "Threads" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-[#18c4ff] hover:text-[#18c4ff] transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="text-[11px] text-gray-400">
            © 2026 Empire AE. All Rights Reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
