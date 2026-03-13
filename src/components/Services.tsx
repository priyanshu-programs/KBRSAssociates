"use client";
import { useState, useEffect, memo, useCallback, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText, Building2, ShieldCheck, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

type ServiceItem = {
  title: string;
  slug: string;
  icon: ReactNode;
  itemColor: string;
  image: string;
  items: string[];
  description?: string;
};

const services: ServiceItem[] = [
  {
    title: 'Accounts, Audit & Income Tax',
    slug: 'accounts-audit-income-tax',
    icon: <FileText size={24} />,
    itemColor: 'bg-brand-accent',
    image: 'https://res.cloudinary.com/ddooeqf5m/image/upload/q_auto,f_auto/v1772988897/accounts-audit-income-tax_pb9fh7.png',
    items: [
      'Preparation & Finalisation of Accounts',
      'Income Tax Return Filing & Tax Planning',
      'TDS Returns',
      'Statutory Audits',
      'Internal Audits',
      'Tax Audits',
      'Social Audits',
      'Scrutiny Assessment & Appeals',
    ],
  },
  {
    title: 'GST & Corporate Laws',
    slug: 'gst-corporate-laws',
    icon: <Building2 size={24} />,
    itemColor: 'bg-brand-dark',
    image: 'https://res.cloudinary.com/ddooeqf5m/image/upload/q_auto,f_auto/v1772988896/gst-corporate-laws_ljbr92.jpg',
    items: [
      'GST Registration, Returns and Litigation',
      'Company Formation & Striking Off',
      'Partnerships & LLP Formation',
      'Trust Formation & Advisory',
      'ROC Filings',
      'GST Annual Audits, Notices & Representation',
      'Corporate Governance & Compliance Advisory',
    ],
  },
  {
    title: 'Registration Services',
    slug: 'registration-services',
    icon: <ShieldCheck size={24} />,
    itemColor: 'bg-[#2A648F]',
    image: 'https://res.cloudinary.com/ddooeqf5m/image/upload/q_auto,f_auto/v1772988931/registration-services_mlpft3.jpg',
    items: [
      'Trade License / Shop & Establishment Registration',
      'MSME / FSSAI / RERA / Import-Export Code Registrations',
      'Digital Signature & Professional Tax Registration',
      'Trade Mark Registration',
    ],
  },
  {
    title: 'Other Allied Services',
    slug: 'other-allied-services',
    icon: <Briefcase size={24} />,
    itemColor: 'bg-[#3B82B8]',
    image: 'https://res.cloudinary.com/ddooeqf5m/image/upload/q_auto,f_auto/v1772988932/other-services_fksuus.jpg',
    items: [
      'Business Valuation',
      'Bank Funding / Project Financing',
      'Comprehensive Training in Finance, Corporate Laws and Basic AI',
      'SOP Preparation & Implementation',
      'PF/ ESI Returns and Filings',
      'Accounting & Allied Services to International Clients',
    ],
  },
];

// ─── Memoised service card to prevent re-renders of non-active siblings ──────
const ServiceCard = memo(function ServiceCard({
  service,
  index,
  isActive,
  isAnyActive,
  onMouseEnter,
  onClick,
}: {
  service: typeof services[number];
  index: number;
  isActive: boolean;
  isAnyActive: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
}) {
  return (
    <motion.div
      key={index}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      // ⚠️ REMOVED: `layout` prop — it was the #1 performance killer.
      // Framer Motion's `layout` runs getBoundingClientRect() on every card
      // before and after each hover, triggering forced layout + FLIP animations
      // on top of the CSS flex transition that was already handling expansion.
      // CSS `transition-[flex]` alone handles this perfectly without any JS cost.
      className={[
        'relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] cursor-pointer',
        'transition-[flex,box-shadow] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]',
        'transform-gpu will-change-[flex]',
        'shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-brand-lightest/10',
        'flex flex-col',
        isAnyActive
          ? isActive
            // On mobile (flex-col layout) let the card grow to its natural content height;
            // on lg+ keep the fixed flex-ratio accordion behaviour.
            ? 'lg:flex-[10] shadow-xl'
            : 'flex-[1.5] lg:flex-1'
          : 'flex-1 hover:shadow-md',
      ].join(' ')}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 1024px) 100vw, 25vw"
          className={[
            'object-cover transition-transform duration-700 ease-out transform-gpu',
            isActive ? 'scale-105' : 'scale-100',
          ].join(' ')}
        />
        {/*
          REMOVED mix-blend-multiply & mix-blend-color overlays — each blend-mode
          layer forces a stacking context re-composite on the GPU during animation.
          Replaced with a single semi-transparent dark gradient which achieves the
          same visual effect at zero blending cost.
        */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/30 pointer-events-none" />
      </div>

      {/* ── DEFAULT (Equal) state ── */}
      <div
        className={[
          'absolute inset-0 flex flex-col items-center justify-center p-6 lg:p-8',
          'transition-opacity duration-300 transform-gpu',
          !isAnyActive ? 'opacity-100' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        {/* Removed backdrop-blur — creates expensive compositor layer per card */}
        <div className="w-14 h-14 lg:w-16 lg:h-16 bg-brand-lightest/20 rounded-2xl flex items-center justify-center text-brand-lightest shadow-sm mb-6 shrink-0 border border-brand-lightest/30">
          {service.icon}
        </div>
        <h3 className="text-xl lg:text-2xl xl:text-3xl font-heading font-semibold text-brand-lightest text-center leading-snug drop-shadow-md">
          {service.title}
        </h3>
      </div>

      {/* ── COMPRESSED (Vertical Capsule) state ── */}
      <div
        className={[
          'absolute inset-0 flex flex-col items-center justify-center p-4 lg:p-6',
          'transition-opacity duration-300 transform-gpu',
          isAnyActive && !isActive ? 'opacity-100' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-brand-lightest/20 border border-brand-lightest/30 shadow-sm flex items-center justify-center text-brand-lightest mb-6 shrink-0">
          {service.icon}
        </div>
        <h3
          className="text-lg lg:text-xl font-heading font-medium tracking-wide text-brand-lightest whitespace-nowrap hidden lg:block drop-shadow-md"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          {service.title}
        </h3>
        <h3 className="text-sm font-heading font-medium text-brand-lightest text-center lg:hidden drop-shadow-md">
          {service.title}
        </h3>
      </div>

      {/* ── ACTIVE (Expanded) state ── */}
      {/*
        On lg+ screens this is positioned absolute (fills the fixed-height card).
        On smaller screens we switch to relative/static so the card can grow
        to its natural content height and no scrolling is ever needed.
      */}
      <div
        className={[
          'lg:absolute lg:inset-0 w-full lg:h-full p-8 lg:p-10 xl:p-14',
          'flex flex-col xl:flex-row gap-6 xl:gap-12',
          'transition-opacity duration-300 transform-gpu',
          isActive ? 'opacity-100 delay-150' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        {/* Left Block */}
        <div className="flex flex-col justify-start">
          <div className="w-14 h-14 bg-brand-lightest/20 border border-brand-lightest/30 rounded-2xl flex items-center justify-center text-brand-lightest shadow-sm mb-6 lg:mb-8">
            {service.icon}
          </div>
          <h3 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-semibold text-brand-lightest leading-tight mb-4 drop-shadow-md">
            {service.title}
          </h3>
          {service.description && (
            <p className="text-brand-lightest/80 text-base lg:text-lg mb-4 max-w-sm drop-shadow-sm">
              {service.description}
            </p>
          )}
          <Link
            href={`/services/${service.slug}`}
            className="mt-auto hidden xl:inline-flex items-center gap-2 text-sm font-medium bg-brand-lightest text-brand-dark px-6 py-3 rounded-full hover:bg-brand-lightest/90 transition-colors w-max shadow-md"
          >
            Explore <ArrowRight size={16} />
          </Link>
        </div>

        {/* Right Block: List — no overflow-y-auto so all items are always visible */}
        <div className="bg-black/30 border border-brand-lightest/20 rounded-3xl p-6 lg:p-8 flex flex-col justify-center shadow-lg">
          <ul className="space-y-4">
            {service.items.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-brand-lightest/90 text-[15px] lg:text-base font-medium leading-relaxed">
                <span className={`w-2 h-2 rounded-full ${service.itemColor} mt-2 shrink-0 ring-2 ring-brand-lightest/30`} />
                <span className="text-left">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`/services/${service.slug}`}
          className="xl:hidden mt-2 inline-flex items-center justify-center gap-2 text-sm font-medium bg-brand-lightest text-brand-dark px-6 py-3 rounded-full shadow-md hover:bg-brand-lightest/90 transition-colors"
        >
          Explore <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
});

export default function Services() {
  // On mobile/tablet (<lg) default the first card open; on desktop start closed.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      const mobile = window.matchMedia('(max-width: 1023px)').matches;
      setIsMobile(mobile);
      // Default first card open on mobile; clear on desktop.
      setActiveIndex(mobile ? 0 : null);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleMouseEnter = useCallback((i: number) => {
    if (!isMobile) setActiveIndex(i);
  }, [isMobile]);

  // On mobile, clicking a card opens it; desktop hover already handles it.
  const handleClick = useCallback((i: number) => {
    setActiveIndex(i);
  }, []);

  // Only clear on mouse-leave for desktop hover mode.
  const handleMouseLeave = useCallback(() => {
    if (!isMobile) setActiveIndex(null);
  }, [isMobile]);

  return (
    <section id="services" className="pt-0 pb-24 lg:pb-32 text-brand-dark overflow-hidden relative" style={{ background: 'linear-gradient(160deg, #ECF3FB 0%, #daeaf8 50%, #c9ddef 100%)' }}>

      {/* Minimal decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #3179AC 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #164161 0%, transparent 70%)' }} />

      <div className="max-w-[1920px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 mt-4 sm:mt-8 lg:mt-16 relative z-10">

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 sm:mb-14 lg:mb-24 text-center flex flex-col items-center justify-center w-full"
        >
          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="h-[2px] w-8 sm:w-16 bg-brand-accent/50 rounded-full" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-brand-dark tracking-tight capitalize">
              Services Offered
            </h2>
            <div className="h-[2px] w-8 sm:w-16 bg-brand-accent/50 rounded-full" />
          </div>

          <div className="w-full max-w-full overflow-x-auto hide-scrollbar sm:overflow-visible flex justify-center">
            <p className="text-[clamp(14px,1.5vw,1.25rem)] text-brand-dark/70 font-medium tracking-wide whitespace-normal sm:whitespace-nowrap px-4 py-1">
              Explore our comprehensive financial solutions.
            </p>
          </div>
        </motion.div>

        {/* Accordion Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
          }}
          className="flex flex-col lg:flex-row w-full lg:h-[500px] xl:h-[550px] gap-3 lg:gap-4 xl:gap-6"
          onMouseLeave={handleMouseLeave}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isActive={activeIndex === index}
              isAnyActive={activeIndex !== null}
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={() => handleClick(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
