import Hero from '../components/Hero';
import Vision from '../components/Vision';
import Experience from '../components/Experience';
import Services from '../components/Services';
import CustomerType from '../components/CustomerType';
import Team from '../components/Team';

export default function Home() {
    return (
        <main>
            <Hero />
            <Vision />
            <Experience />
            <Services />
            <CustomerType />
            <Team />
        </main>
    );
}
