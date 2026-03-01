"use client";
import { motion } from 'motion/react';
const clients = [
  {
    id: '01',
    title: 'Individuals',
    description: 'Personalized wealth management, tax return filing, and strategic investment structuring.',
  },
  {
    id: '02',
    title: 'Partnership Firms',
    description: 'Financial structuring, tax planning, and statutory compliance for joint ventures.',
  },
  {
    id: '03',
    title: 'LLP (Limited Liability Partnerships)',
    description: 'Governance, compliance, and strategic advisory tailored for limited liability structures.',
  },
  {
    id: '04',
    title: 'Corporates',
    description: 'Comprehensive compliance, audit, and strategic financial advisory for enterprises.',
  },
  {
    id: '05',
    title: 'Trusts / NGOs',
    description: 'Governance, specialized auditing, and strict regulatory compliance for non-profits.',
  },
  {
    id: '06',
    title: 'Residential Societies',
    description: 'Accounting, transparent auditing, and compliance management for housing societies.',
  },
];

export default function Clientele() {
  return (
    <section id="clientele" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-brand-accent mb-6 block">
            Clientele
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-[1.1] text-brand-dark max-w-3xl">
            Partnering with diverse entities to ensure enduring financial excellence.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="folder-shape p-8 bg-brand-light border border-brand-dark/5 hover:border-brand-accent/30 transition-colors group flex flex-col h-full"
            >
              <div className="text-4xl font-heading font-bold text-brand-dark/10 mb-6 group-hover:text-brand-accent/20 transition-colors">
                {client.id}
              </div>
              <h3 className="text-xl font-heading font-semibold text-brand-dark mb-4">
                {client.title}
              </h3>
              <p className="text-brand-dark/70 text-sm leading-relaxed">
                {client.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

