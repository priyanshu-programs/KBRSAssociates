"use client";

import Image from 'next/image';
import { motion, Variants } from 'motion/react';
import { ArrowRight, Mouse } from 'lucide-react';
import { useLenis } from 'lenis/react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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
      duration: 1.2,
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
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.4
    }
  }
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.8
    }
  }
};

export default function Hero() {
  const lenis = useLenis();

  const handleScrollToFooter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#footer') as HTMLElement;
    if (target) {
      const distance = Math.abs(target.getBoundingClientRect().top);
      const duration = Math.min(3.2, Math.max(1.2, distance / 900));
      if (lenis) {
        lenis.scrollTo(target, { offset: 0, duration });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="pt-0 pb-8 px-[1.1875rem] max-w-[1920px] mx-auto">
      {/* Main Hero Card Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
        variants={containerVariants}
        className="relative w-full h-[80vh] min-h-[39rem] max-h-[51.5rem]"
      >

        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[1rem] bg-brand-light">
          {/* Wrap in motion.div so we can still animate scale without blur penalty */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/hero-image.jpg"
              alt="Hero Background"
              fill
              priority
              sizes="(max-width: 1920px) 100vw, 1920px"
              className="object-cover object-center md:object-top"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between pt-[3.1875rem] pb-8 pl-4 pr-4 sm:pl-[3.0625rem] sm:pr-8 md:pr-12">

          {/* Main Headline */}
          <div className="max-w-4xl">
            <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-medium leading-[1.05] tracking-tight text-white flex flex-col">
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
          <motion.div variants={fadeUpVariants} className="flex items-center gap-2 text-white/80 pb-2">
            <Mouse size={20} strokeWidth={1.5} className="animate-bounce" />
            <span className="text-sm font-medium">Scroll down</span>
          </motion.div>

        </div>

        {/* Bottom Right Cutout Area */}
        <motion.div
          variants={cardRevealVariants}
          className="absolute bottom-0 right-[-1.1875rem] z-20 bg-brand-light pt-1.5 pl-1.5 sm:pt-4 sm:pl-4 rounded-tl-[1rem]"
        >

          {/* Top Inverted Corner */}
          <div className="absolute -top-1.5 sm:-top-4 right-[1.1875rem] w-1.5 sm:w-4 h-1.5 sm:h-4 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-brand-light" preserveAspectRatio="none">
              <path d="M0,100 C55.228475,100 100,55.228475 100,0 L100,100 L0,100 Z" />
            </svg>
          </div>

          {/* Left Inverted Corner */}
          <div className="absolute bottom-0 -left-1.5 sm:-left-4 w-1.5 sm:w-4 h-1.5 sm:h-4 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-brand-light" preserveAspectRatio="none">
              <path d="M100,0 C100,55.228475 55.228475,100 0,100 L100,100 L100,0 Z" />
            </svg>
          </div>

          {/* Blue Content Card */}
          <div className="rounded-tl-[1rem] rounded-bl-[1rem] p-8 md:p-10 w-full max-w-[450px] lg:max-w-[550px] shadow-lg" style={{ background: 'linear-gradient(0deg, #1A4A6D 0%, #2A648F 50%, #3B82B8 100%)' }}>
            <p className="text-white/90 text-[15px] md:text-base leading-relaxed mb-8 font-light">
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
                <span className="absolute right-0 top-0 bottom-0 my-auto h-[3.25rem] w-[3.25rem] rounded-lg bg-white flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-[4rem] z-0">
                  <ArrowRight size={20} className="text-brand-dark" strokeWidth={2} />
                </span>

                {/* Primary Container (Text) - Stays on top */}
                <span className="relative z-10 rounded-lg bg-white px-8 py-4 flex items-center justify-center text-brand-dark font-medium text-sm shadow-[0_4px_20px_rgba(0,0,0,0.05)] whitespace-nowrap">
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
