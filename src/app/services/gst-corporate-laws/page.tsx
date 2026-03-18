import type { Metadata } from 'next';
import { serviceDetails } from '../../../data/serviceDetails';
import ServiceDetailPage from '../../../components/ServiceDetailPage';

export const metadata: Metadata = {
    title: "GST & Corporate Laws | K B R S & Associates",
    description: "Navigate GST compliance and corporate regulations — GST registration, returns, company formation, LLP, trust formation, ROC filings and governance advisory by K B R S & Associates.",
};

export default function GstCorporateLawsPage() {
    const service = serviceDetails.find(s => s.slug === 'gst-corporate-laws')!;
    return <ServiceDetailPage service={service} />;
}
