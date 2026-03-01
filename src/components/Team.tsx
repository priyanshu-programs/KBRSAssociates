"use client";
import { motion } from 'motion/react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const team = [
  {
    name: 'CA Komal Bhotika',
    role: 'Partner',
    description: 'Chartered Accountant | GST & Taxation Expert | Independent Director',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
    socials: {
      linkedin: '#',
      email: 'mailto:komal@example.com',
      phone: 'tel:+919876543210'
    }
  },
  {
    name: 'CA Richa Sureka',
    role: 'Partner',
    description: 'Chartered Accountant | Banking & Financial Advisory Expert',
    image: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&q=80',
    socials: {
      linkedin: '#',
      email: 'mailto:richa@example.com',
      phone: 'tel:+919876543211'
    }
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-[#F8F8F9]">
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
                <p className="text-brand-dark/70 text-sm leading-relaxed max-w-xs mx-auto mb-6">
                  {member.description}
                </p>

                {/* Social Links Output */}
                <div className="flex items-center justify-center gap-4">
                  <a
                    href={member.socials.linkedin}
                    className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-white hover:bg-brand-accent hover:-translate-y-1 transition-all duration-300 shadow-md"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} strokeWidth={1.5} />
                  </a>
                  <a
                    href={member.socials.email}
                    className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-white hover:bg-brand-accent hover:-translate-y-1 transition-all duration-300 shadow-md"
                    aria-label="Send Email"
                  >
                    <Mail size={18} strokeWidth={1.5} />
                  </a>
                  <a
                    href={member.socials.phone}
                    className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-white hover:bg-brand-accent hover:-translate-y-1 transition-all duration-300 shadow-md"
                    aria-label="Call Phone"
                  >
                    <Phone size={18} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

