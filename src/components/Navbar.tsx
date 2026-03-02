"use client";
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLenis } from 'lenis/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(prev => {
        const next = window.scrollY > 20;
        return prev !== next ? next : prev;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About us', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Clientele', href: '#clientele' },
    { name: 'Team', href: '#team' }
  ];

  const lenis = useLenis();

  const getScrollDuration = (distance: number) => {
    const min = 1.2;
    const max = 3.2;
    const speed = 900;
    return Math.min(max, Math.max(min, distance / speed));
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();

    if (pathname !== '/') {
      // If we are not on the home page, route to the home page with the hash appended
      router.push(`/${href}`);
      return;
    }

    const target = document.querySelector(href) as HTMLElement;
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 96;
      const duration = getScrollDuration(Math.abs(top - window.scrollY));
      if (lenis) {
        lenis.scrollTo(target, { offset: -96, duration });
      } else {
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/85 backdrop-blur-md border-b border-brand-dark/5 shadow-sm' : 'bg-brand-light'}`}>
      <div className="max-w-[1920px] mx-auto px-[1.1875rem]">
        <div className="flex justify-between items-center h-[3.9375rem]">

          {/* Logo */}
          <div
            className="flex items-center gap-3.5 cursor-pointer hover:opacity-95 transition-opacity"
            onClick={(e) => handleScrollTo(e, '#home')}
          >
            {/* Logo Image */}
            <div className="relative shrink-0 w-9 h-9 md:w-10 md:h-10 rounded border border-[#005A8D]/20 overflow-hidden bg-white shadow-sm">
              <Image
                src="/logo.jpg"
                alt="KBRS & Associates Logo"
                width={40}
                height={40}
                className="object-contain w-full h-full p-0.5"
                priority
              />
            </div>

            {/* Text Logo */}
            <div className="flex flex-col justify-center">
              <span className="font-heading font-semibold text-[0.9375rem] md:text-[1.125rem] leading-none text-black tracking-tight whitespace-nowrap">
                KBRS & Associates
              </span>
              <span className="text-[0.5rem] md:text-[0.5625rem] font-sans font-bold uppercase tracking-[0.22em] text-[#005A8D] mt-0.5 whitespace-nowrap">
                Chartered Accountants
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-end ml-16 xl:ml-32 pr-4">
            <div className="flex items-center gap-8 xl:gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-[13px] md:text-[14px] font-medium text-brand-dark flex items-center gap-1.5 transition-colors rounded px-2 hover-underline-animation"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-brand-accent transition-colors rounded p-1"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden bg-white border-t border-brand-dark/5 absolute w-full left-0 mt-2 shadow-lg z-50 rounded-b-2xl origin-top"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    handleScrollTo(e, link.href);
                  }}
                  className="block px-3 py-3 text-base font-medium text-brand-dark hover:bg-brand-light rounded-lg hover-underline-animation w-max"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
