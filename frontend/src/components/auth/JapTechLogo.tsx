import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function JaptechLogo({ isReady }: { isReady: boolean }) {
  const [showComponent, setShowComponent] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isReady) {
      setTimeout(() => {
        setStartAnimation(true);
      }, 1000); // Start animation 1 second after content is ready

      setTimeout(() => {
        setShowComponent(false);
      }, 2000); // Remove component after animation
    }
  }, [isReady]);

  if (!showComponent) return null; // Completely remove component from DOM

  return (
    <div
      className="bg-black d-flex justify-content-center align-items-center overflow-hidden position-fixed w-100 h-100"
      style={{ minHeight: "100vh", zIndex: "99" }}
    >
      <motion.div
        className="fw-bold text-uppercase"
        style={{
          fontSize: "20vw",
          whiteSpace: "nowrap",
          mixBlendMode: "difference", // Makes text transparent
          color: "#0000ff", // Starts as blue
          transformOrigin: "center center", // Ensures scaling happens from the middle
        }}
        initial={{ scale: 1 }}
        animate={
          startAnimation
            ? {
                scale: [1, 25, 50],
                color: ["#0000ff", "#ffffff"],
                opacity: [1, 1, 0], // Keeps text visible while blending
              }
            : {}
        }
        transition={startAnimation ? { duration: 5, ease: "linear" } : {}}
      >
        JAPTECH
      </motion.div>
    </div>
  );
}
