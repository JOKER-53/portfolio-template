import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import config from "../config.json";
import { Toaster } from "../components/ui/sonner";
import { toast } from "sonner";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../components/ui/hover-card";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const { profile, ticker, disciplines, flagship, channels, exploring } = config;

// ─────────────────────────────────────────────────────────────────────────────

const C = {
  paper: "var(--c-paper)",
  ink: "var(--c-ink)",
  yellow: "var(--c-yellow)",
  red: "var(--c-red)",
  teal: "var(--c-teal)",
  purple: "var(--c-purple)",
  pink: "var(--c-pink)",
  green: "var(--c-green)",
  muted: "var(--c-muted)",
  border: "var(--c-border)",
};

function Ticker() {
  const items = [...ticker, ...ticker, ...ticker];
  return (
    <div
      style={{
        background: C.ink,
        overflow: "hidden",
        borderTop: `3px solid ${C.yellow}`,
        borderBottom: `3px solid ${C.yellow}`,
        padding: "10px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0",
          animation: "marquee 32s linear infinite",
          width: "max-content",
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 800,
              fontSize: "0.85rem",
              color: C.paper,
              letterSpacing: "0.08em",
              whiteSpace: "nowrap",
              padding: "0 2rem",
            }}
          >
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
    <nav
      style={{
        background: C.paper,
        borderBottom: `3px solid ${C.ink}`,
        padding: "0 2.5rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div
          className="neo-box"
          style={{ background: C.teal, padding: "4px 10px", transform: "rotate(-2deg)" }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 800,
              fontSize: "0.78rem",
              color: C.ink,
              letterSpacing: "0.08em",
            }}
          >
            FILE #01
          </span>
        </div>
        <span
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 800,
            fontSize: "0.9rem",
            color: C.ink,
            letterSpacing: "0.06em",
            paddingLeft: "0.5rem",
          }}
        >
          {profile.name}
        </span>
      </div>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["MANIFESTO", "DOSSIER", "DISCIPLINES", "FLAGSHIP", "CHANNELS"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 700,
              fontSize: "0.75rem",
              color: C.ink,
              textDecoration: "none",
              letterSpacing: "0.08em",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.red)}
            onMouseLeave={(e) => (e.currentTarget.style.color = C.ink)}
          >
            {l}
          </a>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 600,
            fontSize: "0.75rem",
            color: C.muted,
            letterSpacing: "0.06em",
          }}
        >
          {time}
        </span>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="manifesto"
      style={{
        background: C.paper,
        minHeight: "calc(100vh - 56px)",
        display: "grid",
        gridTemplateColumns: "220px 1fr 200px",
        borderBottom: `3px solid ${C.ink}`,
      }}
    >
      {/* Left sidebar */}
      <div
        style={{
          borderRight: `3px solid ${C.ink}`,
          padding: "3rem 1.75rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {[
          { label: "FOLIO", value: profile.folio },
          { label: "ISSUED", value: profile.location },
          { label: "STATUS", value: profile.status },
        ].map((row) => (
          <div key={row.label}>
            <p
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: "0.68rem",
                fontWeight: 700,
                color: C.muted,
                letterSpacing: "0.12em",
                marginBottom: "0.3rem",
              }}
            >
              {row.label}
            </p>
            <p
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: "0.82rem",
                fontWeight: 700,
                color: C.ink,
                letterSpacing: "0.04em",
              }}
            >
              {row.value}
            </p>
          </div>
        ))}
        <div>
          <div
            style={{
              display: "inline-block",
              background: C.yellow,
              border: `3px solid ${C.ink}`,
              padding: "5px 12px",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 800,
                fontSize: "0.78rem",
                color: C.ink,
                letterSpacing: "0.08em",
              }}
            >
              {profile.cgpa}
            </span>
          </div>
        </div>
        <div style={{ borderTop: `3px solid ${C.border}`, paddingTop: "1.5rem" }}>
          <p
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: "0.68rem",
              fontWeight: 700,
              color: C.muted,
              letterSpacing: "0.12em",
              marginBottom: "0.75rem",
            }}
          >
            CURRENTLY EXPLORING
          </p>
          {exploring.map((item) => (
            <p
              key={item}
              style={{
                fontFamily: "Georgia,serif",
                fontSize: "0.78rem",
                color: C.ink,
                lineHeight: 1.6,
                marginBottom: "0.25rem",
              }}
            >
              — {item}
            </p>
          ))}
        </div>
        {profile.available && (
          <div style={{ marginTop: "auto" }}>
            <div style={{ background: C.ink, padding: "8px 12px" }}>
              <p
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 800,
                  fontSize: "0.7rem",
                  color: C.yellow,
                  letterSpacing: "0.1em",
                }}
              >
                ● OPEN TO WORK
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Main */}
      <div
        style={{ padding: "2.5rem 3rem", position: "relative", borderRight: `3px solid ${C.ink}` }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <div style={{ background: C.yellow, border: `3px solid ${C.ink}`, padding: "4px 12px" }}>
            <span
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 800,
                fontSize: "0.75rem",
                color: C.ink,
                letterSpacing: "0.08em",
              }}
            >
              CLASSIFIED FIELD JOURNAL
            </span>
          </div>
          <span
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem",
              color: C.muted,
              letterSpacing: "0.1em",
            }}
          >
            — VOL. I —
          </span>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <h1
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
              color: C.ink,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
            }}
          >
            {profile.name}
          </h1>
          <div
            className="neo-box"
            style={{
              display: "inline-block",
              background: C.yellow,
              padding: "4px 14px",
              marginTop: "1rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 800,
                fontSize: "0.82rem",
                color: C.ink,
                letterSpacing: "0.1em",
              }}
            >
              ALIAS: {profile.alias}
            </span>
          </div>
        </div>

        <div style={{ maxWidth: "580px", marginBottom: "2.5rem" }}>
          <p
            style={{
              fontFamily: "Georgia,serif",
              fontSize: "1.1rem",
              color: C.ink,
              lineHeight: 1.75,
              marginBottom: "0.75rem",
            }}
          >
            Cybersecurity engineering student building{" "}
            <span style={{ background: C.ink, color: C.paper, padding: "1px 6px" }}>
              secure, efficient software
            </span>{" "}
            — from Wazuh SIEM pipelines to Dockerised compilers and OAuth attack simulations.
          </p>
          <p
            style={{
              fontFamily: "Georgia,serif",
              fontSize: "0.88rem",
              color: C.muted,
              lineHeight: 1.6,
            }}
          >
            {profile.subtext}
          </p>
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href={`mailto:${profile.email}`}
            className="neo-box"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: C.purple,
              color: C.ink,
              padding: "0.85rem 1.75rem",
              textDecoration: "none",
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 800,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
            }}
          >
            READ THE DOSSIER →
          </a>
          <a
            href="#channels"
            className="neo-box"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: C.teal,
              color: C.ink,
              padding: "0.85rem 1.75rem",
              textDecoration: "none",
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 800,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
            }}
          >
            OPEN A CHANNEL
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-box"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: C.paper,
              color: C.ink,
              padding: "0.85rem 1.75rem",
              textDecoration: "none",
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 800,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
            }}
          >
            GITHUB ↗
          </a>
        </div>
      </div>

      {/* Right stamp */}
      <div
        style={{
          padding: "2rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <div
          className="neo-box"
          style={{
            background: C.paper,
            border: `3px solid ${C.red}`,
            padding: "1rem 1.25rem",
            transform: "rotate(3deg)",
            textAlign: "center",
            boxShadow: `4px 4px 0px 0px ${C.red}`,
          }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 800,
              fontSize: "1.1rem",
              color: C.red,
              letterSpacing: "0.04em",
              lineHeight: 1.1,
            }}
          >
            DO NOT
            <br />
            DUPLICATE
          </p>
          <p
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: "0.62rem",
              color: C.red,
              marginTop: "0.5rem",
              letterSpacing: "0.06em",
            }}
          >
            KADHIRAVAN E.G · 2026
          </p>
        </div>
        <div style={{ borderTop: `3px solid ${C.border}`, paddingTop: "1.25rem", width: "100%" }}>
          <p
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: "0.62rem",
              color: C.muted,
              letterSpacing: "0.06em",
              lineHeight: 1.7,
            }}
          >
            THIS DOCUMENT IS
            <br />
            SELF-ISSUED AND
            <br />
            UNDERWRITTEN BY ANY
            <br />
            AUTHORITY OTHER THAN
            <br />
            THE SUBJECT HIMSELF.
          </p>
        </div>
        <div style={{ borderTop: `3px solid ${C.border}`, paddingTop: "1rem", width: "100%" }}>
          <p
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: "0.65rem",
              color: C.muted,
              letterSpacing: "0.08em",
              marginBottom: "0.4rem",
            }}
          >
            16 REPOSITORIES
          </p>
          <p
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: "0.65rem",
              color: C.muted,
              letterSpacing: "0.08em",
              marginBottom: "0.4rem",
            }}
          >
            3 FOLLOWERS
          </p>
          <p
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: "0.65rem",
              color: C.muted,
              letterSpacing: "0.08em",
              marginBottom: "0.8rem",
            }}
          >
            I USE ARCH BTW
          </p>
          <p
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: "0.65rem",
              color: C.muted,
              letterSpacing: "0.08em",
              marginBottom: "0.25rem",
            }}
          >
            AFFILIATED
          </p>
          <p
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: "0.72rem",
              fontWeight: 700,
              color: C.ink,
              letterSpacing: "0.04em",
            }}
          >
            {profile.company}
          </p>
        </div>
      </div>
    </section>
  );
}

