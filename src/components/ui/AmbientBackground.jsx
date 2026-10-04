import { motion } from "framer-motion";

function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* =====================================================
          BASE BACKGROUND
      ===================================================== */}
      <div
        className="absolute inset-0"
        style={{
          background: "var(--bg-main)",
          transition: "background 0.5s ease",
        }}
      />

      {/* =====================================================
          PRIMARY ACCENT GLOW
      ===================================================== */}
      <motion.div
        animate={{
          x: ["-4%", "4%", "-4%"],
          y: ["0%", "4%", "0%"],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[5%] top-[10%] h-[30rem] w-[30rem] rounded-full blur-[120px]"
        style={{
          background: "var(--accent)",
          opacity: "var(--glow-opacity)",
        }}
      />

      {/* =====================================================
          SECONDARY ACCENT GLOW
      ===================================================== */}
      <motion.div
        animate={{
          x: ["4%", "-4%", "4%"],
          y: ["-2%", "5%", "-2%"],
          scale: [1.02, 0.96, 1.02],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[5%] right-[-5%] h-[28rem] w-[28rem] rounded-full blur-[120px]"
        style={{
          background: "var(--accent)",
          opacity: "var(--glow-opacity-secondary)",
        }}
      />

      {/* =====================================================
          GRID
      ===================================================== */}
      <div
        className="absolute inset-0"
        style={{
          opacity: "var(--grid-opacity)",
          backgroundImage: `
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(circle at center, black 10%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 10%, transparent 82%)",
        }}
      />

      {/* =====================================================
          VIGNETTE
      ===================================================== */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 20%, var(--vignette) 100%)",
        }}
      />
    </div>
  );
}

export default AmbientBackground;