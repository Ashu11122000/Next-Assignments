"use client";

/* =============================================================================
   Portfolio Common Component
   -----------------------------------------------------------------------------
   File: src/components/common/BackToTop.tsx

   Production-ready Back To Top button.

   Features
   -----------------------------------------------------------------------------
   ✓ React 19
   ✓ Next.js 16
   ✓ Framer Motion
   ✓ Scroll threshold
   ✓ Smooth scroll
   ✓ Accessible
   ✓ GPU accelerated
   ✓ Auto hide/show
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
            scale: 0.8,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            type="button"
            variant="gradient"
            size="icon"
            aria-label="Back to top"
            onClick={scrollToTop}
            className="shadow-xl shadow-cyan-500/20"
          >
            <HiArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}