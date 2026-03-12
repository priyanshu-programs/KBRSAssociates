"use client";
import { motion } from 'motion/react';

/**
 * Render the "About K B R S" section with responsive layout, decorative radial blobs, animated image and text blocks, and a two-item statistics row.
 *
 * @returns A JSX element representing the About section for the page.
 */
export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #ECF3FB 0%, #daeaf8 50%, #c9ddef 100%)' }}>

      {/* Minimal decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #3179AC 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #164161 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute -inset-4 bg-brand-accent/5 rounded-3xl -z-10 transform -rotate-3"></div>
            <img
              src="https://res.cloudinary.com/ddooeqf5m/image/upload/v1772983047/Whisk_f47bf8a8ad77fa48c164673cabd98f34dr_ufulms.jpg"
              alt="Professional financial workspace"
              className="rounded-2xl shadow-2xl object-cover object-[60%_center] w-full h-[300px] sm:h-[450px] lg:h-[600px]"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex flex-col items-start w-full"
          >
            <div className="flex items-center gap-4 sm:gap-6 mb-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-brand-dark tracking-tight capitalize">
                About K B R S
              </h2>
              <div className="h-[2px] w-8 sm:w-16 bg-brand-accent/50 rounded-full" />
            </div>

            <p className="text-[clamp(14px,1.5vw,1.25rem)] text-brand-dark/70 font-medium tracking-wide mb-8">
              We deliver comprehensive, technology-driven, and client-focused financial solutions.
            </p>

            <div className="space-y-6 text-lg text-brand-dark/70 leading-relaxed">
              <p>
                <span className="font-bold">K B R S</span> is a progressive Chartered Accountancy firm established by two dynamic finance professionals with a shared vision—to deliver comprehensive, technology-driven, and client-focused financial solutions.
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
