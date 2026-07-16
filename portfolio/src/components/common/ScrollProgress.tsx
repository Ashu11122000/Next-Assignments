
"use client";

/* =============================================================================
   Portfolio Common Component
   -----------------------------------------------------------------------------
   File: src/components/common/ScrollProgress.tsx

   Production-ready scroll progress indicator.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ Framer Motion
   ✓ GPU accelerated
   ✓ Lightweight
   ✓ Accessible
   ✓ No event listeners
   ✓ Spring animation
============================================================================= */

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-9999 h-1 origin-left bg-linear-to-r from-cyan-500 via-blue-500 to-violet-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]"
      style={{
        scaleX,
      }}
    />
  );
}