function Dossier() {
  const skills = [
    { label: "LANGUAGES", value: "C · C++ · Python · Java · JavaScript · TypeScript · Shell" },
    {
      label: "SECURITY",
      value: "Wazuh SIEM · Penetration Testing · OAuth Simulation · OSINT · Bug Bounty",
    },
    { label: "WEB STACK", value: "React 19 · TanStack Start · Tailwind v4 · Node.js · HTML5" },
    {
      label: "DEVOPS & CLOUD",
      value: "Docker · GitHub Actions · Vercel · Render · Google Cloud · CI/CD",
    },
    { label: "SYSTEMS", value: "Arch Linux · Hyprland · KDE · GRUB2 · QML · Shell Scripting" },
    { label: "PLATFORMS", value: "TryHackMe (JOKER53) · GitHub · Vercel · Render · Google Cloud" },
  ];

  return (
    <section id="dossier" style={{ background: C.paper, borderBottom: `3px solid ${C.ink}` }}>
      <div
        style={{
          borderBottom: `3px solid ${C.ink}`,
          padding: "1.5rem 2.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 800,
            fontSize: "0.7rem",
            color: C.muted,
            letterSpacing: "0.12em",
          }}
        >
          § 02
        </span>
        <h2
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 800,
            fontSize: "1.1rem",
            color: C.ink,
            letterSpacing: "0.08em",
          }}
        >
          DOSSIER — SUBJECT CAPABILITIES
        </h2>
        <div
          style={{
            marginLeft: "auto",
            background: C.yellow,
            border: `3px solid ${C.ink}`,
            padding: "3px 10px",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 800,
              fontSize: "0.68rem",
              color: C.ink,
              letterSpacing: "0.08em",
            }}
          >
            VERIFIED
          </span>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {skills.map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: "1.75rem 2.5rem",
              borderBottom: `3px solid ${C.border}`,
              borderRight: i % 2 === 0 ? `3px solid ${C.border}` : "none",
            }}
          >
            <p
              style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 800,
                fontSize: "0.68rem",
                color: C.muted,
                letterSpacing: "0.12em",
                marginBottom: "0.5rem",
              }}
            >
              {s.label}
            </p>
            <p
              style={{
                fontFamily: "Georgia,serif",
                fontSize: "0.95rem",
                color: C.ink,
                lineHeight: 1.6,
              }}
            >
              {s.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Disciplines() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="disciplines" style={{ background: C.paper, borderBottom: `3px solid ${C.ink}` }}>
      <div
        style={{
          borderBottom: `3px solid ${C.ink}`,
          padding: "1.5rem 2.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 800,
            fontSize: "0.7rem",
            color: C.muted,
            letterSpacing: "0.12em",
          }}
        >
          § 03
        </span>
        <h2
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 800,
            fontSize: "1.1rem",
            color: C.ink,
            letterSpacing: "0.08em",
          }}
        >
          DISCIPLINES — AREAS OF OPERATION
        </h2>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", padding: "2.5rem" }}
      >
        {disciplines.map((d, i) => {
          const pastelColors = [C.yellow, C.red, C.teal, C.purple, C.pink, C.green];
          const bgColor = pastelColors[i % pastelColors.length];
          return (
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", bounce: 0.4 } },
              }}
              key={d.code}
              className="neo-box"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                padding: "2.5rem",
                background: active === i ? bgColor : C.paper,
                cursor: "default",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Grotesk',sans-serif",
                    fontWeight: 800,
                    fontSize: "0.8rem",
                    color: C.ink,
                    letterSpacing: "0.12em",
                  }}
                >
                  {d.code}
                </span>
                <div
                  className="neo-pill"
                  style={{
                    background: C.paper,
                    padding: "3px 12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk',sans-serif",
                      fontWeight: 800,
                      fontSize: "0.65rem",
                      color: C.ink,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {d.tag}
                  </span>
                </div>
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 800,
                  fontSize: "1.8rem",
                  color: C.ink,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.25rem",
                }}
              >
                {d.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontSize: "0.8rem",
                  color: C.ink,
                  opacity: 0.8,
                  letterSpacing: "0.08em",
                  marginBottom: "1.5rem",
                }}
              >
                {d.sub}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {d.items.map((item) => (
                  <li
                    key={item}
                    style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}
                  >
                    <span
                      style={{
                        color: C.ink,
                        fontFamily: "'Space Grotesk',sans-serif",
                        fontWeight: 800,
                        fontSize: "0.8rem",
                        paddingTop: "3px",
                        flexShrink: 0,
                      }}
                    >
                      ✦
                    </span>
                    <span
                      style={{
                        fontFamily: "Georgia,serif",
                        fontSize: "0.95rem",
                        color: C.ink,
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

function Flagship() {
  return (
    <section id="flagship" style={{ background: C.paper, borderBottom: `3px solid ${C.ink}` }}>
      <div
        style={{
          borderBottom: `3px solid ${C.ink}`,
          padding: "1.5rem 2.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 800,
            fontSize: "0.7rem",
            color: C.muted,
            letterSpacing: "0.12em",
          }}
        >
          § 04
        </span>
        <h2
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 800,
            fontSize: "1.1rem",
            color: C.ink,
            letterSpacing: "0.08em",
          }}
        >
          FLAGSHIP — NOTABLE OPERATIONS
        </h2>
        <div
          style={{
            marginLeft: "auto",
            background: C.ink,
            border: `3px solid ${C.ink}`,
            padding: "3px 10px",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 800,
              fontSize: "0.68rem",
              color: C.paper,
              letterSpacing: "0.08em",
            }}
          >
            16 REPOS
          </span>
        </div>
      </div>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        style={{ display: "flex", flexDirection: "column", gap: "2rem", padding: "2.5rem" }}
      >
        {flagship.map((p, i) => (
          <FlagshipRow key={p.id} project={p} index={i} />
        ))}
      </motion.div>
    </section>
  );
}

function FlagshipRow({ project, index }: { project: (typeof flagship)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const pastelColors = [C.pink, C.yellow, C.teal, C.purple, C.green, C.red];
  const bgColor = pastelColors[index % pastelColors.length];
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3 } },
      }}
      whileHover={{ scale: 1.015, rotate: index % 2 === 0 ? 0.5 : -0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="neo-box"
      style={{
        display: "flex",
        flexDirection: "column",
        background: hovered ? bgColor : C.paper,
      }}
    >
      {/* Header bar */}
      <div
        style={{
          borderBottom: `3px solid ${C.ink}`,
          padding: "1rem 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: C.ink,
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 800,
            fontSize: "0.72rem",
            color: C.paper,
            letterSpacing: "0.1em",
          }}
        >
          {project.id}
        </span>
        <span
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 700,
            fontSize: "0.62rem",
            color: C.yellow,
            letterSpacing: "0.1em",
          }}
        >
          {project.classification}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "2rem 1.5rem" }}>
        <h3
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 800,
            fontSize: "1.4rem",
            color: C.ink,
            letterSpacing: "0.04em",
            marginBottom: "0.75rem",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "Georgia,serif",
            fontSize: "0.95rem",
            color: C.ink,
            lineHeight: 1.65,
            marginBottom: "1.5rem",
            opacity: 0.9,
          }}
        >
          {project.description}
        </p>

        {/* Stack tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {project.stack.map((s) => (
            <HoverCard key={s}>
              <HoverCardTrigger>
                <div
                  className="neo-pill"
                  style={{
                    background: C.paper,
                    padding: "4px 12px",
                    cursor: "help",
                    display: "inline-block",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk',sans-serif",
                      fontWeight: 700,
                      fontSize: "0.68rem",
                      color: C.ink,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {s}
                  </span>
                </div>
              </HoverCardTrigger>
              <HoverCardContent
                className="neo-box"
                style={{
                  background: C.paper,
                  color: C.ink,
                  fontFamily: "'Space Grotesk', sans-serif",
                  borderRadius: "8px",
                }}
              >
                <p
                  style={{
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    marginBottom: "0.25rem",
                    color: C.ink,
                  }}
                >
                  {s}
                </p>
                <p style={{ fontSize: "0.75rem", color: C.muted, opacity: 0.8 }}>
                  Core operational technology. Refer to technical appendices for implementation details.
                </p>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
      {/* Footer / Action */}
      <div
        style={{
          marginTop: "auto",
          borderTop: `3px solid ${C.ink}`,
          display: "flex",
        }}
      >
        <a
          href={project.github || project.live || "#"}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            padding: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textDecoration: "none",
            color: C.ink,
            background: hovered ? "rgba(255,255,255,0.4)" : "transparent",
            transition: "background 0.2s",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontWeight: 800,
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
            }}
          >
            EXECUTE OPERATION
          </span>
          <span style={{ fontSize: "1.2rem", fontWeight: 900 }}>↗</span>
        </a>
      </div>
    </motion.div>
  );
}

