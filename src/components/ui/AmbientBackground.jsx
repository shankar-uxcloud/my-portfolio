import { motion } from "framer-motion";

function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#020203]" />

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
        className="absolute left-[5%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-emerald-500/[0.035] blur-[120px]"
      />

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
        className="absolute bottom-[5%] right-[-5%] h-[28rem] w-[28rem] rounded-full bg-white/[0.025] blur-[120px]"
      />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(circle at center, black 10%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 10%, transparent 82%)",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.48)_100%)]" />
    </div>
  );
}

export default AmbientBackground;