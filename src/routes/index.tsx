import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

// ─── Real data from KADHIRAVANEG GitHub profile ───────────────────────────────
const profile = {
  name: "KADHIRAVAN E.G",
  alias: "JOKER53",
  folio: "W 0001 / 2026",
  location: "COIMBATORE · TN",
  status: "B.E. CYBER SECURITY · Y2",
  cgpa: "CGPA 8.6",
  company: "XARROWAI INDUSTRIES",
  bio: "Cybersecurity engineering student building secure, efficient software — from Wazuh SIEM pipelines to Dockerised compilers and OAuth attack simulations.",
  subtext: "This site is a manuscript, not a brochure. Read it slowly.",
  github: "https://github.com/KADHIRAVANEG",
  linkedin: "https://linkedin.com/in/kadhiravan-e-g-028818327",
  email: "kadhiravanegk@gmail.com",
  instagram: "https://www.instagram.com/__kadhiravan__",
  tryhackme: "https://tryhackme.com/r/p/JOKER53",
  website: "http://joker53.me/",
  available: true,
};

const ticker = [
  "CYBER SECURITY · B.E",
  "SECURE CODING",
  "WAZUH · SIEM",
  "DEVSECOPS",
  "DOCKER · CI/CD",
  "C · C++ · PYTHON · JAVA · JS",
  "OAUTH SIMULATION",
  "LINUX HARDENING",
  "CTF · JOKER53",
  "TANSTACK START",
  "BUG BOUNTY HUNTING",
  "PENETRATION TESTING",
  "I USE ARCH BTW",
];

const disciplines = [
  {
    code: "01",
    title: "CYBERSECURITY",
    sub: "Offensive & Defensive",
    items: [
      "Network Penetration Testing",
      "Wazuh SIEM Pipelines",
      "OAuth Attack Simulation",
      "Linux Hardening",
      "Bug Bounty Hunting",
      "CTF Competitions (JOKER53)",
    ],
    tag: "CLASSIFIED",
  },
  {
    code: "02",
    title: "FULL STACK DEV",
    sub: "Web Engineering",
    items: [
      "React 19 + TypeScript",
      "TanStack Start (SSR)",
      "Tailwind CSS v4",
      "Node.js + Express",
      "HTML5 · JavaScript",
    ],
    tag: "ACTIVE",
  },
  {
    code: "03",
    title: "DEVOPS & CLOUD",
    sub: "Infrastructure",
    items: [
      "Docker + CI/CD",
      "GitHub Actions",
      "Vercel · Render",
      "Google Cloud Platform",
      "Shell Scripting",
    ],
    tag: "OPERATIONAL",
  },
  {
    code: "04",
    title: "LINUX & SYSTEMS",
    sub: "System Customization",
    items: [
      "Arch Linux (daily driver)",
      "SDDM Theme Collection",
      "GRUB2 Bootloader Themes",
      "KDE / Hyprland Ricing",
      "QML Development",
    ],
    tag: "OPEN SOURCE",
  },
];

