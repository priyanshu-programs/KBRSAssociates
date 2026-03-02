"use client";
import { useState, useEffect, useCallback, type ReactNode } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { useLenis } from 'lenis/react';
import Image from 'next/image';
import { Linkedin, Mail, Phone, X } from 'lucide-react';

type TeamMember = {
  id: string;
  name: string;
  role: string;
  description: string;
  bio: ReactNode[];
  image: string;
  socials: {
    linkedin: string;
    email: string;
    phone: string;
  };
};

const team: TeamMember[] = [
  {
    id: 'komal',
    name: 'CA Komal Bhotika',
    role: 'Partner',
    description: 'Chartered Accountant | GST & Taxation Expert | Independent Director',
    bio: [
      <>Komal is an accomplished Chartered Accountant and Company Secretary with a robust background in <span className="font-bold">Auditing, Taxation, GST Litigation, and Financial Compliance</span>. She brings over a decade of experience in advising clients on complex statutory and regulatory matters.</>,
      <>Her leadership in <span className="font-bold">Indirect Taxation</span> earned her the role of <span className="font-medium">Special Invitee to the GST & Indirect Taxes Committee of ICAI (2024)</span>. She is also a <span className="font-bold">Certified Information System Auditor (DISA)</span> and <span className="font-bold">Certified Social Auditor</span>, with strong credentials in Bank Audits and Governance.</>,
      <>A passionate advocate for financial literacy and women\'s empowerment, she regularly conducts educational workshops and delivers lectures at ICAI and professional forums. She currently serves as an <span className="font-bold">Independent Woman Director on listed companies</span>, offering strategic insight into governance, risk management, and financial oversight.</>,
    ],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600',
    socials: {
      linkedin: '#',
      email: 'mailto:komal@example.com',
      phone: 'tel:+919876543210',
    },
  },
  {
    id: 'richa',
    name: 'CA Richa Sureka',
    role: 'Partner',
    description: 'Chartered Accountant | Banking & Financial Advisory Expert',
    bio: [
      <>With nearly 20 years of global experience in the Banking & Financial Services industry, Richa has served in leadership roles with premier institutions like HSBC and Deutsche Bank across India, USA, UK, Hong Kong, and Germany. Her expertise lies in <span className="font-bold">Financial Advisory, Business Consultancy, Project Financing, Credit Evaluation, and Process Re-engineering</span>.</>,
      <>A strategic thinker with a practical, results-oriented approach, she brings deep insight into <span className="font-bold">Accounts, Taxation, Regulatory Compliance, SOP design, and Implementation</span>. She has successfully led cross-functional transformation projects, driving significant process efficiencies and cost savings.</>,
      <>Her certifications in <span className="font-bold">Valuation (ICAI), SME Finance (IIBF), and Investment Advisory (CISI, UK)</span> complement her strong foundation in financial management and corporate governance. A technology and AI enthusiast, she champions automation-led efficiency and innovation in finance.</>,
    ],
    image: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&q=80&w=600',
    socials: {
      linkedin: '#',
      email: 'mailto:richa@example.com',
      phone: 'tel:+919876543211',
    },
  },
];

type Member = (typeof team)[number];

