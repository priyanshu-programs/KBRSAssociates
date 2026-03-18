import type { Metadata } from 'next';
import About from '../../components/About';

export const metadata: Metadata = {
    title: "About Us | K B R S & Associates",
    description: "Learn about K B R S & Associates — a trusted Chartered Accountants firm providing comprehensive accounting, tax, audit, GST and corporate law services.",
};

export default function AboutPage() {
    return (
        <main>
            <About />
        </main>
    );
}
