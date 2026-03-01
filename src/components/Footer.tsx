"use client";
import { Facebook, Twitter, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-brand-dark text-white/70 py-16 lg:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
        >
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-brand-dark font-heading font-bold text-xl">
                CA
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight text-white">KBRS & Associates.</span>
                <span className="text-[10px] uppercase tracking-wider text-brand-accent font-medium">Chartered Accountants</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-8">
              KBRS & ASSOCIATES. is a trusted CA firm with years of experience, offering expert services in financial compliance, taxation, and advisory.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="transition-colors hover-underline-animation">Home</a></li>
              <li><a href="#about" className="transition-colors hover-underline-animation">About</a></li>
              <li><a href="#services" className="transition-colors hover-underline-animation">Services</a></li>
              <li><a href="#team" className="transition-colors hover-underline-animation">Team</a></li>
              <li><a href="#contact" className="transition-colors hover-underline-animation">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6 uppercase tracking-wider text-sm">Useful Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="https://incometaxindia.gov.in" target="_blank" rel="noopener noreferrer" className="transition-colors hover-underline-animation">INCOME TAX</a></li>
              <li><a href="https://mca.gov.in" target="_blank" rel="noopener noreferrer" className="transition-colors hover-underline-animation">MCA 21</a></li>
              <li><a href="https://fifp.gov.in" target="_blank" rel="noopener noreferrer" className="transition-colors hover-underline-animation">FIFP.GOV.IN</a></li>
              <li><a href="https://gst.gov.in" target="_blank" rel="noopener noreferrer" className="transition-colors hover-underline-animation">GST.GOV.IN</a></li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs"
        >
          <p>© 2026 KBRS & ASSOCIATES. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="transition-colors hover-underline-animation">Terms & Conditions</a>
            <a href="#" className="transition-colors hover-underline-animation">Privacy Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

