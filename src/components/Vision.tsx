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

/**
 * Render the "Our Vision" section containing a repeating sliding ticker and a scroll-driven, word-by-word text reveal.
 *
 * The section includes subtle decorative backgrounds, a large horizontally scrolling "Our Vision" ticker, a growing accent line, and a quoted paragraph where each word fades and rises into view based on scroll progress.
 *
 * @returns The Vision section as a React element
 */
export default function Vision() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress: sectionScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const tickerX = useTransform(sectionScrollYProgress, [0, 1], ["0%", "-50%"]);

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
    <section ref={sectionRef} className="pt-10 pb-20 sm:pt-16 sm:pb-32 lg:pt-24 lg:pb-48 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #ECF3FB 0%, #daeaf8 50%, #c9ddef 100%)' }}>

      {/* Minimal decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #3179AC 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #164161 0%, transparent 70%)' }} />

      {/* Huge Sliding Ticker for "OUR VISION" */}
      <div className="w-full flex mb-12 sm:mb-20 md:mb-28 lg:mb-40 relative z-10">
        <motion.div
          className="flex whitespace-nowrap w-max"
          style={{ x: tickerX }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-12 pr-8 md:pr-12">
              <h2 className="text-[3.5rem] md:text-[6rem] lg:text-[9vw] font-heading font-medium text-brand-accent/30 tracking-tighter capitalize leading-none">
                Our Vision
              </h2>
              <span className="text-[2rem] md:text-[3.5rem] lg:text-[4vw] text-brand-accent/50 mb-2 md:mb-4">
                ✦
              </span>
              <h2 className="text-[3.5rem] md:text-[6rem] lg:text-[9vw] font-heading font-medium text-brand-dark tracking-tighter capitalize leading-none">
                Our Vision
              </h2>
              <span className="text-[2rem] md:text-[3.5rem] lg:text-[4vw] text-brand-accent/50 mb-2 md:mb-4">
                ✦
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">

          {/* Decorative line that grows in */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-12 h-px bg-brand-accent/40 mx-auto mb-12 origin-left"
          />

          {/* Scroll-driven word-by-word text reveal */}
          <p
            ref={textRef}
            className="flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 sm:gap-y-3 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-heading font-medium leading-[1.35]"
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
          </p>
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
  const baseColor = isHighlight ? "text-brand-accent" : "text-brand-dark";

  return (
    <span className="relative inline-block">
      {/* ghost placeholder to prevent layout shift */}
      <span className="invisible">{children}</span>
      <motion.span
        style={{
          opacity,
          y,
          position: "absolute",
          left: 0,
          top: 0,
        }}
        className={baseColor}
      >
        {children}
      </motion.span>
    </span>
  );
};
