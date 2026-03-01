"use client";
import { Facebook, Twitter, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-brand-dark text-white/70 pt-20 pb-8 overflow-hidden z-10 selection:bg-brand-accent selection:text-white">

      {/* Giant Watermark Background Ticker */}
      <div
        className="absolute -bottom-[5%] md:-bottom-[10%] lg:-bottom-[15%] left-0 w-full overflow-hidden opacity-[0.03] select-none pointer-events-none -z-10 flex"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 80, // Slower, premium speed
          }}
          className="flex whitespace-nowrap"
        >
          {/* Output text twice so it loops cleanly */}
          <span className="text-[12rem] md:text-[20rem] lg:text-[28rem] xl:text-[34rem] font-heading font-black text-white leading-none tracking-tighter mix-blend-overlay block pr-16 md:pr-32">
            KBRS & ASSOCIATES
          </span>
          <span className="text-[12rem] md:text-[20rem] lg:text-[28rem] xl:text-[34rem] font-heading font-black text-white leading-none tracking-tighter mix-blend-overlay block pr-16 md:pr-32">
            KBRS & ASSOCIATES
          </span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-auto pb-16"
        >
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-6 lg:pr-8">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 bg-white rounded border border-[#005A8D]/20 overflow-hidden shrink-0 shadow-sm flex items-center justify-center">
                <Image
                  src="/logo.jpg"
                  alt="KBRS & Associates Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full p-0.5"
                />
              </div>
              <span className="font-heading font-bold text-xl leading-tight text-white tracking-wide">
                KBRS & ASSOCIATES.
              </span>
            </div>
            <p className="text-[15px] leading-relaxed max-w-[280px] font-medium text-white/80">
              KBRS & ASSOCIATES. is a trusted CA firm with years of experience, offering expert services in financial compliance, taxation, and advisory.
            </p>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6 text-lg tracking-wide">Useful Links</h4>
            <ul className="space-y-4 text-[15px] font-medium">
              <li><a href="https://incometaxindia.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">INCOME TAX</a></li>
              <li><a href="https://mca.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">MCA 21</a></li>
              <li><a href="https://fifp.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">FIFP.GOV.IN</a></li>
              <li><a href="https://gst.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GST.GOV.IN</a></li>
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6 text-lg tracking-wide">Socials</h4>
            <ul className="space-y-4 text-[15px] font-medium">
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <Twitter size={18} className="text-white/50 group-hover:text-white transition-colors" />
                  <span>Twitter (X)</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <MessageCircle size={18} className="text-white/50 group-hover:text-white transition-colors" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 hover:text-white transition-colors group">
                  <Facebook size={18} className="text-white/50 group-hover:text-white transition-colors" />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-white font-heading font-bold mb-6 text-lg tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-[15px] font-medium">
              <li>
                <a href="tel:+919876543210" className="hover:text-white transition-colors tracking-wide">+91-9876543210</a>
              </li>
              <li>
                <a href="mailto:cakomalbajaj@gmail.com" className="hover:text-white transition-colors">cakomalbajaj@gmail.com</a>
              </li>
              <li className="leading-relaxed text-white/70 pt-2">
                123 Business Avenue, Suite 405,<br />
                Connaught Place, New Delhi 110001
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
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[14px] mt-auto"
        >
          <div className="flex items-center gap-8 order-2 md:order-1 mt-6 md:mt-0">
            <a href="#" className="text-brand-accent hover:text-white transition-colors font-semibold">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors font-medium">Privacy Policy</a>
          </div>
          <p className="order-1 md:order-2 font-medium">© 2026 KBRS & ASSOCIATES. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

