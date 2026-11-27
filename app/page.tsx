"use client";

import { useState, FormEvent, CSSProperties, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Outfit } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Header";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

/* ------------------------------------------------------------------
   The PDF design is 1024px wide. Every number below is a measurement
   taken from the PDF (design pixels). `--u` = 1 design pixel, so the
   page scales proportionally with the browser width.
------------------------------------------------------------------- */
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

const SERVICES = [
  { x: 62, icon: "/images/icon-1.png", title: ["Android & iOS", "App Development"], tTop: 1456, text: ["Custom and high-", "performance apps", "for all platforms"] },
  { x: 246, icon: "/images/icon-2.png", title: ["Graphic Designing"], tTop: 1464, text: ["Modern and intuitive", "designs to improve", "user engagement."] },
  { x: 430, icon: "/images/icon-3.png", title: ["API & Backend", "Integration"], tTop: 1456, text: ["Seamless integration", "with third-party", "services."] },
  { x: 614, icon: "/images/icon-4.png", title: ["Testing &", "Quality Assurance"], tTop: 1456, text: ["Robust testing for", "a smooth and", "bug-free experience."] },
  { x: 798, icon: "/images/icon-5.png", title: ["App Deployment &", "Support"], tTop: 1456, text: ["We publish your app", "on Google Play Store", "and Apple App Store."] },
];

const PROJECTS = [
  { x: 76, name: "Food Delivery App", industry: "Food & Beverage" },
  { x: 300, name: "Travel Booking App", industry: "Travel & Tourism" },
  { x: 524, name: "E-commerce App", industry: "Retail" },
  { x: 748, name: "Healthcare App", industry: "Healthcare" },
];

const TESTIMONIALS = [
  { x: 85, lines: ["“The team understood our requirements very", "well and delivered a high-quality app on time.", "Professional and reliable service.”"], name: "Aneesh Kumar", role: "Retail Business" },
  { x: 377, lines: ["“Excellent communication and support", "throughout the project. The app has helped our", "business grow significantly.”"], name: "Dr. Priya Nair", role: "Healthcare Industry" },
  { x: 668, lines: ["“Creative team with strong technical skills.", "Highly recommended for anyone looking for a", "mobile app development partner.”"], name: "Ramesh V", role: "Travel & Tourism" },
];

const FAQ_LEFT = [
  "How much does mobile app development cost?",
  "How long does it take to develop an app?",
  "Can you develop both Android and iOS apps?",
];
const FAQ_RIGHT = [
  "Do you provide UI/UX design?",
  "Can you publish your app on Google Play Store and Apple App Store?",
  "Do you provide post-launch support?",
];

const SOCIALS: [string, number][] = [
  ["Facebook", 412],
  ["Instagram", 482],
  ["Linkedin", 559],
  ["Threads", 632],
  ["Youtube", 698],
  ["X", 765],
];

const APP_TYPES = ["Android App", "iOS App", "Android + iOS App", "E-commerce App", "Other"];
const BUDGETS = ["Under ₹50,000", "₹50,000 – ₹1,00,000", "₹1,00,000 – ₹3,00,000", "₹3,00,000+"];

