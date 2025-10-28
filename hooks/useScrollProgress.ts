"use client";

import { useEffect, useState, useRef } from "react";
import type { UseScrollProgressOptions } from "@/lib/types";

export function useScrollProgress(options: UseScrollProgressOptions = {}) {
  const { startOffset = 0, endOffset = 200 } = options;
  const [progress, setProgress] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const calculateProgress = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementHeight = rect.height;
      const currentScroll = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate when animation should start and end
      const animationStart = elementTop - windowHeight + startOffset;
      const animationEnd = elementTop - endOffset;

      if (currentScroll < animationStart) {
        setProgress(0);
      } else if (currentScroll > animationEnd) {
        setProgress(1);
      } else {
        const scrollProgress =
          (currentScroll - animationStart) / (animationEnd - animationStart);
        setProgress(Math.max(0, Math.min(1, scrollProgress)));
      }
    };

    // Only add scroll listeners, don't execute on mount
    window.addEventListener("scroll", calculateProgress, { passive: true });
    window.addEventListener("resize", calculateProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", calculateProgress);
      window.removeEventListener("resize", calculateProgress);
    };
  }, [startOffset, endOffset]);

  return { progress, ref: elementRef };
}
