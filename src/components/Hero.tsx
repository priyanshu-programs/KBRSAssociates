"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants, AnimatePresence, useReducedMotion } from 'motion/react';
import { ArrowRight, Mouse } from 'lucide-react';
import { useLenis } from 'lenis/react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const textRevealVariants: Variants = {
  hidden: { y: "120%", opacity: 0, rotateZ: 2 },
  visible: {
    y: 0,
    opacity: 1,
    rotateZ: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Removed filter:"blur(10px)" — CSS blur forces full GPU repaint every frame and kills FPS.
// opacity + y + scale alone gives equally premium feel at a fraction of the cost.
const cardRevealVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0
    }
  }
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.4
    }
  }
};

const HERO_IMAGES = [
  "https://res.cloudinary.com/ddooeqf5m/image/upload/q_auto,f_auto/v1772978771/hero-image_dnii3j.jpg",
  "https://res.cloudinary.com/ddooeqf5m/image/upload/q_auto,f_auto/v1772980231/Whisk_6abfee4d6332e1fbe244f36d34b11ebbeg_mjgnru.png",
  "https://res.cloudinary.com/ddooeqf5m/image/upload/q_auto,f_auto/v1772982571/Whisk_d20a9c4e48d3df5b220400a748d7ec78dr_aoemle.png",
  "https://res.cloudinary.com/ddooeqf5m/image/upload/q_auto,f_auto/v1772983047/Whisk_f47bf8a8ad77fa48c164673cabd98f34dr_ufulms.jpg"
];

export default function Hero() {
  const lenis = useLenis();
  const prefersReducedMotion = useReducedMotion();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const handleScrollToFooter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#footer') as HTMLElement;
    if (target) {
      const distance = Math.abs(target.getBoundingClientRect().top);
      const duration = Math.min(3.2, Math.max(1.2, distance / 900));
      if (lenis) {
        lenis.scrollTo('#footer', { offset: 0, duration });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="pt-0 pb-4 sm:pb-8 px-3 sm:px-[1.1875rem] max-w-[1920px] mx-auto">
      {/* Main Hero Card Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
        variants={containerVariants}
        className="relative w-full h-[85vh] sm:h-[80vh] min-h-[30rem] sm:min-h-[39rem] max-h-[51.5rem]"
      >

        {/* Background */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[1rem] bg-section-a">
          {HERO_IMAGES.map((src, index) => {
            const isActive = currentImageIndex === index;
            return (
              <motion.div
                key={src}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
                style={{ zIndex: isActive ? 1 : 0 }}
              >
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  initial={{ scale: 1 }}
                  animate={{
                    scale: prefersReducedMotion ? 1 : (isActive ? 1.08 : 1)
                  }}
                  transition={{
                    scale: isActive
                      ? { duration: 8, ease: "easeOut" }
                      : { duration: 0, delay: 1.5 } // Keep scale frozen for 1.5s during fade-out, then reset
                  }}
                >
                  <Image
                    src={src}
                    alt={`Hero Background ${index + 1}`}
                    fill
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 1920px) 100vw, 1920px"
                    className="object-cover object-center md:object-top origin-center"
                  />
                </motion.div>
              </motion.div>
            );
          })}
          <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between pt-[3.1875rem] pb-20 sm:pb-8 pl-4 pr-4 sm:pl-[3.0625rem] sm:pr-8 md:pr-12">

          {/* Main Headline */}
          <div className="max-w-4xl">
            <h1 className="text-[1.75rem] xs:text-[2.25rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-medium leading-[1.05] tracking-tight text-brand-light flex flex-col">
              <span className="overflow-hidden pb-2 block">
                <motion.span variants={textRevealVariants} className="block">Excellence in Service,</motion.span>
              </span>
              <span className="overflow-hidden pb-2 block">
                <motion.span variants={textRevealVariants} className="block">Commitment to</motion.span>
              </span>
              <span className="overflow-hidden pb-2 block">
                <motion.span variants={textRevealVariants} className="block">Compliance.</motion.span>
              </span>
            </h1>
          </div>

          {/* Bottom Left: Scroll Down */}
          <motion.div variants={fadeUpVariants} className="hidden sm:flex items-center gap-2 text-brand-lightest/80 pb-2">
            <Mouse size={20} strokeWidth={1.5} className="animate-bounce" />
            <span className="text-sm font-medium">Scroll down</span>
          </motion.div>

        </div>

        {/* Bottom Right Cutout Area */}
        <motion.div
          variants={cardRevealVariants}
          className="absolute bottom-0 right-0 sm:right-[-1.1875rem] z-20 bg-section-a pt-2 pl-2 sm:pt-4 sm:pl-4 rounded-tl-[1rem]"
        >

          {/* Top Inverted Corner */}
          <div className="absolute -top-1.5 sm:-top-4 right-0 sm:right-[1.1875rem] w-1.5 sm:w-4 h-1.5 sm:h-4 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-section-a" preserveAspectRatio="none">
              <path d="M0,100 C55.228475,100 100,55.228475 100,0 L100,100 L0,100 Z" />
            </svg>
          </div>

          {/* Left Inverted Corner */}
          <div className="absolute bottom-0 -left-1.5 sm:-left-4 w-1.5 sm:w-4 h-1.5 sm:h-4 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-section-a" preserveAspectRatio="none">
              <path d="M100,0 C100,55.228475 55.228475,100 0,100 L100,100 L100,0 Z" />
            </svg>
          </div>

          {/* Blue Content Card */}
          <div className="rounded-tl-[1rem] rounded-bl-[1rem] p-4 sm:p-8 md:p-10 w-full max-w-[75vw] sm:max-w-[450px] lg:max-w-[550px] shadow-lg" style={{ background: 'linear-gradient(0deg, #1A4A6D 0%, #2A648F 50%, #3B82B8 100%)' }}>
            <p className="text-brand-lightest/90 text-[13px] sm:text-[15px] md:text-base leading-relaxed mb-4 sm:mb-8 font-light text-justify">
              We transform client expectations into sustainable reality through a blend of subject matter expertise and exceptional service.
            </p>

            <div className="relative inline-flex flex-row items-center" style={{ filter: "url(#goo)" }}>
              {/* SVG Filter for Gooey Effect */}
              <svg className="absolute hidden">
                <defs>
                  <filter id="goo" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
                      result="goo"
                    />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                  </filter>
                </defs>
              </svg>

              <a
                href="#footer"
                onClick={handleScrollToFooter}
                className="group relative inline-flex items-center justify-center cursor-pointer"
              >
                {/* Secondary Container (Arrow) - Smaller circle sliding right */}
                <span className="absolute right-0 top-0 bottom-0 my-auto h-[3.25rem] w-[3.25rem] rounded-lg bg-brand-light flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-[4rem] z-0">
                  <ArrowRight size={20} className="text-brand-dark" strokeWidth={2} />
                </span>

                {/* Primary Container (Text) - Stays on top */}
                <span className="relative z-10 rounded-lg bg-brand-light px-8 py-4 flex items-center justify-center text-brand-dark font-medium text-sm shadow-[0_4px_20px_rgba(0,0,0,0.05)] whitespace-nowrap">
                  Contact us
                </span>
              </a>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
}