const fieldStyle: CSSProperties = {
  background: "#122d4c",
  boxShadow: `inset 0 0 0 ${u(1.5)} #4977a5`,
  borderRadius: u(6),
  paddingLeft: u(16),
  fontSize: u(9.7),
  color: "#fff",
  border: "none",
  outline: "none",
};
const fieldCls =
  "placeholder:text-[#becfe4] invalid:text-[#becfe4] focus:shadow-[0_0_0_2px_#1f97ff] appearance-none";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).catch(() => { });
    } finally {
      router.push("/thank-you");
    }
  }

  // form children are positioned relative to the card (512, 89)
  const fx = (x: number) => x - 512;
  const fy = (y: number) => y - 89;

  return (
    <main className={`${outfit.className} overflow-x-hidden bg-black text-white selection:bg-[#1f97ff] selection:text-white`}>
      <div style={{ containerType: "inline-size" }}>
        <div
          style={
            {
              "--u": "calc(100cqw / 1024)",
              position: "relative",
              height: "calc(100cqw / 1024 * 2880)",
              overflow: "hidden",
              background: "#000",
            } as CSSProperties
          }
        >
          {/* ============ BACKGROUNDS ============ */}
          <div style={{ ...abs(0, 0, 1024, 576), background: "url(/images/hero-bg.png) center/100% 100% no-repeat" }} />
          <div style={{ ...abs(0, 1728, 1024, 576), background: "url(/images/hero-bg.png) center/100% 100% no-repeat" }} />

          {/* ============ HEADER ============ */}
          <Header />

          {/* ============ 3D RINGS ============ */}
          <img
            src="/images/ring-left.png"
            alt=""
            aria-hidden
            style={{
              ...abs(-111, 659, 206, 205),
              opacity: 0.65,
              filter: "saturate(0.4) brightness(1.1)",
              pointerEvents: "none",
            }}
          />
          <img
            src="/images/ring-right.png"
            alt=""
            aria-hidden
            style={{
              ...abs(788, 946, 236, 335),
              zIndex: 15,
              pointerEvents: "none",
            }}
          />

          {/* ============ HERO ============ */}
          <T x={115} y={132} s={14} lh={16} ls="0.06em">
            Mobile App Development Company in<br />Kerala for Custom Android &amp; iOS Apps
          </T>
          <h1 style={{ ...abs(111, 198), margin: 0, fontSize: u(59.9), lineHeight: u(62), fontWeight: 400, whiteSpace: "nowrap" }}>
            Have an<br />App Idea ?
          </h1>
          <T x={111} y={345} s={20} lh={25}>
            Let&apos;s Turn It Into a Powerful<br />Business Application.
          </T>
          <div
            style={{
              ...abs(112, 437, 98, 22),
              background: "#006eef",
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: u(14),
              fontWeight: 500,
            }}
          >
            → ₹49,999
          </div>

          {/* FORM CARD */}
          <form
            id="consult"
            onSubmit={onSubmit}
            style={{
              ...abs(512, 89, 396, 412),
              background: "rgba(12,35,63,0.5)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              borderRadius: u(58),
              boxShadow: `inset 0 0 0 ${u(2.5)} rgba(73,119,165,0.8)`,
              zIndex: 10,
            }}
          >
            <T x={fx(561)} y={fy(109)} s={26.7} lh={27} b>Get in Touch</T>

            <T x={fx(561)} y={fy(155)} s={9.7} lh={10} b>Full Name</T>
            <input name="name" required placeholder="Enter your full name" className={fieldCls}
              style={{ ...fieldStyle, ...abs(fx(556), fy(171), 302, 34) }} />

            <T x={fx(561)} y={fy(222)} s={9.7} lh={10} b>Email Address</T>
            <input name="email" type="email" required placeholder="you@example.com" className={fieldCls}
              style={{ ...fieldStyle, ...abs(fx(556), fy(238), 152, 34) }} />

            <T x={fx(725)} y={fy(224)} s={9.7} lh={10} b>Phone Number</T>
            <input name="phone" type="tel" required placeholder="+91 98765 43210" className={fieldCls}
              style={{ ...fieldStyle, ...abs(fx(718), fy(238), 140, 34) }} />

            <T x={fx(561)} y={fy(289)} s={9.7} lh={10} b>What type of app do you need?</T>
            <select
              name="appType"
              required
              defaultValue=""
              className={fieldCls}
              style={{
                ...fieldStyle,
                ...abs(fx(556), fy(305), 302, 34),
                paddingRight: u(32),
                cursor: "pointer",
              }}
            >
              <option value="" disabled style={{ backgroundColor: "#0e243d", color: "#8faecf" }}>
                Select an option
              </option>
              {APP_TYPES.map((o) => (
                <option key={o} value={o} style={{ backgroundColor: "#0e243d", color: "#ffffff" }}>
                  {o}
                </option>
              ))}
            </select>
            <div
              aria-hidden="true"
              style={{
                ...abs(fx(834), fy(305), 18, 34),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
                fontSize: u(9.7),
                color: "#becfe4",
                userSelect: "none",
              }}
            >
              ▾
            </div>

            <T x={fx(561)} y={fy(356)} s={9.7} lh={10} b>Estimated Budget</T>
            <select
              name="budget"
              required
              defaultValue=""
              className={fieldCls}
              style={{
                ...fieldStyle,
                ...abs(fx(556), fy(372), 302, 34),
                paddingRight: u(32),
                cursor: "pointer",
              }}
            >
              <option value="" disabled style={{ backgroundColor: "#0e243d", color: "#8faecf" }}>
                Select your budget
              </option>
              {BUDGETS.map((o) => (
                <option key={o} value={o} style={{ backgroundColor: "#0e243d", color: "#ffffff" }}>
                  {o}
                </option>
              ))}
            </select>
            <div
              aria-hidden="true"
              style={{
                ...abs(fx(834), fy(372), 18, 34),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
                fontSize: u(9.7),
                color: "#becfe4",
                userSelect: "none",
              }}
            >
              ▾
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                ...abs(fx(557), fy(417), 301, 32),
                background: "#1f97ff",
                borderRadius: u(6),
                fontSize: u(11),
                fontWeight: 600,
                color: "#fff",
                border: "none",
                cursor: "pointer",
                opacity: loading ? 0.6 : 1,
              }}
            >
              {loading ? "Sending…" : "Get a Free Consultation  →"}
            </button>
            <T x={0} y={fy(459)} s={9.4} lh={11} c="#becfe4" w={396} center>
              🔒 Your information is 100% secure and will not be<br />shared.
            </T>
          </form>

          {/* hero ring sits on top of the card with transparency, as in the image */}
          <img
            src="/images/ring-hero.png"
            alt=""
            aria-hidden
            style={{
              ...abs(819, -134, 342, 334),
              zIndex: 20,
              pointerEvents: "none",
              opacity: 0.8,
            }}
          />

          {/* ============ TRUST ============ */}
          <div id="about" style={{ ...abs(0, 640, 1024, 1), pointerEvents: "none" }} />
          <div id="team" style={{ ...abs(0, 640, 1024, 1), pointerEvents: "none" }} />
          <T x={0} y={661} s={35} lh={36} b w={1024} center>Building Digital Solutions</T>
          <T x={0} y={697} s={35} lh={36} b c="#1076e6" w={1024} center>That Businesses Trust</T>
          <T x={125} y={777} s={12} lh={15} b>
            With years of experience in digital product development, Empire AE helps businesses transform their ideas into practical, user-friendly<br />mobile applications.
          </T>
          {/* ============ STATS (Crisp Vector Typography) ============ */}
          <div style={{ ...abs(277 - 100, 873, 200), display: "flex", flexDirection: "column", alignItems: "center", pointerEvents: "none" }}>
            <div style={{ fontSize: u(26), lineHeight: u(28), fontWeight: 700, color: "#ffffff", letterSpacing: "0.02em" }}>
              100+
            </div>
            <div style={{ marginTop: u(6), fontSize: u(11.5), lineHeight: u(14), fontWeight: 400, color: "#ffffff", textAlign: "center", whiteSpace: "nowrap" }}>
              Successful Projects
            </div>
          </div>

          <div style={{ ...abs(516 - 100, 873, 200), display: "flex", flexDirection: "column", alignItems: "center", pointerEvents: "none" }}>
            <div style={{ fontSize: u(26), lineHeight: u(28), fontWeight: 700, color: "#ffffff", letterSpacing: "0.02em" }}>
              100+
            </div>
            <div style={{ marginTop: u(6), fontSize: u(11.5), lineHeight: u(14), fontWeight: 400, color: "#ffffff", textAlign: "center", whiteSpace: "nowrap" }}>
              Trusted Businesses
            </div>
          </div>

          <div style={{ ...abs(755 - 100, 873, 200), display: "flex", flexDirection: "column", alignItems: "center", pointerEvents: "none" }}>
            <div style={{ fontSize: u(26), lineHeight: u(28), fontWeight: 700, color: "#ffffff", letterSpacing: "0.02em" }}>
              9+
            </div>
            <div style={{ marginTop: u(6), fontSize: u(11.5), lineHeight: u(14), fontWeight: 400, color: "#ffffff", textAlign: "center", whiteSpace: "nowrap" }}>
              Years of Excellence
            </div>
          </div>
          <img
            src="/images/clients.png"
            alt="Nakshathra, SuchiGo, Gaby Talk, Heart Mate, KDE"
            style={{ ...abs(95, 990, 755, 70), zIndex: 5 }}
          />

          {/* ============ SERVICES ============ */}
          <div id="services" style={{ ...abs(0, 1180, 1024, 1), pointerEvents: "none" }} />
          <T x={271} y={1218} s={68.9} lh={69} b>What <span style={{ color: "#006eef" }}>we offer</span></T>
          {SERVICES.map((s) => (
            <div key={s.x}>
              <div style={{ ...abs(s.x, 1355, 164, 230), background: "#fff", borderRadius: u(16), boxShadow: `inset 0 0 0 ${u(1.4)} #dae1eb` }} />
              <img src={s.icon} alt="" style={abs(s.x + 45, 1370, 74, 74)} />
              <T x={s.x} y={s.tTop} s={13} lh={16} c="#091e3c" b w={164} center>
                {s.title.map((l, i) => <span key={i}>{l}{i < s.title.length - 1 && <br />}</span>)}
              </T>
              <T x={s.x + 12} y={1502} s={10.5} lh={14} c="#5c6e84" w={140} center>
                {s.text.map((l, i) => <span key={i}>{l}{i < s.text.length - 1 && <br />}</span>)}
              </T>
            </div>
          ))}

          {/* ============ PORTFOLIO ============ */}
          <div id="portfolio" style={{ ...abs(0, 1750, 1024, 1), pointerEvents: "none" }} />
          <img
            src="/images/portfolio-right.png"
            alt=""
            aria-hidden
            style={{
              ...abs(760, 1728, 264, 230),
              pointerEvents: "none",
            }}
          />
          <T x={74} y={1794} s={48} lh={48}>
            Apps{" "}
            <span
              style={{
                background: "linear-gradient(180deg, #9ecbff 0%, #16539e 35%, #0b254a 70%, #020914 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              We’ve Built
            </span>
          </T>
          <T x={74} y={1862} s={14} lh={18}>Here are some of the mobile applications we have developed for our clients.</T>
          <a href="#portfolio" style={{ ...abs(795, 1902, 148, 33), background: "#03070c", boxShadow: `inset 0 0 0 ${u(1.5)} #18c4ff`, borderRadius: u(4), display: "flex", alignItems: "center", justifyContent: "center", fontSize: u(11.5), fontWeight: 600, color: "#18c4ff", textDecoration: "none" }}>
            View All Projects →
          </a>
          {PROJECTS.map((p) => (
            <div key={p.name}>
              <div style={{ ...abs(p.x, 1963, 208, 200), background: "#fff", borderRadius: u(22) }} />
              <div style={{ ...abs(p.x + 2, 1965, 204, 116), background: "#164169", borderRadius: u(19) }} />
              <T x={p.x + 2} y={1994} s={24} lh={28} b w={204} center>APP<br />PREVIEW</T>
              <T x={p.x + 16} y={2091} s={16.5} lh={20} c="#081c37" b>{p.name}</T>
              <T x={p.x + 16} y={2117} s={12} lh={16} c="#506478">Industry: {p.industry}<br />Platform: Android + iOS</T>
              <a href="#portfolio" style={{ ...abs(p.x + 16, 2174), fontSize: u(13.5), lineHeight: u(16), fontWeight: 600, color: "#1076e6", whiteSpace: "nowrap", textDecoration: "none" }}>View Project →</a>
            </div>
          ))}

          {/* ============ TESTIMONIALS ============ */}
          <T x={85} y={2361} s={23} lh={24} b>What Our <span style={{ color: "#18c4ff" }}>Clients Say</span></T>
          {TESTIMONIALS.map((t) => (
            <div key={t.name}>
              <div style={{ ...abs(t.x, 2403, 271, 83), background: "#081e37", borderRadius: u(10), boxShadow: `inset 0 0 0 ${u(1.5)} #1469aa` }} />
              <img src="/images/avatar.png" alt="" style={{ ...abs(t.x + 11, 2416, 31, 31), borderRadius: "50%", objectFit: "cover" }} />
              <T x={t.x + 57} y={2415} s={8.2} lh={9.6}>
                {t.lines.map((l, i) => <span key={i}>{l}{i < 2 && <br />}</span>)}
              </T>
              <T x={t.x + 57} y={2458} s={7.5} lh={8} b>{t.name}</T>
              <T x={t.x + 57} y={2470} s={6.5} lh={7} c="#aabcd2">{t.role}</T>
            </div>
          ))}

          {/* ============ FAQ ============ */}
          <div id="faq" style={{ ...abs(0, 2490, 1024, 1), pointerEvents: "none" }} />
          <T x={86} y={2511} s={23} lh={24} b>Frequently <span style={{ color: "#18c4ff" }}>Asked Questions</span></T>
          <a href="#faq" style={{ ...abs(811, 2512, 126, 27), background: "#03070c", boxShadow: `inset 0 0 0 ${u(1.5)} #18c4ff`, borderRadius: u(3), display: "flex", alignItems: "center", justifyContent: "center", fontSize: u(8.5), fontWeight: 600, color: "#18c4ff", textDecoration: "none" }}>
            View More FAQ →
          </a>
          {[...FAQ_LEFT.map((q, i) => ({ q, x: 78, y: 2562 + i * 31 })), ...FAQ_RIGHT.map((q, i) => ({ q, x: 528, y: 2562 + i * 31 }))].map(({ q, x, y }) => (
            <div key={q}>
              <div style={{ ...abs(x, y, 422, 25), background: "#051223", borderRadius: u(4), boxShadow: `inset 0 0 0 ${u(1.5)} #1469aa` }} />
              <T x={x + 19} y={y + 8} s={9.2} lh={10}>{q}</T>
            </div>
          ))}

          {/* ============ CTA ============ */}
          <div id="careers" style={{ ...abs(0, 2686, 1024, 1), pointerEvents: "none" }} />
          <div style={{ ...abs(74, 2686, 865, 76), background: "#091e3c", borderRadius: u(12), boxShadow: `inset 0 0 0 ${u(1.5)} #1076e6` }} />
          <T x={103} y={2706} s={18} lh={20} b>Make your</T>
          <T x={103} y={2726} s={17} lh={19} b c="#18c4ff">mark in the digital world</T>
          <T x={330} y={2717} s={8.5} lh={10}>Discuss your app idea with our experts and get a free<br />consultation.</T>
          <a href="#consult" style={{ ...abs(650, 2710, 120, 31), background: "#fff", borderRadius: u(5), display: "flex", alignItems: "center", justifyContent: "center", fontSize: u(8.2), fontWeight: 600, color: "#081e37", textDecoration: "none" }}>
            Get Free Consultation →
          </a>
          <a href="tel:+919895280605" style={{ ...abs(780, 2710, 134, 31), background: "#051834", boxShadow: `inset 0 0 0 ${u(1.5)} #fff`, borderRadius: u(5), display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontSize: u(7.7), lineHeight: u(9), fontWeight: 600, color: "#fff", textDecoration: "none" }}>
            <span>Call Now</span>
            <span>+91 98952 80605</span>
          </a>

          {/* ============ FOOTER ============ */}
          <div id="contact" style={{ ...abs(0, 2750, 1024, 1), pointerEvents: "none" }} />
          <Link href="/" style={abs(78, 2763, 55, 68)} aria-label="Empire AE">
            <img src="/images/logo.png" alt="empireae" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </Link>
          {SOCIALS.map(([label, x]) => (
            <a key={label} href="#" style={{ ...abs(x, 2794), fontSize: u(10.8), lineHeight: u(11), color: "#fff", textDecoration: "none" }}>{label}</a>
          ))}
        </div>
      </div>
    </main>
  );
}
