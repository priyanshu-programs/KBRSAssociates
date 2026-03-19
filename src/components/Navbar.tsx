"use client";
import { Menu, X, Mail } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLenis } from 'lenis/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();

  const getScrollDuration = (distance: number) => {
    const min = 1.2;
    const max = 3.2;
    const speed = 900;
    return Math.min(max, Math.max(min, distance / speed));
  };

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

  const scrolledRef = useRef(false);

  // Handle cross-page hash navigation via sessionStorage
  // This effect is the SOLE owner of scroll during hash navigation —
  // ScrollToTopOnRouteChange steps aside when scrollTarget is pending
  useEffect(() => {
    scrolledRef.current = false;
    if (pathname !== '/' || !lenis) return;
    const hash = sessionStorage.getItem('scrollTarget');
    if (!hash) return;

    // Immediately jump to top so user doesn't see the old page position
    lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);

    // Poll until the target element exists AND its position is stable
    // (i.e., layout has fully settled — two consecutive reads give the same top).
    let lastTop = -1;
    let stableCount = 0;
    const STABLE_THRESHOLD = 2; // need 2 consecutive matching reads
    const POLL_INTERVAL = 80;   // ms between polls
    const MAX_POLLS = 60;       // give up after ~5 seconds
    let pollCount = 0;

    const pollTimer = setInterval(() => {
      pollCount++;

      const target = document.querySelector(hash) as HTMLElement;
      if (!target) {
        // Element not in DOM yet, keep waiting
        if (pollCount >= MAX_POLLS) {
          clearInterval(pollTimer);
          sessionStorage.removeItem('scrollTarget');
        }
        return;
      }

      // Ensure we're at the top for consistent measurements
      const currentTop = target.getBoundingClientRect().top + window.scrollY;

      if (Math.abs(currentTop - lastTop) < 2) {
        stableCount++;
      } else {
        stableCount = 0;
      }
      lastTop = currentTop;

      if (stableCount >= STABLE_THRESHOLD) {
        // Layout is stable — scroll to the target
        clearInterval(pollTimer);
        scrolledRef.current = true;
        sessionStorage.removeItem('scrollTarget');

        const finalTop = target.getBoundingClientRect().top + window.scrollY - 96;
        const duration = getScrollDuration(Math.abs(finalTop));
        lenis.scrollTo(finalTop, { duration });
      }

      if (pollCount >= MAX_POLLS) {
        // Gave up waiting for stability, scroll to wherever it is now
        clearInterval(pollTimer);
        scrolledRef.current = true;
        sessionStorage.removeItem('scrollTarget');
        const fallbackTop = target.getBoundingClientRect().top + window.scrollY - 96;
        lenis.scrollTo(fallbackTop, { duration: 1.5 });
      }
    }, POLL_INTERVAL);

    return () => {
      clearInterval(pollTimer);
    };
  }, [pathname, lenis]);

  const navLinks = [
    { name: 'Home', href: '#home', isPage: false },
    { name: 'About us', href: '/about', isPage: true },
    { name: 'Services', href: '#services', isPage: false },
    { name: 'Customer types', href: '#customer-type', isPage: false },
    { name: 'Team', href: '#team', isPage: false }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLElement>, href: string, isPage?: boolean) => {
    e.preventDefault();

    if (isPage || href.startsWith('/')) {
      router.push(href);
      return;
    }

    if (pathname !== '/') {
      // Store scroll target and navigate without hash to avoid browser's native hash scroll
      sessionStorage.setItem('scrollTarget', href);
      router.push('/', { scroll: false });
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
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-section-a/90 backdrop-blur-md border-b border-brand-dark/8 shadow-sm' : 'bg-section-a'}`}>
      <div className="max-w-[1920px] mx-auto px-[1.1875rem]">
        <div className="flex justify-between items-center h-[3.9375rem]">

          {/* Logo */}
          <div
            className="flex items-center gap-3.5 cursor-pointer hover:opacity-95 transition-opacity"
            onClick={(e) => handleScrollTo(e, '#home')}
          >
            {/* Logo Image */}
            <div className="relative shrink-0 w-11 h-11 md:w-14 md:h-14 rounded border border-[#005A8D]/20 overflow-hidden bg-brand-lightest shadow-sm">
              <Image
                src="/logo.jpg"
                alt="K B R S & Associates Logo"
                width={56}
                height={56}
                className="object-contain w-full h-full p-0.5"
                priority
              />
            </div>

            {/* Text Logo */}
            <div className="flex flex-col justify-center">
              <span className="font-heading font-semibold text-[1.125rem] md:text-[1.375rem] leading-none text-black tracking-tight whitespace-nowrap">
                K B R S & Associates
              </span>
              <span className="text-[0.5625rem] md:text-[0.625rem] font-sans font-bold uppercase tracking-[0.22em] text-[#005A8D] mt-0.5 whitespace-nowrap">
                Chartered Accountants
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-end ml-16 xl:ml-32 pr-4">
            <div className="flex items-center gap-8 xl:gap-11">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href, link.isPage)}
                  className="text-[13px] md:text-[14px] font-medium text-brand-dark flex items-center gap-1.5 transition-colors rounded px-2 hover-underline-animation"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Contact Icons */}
              <div className="flex items-center gap-4 ml-2 border-l border-brand-dark/15 pl-6">
                <a 
                  href="https://wa.me/917506926066" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all hover:scale-110 p-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/5" 
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </a>
                <a 
                  href="mailto:cakbrsandassociates@gmail.com" 
                  className="flex items-center justify-center text-[#005A8D] hover:bg-[#005A8D] hover:text-white transition-all hover:scale-110 p-2 rounded-full border border-[#005A8D]/30 bg-[#005A8D]/5" 
                  aria-label="Email"
                >
                  <Mail size={20} strokeWidth={2.5} />
                </a>
              </div>
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
            className="lg:hidden bg-brand-lightest border-t border-brand-dark/5 absolute w-full left-0 mt-2 shadow-lg z-50 rounded-b-2xl origin-top"
          >
            <div className="px-5 pt-3 pb-5 flex flex-col">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    handleScrollTo(e, link.href, link.isPage);
                  }}
                  className={`block w-full px-2 py-4 text-[15px] font-medium text-brand-dark hover:text-brand-accent transition-colors ${i < navLinks.length - 1 ? 'border-b border-brand-dark/8' : ''}`}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Contact Icons */}
              <div className="flex gap-6 mt-4 pt-4 border-t border-brand-dark/8 justify-center pb-2">
                <a 
                  href="https://wa.me/917506926066" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 rounded-full text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors border border-[#25D366]/30 bg-[#25D366]/5"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </a>
                <a 
                  href="mailto:cakbrsandassociates@gmail.com" 
                  className="flex items-center justify-center p-3 rounded-full text-[#005A8D] hover:bg-[#005A8D] hover:text-white transition-colors border border-[#005A8D]/30 bg-[#005A8D]/5"
                  aria-label="Email"
                >
                  <Mail size={22} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
