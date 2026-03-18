import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import LazySection from '../components/LazySection';

const Vision = dynamic(() => import('../components/Vision'));
const Experience = dynamic(() => import('../components/Experience'));
const Services = dynamic(() => import('../components/Services'));
const CustomerType = dynamic(() => import('../components/CustomerType'));
const Team = dynamic(() => import('../components/Team'));

export default function Home() {
    return (
        <main>
            <Hero />
            <LazySection><Vision /></LazySection>
            <LazySection><Experience /></LazySection>
            <LazySection><Services /></LazySection>
            <LazySection><CustomerType /></LazySection>
            <LazySection><Team /></LazySection>
        </main>
    );
}
