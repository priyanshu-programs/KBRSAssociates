"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

const words = [
  { text: "To", highlight: false },
  { text: "be", highlight: false },
  { text: "a", highlight: false },
  { text: "trusted", highlight: false },
  { text: "financial", highlight: false },
  { text: "partner", highlight: false },
  { text: "that", highlight: false },
  { text: "combines", highlight: false },
  { text: "global", highlight: true },
  { text: "expertise", highlight: true },
  { text: "with", highlight: false },
  { text: "local", highlight: false },
  { text: "understanding,", highlight: false },
  { text: "empowering", highlight: false },
  { text: "clients", highlight: false },
  { text: "to", highlight: false },
  { text: "achieve", highlight: false },
  { text: "sustainable", highlight: true },
  { text: "growth", highlight: true },
  { text: "through", highlight: false },
  { text: "strategic,", highlight: false },
  { text: "compliant,", highlight: false },
  { text: "and", highlight: false },
  { text: "technology-enabled", highlight: false },
  { text: "financial", highlight: false },
  { text: "solutions.", highlight: false },
];

export default function Vision() {
  const textRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.9", "center 0.4"],
  });

  // Increased stiffness + damping = spring settles faster with fewer iterations per frame.
  // restDelta raised slightly: stops the spring earlier, reducing unnecessary rAF frames.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.003,
  });

  return (
    <section className="py-32 lg:py-48 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-accent block mb-4">
              Our Vision
            </span>
          </motion.div>

          {/* Decorative line that grows in */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-12 h-px bg-brand-accent/40 mx-auto mb-12 origin-left"
          />

          {/* Scroll-driven word-by-word text reveal */}
          <h2
            ref={textRef}
            className="flex flex-wrap justify-center gap-x-[0.25em] gap-y-3 text-3xl sm:text-4xl lg:text-6xl font-heading font-medium leading-[1.35]"
          >
            <motion.span
              className="text-brand-gray/30 leading-none"
              style={{ opacity: useTransform(smoothProgress, [0, 0.05], [0.1, 0.4]) }}
            >
              &ldquo;
            </motion.span>
            {words.map((word, i) => {
              const start = i / words.length;
              const overlapEnd = start + (3 / words.length);
              const end = Math.min(overlapEnd, 1.0);

              if (i === words.length - 1) {
                return (
                  <span key={i} className="whitespace-nowrap flex items-end">
                    <Word progress={smoothProgress} range={[start, end]} isHighlight={word.highlight}>
                      {word.text}
                    </Word>
                    <motion.span
                      className="text-brand-gray/30 leading-none pl-[0.1em]"
                      style={{ opacity: useTransform(smoothProgress, [0.95, 1], [0, 0.4]) }}
                    >
                      &rdquo;
                    </motion.span>
                  </span>
                );
              }

              return (
                <Word key={i} progress={smoothProgress} range={[start, end]} isHighlight={word.highlight}>
                  {word.text}
                </Word>
              );
            })}
          </h2>
        </div>
      </div>
    </section>
  );
}

/* ── Word Component — opacity + Y lift reveal ── */
const Word = ({
  children,
  progress,
  range,
  isHighlight,
}: {
  children: string;
  progress: any;
  range: [number, number];
  isHighlight: boolean;
}) => {
  const opacity = useTransform(progress, range, [0.07, 1]);
  const y = useTransform(progress, range, ["0.4em", "0em"]);
  // Only highlight words get scale — reduces the number of active transforms
  const scale = isHighlight ? useTransform(progress, range, [0.97, 1]) : undefined;
  const baseColor = isHighlight ? "text-brand-accent" : "text-brand-dark";

  return (
    <span className="relative inline-block">
      {/* ghost placeholder to prevent layout shift */}
      <span className="invisible">{children}</span>
      <motion.span
        style={{
          opacity,
          y,
          scale,
          position: "absolute",
          left: 0,
          top: 0,
          willChange: "opacity, transform",
        }}
        className={baseColor}
      >
        {children}
      </motion.span>
    </span>
  );
};
