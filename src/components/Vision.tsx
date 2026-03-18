"use client";
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'motion/react';

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
  { text: "compliant", highlight: false },
  { text: "and", highlight: false },
  { text: "technology-enabled", highlight: false },
  { text: "financial", highlight: false },
  { text: "solutions.", highlight: false },
];

// Batch words into groups of ~5 to reduce hook count from 31 to 6
const BATCH_SIZE = 5;
const wordGroups: { words: typeof words; groupIndex: number }[] = [];
for (let i = 0; i < words.length; i += BATCH_SIZE) {
  wordGroups.push({
    words: words.slice(i, i + BATCH_SIZE),
    groupIndex: wordGroups.length,
  });
}

export default function Vision() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 1023px)');
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: isMobile ? ["start 0.95", "center 0.55"] : ["start 0.9", "center 0.4"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: isMobile ? 140 : 100,
    damping: isMobile ? 35 : 30,
    restDelta: 0.003,
  });

  return (
    <section ref={sectionRef} className="pt-16 pb-16 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-40 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #ECF3FB 0%, #daeaf8 50%, #c9ddef 100%)' }}>

      {/* Minimal decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #3179AC 0%, transparent 70%)' }} />

      {/* Animated Static Heading for "Our Vision" */}
      <div className="w-full flex justify-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl lg:text-7xl font-heading font-medium text-brand-dark tracking-tight capitalize"
        >
          Our Vision
        </motion.h2>
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

          {/* Scroll-driven word-by-word text reveal — batched into groups */}
          <p
            ref={textRef}
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-heading font-medium leading-[1.35] text-center max-w-4xl mx-auto"
          >
            {prefersReducedMotion ? (
              // Static render — no scroll animation overhead
              <>
                <span className="text-brand-gray/30 leading-none inline-block align-bottom">&ldquo;</span>{" "}
                {words.map((word, i) => (
                  <span key={i} className={`inline-block mb-2 sm:mb-3 ${word.highlight ? 'text-brand-accent' : 'text-brand-dark'}`}>
                    {word.text}{" "}
                  </span>
                ))}
                <span className="text-brand-gray/30 leading-none inline-block">&rdquo;</span>
              </>
            ) : (
            <>
            <motion.span
              className="text-brand-gray/30 leading-none inline-block align-bottom"
              style={{ opacity: useTransform(smoothProgress, [0, 0.05], [0.1, 0.4]) }}
            >
              &ldquo;
            </motion.span>
            {" "}
            {wordGroups.map((group) => (
              <WordGroup
                key={group.groupIndex}
                words={group.words}
                groupIndex={group.groupIndex}
                totalGroups={wordGroups.length}
                progress={smoothProgress}
                isLastGroup={group.groupIndex === wordGroups.length - 1}
              />
            ))}
            </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── WordGroup — single useTransform per batch of ~5 words ── */
const WordGroup = ({
  words: groupWords,
  groupIndex,
  totalGroups,
  progress,
  isLastGroup,
}: {
  words: typeof words;
  groupIndex: number;
  totalGroups: number;
  progress: any;
  isLastGroup: boolean;
}) => {
  const start = groupIndex / totalGroups;
  const end = Math.min(start + (2 / totalGroups), 1.0);
  const opacity = useTransform(progress, [start, end], [0.07, 1]);
  const y = useTransform(progress, [start, end], ["0.4em", "0em"]);

  return (
    <>
      {groupWords.map((word, i) => {
        const baseColor = word.highlight ? "text-brand-accent" : "text-brand-dark";
        const isLastWord = isLastGroup && i === groupWords.length - 1;

        if (isLastWord) {
          return (
            <span key={`${groupIndex}-${i}`} className="whitespace-nowrap inline-flex items-end mb-2 sm:mb-3">
              <span className="relative inline-block">
                <span className="invisible">{word.text}</span>
                <motion.span
                  style={{ opacity, y, position: "absolute", left: 0, top: 0 }}
                  className={baseColor}
                >
                  {word.text}
                </motion.span>
              </span>
              <motion.span
                className="text-brand-gray/30 leading-none pl-[0.1em] inline-block"
                style={{ opacity: useTransform(progress, [0.95, 1], [0, 0.4]) }}
              >
                &rdquo;
              </motion.span>
            </span>
          );
        }

        return (
          <span key={`${groupIndex}-${i}`}>
            <span className="inline-block mb-2 sm:mb-3 align-bottom">
              <span className="relative inline-block">
                <span className="invisible">{word.text}</span>
                <motion.span
                  style={{ opacity, y, position: "absolute", left: 0, top: 0 }}
                  className={baseColor}
                >
                  {word.text}
                </motion.span>
              </span>
            </span>
            {" "}
          </span>
        );
      })}
    </>
  );
};
