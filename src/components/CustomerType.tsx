"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import ScrollStack, { ScrollStackItem } from './ScrollStack/ScrollStack';
import { Users, Handshake, Scale, Building, Globe, Home } from 'lucide-react';

const clients = [
  {
    id: '01',
    title: 'Individuals & HUFs',
    description: 'Personalized wealth management, tax return filing, and strategic investment structuring for personal financial growth.',
    icon: <Users size={56} strokeWidth={1.5} />,
    accent: '#3B82B8',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '02',
    title: 'Partnership Firms',
    description: 'Financial structuring, tax planning, and statutory compliance for joint ventures and collaborative business models.',
    icon: <Handshake size={56} strokeWidth={1.5} />,
    accent: '#2A648F',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '03',
    title: 'LLP (Limited Liability Partnerships)',
    description: 'Governance, compliance, and strategic advisory tailored for limited liability structures and modern enterprises.',
    icon: <Scale size={56} strokeWidth={1.5} />,
    accent: '#1A4A6D',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '04',
    title: 'Corporates',
    description: 'Comprehensive compliance, audit, and strategic financial advisory for large-scale enterprise operations.',
    icon: <Building size={56} strokeWidth={1.5} />,
    accent: '#3B82B8',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '05',
    title: 'Trusts / NGOs',
    description: 'Governance, specialized auditing, and strict regulatory compliance for non-profit organizations and trusts.',
    icon: <Globe size={56} strokeWidth={1.5} />,
    accent: '#2A648F',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '06',
    title: 'Residential Societies',
    description: 'Accounting, transparent auditing, and compliance management for housing societies and resident welfare.',
    icon: <Home size={56} strokeWidth={1.5} />,
    accent: '#1A4A6D',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
  },
];

export default function CustomerType() {
  return (
    <section id="customer-type" className="py-16 sm:py-24 lg:py-32 relative text-brand-dark" style={{ background: 'linear-gradient(160deg, #ECF3FB 0%, #daeaf8 50%, #c9ddef 100%)' }}>

      {/* Minimal decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #3179AC 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #164161 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 lg:mb-24 text-center flex flex-col items-center justify-center w-full"
        >
          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="h-[2px] w-8 sm:w-16 bg-brand-accent/50 rounded-full" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-brand-dark tracking-tight capitalize">
              Customer Types
            </h2>
            <div className="h-[2px] w-8 sm:w-16 bg-brand-accent/50 rounded-full" />
          </div>

          <div className="w-full max-w-full overflow-x-auto hide-scrollbar sm:overflow-visible flex justify-center">
            <p className="text-[clamp(12px,1.5vw,1.25rem)] text-brand-dark/70 font-medium tracking-wide whitespace-normal sm:whitespace-nowrap px-4 py-1">
              Partnering with diverse entities and providing comprehensive financial solutions.
            </p>
          </div>
        </motion.div>

        {/* ScrollStack Cards */}
        <ScrollStack
          itemStackDistance={35}
          baseScale={0.88}
        >
          {clients.map((client) => (
            <ScrollStackItem key={client.id}>
              <div
                className="relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem] lg:rounded-[2.5rem] p-5 sm:p-10 lg:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-brand-dark/5 bg-gray-900 flex flex-col justify-center h-[50vh] sm:h-[60vh] min-h-[280px] sm:min-h-[350px] max-h-[450px] sm:max-h-[550px] w-full"
              >
                {/* Background Image — Next.js Image for lazy loading & WebP */}
                <Image
                  src={client.image}
                  alt={client.title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1024px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Dark Gradient Overlay for high contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/65 to-gray-900/40 pointer-events-none" />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                {/* Accent line */}
                <div
                  className="absolute top-0 left-0 w-full h-1.5 lg:h-2 rounded-t-[1.5rem] lg:rounded-t-[2.5rem] z-10"
                  style={{ background: `linear-gradient(90deg, ${client.accent}, ${client.accent}88)` }}
                />

                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 w-full">
                  {/* Content (Centered) */}
                  <div className="flex-1 flex flex-col items-center text-center justify-center w-full h-full gap-5 lg:gap-8">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0, y: 20 }}
                      whileInView={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full flex items-center justify-center text-brand-lightest border-[1.5px] border-brand-lightest/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-110"
                      style={{ background: `linear-gradient(135deg, ${client.accent}D9, ${client.accent}66)` }}
                    >
                      <div className="scale-75 lg:scale-100">
                        {client.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-lightest leading-tight drop-shadow-lg max-w-4xl mx-auto">
                      {client.title}
                    </h3>
                  </div>


                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
}
