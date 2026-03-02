"use client";
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute -inset-4 bg-brand-accent/5 rounded-3xl -z-10 transform -rotate-3"></div>
            <img
              src="/about-us.png"
              alt="Professional financial workspace"
              className="rounded-2xl shadow-2xl object-cover w-full h-[600px]"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-bold tracking-widest uppercase text-brand-accent mb-6 block">
              About KBRS & Associates
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-[1.1] text-brand-dark mb-8">
              We deliver comprehensive, technology-driven, and client-focused financial solutions.
            </h2>

            <div className="space-y-6 text-lg text-brand-dark/70 leading-relaxed">
              <p>
                <span className="font-bold">KBRS</span> is a progressive Chartered Accountancy firm established by two dynamic finance professionals with a shared vision—to deliver comprehensive, technology-driven, and client-focused financial solutions.
              </p>
              <p>
                With over three decades of combined experience across global banking, taxation, audit, compliance, and advisory domains, the firm offers an integrated suite of services tailored for <span className="font-semibold">Individuals, Corporates, LLPs, Partnership Firms, Trusts, and Societies</span>.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-brand-dark/10">
              <div>
                <p className="text-4xl font-heading font-bold text-brand-accent mb-2">30+</p>
                <p className="text-sm font-medium text-brand-dark">Years Combined Experience</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold text-brand-accent mb-2">100%</p>
                <p className="text-sm font-medium text-brand-dark">Client Commitment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
