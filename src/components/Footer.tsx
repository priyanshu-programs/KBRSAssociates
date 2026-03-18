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
                K B R S & ASSOCIATES
              </span>
            </div>
            <p className="text-[15px] leading-relaxed font-medium text-brand-lightest/80 text-left">
              K B R S & ASSOCIATES is a trusted CA firm with years of experience, offering expert services in financial compliance, taxation and advisory.
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
                Lux Valley, D 203, 2 M G Road, Thakurpukur, Kolkata 700104, West Bengal, India
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

          {/* Column 4: Socials */}
          <div className="lg:ml-auto">
            <h4 className="text-brand-lightest font-heading font-bold mb-6 text-lg tracking-wide">Socials</h4>
            <ul className="space-y-4 text-[15px] font-medium">
              <li>
                {/* Icon stays outside the underline so it applies only to the text span */}
                <a href="https://www.linkedin.com/company/kbrs-associates/about/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brand-lightest transition-colors group">
                  <Linkedin size={18} className="text-brand-lightest/50 group-hover:text-brand-lightest transition-colors shrink-0" />
                  <span className="hover-underline-animation">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/917506926066" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brand-lightest transition-colors group">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-brand-lightest/50 group-hover:text-brand-lightest transition-colors shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  <span className="hover-underline-animation">WhatsApp</span>
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
          <p className="font-medium">2026 K B R S & ASSOCIATES All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
