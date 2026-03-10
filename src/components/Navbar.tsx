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

  // Handle cross-page hash navigation via sessionStorage
  useEffect(() => {
    if (pathname === '/') {
      const hash = sessionStorage.getItem('scrollTarget');
      if (hash) {
        sessionStorage.removeItem('scrollTarget');
        let attempts = 0;
        const tryScroll = () => {
          const target = document.querySelector(hash) as HTMLElement;
          if (target) {
            const scrollToTarget = () => {
              const top = target.getBoundingClientRect().top + window.scrollY - 96;
              const duration = getScrollDuration(Math.abs(top - window.scrollY));
              if (lenis) {
                lenis.scrollTo(target, { offset: -96, duration });
              } else {
                window.scrollTo({ top, behavior: 'smooth' });
              }
            };
            scrollToTarget();
            // Correction scrolls after layout settles (images load, animations complete)
            setTimeout(scrollToTarget, 600);
            setTimeout(scrollToTarget, 1200);
          } else if (attempts < 15) {
            attempts++;
            setTimeout(tryScroll, 200);
          }
        };
        setTimeout(tryScroll, 100);
      }
    }
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
      router.push('/');
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
            <div className="flex items-center gap-8 xl:gap-12">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
