"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
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
    const router = useRouter();

    return (
        <main className="min-h-screen relative" style={{ background: 'linear-gradient(160deg, #ECF3FB 0%, #daeaf8 50%, #c9ddef 100%)' }}>
            {/* ─── HERO ─── */}
            <section className="relative w-full min-h-[450px] md:min-h-[550px] lg:min-h-[650px] flex items-center justify-center overflow-hidden">
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
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                    {/* Accent glow */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 pointer-events-none"
                        style={{ background: service.accentHex }}
                    />
                </div>

                {/* Hero content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-16 flex flex-col items-center justify-center text-center">
                    {/* Back link - positioned top left */}
                    <div className="absolute top-8 left-5 sm:left-8 lg:left-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <button
                                onClick={() => {
                                    sessionStorage.setItem('scrollTarget', '#services');
                                    router.push('/');
                                }}
                                className="inline-flex items-center gap-2 text-sm font-medium text-brand-lightest/80 hover:text-brand-lightest transition-all group bg-brand-lightest/10 px-5 py-2.5 rounded-full backdrop-blur-md border border-brand-lightest/20 hover:bg-brand-lightest/20 shadow-lg"
                            >
                                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                                Back to Services
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center gap-5 mb-8 mt-12 md:mt-8"
                    >
                        <div
                            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[1.25rem] flex items-center justify-center text-brand-lightest shadow-2xl border border-brand-lightest/30 backdrop-blur-xl"
                            style={{ background: `${service.accentHex}cc` }}
                        >
                            <Icon className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                        <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-brand-lightest/80">
                            Services Offered
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl sm:text-[2.75rem] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5rem] font-heading font-semibold text-brand-lightest leading-[1.1] w-full px-4 drop-shadow-2xl whitespace-pre-wrap md:whitespace-nowrap"
                    >
                        {service.title}
                    </motion.h1>
                </div>
            </section>

            {/* ─── SUB-SERVICE CARDS ─── */}
            <section className="relative py-20 lg:py-28">
                {/* Decorative bg */}
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[160px] opacity-[0.07] pointer-events-none"
                    style={{ background: service.accentHex }}
                />

                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">


                    <div className="grid sm:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
                        {service.subServices.map((sub, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                variants={fadeUp}
                                className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-[0_2px_24px_rgba(0,0,0,0.03)] border border-white/50 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col"
                            >
                                {/* Subtle top shimmer line */}
                                <div
                                    className="absolute left-0 top-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px]"
                                    style={{ background: `linear-gradient(90deg, transparent, ${service.accentHex}, transparent)` }}
                                />

                                <div className="mb-5 flex-shrink-0">
                                    <h3
                                        className="text-[16px] sm:text-[18px] xl:text-[20px] font-heading font-semibold text-brand-dark group-hover:text-brand-accent transition-colors duration-300 tracking-tight text-center"
                                        style={{ textWrap: 'balance' }}
                                    >
                                        {sub.title}
                                    </h3>
                                </div>

                                <div className="flex-grow space-y-4">
                                    <p className="text-[15px] sm:text-base text-brand-dark/75 leading-relaxed text-left">
                                        {sub.line1}
                                    </p>
                                    <p className="text-[15px] sm:text-base text-brand-dark/60 leading-relaxed text-left">
                                        {sub.line2}
                                    </p>
                                </div>
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
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-brand-lightest leading-snug mb-3">
                                    Ready to get started?
                                </h3>
                                <p className="text-brand-lightest/60 text-base sm:text-lg max-w-lg leading-relaxed text-left">
                                    Our experienced professionals provide comprehensive support for Accounts, Audit, Income Tax, GST, Compliance and other financial services to meet your business needs.
                                </p>
                            </div>
                            <button
                                onClick={() => lenis?.scrollTo('#footer')}
                                className="inline-flex items-center gap-3 bg-brand-lightest text-brand-dark font-semibold text-sm px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 whitespace-nowrap group cursor-pointer"
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
