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
    description: 'Chartered Accountant | GST & Taxation Expert | Independent Director | Company Secretary',
    bio: [
      <>Komal is an accomplished Chartered Accountant and Company Secretary with a robust background in <span className="font-bold">Auditing, Taxation, GST Litigation and Financial Compliance</span>.</>,
      <>She brings over a decade of experience in advising clients on complex statutory and regulatory matters.</>,
      <>Her leadership in <span className="font-bold">Indirect Taxation</span> earned her the role of <span className="font-bold">Special Invitee to the GST & Indirect Taxes Committee of ICAI (2024)</span>. She is also a <span className="font-bold">Certified Information System Auditor (DISA)</span> and <span className="font-bold">Certified Social Auditor</span>, with strong credentials in Bank Audits and Governance.</>,
      <>A passionate advocate for financial literacy and women&apos;s empowerment, she regularly conducts educational workshops and delivers lectures at professional forums. She currently serves as an <span className="font-bold">Independent Woman Director on listed companies</span>, offering strategic insight into governance, risk management and financial oversight.</>,
    ],
    image: 'https://res.cloudinary.com/ddooeqf5m/image/upload/q_auto,f_auto/v1773132667/K_vbu5ur.jpg',
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
      <>With nearly 20 years of global experience in the Banking & Financial Services industry, Richa has served in leadership roles with premier institutions like HSBC and Deutsche Bank across India, USA, UK, Hong Kong and Germany. Her expertise lies in <span className="font-bold">Financial Advisory, Business Consultancy, Project Financing, Credit Evaluation and Process Re-engineering</span>.</>,
      <>A strategic thinker with a practical, results-oriented approach, she brings deep insight into <span className="font-bold">Accounts, Taxation, Regulatory Compliance, SOP design and Implementation</span>. She has successfully led cross-functional transformation projects, driving significant process efficiencies and cost savings.</>,
      <>Her certifications in <span className="font-bold">Valuation (ICAI), SME Finance (IIBF) and Investment Advisory (CISI, UK)</span> complement her strong foundation in financial management and corporate governance. A technology and AI enthusiast, she champions automation-led efficiency and innovation in finance.</>,
    ],
    image: 'https://res.cloudinary.com/ddooeqf5m/image/upload/q_auto,f_auto/v1773132647/R_nbuc3v.jpg',
    socials: {
      linkedin: '#',
      email: 'mailto:richa@example.com',
      phone: 'tel:+919876543211',
    },
  },
];

type Member = (typeof team)[number];