const flagship = [
  {
    id: "F-001",
    title: "INTELLIGENT COMPILER",
    classification: "PUBLIC · OPEN SOURCE",
    description:
      "A modern web-based intelligent compiler with AI-powered error detection and fixing capabilities. Built with HTML and modern web technologies.",
    stack: ["HTML", "JavaScript", "AI", "Web"],
    github: "https://github.com/KADHIRAVANEG/IntelligentCompiler",
    live: "",
  },
  {
    id: "F-002",
    title: "PORTFOLIO TEMPLATE",
    classification: "PUBLIC · OPEN SOURCE",
    description:
      "A fully-typed developer portfolio template built with React 19, TanStack Start, Tailwind CSS v4, and shadcn/ui. SSR-ready. Deployable to Vercel in minutes.",
    stack: ["React 19", "TypeScript", "TanStack Start", "Tailwind v4", "Vercel"],
    github: "https://github.com/KADHIRAVANEG/portfolio-template",
    live: "https://portfolio-template-one-delta.vercel.app/",
  },
  {
    id: "F-003",
    title: "SDDM THEME COLLECTION",
    classification: "PUBLIC · OPEN SOURCE",
    description:
      "QML-based SDDM lockscreen themes for Linux desktops. Clean, minimal, and easy to install. Showcased on GitHub Pages.",
    stack: ["QML", "Linux", "Shell Script", "GitHub Pages"],
    github: "https://github.com/KADHIRAVANEG",
    live: "",
  },
  {
    id: "F-004",
    title: "GRUB2 THEME COLLECTION",
    classification: "PUBLIC · OPEN SOURCE",
    description:
      "A GRUB2 bootloader theme collection with automated installer scripts. Quality-reviewed and cross-distro compatible.",
    stack: ["Shell Script", "GRUB2", "Linux"],
    github: "https://github.com/KADHIRAVANEG",
    live: "",
  },
  {
    id: "F-005",
    title: "XARROWAI SYSTEM UX",
    classification: "RESTRICTED · PROPRIETARY",
    description:
      "System-level UX engineering for AI-powered products at XarrowAI Industries. Focused on performance, accessibility, and seamless user experiences.",
    stack: ["React", "TypeScript", "UX Engineering", "AI"],
    github: "",
    live: "",
  },
];

const channels = [
  { label: "EMAIL", value: "kadhiravanegk@gmail.com", href: `mailto:kadhiravanegk@gmail.com`, icon: "✉" },
  { label: "GITHUB", value: "KADHIRAVANEG", href: "https://github.com/KADHIRAVANEG", icon: "◈" },
  { label: "LINKEDIN", value: "kadhiravan-e-g", href: "https://linkedin.com/in/kadhiravan-e-g-028818327", icon: "◉" },
  { label: "TRYHACKME", value: "JOKER53", href: "https://tryhackme.com/r/p/JOKER53", icon: "⬡" },
  { label: "INSTAGRAM", value: "__kadhiravan__", href: "https://www.instagram.com/__kadhiravan__", icon: "◎" },
  { label: "WEBSITE", value: "joker53.me", href: "http://joker53.me/", icon: "◌" },
];

const exploring = [
  "Advanced Penetration Testing",
  "Web Application Security",
  "Cloud Security & DevSecOps",
  "Bug Bounty Hunting",
];
// ─────────────────────────────────────────────────────────────────────────────

const C = {
  paper: "#F2EFE6",
  ink: "#1A1A1A",
  yellow: "#F5C800",
  red: "#CC2200",
  muted: "#6B6B5E",
  border: "#C8C4B0",
};

function Ticker() {
  const items = [...ticker, ...ticker, ...ticker];
  return (
    <div style={{ background: C.ink, overflow: "hidden", borderTop: `3px solid ${C.yellow}`, borderBottom: `3px solid ${C.yellow}`, padding: "10px 0" }}>
      <div style={{ display: "flex", gap: "0", animation: "marquee 32s linear infinite", width: "max-content" }}>
        {items.map((item, i) => (
          <span key={i} style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.85rem", color: C.paper, letterSpacing: "0.08em", whiteSpace: "nowrap", padding: "0 2rem" }}>
            {item} <span style={{ color: C.yellow }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => setTime(new Date().toISOString().slice(11, 19) + " UTC");
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <nav style={{ background: C.paper, borderBottom: `2px solid ${C.ink}`, padding: "0 2.5rem", height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div style={{ background: C.yellow, border: `2px solid ${C.ink}`, padding: "4px 10px" }}>
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.78rem", color: C.ink, letterSpacing: "0.08em" }}>FILE #01</span>
        </div>
        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "0.82rem", color: C.ink, letterSpacing: "0.06em" }}>SUBJECT: KADHIRAVAN E.G</span>
      </div>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["MANIFESTO", "DOSSIER", "DISCIPLINES", "FLAGSHIP", "CHANNELS"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "0.75rem", color: C.ink, textDecoration: "none", letterSpacing: "0.08em", transition: "color 0.15s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.red)}
            onMouseLeave={(e) => (e.currentTarget.style.color = C.ink)}>
            {l}
          </a>
        ))}
      </div>
      <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "0.75rem", color: C.muted, letterSpacing: "0.06em" }}>{time}</span>
    </nav>
  );
}

