"use client";

/* =============================================================================
   Portfolio Common Component
   -----------------------------------------------------------------------------
   File: src/components/common/ScrollProgress.tsx

   Ultra Premium Scroll Progress Indicator.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ Framer Motion
   ✓ Spring Animation
   ✓ Premium Gradient
   ✓ GPU Accelerated
   ✓ Lightweight
   ✓ Accessible
============================================================================= */

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.35,
    restDelta: 0.0005,
  });

  return (
    <>
      {/* Ambient Glow */}
      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-x-0
          top-0
          z-[9998]

          h-[6px]

          origin-left

          bg-gradient-to-r
          from-cyan-400/20
          via-blue-500/20
          to-violet-500/20

          blur-md
        "
        style={{
          scaleX,
        }}
      />

      {/* Main Progress */}
      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none

          fixed
          inset-x-0
          top-0

          z-[9999]

          h-[3px]

          origin-left

          overflow-hidden

          bg-gradient-to-r

          from-cyan-400
          via-blue-500
          to-violet-500

          shadow-[0_0_18px_rgba(59,130,246,.45)]
        "
        style={{
          scaleX,
        }}
      >
        {/* Glass Highlight */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-b

            from-white/35

            via-transparent

            to-transparent
          "
        />
      </motion.div>
    </>
  );
}