// ─── Glass cursor (desktop only — skipped on touch devices) ──────────────────
function GlassCursor({ visible }: { visible: boolean }) {
  const [isTouch, setIsTouch] = useState(false);
  const rawX = useMotionValue(-300);
  const rawY = useMotionValue(-300);
  const x = useSpring(rawX, { damping: 26, stiffness: 280, mass: 0.6 });
  const y = useSpring(rawY, { damping: 26, stiffness: 280, mass: 0.6 });

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  useEffect(() => {
    if (isTouch) return;
    const move = (e: MouseEvent) => { rawX.set(e.clientX); rawY.set(e.clientY); };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [rawX, rawY, isTouch]);

  if (isTouch) return null;

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
        background: 'rgba(22,65,97,0.55)',
        border: '1.5px solid rgba(226,236,247,0.28)',
        boxShadow: '0 8px 32px rgba(22,65,97,0.3), inset 0 1px 0 rgba(226,236,247,0.18)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#E2ECF7', fontSize: 11, fontWeight: 700,
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
        className="w-10 h-10 rounded-full flex items-center justify-center text-brand-lightest"
        style={{
          background: 'rgba(20,50,80,0.45)',
          border: '1px solid rgba(226,236,247,0.2)',
          transition: 'background 0.25s, transform 0.2s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(49,121,172,0.6)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(20,50,80,0.45)'; e.currentTarget.style.transform = 'translateY(0)'; }}
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
        className="relative flex flex-col sm:flex-row overflow-hidden rounded-[2rem] w-full max-w-[860px] max-h-[85vh] sm:max-h-[90vh]"
        style={{
          background: 'linear-gradient(135deg, #1a5278 0%, #0f3454 100%)',
          border: '1px solid rgba(226,236,247,0.16)',
          boxShadow: '0 40px 100px rgba(8,22,44,0.8), inset 0 1px 0 rgba(226,236,247,0.14)',
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Close */}
        <button onClick={onClose} aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center text-brand-lightest/70 hover:text-brand-lightest transition-colors"
          style={{ background: 'rgba(226,236,247,0.1)', border: '1px solid rgba(226,236,247,0.18)', cursor: 'pointer' }}>
          <X size={16} />
        </button>

        {/* LEFT — photo */}
        <motion.div
          className="relative sm:w-56 w-full h-[240px] sm:h-auto shrink-0"
          style={{ background: '#c8d8e8' }}
          transition={{ type: 'spring', damping: 32, stiffness: 140, mass: 1.2 }}
        >
          <Image src={member.image} alt={member.name} fill sizes="(max-width: 768px) 100vw, 500px" quality={80} className="object-cover object-[center_20%]" />
        </motion.div>

        {/* RIGHT — info */}
        <div
          className="modal-scroll flex flex-col justify-start gap-4 p-5 sm:p-7 overflow-y-auto flex-1 min-h-0 w-full"
          data-lenis-prevent
          style={{ alignItems: 'stretch' }}
        >
          {/* Role badge + name + tagline */}
          <div className="w-full flex flex-col items-center text-center">
            <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: '#7BAFD4' }}>
              {member.role}
            </p>
            <h3 className="text-2xl font-heading font-bold text-brand-lightest leading-tight mb-1">
              {member.name}
            </h3>
            <p className="w-full whitespace-normal sm:whitespace-nowrap" style={{ color: 'rgba(226,236,247,0.65)', fontSize: '0.825rem', fontWeight: 500 }}>
              {member.description}
            </p>
          </div>

          <div style={{ height: 1, background: 'rgba(226,236,247,0.1)', width: '100%' }} />

          {/* Full bio paragraphs */}
          <div className="w-full" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {member.bio.map((para, i) => (
              <p key={i} className="w-full" style={{ color: 'rgba(226,236,247,0.62)', fontSize: '0.875rem', lineHeight: '1.625' }}>
                {para}
              </p>
            ))}
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
          className="relative overflow-hidden rounded-[2rem] flex flex-col items-center pb-16 w-[310px]"
          style={{
            paddingTop: PHOTO_H - OVERFLOW + 48,
            background: 'linear-gradient(160deg, #1a5278 0%, #0f3454 100%)',
            border: '1px solid rgba(226,236,247,0.16)',
            boxShadow: '0 32px 80px rgba(8,22,44,0.6), inset 0 1px 0 rgba(226,236,247,0.14)',
          }}
        >
          {/* Top radial glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem]"
            style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(49,121,172,0.30) 0%, transparent 65%)' }} />

          {/* Text — always visible */}
          <div className="relative z-10 flex flex-col items-center text-center gap-2 px-6 mt-2">
            <h3 className="font-heading font-bold text-brand-lightest uppercase"
              style={{ fontSize: 18, letterSpacing: '0.08em', textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
              {member.name}
            </h3>
            <p className="font-medium tracking-wide uppercase" style={{ fontSize: 13, color: '#7BAFD4' }}>
              {member.role}
            </p>
          </div>
        </div>

        {/* Floating photo — lifts on hover */}
        <motion.div
          className="absolute top-0 left-1/2 z-20 overflow-hidden rounded-[1.4rem]"
          style={{
            width: PHOTO_W, height: PHOTO_H, marginLeft: -(PHOTO_W / 2),
            background: '#d6e2ed',
            boxShadow: '0 20px 56px rgba(8,22,44,0.6), 0 4px 16px rgba(8,22,44,0.35), 0 0 0 3px rgba(226,236,247,0.22)',
          }}
          animate={{ y: hovered ? -14 : 0, scale: hovered ? 1.04 : 1 }}
          transition={{ type: 'spring', damping: 24, stiffness: 180, mass: 0.9 }}
        >
          <Image src={member.image} alt={member.name} fill sizes="(max-width: 768px) 100vw, 500px" quality={80} className="object-cover object-[center_20%]" style={{ transform: 'scale(1.30)' }} />
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

      <section id="team" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #ECF3FB 0%, #daeaf8 50%, #c9ddef 100%)' }}>

        {/* Minimal decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #3179AC 0%, transparent 70%)' }} />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #164161 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-14 lg:mb-24 text-center flex flex-col items-center justify-center w-full"
          >
            <div className="flex items-center gap-4 sm:gap-6 mb-6">
              <div className="h-[2px] w-8 sm:w-16 bg-brand-accent/50 rounded-full" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-brand-dark tracking-tight capitalize">
                Our Team
              </h2>
              <div className="h-[2px] w-8 sm:w-16 bg-brand-accent/50 rounded-full" />
            </div>

            <div className="w-full max-w-full overflow-x-auto hide-scrollbar sm:overflow-visible flex justify-center">
              <p className="text-[clamp(14px,1.5vw,1.25rem)] text-brand-dark/70 font-medium tracking-wide whitespace-normal sm:whitespace-nowrap px-4 py-1">
                Led by dynamic finance professionals with a shared vision.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-20">
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
