"use client";

import { useState, FormEvent, CSSProperties, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Outfit } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Header";
import MobileHeader from "@/components/MobileHeader";

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
  { x: 76, lines: ["“The team understood our requirements very", "well and delivered a high-quality app on time.", "Professional and reliable service.”"], name: "Aneesh Kumar", role: "Retail Business" },
  { x: 370, lines: ["“Excellent communication and support", "throughout the project. The app has helped our", "business grow significantly.”"], name: "Dr. Priya Nair", role: "Healthcare Industry" },
  { x: 664, lines: ["“Creative team with strong technical skills.", "Highly recommended for anyone looking for a", "mobile app development partner.”"], name: "Ramesh V", role: "Travel & Tourism" },
];

const FAQS = [
  {
    q: "How much does mobile app development cost?",
    a: "The cost depends on your app's complexity, features, platforms (Android, iOS, or both), and backend architecture. We provide customized, transparent pricing starting from ₹49,999 for basic apps up to tailored enterprise quotes.",
  },
  {
    q: "How long does it take to develop an app?",
    a: "A typical MVP or standard mobile app takes between 4 to 8 weeks to design, develop, and test. Complex applications with bespoke backend systems may take 3 to 6 months.",
  },
  {
    q: "Can you develop both Android and iOS apps?",
    a: "Yes! We specialize in cross-platform development as well as native development for both Android and iOS, ensuring high performance on all devices.",
  },
  {
    q: "Do you provide graphic design services?",
    a: "Yes, we offer professional graphic design and branding services, including custom app icons, promotional banners, UI assets, and intuitive visual elements to enhance user engagement.",
  },
  {
    q: "Can you publish your app on Google Play Store and Apple App Store?",
    a: "Yes, we handle the entire launch and deployment process, including store listing assets, compliance guidelines, developer accounts, and review approval for both Google Play and the App Store.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes, we offer ongoing maintenance and support packages, including OS compatibility updates, security patches, bug fixes, and continuous performance optimization.",
  },
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
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const ANSWER_EXPANSION = 82;

  const h0 = openFaqs.includes(0) ? ANSWER_EXPANSION : 0;
  const h1 = openFaqs.includes(1) ? ANSWER_EXPANSION : 0;
  const h2 = openFaqs.includes(2) ? ANSWER_EXPANSION : 0;

  const leftFaqItems = [
    { ...FAQS[0], index: 0, x: 76, y: 2680, h: 46 + h0, isOpen: openFaqs.includes(0) },
    { ...FAQS[1], index: 1, x: 76, y: 2680 + 58 + h0, h: 46 + h1, isOpen: openFaqs.includes(1) },
    { ...FAQS[2], index: 2, x: 76, y: 2680 + 116 + h0 + h1, h: 46 + h2, isOpen: openFaqs.includes(2) },
  ];

  const h3 = openFaqs.includes(3) ? ANSWER_EXPANSION : 0;
  const h4 = openFaqs.includes(4) ? ANSWER_EXPANSION : 0;
  const h5 = openFaqs.includes(5) ? ANSWER_EXPANSION : 0;

  const rightFaqItems = [
    { ...FAQS[3], index: 3, x: 520, y: 2680, h: 46 + h3, isOpen: openFaqs.includes(3) },
    { ...FAQS[4], index: 4, x: 520, y: 2680 + 58 + h3, h: 46 + h4, isOpen: openFaqs.includes(4) },
    { ...FAQS[5], index: 5, x: 520, y: 2680 + 116 + h3 + h4, h: 46 + h5, isOpen: openFaqs.includes(5) },
  ];

  const totalFaqExpansion = Math.max(h0 + h1 + h2, h3 + h4 + h5);

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
      {/* =============================================================== */}
      {/* ================= DESKTOP LAYOUT (>= 1024px) ================= */}
      {/* =============================================================== */}
      <div className="hidden lg:block w-full">
        <div style={{ containerType: "inline-size" }}>
        <div
          style={
            {
              "--u": "calc(100cqw / 1024)",
              position: "relative",
              height: `calc(100cqw / 1024 * ${3190 + totalFaqExpansion})`,
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
              <div style={{ ...abs(p.x, 1963, 208, 185), background: "#fff", borderRadius: u(22) }} />
              <div style={{ ...abs(p.x + 2, 1965, 204, 105), background: "#164169", borderRadius: u(19) }} />
              <T x={p.x + 2} y={1988} s={22} lh={26} b w={204} center>APP<br />PREVIEW</T>
              <T x={p.x + 16} y={2078} s={16} lh={19} c="#081c37" b>{p.name}</T>
              <T x={p.x + 16} y={2102} s={11.5} lh={15} c="#506478">Industry: {p.industry}<br />Platform: Android + iOS</T>
              <a href="#portfolio" style={{ ...abs(p.x + 16, 2156), fontSize: u(13), lineHeight: u(15), fontWeight: 600, color: "#1076e6", whiteSpace: "nowrap", textDecoration: "none" }}>View Project →</a>
            </div>
          ))}
          <img
            src="/images/portfolio-left.png"
            alt=""
            aria-hidden
            style={{
              ...abs(0, 2190, 222, 142),
              pointerEvents: "none",
            }}
          />

          {/* ============ TESTIMONIALS ============ */}
          <T x={76} y={2360} s={34} lh={38} b>What Our <span style={{ color: "#18c4ff" }}>Clients Say</span></T>
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              style={{
                ...abs(t.x, 2415, 284, 158),
                background: "#081e37",
                borderRadius: u(14),
                boxShadow: `inset 0 0 0 ${u(1.5)} #1469aa`,
                padding: `${u(16)} ${u(18)}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: u(12) }}>
                <img
                  src="/images/avatar.png"
                  alt=""
                  style={{
                    width: u(44),
                    height: u(44),
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    fontSize: u(11),
                    lineHeight: u(15.2),
                    color: "#e2ecf8",
                    fontStyle: "italic",
                    whiteSpace: "normal",
                    wordBreak: "normal",
                  }}
                >
                  {t.lines.join(" ")}
                </p>
              </div>
              <div style={{ paddingLeft: u(56) }}>
                <div style={{ fontSize: u(13), lineHeight: u(16), fontWeight: 700, color: "#ffffff" }}>
                  {t.name}
                </div>
                <div style={{ fontSize: u(10.5), lineHeight: u(13), color: "#aabcd2", marginTop: u(2) }}>
                  {t.role}
                </div>
              </div>
            </div>
          ))}

          {/* ============ FAQ ============ */}
          <div id="faq" style={{ ...abs(0, 2600, 1024, 1), pointerEvents: "none" }} />
          <T x={76} y={2620} s={34} lh={38} b>Frequently <span style={{ color: "#18c4ff" }}>Asked Questions</span></T>
          <a href="#faq" style={{ ...abs(796, 2618, 152, 36), background: "#03070c", boxShadow: `inset 0 0 0 ${u(1.5)} #18c4ff`, borderRadius: u(4), display: "flex", alignItems: "center", justifyContent: "center", fontSize: u(11.5), fontWeight: 600, color: "#18c4ff", textDecoration: "none" }}>
            View More FAQ →
          </a>
          {[...leftFaqItems, ...rightFaqItems].map((item) => (
            <div
              key={item.q}
              onClick={() => toggleFaq(item.index)}
              style={{
                ...abs(item.x, item.y, 428, item.h),
                background: item.isOpen ? "#071830" : "#051223",
                borderRadius: u(8),
                boxShadow: `inset 0 0 0 ${u(1.5)} ${item.isOpen ? "#18c4ff" : "#1469aa"}`,
                cursor: "pointer",
                padding: `${u(13)} ${u(18)}`,
                boxSizing: "border-box",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                transition: "background 0.2s, box-shadow 0.2s, height 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: u(10), minHeight: u(20) }}>
                <span style={{ fontSize: u(12.5), lineHeight: u(16), fontWeight: 500, color: "#ffffff", whiteSpace: "nowrap" }}>
                  {item.q}
                </span>
                <span
                  style={{
                    fontSize: u(18),
                    lineHeight: u(18),
                    fontWeight: 700,
                    color: "#18c4ff",
                    transform: item.isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                    display: "inline-block",
                    userSelect: "none",
                  }}
                >
                  +
                </span>
              </div>
              {item.isOpen && (
                <div
                  style={{
                    marginTop: u(10),
                    paddingTop: u(8),
                    borderTop: `1px solid rgba(24, 196, 255, 0.2)`,
                    fontSize: u(11),
                    lineHeight: u(15.2),
                    color: "#b9cadc",
                    whiteSpace: "normal",
                  }}
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}

          {/* ============ CTA ============ */}
          <div id="careers" style={{ ...abs(0, 2870 + totalFaqExpansion, 1024, 1), pointerEvents: "none" }} />
          <div
            style={{
              ...abs(76, 2885 + totalFaqExpansion, 872, 114),
              background: "#091e3c",
              borderRadius: u(16),
              boxShadow: `inset 0 0 0 ${u(1.5)} #1076e6`,
              padding: `0 ${u(28)}`,
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: u(16),
            }}
          >
            {/* Left Headline */}
            <div style={{ flexShrink: 0 }}>
              <div style={{ fontSize: u(24), lineHeight: u(28), fontWeight: 700, color: "#ffffff" }}>
                Make your
              </div>
              <div style={{ fontSize: u(22), lineHeight: u(26), fontWeight: 700, color: "#18c4ff" }}>
                mark in the digital world
              </div>
            </div>

            {/* Middle Description */}
            <div
              style={{
                maxWidth: u(220),
                fontSize: u(11.5),
                lineHeight: u(16.5),
                color: "#d0e0f2",
                whiteSpace: "normal",
                wordBreak: "normal",
                flexShrink: 1,
              }}
            >
              Discuss your app idea with our experts and get a free consultation.
            </div>

            {/* Right Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: u(14), flexShrink: 0 }}>
              <a
                href="#consult"
                style={{
                  width: u(144),
                  height: u(44),
                  background: "#ffffff",
                  borderRadius: u(8),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: u(10.5),
                  fontWeight: 600,
                  color: "#081e37",
                  textDecoration: "none",
                }}
              >
                Get Free Consultation →
              </a>
              <a
                href="tel:+919895280605"
                style={{
                  width: u(130),
                  height: u(44),
                  background: "#051834",
                  boxShadow: `inset 0 0 0 ${u(1.5)} #ffffff`,
                  borderRadius: u(8),
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: u(9.5),
                  lineHeight: u(12),
                  fontWeight: 600,
                  color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                <span>Call Now</span>
                <span style={{ fontSize: u(8.5), fontWeight: 400 }}>+91 98952 80605</span>
              </a>
            </div>
          </div>

          {/* ============ FOOTER ============ */}
          <div id="contact" style={{ ...abs(0, 3050 + totalFaqExpansion, 1024, 1), pointerEvents: "none" }} />
          <Link href="/" style={abs(76, 3055 + totalFaqExpansion, 55, 68)} aria-label="Empire AE">
            <img src="/images/logo.png" alt="empireae" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </Link>
          {SOCIALS.map(([label, x]) => (
            <a key={label} href="#" style={{ ...abs(x, 3085 + totalFaqExpansion), fontSize: u(12), lineHeight: u(14), color: "#fff", textDecoration: "none" }}>{label}</a>
          ))}
        </div>
      </div>
      </div>

      {/* =============================================================== */}
      {/* ================= MOBILE & TABLET LAYOUT (< 1024px) =========== */}
      {/* =============================================================== */}
      <div className="block lg:hidden w-full min-h-screen bg-black text-white relative overflow-x-hidden">
        <MobileHeader />

        {/* Hero Section */}
        <section className="relative pt-6 pb-16 px-4 sm:px-6">
          {/* Background gradient image */}
          <div
            className="absolute inset-0 h-[680px] pointer-events-none opacity-85"
            style={{
              background: "url(/images/hero-bg.png) top center/cover no-repeat",
            }}
          />

          {/* Floating accent rings */}
          <img
            src="/images/ring-left.png"
            alt=""
            aria-hidden
            className="absolute -left-20 top-96 w-48 h-auto opacity-40 pointer-events-none filter saturate-[0.4] brightness-110"
          />
          <img
            src="/images/ring-hero.png"
            alt=""
            aria-hidden
            className="absolute -right-24 -top-12 w-80 h-auto opacity-70 pointer-events-none"
          />

          <div className="relative max-w-xl mx-auto pt-2">
            <div className="text-xs sm:text-sm font-medium text-sky-200/90 tracking-wide uppercase">
              Mobile App Development Company in Kerala for Custom Android &amp; iOS Apps
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mt-4 leading-[1.12]">
              Have an<br />App Idea ?
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 font-normal mt-3 leading-snug">
              Let&apos;s Turn It Into a Powerful Business Application.
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#006eef] text-white text-sm font-medium shadow-md shadow-blue-500/30">
                → ₹49,999
              </span>
            </div>

            {/* Consultation Form Card */}
            <div className="mt-8" id="consult">
              <form
                onSubmit={onSubmit}
                className="w-full bg-[#0c233f]/75 backdrop-blur-md border border-[#4977a5]/70 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-950/70"
              >
                <h2 className="text-2xl font-bold text-white mb-5 text-left">Get in Touch</h2>

                <div className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Full Name
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="w-full bg-[#122d4c] border border-[#4977a5] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f97ff]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full bg-[#122d4c] border border-[#4977a5] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f97ff]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#122d4c] border border-[#4977a5] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f97ff]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      What type of app do you need?
                    </label>
                    <div className="relative">
                      <select
                        name="appType"
                        required
                        defaultValue=""
                        className="w-full bg-[#122d4c] border border-[#4977a5] rounded-xl px-4 py-3 text-sm text-white appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-[#1f97ff] cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#0e243d] text-gray-400">
                          Select an option
                        </option>
                        {APP_TYPES.map((o) => (
                          <option key={o} value={o} className="bg-[#0e243d] text-white">
                            {o}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300">
                        ▾
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Estimated Budget
                    </label>
                    <div className="relative">
                      <select
                        name="budget"
                        required
                        defaultValue=""
                        className="w-full bg-[#122d4c] border border-[#4977a5] rounded-xl px-4 py-3 text-sm text-white appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-[#1f97ff] cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#0e243d] text-gray-400">
                          Select your budget
                        </option>
                        {BUDGETS.map((o) => (
                          <option key={o} value={o} className="bg-[#0e243d] text-white">
                            {o}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300">
                        ▾
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-[#1f97ff] hover:bg-[#0084f4] text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-blue-500/30 disabled:opacity-60 cursor-pointer active:scale-[0.99] mt-2"
                  >
                    {loading ? "Sending…" : "Get a Free Consultation  →"}
                  </button>

                  <p className="text-center text-xs text-[#becfe4] pt-2">
                    🔒 Your information is 100% secure and will not be shared.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Trust & Stats Section */}
        <section id="about" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center relative">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Building Digital Solutions<br />
            <span className="text-[#1076e6]">That Businesses Trust</span>
          </h2>
          <p className="mt-4 text-xs sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            With years of experience in digital product development, Empire AE helps businesses transform their ideas into practical, user-friendly mobile applications.
          </p>

          {/* 3 Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 mt-10 max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-sm">
            <div>
              <div className="text-xl sm:text-3xl font-bold text-white">100+</div>
              <div className="text-[11px] sm:text-xs text-gray-300 mt-1">Successful Projects</div>
            </div>
            <div className="border-x border-white/10 px-1 sm:px-2">
              <div className="text-xl sm:text-3xl font-bold text-white">100+</div>
              <div className="text-[11px] sm:text-xs text-gray-300 mt-1">Trusted Businesses</div>
            </div>
            <div>
              <div className="text-xl sm:text-3xl font-bold text-white">9+</div>
              <div className="text-[11px] sm:text-xs text-gray-300 mt-1">Years of Excellence</div>
            </div>
          </div>

          {/* Client Logos (5 logos) */}
          <div className="mt-12 overflow-x-auto pb-4">
            <img
              src="/images/clients.png"
              alt="Nakshathra, SuchiGo, Gaby Talk, Heart Mate, KDE"
              className="h-12 sm:h-16 w-auto mx-auto object-contain min-w-[480px]"
            />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What <span className="text-[#006eef]">we offer</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div
                key={s.icon}
                className="bg-white rounded-2xl p-6 text-center border border-[#dae1eb] shadow-lg flex flex-col items-center justify-between transition-transform duration-200 hover:-translate-y-1"
              >
                <img src={s.icon} alt="" className="w-16 h-16 object-contain mb-4" />
                <h3 className="text-[#091e3c] font-bold text-base leading-snug mb-2">
                  {s.title.join(" ")}
                </h3>
                <p className="text-[#5c6e84] text-xs leading-relaxed">
                  {s.text.join(" ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 px-4 sm:px-6 relative bg-gradient-to-b from-transparent via-[#061528] to-black">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
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
                </h2>
                <p className="text-sm text-gray-300 mt-2 max-w-xl">
                  Here are some of the mobile applications we have developed for our clients.
                </p>
              </div>
              <a
                href="#portfolio"
                className="self-start sm:self-auto inline-flex items-center px-4 py-2 rounded-lg bg-[#03070c] border border-[#18c4ff] text-[#18c4ff] text-xs font-semibold shadow-md shadow-cyan-500/20 hover:bg-[#18c4ff]/10 transition-colors"
              >
                View All Projects →
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PROJECTS.map((p) => (
                <div key={p.name} className="flex flex-col">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-white/10 p-2">
                    {/* Blue Preview Header */}
                    <div className="bg-[#164169] rounded-xl h-28 flex items-center justify-center text-center">
                      <span className="text-white font-bold text-xl tracking-wider leading-tight">
                        APP<br />PREVIEW
                      </span>
                    </div>
                    {/* Card Details */}
                    <div className="p-4 text-left">
                      <h3 className="text-[#081c37] font-bold text-lg mb-1">{p.name}</h3>
                      <p className="text-[#506478] text-xs leading-relaxed">
                        Industry: {p.industry}<br />
                        Platform: Android + iOS
                      </p>
                    </div>
                  </div>
                  <a
                    href="#portfolio"
                    className="mt-2.5 inline-block text-xs font-semibold text-[#1076e6] hover:underline text-left pl-2"
                  >
                    View Project →
                  </a>
                </div>
              ))}
            </div>

            {/* Bottom-left drawing design accent */}
            <div className="relative mt-8 -mb-6 pointer-events-none">
              <img
                src="/images/portfolio-left.png"
                alt=""
                aria-hidden
                className="w-44 sm:w-52 h-auto opacity-75 object-contain -ml-4"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What Our <span className="text-[#18c4ff]">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-[#081e37] border border-[#1469aa] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl"
              >
                <div className="flex items-start gap-4 mb-5">
                  <img
                    src="/images/avatar.png"
                    alt=""
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                  />
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed italic">
                    {t.lines.join(" ")}
                  </p>
                </div>
                <div className="pt-3.5 border-t border-white/10">
                  <div className="text-base font-bold text-white">{t.name}</div>
                  <div className="text-xs sm:text-sm text-[#aabcd2] mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Frequently <span className="text-[#18c4ff]">Asked Questions</span>
            </h2>
            <a
              href="#faq"
              className="self-start sm:self-auto inline-flex items-center px-5 py-2.5 rounded-lg bg-[#03070c] border border-[#18c4ff] text-[#18c4ff] text-xs font-semibold hover:bg-[#18c4ff]/10 transition-colors"
            >
              View More FAQ →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqs.includes(index);
              return (
                <div
                  key={faq.q}
                  onClick={() => toggleFaq(index)}
                  className={`bg-[#051223] border ${
                    isOpen ? "border-[#18c4ff] bg-[#071830]" : "border-[#1469aa]"
                  } rounded-xl px-6 py-4.5 cursor-pointer transition-colors flex flex-col justify-between`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm sm:text-base text-white font-medium">{faq.q}</span>
                    <span
                      className={`text-[#18c4ff] text-xl font-bold shrink-0 transition-transform duration-200 select-none ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </div>
                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-[#18c4ff]/20 text-xs sm:text-sm text-[#b9cadc] leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Banner */}
        <section id="careers" className="py-14 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="bg-[#091e3c] border border-[#1076e6] rounded-3xl p-7 sm:p-11 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-blue-900/30">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                Make your <span className="text-[#18c4ff]">mark in the digital world</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mt-3">
                Discuss your app idea with our experts and get a free consultation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5 w-full md:w-auto shrink-0">
              <a
                href="#consult"
                className="text-center px-7 py-4 rounded-xl bg-white text-[#081e37] font-semibold text-sm hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation →
              </a>
              <a
                href="tel:+919895280605"
                className="text-center px-7 py-3.5 rounded-xl bg-[#051834] border border-white text-white font-semibold text-xs leading-tight flex flex-col items-center justify-center hover:bg-[#082046] transition-colors"
              >
                <span>Call Now</span>
                <span className="font-normal text-[11px]">+91 98952 80605</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-10 px-4 sm:px-6 border-t border-white/10 text-center">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link href="/" aria-label="Empire AE">
              <img src="/images/logo.png" alt="Empire AE" className="h-12 w-auto object-contain" />
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-300">
              {SOCIALS.map(([label]) => (
                <a key={label} href="#" className="hover:text-[#18c4ff] transition-colors">
                  {label}
                </a>
              ))}
            </div>
            <div className="text-xs text-gray-400">
              © 2026 Empire AE. All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
