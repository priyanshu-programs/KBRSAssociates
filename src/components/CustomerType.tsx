"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Users, Handshake, Scale, Building, Globe, Home } from 'lucide-react';

const clients = [
  {
    id: '01',
    title: 'Individuals & HUFs',
    description: 'Personalized wealth management, tax return filing and strategic investment structuring for personal financial growth.',
    icon: <Users size={56} strokeWidth={1.5} />,
    accent: '#3B82B8',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '02',
    title: 'Partnership Firms',
    description: 'Financial structuring, tax planning and statutory compliance for joint ventures and collaborative business models.',
    icon: <Handshake size={56} strokeWidth={1.5} />,
    accent: '#2A648F',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '03',
    title: 'LLP (Limited Liability Partnerships)',
    description: 'Governance, compliance and strategic advisory tailored for limited liability structures and modern enterprises.',
    icon: <Scale size={56} strokeWidth={1.5} />,
    accent: '#1A4A6D',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '04',
    title: 'Corporates',
    description: 'Comprehensive compliance, audit and strategic financial advisory for large-scale enterprise operations.',
    icon: <Building size={56} strokeWidth={1.5} />,
    accent: '#3B82B8',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '05',
    title: 'Trusts / NGOs',
    description: 'Governance, specialized auditing and strict regulatory compliance for non-profit organizations and trusts.',
    icon: <Globe size={56} strokeWidth={1.5} />,
    accent: '#2A648F',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '06',
    title: 'Residential Societies',
    description: 'Accounting, transparent auditing and compliance management for housing societies and resident welfare.',
    icon: <Home size={56} strokeWidth={1.5} />,
    accent: '#1A4A6D',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
  },
];

export default function CustomerType() {
  return (
    <section id="customer-type" className="py-16 sm:py-24 lg:py-32 relative text-brand-dark" style={{ background: 'linear-gradient(160deg, #ECF3FB 0%, #daeaf8 50%, #c9ddef 100%)' }}>

      {/* Minimal decorative blobs wrapped to prevent overflow without breaking sticky */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #3179AC 0%, transparent 70%)' }} />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #164161 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {clients.map((client) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (Number(client.id) - 1) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              key={client.id}
              className="group relative overflow-hidden rounded-[2rem] bg-brand-dark h-[280px] sm:h-[320px] lg:h-[360px] cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-shadow duration-500 "
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={client.image}
                  alt={client.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                />
              </div>

              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/10 via-brand-dark/40 to-brand-dark/95 transition-opacity duration-700 z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700 z-10 pointer-events-none" />

              {/* Top Accent Line (animated on hover) */}
              <div
                className="absolute top-0 left-0 w-full h-1.5 z-20 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] rounded-t-[2rem]"
                style={{ background: `linear-gradient(90deg, ${client.accent}, ${client.accent}88)` }}
              />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-8 pointer-events-none">
                <div className="flex flex-col h-full justify-between">
                  {/* Top Header Section */}
                  <div className="flex justify-end items-start w-full">
                    <div 
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md text-white transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/30"
                      style={{ boxShadow: `0 0 20px ${client.accent}20` }}
                    >
                      <div className="scale-90 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                        {client.icon}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Text Section */}
                  <div className="relative text-left transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:-translate-y-2">
                    <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-white tracking-wide">
                      {client.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Glossy Reflection Effect */}
              <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
