"use client";
import { motion } from 'motion/react';

const team = [
  {
    name: 'CA Komal Bhotika',
    role: 'Partner',
    description: 'Chartered Accountant | GST & Taxation Expert | Independent Director',
    image: 'https://picsum.photos/seed/komal/400/500?blur=1',
  },
  {
    name: 'CA Richa Sureka',
    role: 'Partner',
    description: 'Chartered Accountant | Banking & Financial Advisory Expert',
    image: 'https://picsum.photos/seed/richa/400/500?blur=1',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-brand-accent mb-6 block">
            Our Team
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-[1.1] text-brand-dark max-w-3xl mx-auto">
            Led by dynamic finance professionals with a shared vision.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5]">
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-heading font-semibold text-brand-dark mb-2">
                  {member.name}
                </h3>
                <p className="text-brand-accent font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-brand-dark/70 text-sm leading-relaxed max-w-xs mx-auto">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

