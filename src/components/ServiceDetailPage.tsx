"use client";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, FileText, Building2, ShieldCheck, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { useLenis } from 'lenis/react';
import type { ServiceDetail } from '../data/serviceDetails';

const iconMap = { FileText, Building2, ShieldCheck, Briefcase } as const;

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: i * 0.08,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    }),
};

export default function ServiceDetailPage({ service }: { service: ServiceDetail }) {
    const Icon = iconMap[service.iconName];
    const lenis = useLenis();

    return (
        <main className="bg-brand-light min-h-screen">
            {/* ─── HERO ─── */}
            <section className="relative w-full min-h-[420px] md:min-h-[500px] lg:min-h-[560px] flex items-end overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
                    {/* Accent glow */}
                    <div
                        className="absolute bottom-0 left-0 w-[600px] h-[300px] rounded-full blur-[120px] opacity-30 pointer-events-none"
                        style={{ background: service.accentHex }}
                    />
                </div>

                {/* Hero content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-14 pt-32 md:pt-40 lg:pt-48">
                    {/* Back link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/#services"
                            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-8 group"
                        >
                            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                            Back to Services
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg border border-white/20"
                            style={{ background: `${service.accentHex}cc` }}
                        >
                            <Icon size={26} />
                        </div>
                        <span className="text-sm font-bold tracking-widest uppercase text-white/60">
                            Our Services
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-semibold text-white leading-[1.08] max-w-4xl mb-5"
                    >
                        {service.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed"
                    >
                        {service.tagline}
                    </motion.p>
                </div>
            </section>

            {/* ─── SUB-SERVICE CARDS ─── */}
            <section className="relative py-20 lg:py-28">
                {/* Decorative bg */}
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[160px] opacity-[0.07] pointer-events-none"
                    style={{ background: service.accentHex }}
                />

                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-14 lg:mb-18"
                    >
                        <span className="text-sm font-bold tracking-widest uppercase mb-3 block"
                            style={{ color: service.accentHex }}
                        >
                            What we offer
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-brand-dark leading-[1.1]">
                            Detailed service breakdown
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {service.subServices.map((sub, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                variants={fadeUp}
                                className="group relative bg-white rounded-2xl p-7 sm:p-8 shadow-[0_2px_24px_rgba(0,0,0,0.04)] border border-brand-dark/[0.06] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500 overflow-hidden"
                            >
                                {/* Left accent bar */}
                                <div
                                    className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: service.accentHex }}
                                />

                                {/* Number badge */}
                                <div
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-sm font-bold text-white mb-5 shadow-md"
                                    style={{ background: service.accentHex }}
                                >
                                    {String(i + 1).padStart(2, '0')}
                                </div>

                                <h3 className="text-lg lg:text-xl font-heading font-semibold text-brand-dark leading-snug mb-4 group-hover:text-brand-accent transition-colors duration-300">
                                    {sub.title}
                                </h3>

                                <p className="text-[15px] text-brand-dark/65 leading-relaxed mb-3">
                                    {sub.line1}
                                </p>
                                <p className="text-[15px] text-brand-dark/50 leading-relaxed">
                                    {sub.line2}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-24 lg:pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="relative rounded-3xl overflow-hidden"
                    >
                        {/* BG */}
                        <div className="absolute inset-0 bg-brand-dark" />
                        <div
                            className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-[100px] opacity-30 pointer-events-none"
                            style={{ background: service.accentHex }}
                        />
                        <div
                            className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none"
                            style={{ background: service.accentHex }}
                        />

                        <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-14 lg:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                            <div>
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-white leading-snug mb-3">
                                    Ready to get started?
                                </h3>
                                <p className="text-white/60 text-base sm:text-lg max-w-lg leading-relaxed">
                                    Let our experts help you navigate {service.title.toLowerCase()} with confidence and clarity.
                                </p>
                            </div>
                            <button
                                onClick={() => lenis?.scrollTo('#footer')}
                                className="inline-flex items-center gap-3 bg-white text-brand-dark font-semibold text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 whitespace-nowrap group cursor-pointer"
                            >
                                Get in touch
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
