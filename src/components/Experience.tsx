"use client";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import ReactCountUp from 'react-countup';

const stats = [
    {
        label: "Combined Expertise",
        value: "30+",
        unit: "Years of Experience"
    },
    {
        label: "Global Exposure",
        value: "5",
        unit: "Countries Served"
    },
    {
        label: "Service Portfolio",
        value: "25+",
        unit: "Specialties"
    }
];

function AnimatedStat({ text }: { text: string }) {
    const match = text.match(/(\d+)(.*)/);
    const endValue = match ? parseInt(match[1], 10) : 0;
    const suffix = match ? match[2] : '';

    if (!match) return <span>{text}</span>;

    return (
        <ReactCountUp
            end={endValue}
            suffix={suffix}
            duration={3}
            enableScrollSpy={true}
            scrollSpyOnce={true}
            scrollSpyDelay={100}
        />
    );
}

// Animation variants for Framer Motion stagger effect
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Delay between each element appearing
            delayChildren: 0.1,   // Initial delay before stagger starts
        }
    }
};

// Smooth fade-up animation for individual elements
const fadeUpItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } // Custom buttery ease-out curve
    }
};

export default function Experience() {
    return (
        <section id="experience" className="w-full bg-[#FAFAFB] py-20 lg:py-32 xl:py-40 relative overflow-hidden">

            {/* Container holding the Left-Anchored Panel, Right Content, and the Bottom Image
                Wrapped in a motion.div to orchestrate the stagger children effect */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-10%" }}
                className="w-full relative z-20"
            >
                {/* Horizontal Split for Left Panel & Right Content */}
                <div className="flex flex-col xl:flex-row items-stretch w-full max-w-[1920px] mx-auto xl:pr-[1.1875rem] relative xl:gap-[15.375rem] z-20">



                    {/* ── LEFT PANEL (~769px by 311px) ── */}
                    <motion.div
                        variants={fadeUpItem}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-10%" }}
                        className="relative w-full xl:w-[48rem] h-auto xl:min-h-[19.5rem] shrink-0 flex items-center justify-center px-6 sm:px-12 xl:px-20 py-16 xl:py-0 self-start xl:self-auto mb-0 z-20"
                    >

                        {/* Card Background */}
                        <div
                            className="absolute inset-0 rounded-none xl:rounded-tr-[1rem] z-10 bg-brand-dark"
                        />

                        <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between w-full h-full gap-12 sm:gap-6">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">

                                    {/* 1. Label moved to the top as a heading */}
                                    <h3 className="text-white/75 text-[15px] sm:text-[17px] font-medium tracking-wide mb-6">
                                        {stat.label}
                                    </h3>

                                    {/* 2. Value dynamically counts up with subtle gradient */}
                                    <span
                                        className="font-heading font-extralight bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/50 leading-tight pb-2 mb-2 inline-block relative -ml-1"
                                        style={{ fontSize: 'clamp(4rem, 6vw, 5.5rem)' }}
                                    >
                                        <AnimatedStat text={stat.value} />
                                    </span>

                                    {/* 3. Unit preserved below */}
                                    <span className="text-brand-accent text-[11px] sm:text-xs font-bold leading-relaxed uppercase tracking-widest max-w-[160px]">
                                        {stat.unit}
                                    </span>

                                </div>
                            ))}
                        </div>

                    </motion.div>

                    {/* ── RIGHT MAIN CONTENT ── */}
                    <div className="flex-1 relative z-30 w-full flex flex-col justify-center px-6 sm:px-12 xl:px-0 py-12 xl:py-0">

                        {/* Subtle aesthetic backdrop blur/glow for premium feel */}
                        <div className="absolute top-1/2 right-0 w-64 h-64 bg-brand-dark/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

                        <div className="w-full max-w-2xl xl:ml-auto -mt-4 sm:-mt-8 xl:-mt-12">

                            {/* Staggered Typography Reveal */}
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-10%" }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
                                }}
                                className="mb-12 xl:mb-16 relative z-10"
                            >
                                <motion.p variants={fadeUpItem} className="text-[#2B3042]/80 text-[15px] sm:text-[17px] font-medium tracking-wide leading-relaxed">
                                    We deliver comprehensive, technology-driven, and client-focused financial solutions designed to elevate your business trajectory.
                                </motion.p>
                            </motion.div>

                            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-10 xl:gap-0 w-full relative z-10">

                                {/* Magnetic Expanding Avatars */}
                                <motion.div variants={fadeUpItem}>
                                    <motion.div
                                        className="flex -space-x-4 cursor-pointer py-2 sm:pl-2"
                                        initial="rest"
                                        whileHover="hover"
                                        animate="rest"
                                        variants={{
                                            rest: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                                            hover: { transition: { staggerChildren: 0.05, staggerDirection: 1 } }
                                        }}
                                    >
                                        {[
                                            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=120&auto=format&fit=crop&crop=faces",
                                            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=120&auto=format&fit=crop&crop=faces",
                                            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=120&auto=format&fit=crop&crop=faces",
                                        ].map((src, i) => (
                                            <motion.div
                                                key={i}
                                                className="w-14 h-14 xl:w-16 xl:h-16 rounded-full border-[3px] border-[#FAFAFB] shadow-md overflow-hidden relative origin-left"
                                                style={{ zIndex: 3 - i }}
                                                variants={{
                                                    rest: { x: 0, scale: 1 },
                                                    hover: { x: i * 20, scale: 1.1 }
                                                }}
                                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                            >
                                                <img src={src} alt="" className="w-full h-full object-cover" />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.div>

                                {/* Gooey About us Button (Anchored Right) */}
                                <motion.div variants={fadeUpItem} className="relative flex justify-end w-full sm:w-auto mt-4 sm:mt-0">
                                    <div className="relative inline-flex flex-row items-center pr-[3.75rem]" style={{ filter: "url(#goo-experience)" }}>
                                        {/* SVG Filter for Gooey Effect */}
                                        <svg className="absolute hidden">
                                            <defs>
                                                <filter id="goo-experience" x="-50%" y="-50%" width="200%" height="200%">
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

                                        <Link
                                            href="/about"
                                            className="group relative inline-flex items-center justify-center cursor-pointer"
                                        >
                                            {/* Secondary Container (Arrow) - Smaller circle sliding right */}
                                            <span className="absolute right-0 top-0 bottom-0 my-auto h-[3.25rem] w-[3.25rem] rounded-lg bg-brand-dark flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-[3.75rem] z-0">
                                                <ArrowRight size={20} className="text-white" strokeWidth={2} />
                                            </span>

                                            {/* Primary Container (Text) - Stays on top */}
                                            <span className="relative z-10 rounded-lg bg-brand-dark px-8 py-4 flex items-center justify-center text-white font-medium text-sm shadow-[0_4px_20px_rgba(0,0,0,0.05)] whitespace-nowrap border border-white/10">
                                                About us
                                            </span>
                                        </Link>
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </div>

                </div>

                {/* Full-width Responsive Image Container */}
                <motion.div
                    variants={fadeUpItem}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-10%" }}
                    className="w-full bg-brand-dark py-[clamp(1.2rem,2vw,1.8125rem)] xl:mt-[-1.8125rem]"
                >
                    <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-12 xl:px-0">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                                alt="Corporate Building Setup"
                                className="w-full h-full object-cover"
                            />
                            {/* Blueish tint overlay */}
                            <div className="absolute inset-0 bg-[#005A8D]/40 mix-blend-multiply pointer-events-none" />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
