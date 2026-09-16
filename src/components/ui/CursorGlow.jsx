import { useEffect, useRef } from "react";

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");

    if (!media.matches) {
      return undefined;
    }

    const node = glowRef.current;
    if (!node) {
      return undefined;
    }

    const handleMove = (event) => {
      node.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      node.style.opacity = "1";
    };

    const handleLeave = () => {
      node.style.opacity = "0";
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.045] opacity-0 blur-[70px] transition-opacity duration-300 lg:block"
      aria-hidden="true"
    />
  );
}

export default CursorGlow;