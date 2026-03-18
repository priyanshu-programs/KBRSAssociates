import type { Metadata } from 'next';
import { serviceDetails } from '../../../data/serviceDetails';
import ServiceDetailPage from '../../../components/ServiceDetailPage';

export const metadata: Metadata = {
    title: "Other Allied Services | K B R S & Associates",
    description: "Specialised advisory and support — business valuation, bank funding, SOP preparation, PF/ESI filings, finance training and international accounting services by K B R S & Associates.",
};

export default function OtherAlliedServicesPage() {
    const service = serviceDetails.find(s => s.slug === 'other-allied-services')!;
    return <ServiceDetailPage service={service} />;
}
