"use client";

import { Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

// Footer ticker CSS animation is in globals.css (@keyframes ticker-scroll)


export default function Footer() {
  return (
    <footer id="footer" className="relative bg-brand-dark text-brand-lightest/70 pt-12 sm:pt-20 pb-6 sm:pb-8 overflow-hidden z-10 selection:bg-brand-accent selection:text-brand-lightest">

      {/* Giant Watermark Background Ticker */}
      <div
        className="absolute -bottom-[5%] md:-bottom-[10%] lg:-bottom-[15%] left-0 w-full overflow-hidden opacity-[0.03] select-none pointer-events-none -z-10 flex"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <div className="flex whitespace-nowrap animate-ticker-scroll">
          <span className="text-[12rem] md:text-[20rem] lg:text-[28rem] xl:text-[34rem] font-heading font-black text-brand-lightest leading-none tracking-tighter block pr-16 md:pr-32">
            K B R S &amp; ASSOCIATES
          </span>
          <span className="text-[12rem] md:text-[20rem] lg:text-[28rem] xl:text-[34rem] font-heading font-black text-brand-lightest leading-none tracking-tighter block pr-16 md:pr-32">
            K B R S &amp; ASSOCIATES
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 flex flex-col min-h-[300px] sm:min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-8 mb-auto pb-12 sm:pb-16 justify-between w-full"
        >
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 bg-brand-lightest rounded border border-[#005A8D]/20 overflow-hidden shrink-0 shadow-sm flex items-center justify-center">
                <Image
                  src="/logo.jpg"
                  alt="K B R S &amp; Associates Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full p-0.5"
                />
              </div>
              <span className="font-heading font-bold text-xl leading-tight text-brand-lightest tracking-wide">
                K B R S &amp; ASSOCIATES.
              </span>
            </div>
            <p className="text-[15px] leading-relaxed font-medium text-brand-lightest/80 pr-4 xl:pr-8">
              K B R S &amp; ASSOCIATES. is a trusted CA firm with years of experience, offering expert services in financial compliance, taxation, and advisory.
            </p>
          </div>

          {/* Column 2: Contact Us */}
          <div className="lg:mx-auto">
            <h4 className="text-brand-lightest font-heading font-bold mb-6 text-lg tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-[15px] font-medium">
              <li className="flex flex-col gap-1.5">
                <a href="tel:+919836048717"
                  className="hover:text-brand-lightest transition-colors tracking-wide hover-underline-animation w-fit">
                  +91 98360 48717
                </a>
                <a href="tel:+917506926066"
                  className="hover:text-brand-lightest transition-colors tracking-wide hover-underline-animation w-fit">
                  +91 75069 26066
                </a>
              </li>
              <li>
                <a href="mailto:cakbrsandassociates@gmail.com"
                  className="hover:text-brand-lightest transition-colors hover-underline-animation">
                  cakbrsandassociates@gmail.com
                </a>
              </li>
              <li className="leading-relaxed text-brand-lightest/70 pt-2 lg:max-w-[240px]">
                Lux Valley, D Block, Flat C202, 2 M G Road, Kolkata 700104, West Bengal, India
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="lg:mx-auto">
            <h4 className="text-brand-lightest font-heading font-bold mb-6 text-lg tracking-wide">Useful Links</h4>
            <ul className="space-y-4 text-[15px] font-medium">
              <li>
                <a href="https://incometaxindia.gov.in" target="_blank" rel="noopener noreferrer"
                  className="hover:text-brand-lightest transition-colors hover-underline-animation">
                  INCOME TAX
                </a>
              </li>
              <li>
                <a href="https://mca.gov.in" target="_blank" rel="noopener noreferrer"
                  className="hover:text-brand-lightest transition-colors hover-underline-animation">
                  MCA 21
                </a>
              </li>
              <li>
                <a href="https://fifp.gov.in" target="_blank" rel="noopener noreferrer"
                  className="hover:text-brand-lightest transition-colors hover-underline-animation">
                  FIFP.GOV.IN
                </a>
              </li>
              <li>
                <a href="https://gst.gov.in" target="_blank" rel="noopener noreferrer"
                  className="hover:text-brand-lightest transition-colors hover-underline-animation">
                  GST.GOV.IN
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: LinkedIn */}
          <div className="lg:ml-auto">
            <h4 className="text-brand-lightest font-heading font-bold mb-6 text-lg tracking-wide">LinkedIn</h4>
            <ul className="space-y-4 text-[15px] font-medium">
              <li>
                {/* Icon stays outside the underline so it applies only to the text span */}
                <a href="#" className="flex items-center gap-3 hover:text-brand-lightest transition-colors group">
                  <Linkedin size={18} className="text-brand-lightest/50 group-hover:text-brand-lightest transition-colors shrink-0" />
                  <span className="hover-underline-animation">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center pt-8 border-t border-brand-lightest/10 text-[14px] mt-auto"
        >
          <p className="font-medium">2026 K B R S & ASSOCIATES. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
