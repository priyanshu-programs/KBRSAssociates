"use client";
import React from 'react';
import { motion } from 'motion/react';
import ScrollStack, { ScrollStackItem } from './ScrollStack/ScrollStack';
import { Users, Handshake, Scale, Building, Heart, Home } from 'lucide-react';

const clients = [
  {
    id: '01',
    title: 'Individuals',
    description: 'Personalized wealth management, tax return filing, and strategic investment structuring for personal financial growth.',
    icon: <Users size={28} strokeWidth={1.5} />,
    accent: '#3B82B8',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80',
  },
  {
    id: '02',
    title: 'Partnership Firms',
    description: 'Financial structuring, tax planning, and statutory compliance for joint ventures and collaborative business models.',
    icon: <Handshake size={28} strokeWidth={1.5} />,
    accent: '#2A648F',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
  },
  {
    id: '03',
    title: 'LLP (Limited Liability Partnerships)',
    description: 'Governance, compliance, and strategic advisory tailored for limited liability structures and modern enterprises.',
    icon: <Scale size={28} strokeWidth={1.5} />,
    accent: '#1A4A6D',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80',
  },
  {
    id: '04',
    title: 'Corporates',
    description: 'Comprehensive compliance, audit, and strategic financial advisory for large-scale enterprise operations.',
    icon: <Building size={28} strokeWidth={1.5} />,
    accent: '#3B82B8',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
  },
  {
    id: '05',
    title: 'Trusts / NGOs',
    description: 'Governance, specialized auditing, and strict regulatory compliance for non-profit organizations and trusts.',
    icon: <Heart size={28} strokeWidth={1.5} />,
    accent: '#2A648F',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80',
  },
  {
    id: '06',
    title: 'Residential Societies',
    description: 'Accounting, transparent auditing, and compliance management for housing societies and resident welfare.',
    icon: <Home size={28} strokeWidth={1.5} />,
    accent: '#1A4A6D',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80',
  },
];

export default function Clientele() {
  return (
    <section id="clientele" className="py-24 lg:py-32 bg-brand-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 lg:mb-20 text-center"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-brand-accent mb-6 block">
            Clientele
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-[1.1] text-brand-dark max-w-3xl mx-auto">
            Partnering with diverse entities for financial excellence.
          </h2>
        </motion.div>

        {/* ScrollStack Cards */}
        <ScrollStack
          itemStackDistance={35}
          baseScale={0.88}
        >
          {clients.map((client) => (
            <ScrollStackItem key={client.id}>
              <div
                className="relative overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-brand-dark/5 bg-gray-900 flex flex-col justify-center h-[60vh] min-h-[350px] max-h-[550px] w-full"
              >
                {/* Background Image */}
                <img
                  src={client.image}
                  alt={client.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Dark Gradient Overlay for high contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/30 mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                {/* Accent line */}
                <div
                  className="absolute top-0 left-0 w-full h-1.5 lg:h-2 rounded-t-[1.5rem] lg:rounded-t-[2.5rem] z-10"
                  style={{ background: `linear-gradient(90deg, ${client.accent}, ${client.accent}88)` }}
                />

                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 w-full">
                  {/* Content (Left) */}
                  <div className="flex-1 order-2 sm:order-1 flex flex-col justify-center">
                    <div className="flex items-baseline gap-3 mb-3 lg:mb-5">
                      <span className="text-3xl lg:text-5xl font-heading font-bold text-white/30">
                        {client.id}
                      </span>
                      <h3 className="text-xl md:text-2xl lg:text-4xl font-heading font-semibold text-white leading-tight">
                        {client.title}
                      </h3>
                    </div>
                    <p className="text-white/85 text-[15px] sm:text-base lg:text-[19px] leading-relaxed max-w-2xl font-medium drop-shadow-sm">
                      {client.description}
                    </p>
                  </div>

                  {/* Icon (Right) */}
                  <div
                    className="w-16 h-16 lg:w-32 lg:h-32 rounded-2xl lg:rounded-[1.75rem] flex items-center justify-center shrink-0 text-white shadow-lg order-1 sm:order-2 self-start sm:self-center"
                    style={{ background: `linear-gradient(135deg, ${client.accent}, ${client.accent}cc)` }}
                  >
                    {React.cloneElement(client.icon as any, { strokeWidth: 1.5, className: "w-8 h-8 lg:w-16 lg:h-16 max-w-full max-h-full" })}
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
