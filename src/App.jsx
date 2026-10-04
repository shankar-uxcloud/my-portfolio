import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import Loader from "./components/ui/Loader";
import AmbientBackground from "./components/ui/AmbientBackground";
import CursorGlow from "./components/ui/CursorGlow";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* =====================================================
          CINEMATIC LOADER
      ===================================================== */}
      <AnimatePresence>
        {isLoading && (
          <Loader
            onComplete={() => {
              setIsLoading(false);
            }}
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          GLOBAL BACKGROUND EFFECTS
      ===================================================== */}
      <AmbientBackground />
      <CursorGlow />

      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <Navbar />

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{
            opacity: 0,
            y: 14,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -10,
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-10"
        >
          <AppRoutes />
        </motion.main>
      </AnimatePresence>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <Footer />
    </>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;