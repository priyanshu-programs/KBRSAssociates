"use client";
import { Scale } from 'lucide-react';
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
              src="https://picsum.photos/seed/justice/800/1000?blur=1"
              alt="Justice Scale"
              referrerPolicy="no-referrer"
              className="rounded-2xl shadow-2xl object-cover w-full h-[600px]"
            />
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white">
                <Scale size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-dark">Justice Scale</p>
                <p className="text-xs text-brand-gray">Commitment to Compliance</p>
              </div>
            </div>
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
                KBRS is a progressive Chartered Accountancy firm established by two dynamic finance professionals with a shared vision—to deliver comprehensive, technology-driven, and client-focused financial solutions.
              </p>
              <p>
                With over three decades of combined experience across global banking, taxation, audit, compliance, and advisory domains, the firm offers an integrated suite of services tailored for Individuals, Corporates, LLPs, Partnership Firms, Trusts, and Societies.
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

