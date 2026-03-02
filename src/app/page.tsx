import Hero from '../components/Hero';
import dynamic from 'next/dynamic';

// Dynamically import below-the-fold sections so they don't bloat the initial JS bundle.
// Hero is eagerly loaded since it's the LCP element.
const Vision = dynamic(() => import('../components/Vision'));
const Experience = dynamic(() => import('../components/Experience'));
const Services = dynamic(() => import('../components/Services'));
const Clientele = dynamic(() => import('../components/Clientele'));
const Team = dynamic(() => import('../components/Team'));

export default function Home() {
    return (
        <main>
            <Hero />
            <Vision />
            <Experience />
            <Services />
            <Clientele />
            <Team />
        </main>
    );
}
