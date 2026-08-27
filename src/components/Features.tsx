import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Command } from "cmdk";
import { toast } from "sonner";
import config from "../config.json";

// --- 1. Custom Cursor ---
import { useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    const updateMousePosition = (e: MouseEvent) => {
      // 8 is half of the 16px width/height to center the cursor
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
      
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .neo-box, .neo-pill, [role='button']")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 16,
        height: 16,
        borderRadius: "50%",
        backgroundColor: "var(--c-ink)",
        pointerEvents: "none",
        zIndex: 99999,
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
}

// --- 2. Draggable Stickers ---
export function Stickers() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 50 }}>
      {/* Top Secret Badge */}
      <motion.div
        drag
        dragConstraints={{ left: 0, right: window.innerWidth - 150, top: 0, bottom: window.innerHeight - 150 }}
        whileDrag={{ scale: 1.1, rotate: 5, cursor: "grabbing" }}
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          pointerEvents: "auto",
          cursor: "grab",
          background: "var(--c-red)",
          border: "3px solid var(--c-ink)",
          padding: "10px 15px",
          transform: "rotate(12deg)",
          boxShadow: "4px 4px 0px var(--c-ink)",
        }}
      >
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "1.2rem", color: "var(--c-ink)" }}>
          TOP SECRET
        </span>
      </motion.div>

    </div>
  );
}

// --- 4. Command Palette (Cmd+K) ---
export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(4px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        style={{ width: "100%", maxWidth: "500px", padding: "1rem" }}
      >
        <Command
          className="neo-box"
          style={{
            background: "var(--c-paper)",
            overflow: "hidden",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ padding: "1rem", borderBottom: "3px solid var(--c-ink)", background: "var(--c-teal)", display: "flex", alignItems: "center" }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>TERMINAL // DOSSIER</span>
          </div>
          <Command.Input
            autoFocus
            placeholder="Type a command or search..."
            style={{
              padding: "1.5rem",
              border: "none",
              borderBottom: "3px solid var(--c-ink)",
              outline: "none",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.2rem",
              fontWeight: 600,
              background: "transparent",
              width: "100%",
            }}
          />
          <Command.List style={{ padding: "1rem", maxHeight: "300px", overflow: "auto" }}>
            <Command.Empty style={{ padding: "2rem", textAlign: "center", fontFamily: "'Space Grotesk', sans-serif" }}>
              No results found.
            </Command.Empty>

            <Command.Group heading={<span style={{ color: "var(--c-muted)", fontWeight: 800, fontSize: "0.7rem", letterSpacing: "0.1em" }}>ACTIONS</span>}>
              <Command.Item
                onSelect={() => {
                  window.open("/resume.pdf", "_blank");
                  setOpen(false);
                }}
                style={{
                  padding: "1rem",
                  cursor: "pointer",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  borderBottom: "2px solid rgba(0,0,0,0.1)",
                }}
              >
                📄 Download Resume
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  window.open(config.profile.github, "_blank");
                  setOpen(false);
                }}
                style={{
                  padding: "1rem",
                  cursor: "pointer",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  borderBottom: "2px solid rgba(0,0,0,0.1)",
                }}
              >
                🐙 Open GitHub
              </Command.Item>
              <Command.Item
                onSelect={() => {
                  toast.success("SYSTEM BREACHED", {
                    description: "Just kidding. You found the easter egg.",
                    style: { background: "var(--c-red)", color: "var(--c-ink)", border: "3px solid var(--c-ink)", borderRadius: 0 }
                  });
                  setOpen(false);
                }}
                style={{
                  padding: "1rem",
                  cursor: "pointer",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  color: "var(--c-red)",
                }}
              >
                💥 Self Destruct
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </motion.div>
    </div>
  );
}