function Channels() {
  return (
    <section id="channels" style={{ background: C.paper, borderBottom: `3px solid ${C.ink}` }}>
      <div
        style={{
          borderBottom: `3px solid ${C.ink}`,
          padding: "1.5rem 2.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 800,
            fontSize: "0.7rem",
            color: C.muted,
            letterSpacing: "0.12em",
          }}
        >
          § 05
        </span>
        <h2
          style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 800,
            fontSize: "1.1rem",
            color: C.ink,
            letterSpacing: "0.08em",
          }}
        >
          CHANNELS — OPEN COMMUNICATIONS
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
          padding: "2.5rem",
        }}
      >
        {channels.map((ch, i) => {
          const [hovered, setHovered] = useState(false);
          const pastelColors = [C.purple, C.pink, C.yellow, C.teal, C.red, C.green];
          const bgColor = pastelColors[i % pastelColors.length];
          return (
            <a
              key={ch.label}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-box"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                display: "block",
                padding: "2.5rem 2rem",
                background: hovered ? bgColor : C.paper,
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  color: C.ink,
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                {ch.icon}
              </span>
              <p
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 800,
                  fontSize: "0.68rem",
                  color: C.ink,
                  letterSpacing: "0.14em",
                  marginBottom: "0.4rem",
                }}
              >
                {ch.label}
              </p>
              <p
                style={{
                  fontFamily: "Georgia,serif",
                  fontSize: "0.92rem",
                  color: C.ink,
                  marginBottom: "1.25rem",
                }}
              >
                {ch.value}
              </p>
              <p
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 700,
                  fontSize: "0.72rem",
                  color: C.ink,
                  letterSpacing: "0.08em",
                }}
              >
                OPEN CHANNEL →
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: C.ink,
        padding: "2rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <span
        style={{
          fontFamily: "'Space Grotesk',sans-serif",
          fontWeight: 800,
          fontSize: "0.75rem",
          color: C.paper,
          letterSpacing: "0.08em",
        }}
      >
        KADHIRAVAN E.G · JOKER53 · 2026
      </span>
      <span
        style={{
          fontFamily: "'Space Grotesk',sans-serif",
          fontWeight: 600,
          fontSize: "0.72rem",
          color: "#555",
          letterSpacing: "0.08em",
        }}
      >
        BUILT WITH REACT 19 · TANSTACK START · TAILWIND V4
      </span>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "'Space Grotesk',sans-serif",
          fontWeight: 800,
          fontSize: "0.72rem",
          color: C.yellow,
          textDecoration: "none",
          letterSpacing: "0.08em",
        }}
      >
        USE THIS TEMPLATE ↗
      </a>
    </footer>
  );
}

