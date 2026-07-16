"use client";

/* =============================================================================
   Portfolio Common Component
   -----------------------------------------------------------------------------
   File: src/components/common/BackToTop.tsx

   Ultra Premium Back To Top Button.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ Framer Motion
   ✓ Premium Glass UI
   ✓ Spring Animation
   ✓ Mobile Responsive
   ✓ Accessible
============================================================================= */

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

import { Button } from "@/components/ui/Button";

const SCROLL_THRESHOLD = 300;

export default function BackToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            y: 32,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: 24,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 18,
          }}
          className="
            fixed
            bottom-5
            right-5
            z-[100]

            sm:bottom-6
            sm:right-6

            lg:bottom-8
            lg:right-8
          "
          style={{
            willChange: "transform",
          }}
        >
          <motion.div
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
            }}
            className="relative"
          >
            {/* Ambient Glow */}
            <div
              aria-hidden
              className="
                absolute
                inset-0

                rounded-2xl

                bg-cyan-400/20

                blur-xl

                animate-pulse
              "
            />

            <Button
              type="button"
              variant="gradient"
              size="icon"
              aria-label="Back to top"
              onClick={scrollToTop}
              className="
                relative

                h-12
                w-12

                rounded-2xl

                border
                border-white/10

                bg-white/[0.06]

                backdrop-blur-2xl

                shadow-[0_20px_50px_rgba(59,130,246,.35)]

                sm:h-13
                sm:w-13
              "
            >
              <motion.div
                whileHover={{
                  y: -1,
                }}
                transition={{
                  duration: 0.15,
                }}
              >
                <HiArrowUp className="h-5 w-5" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}