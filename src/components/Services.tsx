"use client";
import { useState } from 'react';
import { ArrowRight, FileText, Building2, ShieldCheck, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  {
    title: 'Accounts, Audit & Income Tax',
    icon: <FileText size={24} />,
    color: 'from-[#E8F0F8] to-[#F4F6F9]',
    itemColor: 'bg-brand-accent',
    image: '/Accounts ordered and income tax - Copy.png',
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
    icon: <Building2 size={24} />,
    color: 'from-[#DCE8F0] to-[#EFF3F7]',
    itemColor: 'bg-brand-dark',
    image: '/GST and corporate.jpg',
    items: [
      'GST Registration, Returns, and Litigation',
      'Company Formation & Striking Off',
      'Partnerships & LLP Formation',
      'Trust Formation & Advisory',
      'ROC Filings',
      'GST Annual Audits',
      'Notices & Representation',
      'Corporate Governance',
    ],
  },
  {
    title: 'Registration Services',
    icon: <ShieldCheck size={24} />,
    color: 'from-[#E3EDF5] to-[#F2F5F8]',
    itemColor: 'bg-[#2A648F]',
    image: '/Registration services.jpg',
    description: 'End-to-end licensing and statutory compliance.',
    items: [
      'Trade License / Shop & Establishment',
      'MSME / FSSAI / RERA / IEC',
      'Digital Signature & Professional Tax',
      'Trade Mark Registration',
    ],
  },
  {
    title: 'Other Services',
    icon: <Briefcase size={24} />,
    color: 'from-[#EAF0F6] to-[#F5F7FA]',
    itemColor: 'bg-[#3B82B8]',
    image: '/Other services.jpg',
    description: 'Business Valuation & Financing.',
    items: [
      'Business Valuation',
      'Bank Funding / Project Financing',
      'SOP Preparation & Implementation',
      'PF/ ESI Returns and Filings',
      'Accounting for International Clients',
    ],
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="pt-0 pb-24 lg:pb-32 bg-white text-brand-dark overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 mt-8 lg:mt-16">

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 lg:mb-16"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-brand-accent mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-[1.1] text-brand-dark">
            Tailored financial solutions <br /> for your trajectory.
          </h2>
        </motion.div>

        {/* Expanding Capsule Accordion Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
              }
            }
          }}
          className="flex flex-col lg:flex-row w-full h-[800px] lg:h-[500px] xl:h-[550px] gap-3 lg:gap-4 xl:gap-6"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const isAnyActive = activeIndex !== null;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                layout
                className={`
                  relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] cursor-pointer
                  transition-[flex,box-shadow] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu
                  shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100/50 bg-gradient-to-br ${service.color}
                  flex flex-col
                  ${isAnyActive ? (isActive ? 'flex-[10] shadow-xl' : 'flex-[1.5] lg:flex-1 hover:brightness-95') : 'flex-1 hover:shadow-md'}
                `}
              >
                {/* Background Image */}
                {service.image && (
                  <>
                    <div className="absolute inset-0 z-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out transform-gpu will-change-transform ${isActive ? 'scale-105' : 'scale-100'}`}
                      />
                    </div>
                    {/* Gradient Overlay for a styled, less whitened look */}
                    <div className="absolute inset-0 z-0 bg-brand-dark opacity-50 mix-blend-multiply transition-opacity duration-700 transform-gpu pointer-events-none"></div>
                    {/* Secondary tint to align with the card's specific theme color */}
                    <div className={`absolute inset-0 z-0 bg-gradient-to-br ${service.color} opacity-40 mix-blend-color transform-gpu pointer-events-none`}></div>
                  </>
                )}

                {/* 
                  ======================
                  DEFAULT (Equal) UI 
                  ======================
                */}
                <div
                  className={`
                    absolute inset-0 flex flex-col items-center justify-center p-6 lg:p-8 transition-opacity transform-gpu will-change-opacity
                    ${!isAnyActive ? 'opacity-100 duration-500 delay-300' : 'opacity-0 duration-150 pointer-events-none'}
                  `}
                >
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white shadow-sm mb-6 shrink-0 border border-white/20">
                    {service.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-heading font-semibold text-white text-center leading-snug drop-shadow-md">
                    {service.title}
                  </h3>
                </div>

                {/* 
                  ======================
                  COMPRESSED (Vertical Capsule) UI 
                  ======================
                */}
                <div
                  className={`
                    absolute inset-0 flex flex-col items-center justify-center p-4 lg:p-6 transition-opacity transform-gpu will-change-opacity
                    ${isAnyActive && !isActive ? 'opacity-100 duration-500 delay-300' : 'opacity-0 duration-150 pointer-events-none'}
                  `}
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm flex items-center justify-center text-white mb-6 shrink-0">
                    {service.icon}
                  </div>
                  <h3
                    className="text-lg lg:text-xl font-heading font-medium tracking-wide text-white whitespace-nowrap hidden lg:block drop-shadow-md"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    {service.title}
                  </h3>
                  <h3 className="text-sm font-heading font-medium text-white text-center lg:hidden drop-shadow-md">
                    {service.title}
                  </h3>
                </div>

                {/* 
                  ======================
                  ACTIVE (Expanded) UI 
                  ======================
                */}
                <div
                  className={`
                    absolute inset-0 w-full h-full p-8 lg:p-10 xl:p-14 flex flex-col xl:flex-row gap-8 xl:gap-12
                    transition-opacity transform-gpu will-change-opacity
                    ${isActive ? 'opacity-100 duration-500 delay-300' : 'opacity-0 duration-150 pointer-events-none'}
                  `}
                >
                  {/* Left Block: Title & Icon */}
                  <div className="flex-1 flex flex-col justify-start">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white shadow-sm mb-6 lg:mb-8">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-semibold text-white leading-tight mb-4 drop-shadow-md">
                      {service.title}
                    </h3>
                    {service.description && (
                      <p className="text-white/80 text-base lg:text-lg mb-8 max-w-sm drop-shadow-sm">
                        {service.description}
                      </p>
                    )}

                    <a
                      href="#contact"
                      className="mt-auto hidden xl:inline-flex items-center gap-2 text-sm font-medium bg-white text-brand-dark px-6 py-3 rounded-full hover:bg-white/90 transition-all w-max shadow-md"
                    >
                      Explore <ArrowRight size={16} />
                    </a>
                  </div>

                  {/* Right Block: Capabilities List within a White Frost Glass */}
                  <div className="flex-1 bg-brand-dark/40 backdrop-blur-md border border-white/20 rounded-3xl p-6 lg:p-8 flex flex-col justify-center h-full max-h-min overflow-y-auto custom-scrollbar shadow-lg">
                    <ul className="space-y-4">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-white/90 text-[15px] lg:text-base font-medium leading-relaxed">
                          <span className={`w-2 h-2 rounded-full ${service.itemColor} mt-2 shrink-0 shadow-sm ring-2 ring-white/30`}></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    className="xl:hidden mt-8 inline-flex items-center justify-center gap-2 text-sm font-medium bg-white text-brand-dark px-6 py-3 rounded-full shadow-md hover:bg-white/90 transition-all"
                  >
                    Explore <ArrowRight size={16} />
                  </a>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