// ─── Glass cursor ─────────────────────────────────────────────────────────────
function GlassCursor({ visible }: { visible: boolean }) {
  const rawX = useMotionValue(-300);
  const rawY = useMotionValue(-300);
  const x = useSpring(rawX, { damping: 26, stiffness: 280, mass: 0.6 });
  const y = useSpring(rawY, { damping: 26, stiffness: 280, mass: 0.6 });

  useEffect(() => {
    const move = (e: MouseEvent) => { rawX.set(e.clientX); rawY.set(e.clientY); };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [rawX, rawY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ x, y }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <div style={{
        width: 96, height: 96, marginLeft: -48, marginTop: -48,
        borderRadius: '50%',
        background: 'rgba(22,65,97,0.38)',
        backdropFilter: 'blur(14px) saturate(180%)',
        WebkitBackdropFilter: 'blur(14px) saturate(180%)',
        border: '1.5px solid rgba(255,255,255,0.28)',
        boxShadow: '0 8px 32px rgba(22,65,97,0.3), inset 0 1px 0 rgba(255,255,255,0.18)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontSize: 11, fontWeight: 700,
        letterSpacing: '0.09em', textTransform: 'uppercase' as const,
        userSelect: 'none' as const,
      }}>
        Click
      </div>
    </motion.div>
  );
}

// ─── Social icon button (reused in card + modal) ──────────────────────────────
function SocialBtn({
  href, icon, label,
  onEnter, onLeave,
}: {
  href: string; icon: React.ReactNode; label: string;
  onEnter?: () => void; onLeave?: () => void;
}) {
  return (
    <a href={href} aria-label={label} style={{ cursor: 'pointer' }}
      onClick={(e) => e.stopPropagation()}
      onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <span
        className="w-10 h-10 rounded-full flex items-center justify-center text-white"
        style={{
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(8px)',
          transition: 'background 0.25s, transform 0.2s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(49,121,172,0.6)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        {icon}
      </span>
    </a>
  );
}

// ─── Expanded Modal ───────────────────────────────────────────────────────────
function MemberModal({ member, onClose }: { member: Member; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      style={{ background: 'rgba(8,22,44,0.78)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col sm:flex-row overflow-hidden rounded-[2rem] w-full max-w-2xl max-h-[85vh] sm:max-h-[90vh]"
        style={{
          background: 'linear-gradient(135deg, #1a5278 0%, #0f3454 100%)',
          border: '1px solid rgba(255,255,255,0.16)',
          boxShadow: '0 40px 100px rgba(8,22,44,0.8), inset 0 1px 0 rgba(255,255,255,0.14)',
        }}
        initial={{ opacity: 0, scale: 0.86, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 16 }}
        transition={{ type: 'spring', damping: 30, stiffness: 130, mass: 1.1 }}
      >
        {/* Close */}
        <button onClick={onClose} aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', cursor: 'pointer' }}>
          <X size={16} />
        </button>

        {/* LEFT — photo */}
        <motion.div
          layoutId={`photo-${member.id}`}
          className="relative sm:w-56 w-full h-[240px] sm:h-auto shrink-0"
          style={{ background: '#c8d8e8' }}
          transition={{ type: 'spring', damping: 32, stiffness: 140, mass: 1.2 }}
        >
          <Image src={member.image} alt={member.name} fill sizes="224px" className="object-cover object-[center_20%]" />
        </motion.div>

        {/* RIGHT — info */}
        <div
          className="modal-scroll flex flex-col justify-start gap-4 p-5 sm:p-7 overflow-y-auto flex-1 min-h-0"
          data-lenis-prevent
        >
          {/* Role badge + name + tagline */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: '#7BAFD4' }}>
              {member.role}
            </p>
            <h3 className="text-2xl font-heading font-bold text-white leading-tight mb-1">
              {member.name}
            </h3>
            <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {member.description}
            </p>
          </div>

          <div style={{ height: 1, background: 'rgba(255,255,255,0.1)' }} />

          {/* Full bio paragraphs */}
          <div className="flex flex-col gap-3">
            {member.bio.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
                {para}
              </p>
            ))}
          </div>

          <div style={{ height: 1, background: 'rgba(255,255,255,0.1)' }} />

          {/* Socials */}
          <div className="flex items-center gap-3">
            <SocialBtn href={member.socials.linkedin} icon={<Linkedin size={15} strokeWidth={1.5} />} label="LinkedIn" />
            <SocialBtn href={member.socials.email} icon={<Mail size={15} strokeWidth={1.5} />} label="Email" />
            <SocialBtn href={member.socials.phone} icon={<Phone size={15} strokeWidth={1.5} />} label="Phone" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Profile Card ─────────────────────────────────────────────────────────────
const PHOTO_W = 200;
const PHOTO_H = 230;
const OVERFLOW = 64;

function ProfileCard({
  member, delay, onCursorHover, onOpen, isOpen,
}: {
  member: Member; delay: number;
  onCursorHover: (v: boolean) => void;
  onOpen: () => void;
  isOpen: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => { setHovered(true); onCursorHover(true); }}
      onMouseLeave={() => { setHovered(false); onCursorHover(false); }}
      onClick={isOpen ? undefined : onOpen}
      style={{ cursor: 'none' }}
      className="group"
    >
      {/* Outer wrapper — hides when modal is open so layoutId has no conflict */}
      <motion.div
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        style={{ position: 'relative', paddingTop: OVERFLOW, pointerEvents: isOpen ? 'none' : 'auto' }}
      >

        {/* Card body — plain div, no layoutId (only photo uses layoutId) */}
        <div
          className="relative rounded-[2rem] flex flex-col items-center pb-8 gap-6"
          style={{
            width: 310,
            paddingTop: PHOTO_H - OVERFLOW + 24,
            background: 'linear-gradient(160deg, #1a5278 0%, #0f3454 100%)',
            border: '1px solid rgba(255,255,255,0.16)',
            boxShadow: '0 32px 80px rgba(8,22,44,0.6), inset 0 1px 0 rgba(255,255,255,0.14)',
          }}
        >
          {/* Top radial glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem]"
            style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(49,121,172,0.30) 0%, transparent 65%)' }} />

          {/* Text — always visible */}
          <div className="relative z-10 flex flex-col items-center text-center gap-2 px-6">
            <h3 className="font-heading font-bold text-white"
              style={{ fontSize: 16, letterSpacing: '0.07em', textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
              {member.name.toUpperCase()}
            </h3>
            <p className="font-semibold" style={{ fontSize: 13, color: '#7BAFD4' }}>
              {member.role}
            </p>
            <p className="leading-relaxed mt-1" style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', maxWidth: 240 }}>
              {member.description}
            </p>
          </div>

          <div className="relative z-10" style={{ width: '80%', height: 1, background: 'rgba(255,255,255,0.1)' }} />

          {/* Socials */}
          <div className="relative z-10 flex items-center justify-center gap-3">
            <SocialBtn href={member.socials.linkedin} icon={<Linkedin size={15} strokeWidth={1.5} />} label="LinkedIn"
              onEnter={() => onCursorHover(false)} onLeave={() => onCursorHover(true)} />
            <SocialBtn href={member.socials.email} icon={<Mail size={15} strokeWidth={1.5} />} label="Email"
              onEnter={() => onCursorHover(false)} onLeave={() => onCursorHover(true)} />
            <SocialBtn href={member.socials.phone} icon={<Phone size={15} strokeWidth={1.5} />} label="Phone"
              onEnter={() => onCursorHover(false)} onLeave={() => onCursorHover(true)} />
          </div>
        </div>

        {/* Floating photo — lifts on hover */}
        <motion.div
          layoutId={`photo-${member.id}`}
          className="absolute top-0 left-1/2 z-20 overflow-hidden rounded-[1.4rem]"
          style={{
            width: PHOTO_W, height: PHOTO_H, marginLeft: -(PHOTO_W / 2),
            background: '#d6e2ed',
            boxShadow: '0 20px 56px rgba(8,22,44,0.6), 0 4px 16px rgba(8,22,44,0.35), 0 0 0 3px rgba(255,255,255,0.22)',
          }}
          animate={{ y: hovered ? -14 : 0, scale: hovered ? 1.04 : 1 }}
          transition={{ type: 'spring', damping: 24, stiffness: 180, mass: 0.9 }}
        >
          <Image src={member.image} alt={member.name} fill sizes="200px" className="object-cover object-[center_20%]" />
        </motion.div>

      </motion.div>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export default function Team() {
  const [cursorVisible, setCursorVisible] = useState(false);
  const [openMember, setOpenMember] = useState<Member | null>(null);

  const showCursor = useCallback(() => setCursorVisible(true), []);
  const hideCursor = useCallback(() => setCursorVisible(false), []);
  const closeModal = useCallback(() => setOpenMember(null), []);

  const lenis = useLenis();

  // Lock ALL scroll (Lenis + native) when modal is open
  useEffect(() => {
    if (!lenis) return;
    if (openMember) { lenis.stop(); } else { lenis.start(); }
    return () => { lenis.start(); };
  }, [openMember, lenis]);

  useEffect(() => {
    document.body.style.overflow = openMember ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [openMember]);

  return (
    <>
      <GlassCursor visible={cursorVisible && !openMember} />

      <AnimatePresence>
        {openMember && <MemberModal member={openMember} onClose={closeModal} />}
      </AnimatePresence>

      <section id="team" className="py-24 lg:py-32 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #F4F6F9 0%, #dde6ef 50%, #c8d8e8 100%)' }}>

        {/* Minimal decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #3179AC 0%, transparent 70%)' }} />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #164161 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-24 text-center"
          >
            <span className="text-sm font-bold tracking-widest uppercase text-brand-accent mb-6 block">Our Team</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold leading-[1.1] text-brand-dark max-w-3xl mx-auto">
              Led by dynamic finance professionals with a shared vision.
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
            {team.map((member, index) => (
              <ProfileCard
                key={member.id}
                member={member}
                delay={index * 0.18}
                onCursorHover={(active) => (active ? showCursor() : hideCursor())}
                onOpen={() => { setOpenMember(member); hideCursor(); }}
                isOpen={openMember?.id === member.id}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