function Hero() {
  return (
    <section id="manifesto" style={{ background: C.paper, minHeight: "calc(100vh - 56px)", display: "grid", gridTemplateColumns: "220px 1fr 200px", borderBottom: `2px solid ${C.ink}` }}>
      {/* Left sidebar */}
      <div style={{ borderRight: `2px solid ${C.ink}`, padding: "3rem 1.75rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
        {[
          { label: "FOLIO", value: profile.folio },
          { label: "ISSUED", value: profile.location },
          { label: "STATUS", value: profile.status },
        ].map((row) => (
          <div key={row.label}>
            <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.68rem", fontWeight: 700, color: C.muted, letterSpacing: "0.12em", marginBottom: "0.3rem" }}>{row.label}</p>
            <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.82rem", fontWeight: 700, color: C.ink, letterSpacing: "0.04em" }}>{row.value}</p>
          </div>
        ))}
        <div>
          <div style={{ display: "inline-block", background: C.yellow, border: `2px solid ${C.ink}`, padding: "5px 12px" }}>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.78rem", color: C.ink, letterSpacing: "0.08em" }}>{profile.cgpa}</span>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: "1.5rem" }}>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.68rem", fontWeight: 700, color: C.muted, letterSpacing: "0.12em", marginBottom: "0.75rem" }}>CURRENTLY EXPLORING</p>
          {exploring.map((item) => (
            <p key={item} style={{ fontFamily: "Georgia,serif", fontSize: "0.78rem", color: C.ink, lineHeight: 1.6, marginBottom: "0.25rem" }}>— {item}</p>
          ))}
        </div>
        {profile.available && (
          <div style={{ marginTop: "auto" }}>
            <div style={{ background: C.ink, padding: "8px 12px" }}>
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.7rem", color: C.yellow, letterSpacing: "0.1em" }}>● OPEN TO WORK</p>
            </div>
          </div>
        )}
      </div>

      {/* Main */}
      <div style={{ padding: "2.5rem 3rem", position: "relative", borderRight: `2px solid ${C.ink}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <div style={{ background: C.yellow, border: `2px solid ${C.ink}`, padding: "4px 12px" }}>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.75rem", color: C.ink, letterSpacing: "0.08em" }}>CLASSIFIED FIELD JOURNAL</span>
          </div>
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "0.75rem", color: C.muted, letterSpacing: "0.1em" }}>— VOL. I —</span>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "clamp(3.5rem, 9vw, 7.5rem)", color: C.ink, lineHeight: 0.9, letterSpacing: "-0.04em", textTransform: "uppercase" }}>
            {profile.name}
          </h1>
          <div style={{ display: "inline-block", background: C.yellow, border: `2px solid ${C.ink}`, padding: "4px 14px", marginTop: "1rem" }}>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.82rem", color: C.ink, letterSpacing: "0.1em" }}>ALIAS: {profile.alias}</span>
          </div>
        </div>

        <div style={{ maxWidth: "580px", marginBottom: "2.5rem" }}>
          <p style={{ fontFamily: "Georgia,serif", fontSize: "1.1rem", color: C.ink, lineHeight: 1.75, marginBottom: "0.75rem" }}>
            Cybersecurity engineering student building{" "}
            <span style={{ background: C.ink, color: C.paper, padding: "1px 6px" }}>secure, efficient software</span>{" "}
            — from Wazuh SIEM pipelines to Dockerised compilers and OAuth attack simulations.
          </p>
          <p style={{ fontFamily: "Georgia,serif", fontSize: "0.88rem", color: C.muted, lineHeight: 1.6 }}>{profile.subtext}</p>
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href={`mailto:${profile.email}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: C.ink, color: C.paper, padding: "0.85rem 1.75rem", textDecoration: "none", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.08em", border: `2px solid ${C.ink}`, transition: "all 0.15s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = C.yellow; e.currentTarget.style.color = C.ink; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = C.ink; e.currentTarget.style.color = C.paper; }}>
            READ THE DOSSIER →
          </a>
          <a href="#channels" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: C.ink, padding: "0.85rem 1.75rem", textDecoration: "none", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.08em", border: `2px solid ${C.ink}`, transition: "all 0.15s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = C.ink; e.currentTarget.style.color = C.paper; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.ink; }}>
            OPEN A CHANNEL
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "transparent", color: C.muted, padding: "0.85rem 1.75rem", textDecoration: "none", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.08em", border: `2px solid ${C.border}`, transition: "all 0.15s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.ink; e.currentTarget.style.color = C.ink; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.muted; }}>
            GITHUB ↗
          </a>
        </div>
      </div>

      {/* Right stamp */}
      <div style={{ padding: "2rem 1.5rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
        <div style={{ border: `3px solid ${C.red}`, padding: "1rem 1.25rem", transform: "rotate(3deg)", textAlign: "center" }}>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "1.1rem", color: C.red, letterSpacing: "0.04em", lineHeight: 1.1 }}>DO NOT<br />DUPLICATE</p>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.62rem", color: C.red, marginTop: "0.5rem", letterSpacing: "0.06em" }}>KADHIRAVAN E.G · 2026</p>
        </div>
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: "1.25rem", width: "100%" }}>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.62rem", color: C.muted, letterSpacing: "0.06em", lineHeight: 1.7 }}>
            THIS DOCUMENT IS<br />
            SELF-ISSUED AND<br />
            UNDERWRITTEN BY ANY<br />
            AUTHORITY OTHER THAN<br />
            THE SUBJECT HIMSELF.
          </p>
        </div>
        <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: "1rem", width: "100%" }}>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.65rem", color: C.muted, letterSpacing: "0.08em", marginBottom: "0.4rem" }}>16 REPOSITORIES</p>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.65rem", color: C.muted, letterSpacing: "0.08em", marginBottom: "0.4rem" }}>3 FOLLOWERS</p>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.65rem", color: C.muted, letterSpacing: "0.08em", marginBottom: "0.8rem" }}>I USE ARCH BTW</p>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.65rem", color: C.muted, letterSpacing: "0.08em", marginBottom: "0.25rem" }}>AFFILIATED</p>
          <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.72rem", fontWeight: 700, color: C.ink, letterSpacing: "0.04em" }}>{profile.company}</p>
        </div>
      </div>
    </section>
  );
}