function HomePage() {
  useEffect(() => {
    // Show toast after a slight delay to mimic boot sequence
    const timer = setTimeout(() => {
      toast.success("ACCESS GRANTED", {
        description: "Welcome to the Dossier. Decryption successful.",
        style: {
          background: "var(--c-ink)",
          color: "var(--c-paper)",
          border: "3px solid var(--c-yellow)",
          fontFamily: "'Space Grotesk', sans-serif",
          borderRadius: "0",
        },
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --c-paper: #FFF8E7; /* Warm creamy background */
          --c-ink: #000000;
          --c-yellow: #FFE66D; /* Bright yellow */
          --c-red: #FF6B6B; /* Soft vibrant red/pink */
          --c-teal: #4ECDC4; /* Teal */
          --c-purple: #B19CD9; /* Pastel purple */
          --c-pink: #FF9CEE;
          --c-green: #2ecc71;
          --c-muted: #444444;
          --c-border: #000000;
        }
        
        /* Neo-brutalist utilities */
        .neo-box {
          border: 3px solid var(--c-ink);
          border-radius: 8px;
          box-shadow: 5px 5px 0px 0px var(--c-ink);
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .neo-box:hover {
          transform: translate(-2px, -2px);
          box-shadow: 7px 7px 0px 0px var(--c-ink);
        }
        .neo-pill {
          border: 3px solid var(--c-ink);
          border-radius: 9999px;
          box-shadow: 3px 3px 0px 0px var(--c-ink);
        }
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap');
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-33.333%)} }
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; margin: 0; padding: 0; transition: background-color 0.3s, border-color 0.3s, color 0.3s; }
        body { background: var(--c-paper); color: var(--c-ink); }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--c-paper); }
        ::-webkit-scrollbar-thumb { background: var(--c-ink); }
      `}</style>
      <Navbar />
      <Hero />
      <Ticker />
      <Dossier />
      <Disciplines />
      <Flagship />
      <Channels />
      <Footer />
      <Toaster position="bottom-right" />
    </>
  );
}
