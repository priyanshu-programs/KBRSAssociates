import { serviceDetails } from '../../../data/serviceDetails';
import ServiceDetailPage from '../../../components/ServiceDetailPage';

export default function GstCorporateLawsPage() {
    const service = serviceDetails.find(s => s.slug === 'gst-corporate-laws')!;
    return <ServiceDetailPage service={service} />;
}