function Dossier() {
  const skills = [
    { label: "LANGUAGES", value: "C · C++ · Python · Java · JavaScript · TypeScript · Shell" },
    { label: "SECURITY", value: "Wazuh SIEM · Penetration Testing · OAuth Simulation · OSINT · Bug Bounty" },
    { label: "WEB STACK", value: "React 19 · TanStack Start · Tailwind v4 · Node.js · HTML5" },
    { label: "DEVOPS & CLOUD", value: "Docker · GitHub Actions · Vercel · Render · Google Cloud · CI/CD" },
    { label: "SYSTEMS", value: "Arch Linux · Hyprland · KDE · GRUB2 · QML · Shell Scripting" },
    { label: "PLATFORMS", value: "TryHackMe (JOKER53) · GitHub · Vercel · Render · Google Cloud" },
  ];

  return (
    <section id="dossier" style={{ background: C.paper, borderBottom: `2px solid ${C.ink}` }}>
      <div style={{ borderBottom: `2px solid ${C.ink}`, padding: "1.5rem 2.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.7rem", color: C.muted, letterSpacing: "0.12em" }}>§ 02</span>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "1.1rem", color: C.ink, letterSpacing: "0.08em" }}>DOSSIER — SUBJECT CAPABILITIES</h2>
        <div style={{ marginLeft: "auto", background: C.yellow, border: `2px solid ${C.ink}`, padding: "3px 10px" }}>
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.68rem", color: C.ink, letterSpacing: "0.08em" }}>VERIFIED</span>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {skills.map((s, i) => (
          <div key={s.label} style={{ padding: "1.75rem 2.5rem", borderBottom: `1px solid ${C.border}`, borderRight: i % 2 === 0 ? `1px solid ${C.border}` : "none" }}>
            <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.68rem", color: C.muted, letterSpacing: "0.12em", marginBottom: "0.5rem" }}>{s.label}</p>
            <p style={{ fontFamily: "Georgia,serif", fontSize: "0.95rem", color: C.ink, lineHeight: 1.6 }}>{s.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Disciplines() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="disciplines" style={{ background: C.paper, borderBottom: `2px solid ${C.ink}` }}>
      <div style={{ borderBottom: `2px solid ${C.ink}`, padding: "1.5rem 2.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.7rem", color: C.muted, letterSpacing: "0.12em" }}>§ 03</span>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "1.1rem", color: C.ink, letterSpacing: "0.08em" }}>DISCIPLINES — AREAS OF OPERATION</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {disciplines.map((d, i) => (
          <div key={d.code} onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)}
            style={{ padding: "2.5rem", borderBottom: `1px solid ${C.border}`, borderRight: i % 2 === 0 ? `1px solid ${C.border}` : "none", background: active === i ? C.ink : "transparent", transition: "background 0.2s", cursor: "default" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.7rem", color: active === i ? C.yellow : C.muted, letterSpacing: "0.12em" }}>{d.code}</span>
              <div style={{ background: active === i ? C.yellow : C.ink, border: `2px solid ${active === i ? C.yellow : C.ink}`, padding: "3px 10px" }}>
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.62rem", color: active === i ? C.ink : C.paper, letterSpacing: "0.1em" }}>{d.tag}</span>
              </div>
            </div>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "1.6rem", color: active === i ? C.paper : C.ink, letterSpacing: "-0.02em", marginBottom: "0.25rem" }}>{d.title}</h3>
            <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.78rem", color: active === i ? C.yellow : C.muted, letterSpacing: "0.08em", marginBottom: "1.25rem" }}>{d.sub}</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {d.items.map((item) => (
                <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: active === i ? C.yellow : C.muted, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.7rem", paddingTop: "3px", flexShrink: 0 }}>—</span>
                  <span style={{ fontFamily: "Georgia,serif", fontSize: "0.88rem", color: active === i ? "#E8E5DC" : C.ink, lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Flagship() {
  return (
    <section id="flagship" style={{ background: C.paper, borderBottom: `2px solid ${C.ink}` }}>
      <div style={{ borderBottom: `2px solid ${C.ink}`, padding: "1.5rem 2.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.7rem", color: C.muted, letterSpacing: "0.12em" }}>§ 04</span>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "1.1rem", color: C.ink, letterSpacing: "0.08em" }}>FLAGSHIP — NOTABLE OPERATIONS</h2>
        <div style={{ marginLeft: "auto", background: C.ink, border: `2px solid ${C.ink}`, padding: "3px 10px" }}>
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.68rem", color: C.paper, letterSpacing: "0.08em" }}>16 REPOS</span>
        </div>
      </div>
      {flagship.map((p, i) => <FlagshipRow key={p.id} project={p} last={i === flagship.length - 1} />)}
    </section>
  );
}

function FlagshipRow({ project, last }: { project: typeof flagship[0]; last: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ display: "grid", gridTemplateColumns: "100px 1fr auto", borderBottom: last ? "none" : `1px solid ${C.border}`, background: hovered ? C.ink : "transparent", transition: "background 0.2s" }}>
      <div style={{ borderRight: `1px solid ${hovered ? "rgba(255,255,255,0.1)" : C.border}`, padding: "2rem 1.5rem" }}>
        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.72rem", color: hovered ? C.yellow : C.muted, letterSpacing: "0.1em" }}>{project.id}</span>
      </div>
      <div style={{ padding: "2rem 2.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "1.1rem", color: hovered ? C.paper : C.ink, letterSpacing: "0.04em" }}>{project.title}</h3>
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "0.62rem", color: hovered ? C.yellow : C.muted, letterSpacing: "0.1em" }}>{project.classification}</span>
        </div>
        <p style={{ fontFamily: "Georgia,serif", fontSize: "0.9rem", color: hovered ? "#C8C4B0" : C.muted, lineHeight: 1.65, marginBottom: "1rem", maxWidth: "640px" }}>{project.description}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {project.stack.map((s) => (
            <span key={s} style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "0.68rem", color: hovered ? C.paper : C.ink, letterSpacing: "0.08em", border: `1px solid ${hovered ? "rgba(255,255,255,0.2)" : C.border}`, padding: "3px 10px" }}>{s}</span>
          ))}
        </div>
      </div>
      <div style={{ padding: "2rem 2rem", display: "flex", flexDirection: "column", gap: "0.5rem", justifyContent: "center" }}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.72rem", color: hovered ? C.yellow : C.ink, textDecoration: "none", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>SOURCE ↗</a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.72rem", color: hovered ? C.yellow : C.muted, textDecoration: "none", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>LIVE ↗</a>
        )}
        {!project.github && !project.live && (
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.68rem", color: hovered ? "rgba(255,255,255,0.3)" : C.border, letterSpacing: "0.08em" }}>RESTRICTED</span>
        )}
      </div>
    </div>
  );
}

