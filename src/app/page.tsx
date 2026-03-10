import Hero from '../components/Hero';
import LazySection from '../components/LazySection';
import Vision from '../components/Vision';
import Experience from '../components/Experience';
import Services from '../components/Services';
import CustomerType from '../components/CustomerType';
import Team from '../components/Team';

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