function Channels() {
  return (
    <section id="channels" style={{ background: C.paper, borderBottom: `2px solid ${C.ink}` }}>
      <div style={{ borderBottom: `2px solid ${C.ink}`, padding: "1.5rem 2.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.7rem", color: C.muted, letterSpacing: "0.12em" }}>§ 05</span>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "1.1rem", color: C.ink, letterSpacing: "0.08em" }}>CHANNELS — OPEN COMMUNICATIONS</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {channels.map((ch, i) => {
          const [hovered, setHovered] = useState(false);
          return (
            <a key={ch.label} href={ch.href} target="_blank" rel="noopener noreferrer"
              onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
              style={{ display: "block", padding: "2.5rem 2rem", borderRight: i % 3 !== 2 ? `1px solid ${C.border}` : "none", borderBottom: i < 3 ? `1px solid ${C.border}` : "none", background: hovered ? C.ink : "transparent", textDecoration: "none", transition: "background 0.2s" }}>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "1.5rem", color: hovered ? C.yellow : C.ink, display: "block", marginBottom: "0.75rem" }}>{ch.icon}</span>
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.68rem", color: hovered ? C.yellow : C.muted, letterSpacing: "0.14em", marginBottom: "0.4rem" }}>{ch.label}</p>
              <p style={{ fontFamily: "Georgia,serif", fontSize: "0.92rem", color: hovered ? C.paper : C.ink, marginBottom: "1.25rem" }}>{ch.value}</p>
              <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "0.72rem", color: hovered ? C.yellow : C.muted, letterSpacing: "0.08em" }}>OPEN CHANNEL →</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: C.ink, padding: "2rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
      <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.75rem", color: C.paper, letterSpacing: "0.08em" }}>KADHIRAVAN E.G · JOKER53 · 2026</span>
      <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: "0.72rem", color: "#555", letterSpacing: "0.08em" }}>BUILT WITH REACT 19 · TANSTACK START · TAILWIND V4</span>
      <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.72rem", color: C.yellow, textDecoration: "none", letterSpacing: "0.08em" }}>USE THIS TEMPLATE ↗</a>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap');
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-33.333%)} }
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${C.paper}; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${C.paper}; }
        ::-webkit-scrollbar-thumb { background: ${C.ink}; }
      `}</style>
      <Navbar />
      <Hero />
      <Ticker />
      <Dossier />
      <Disciplines />
      <Flagship />
      <Channels />
      <Footer />
    </>
  );
}
