import { serviceDetails } from '../../../data/serviceDetails';
import ServiceDetailPage from '../../../components/ServiceDetailPage';

export default function RegistrationServicesPage() {
    const service = serviceDetails.find(s => s.slug === 'registration-services')!;
    return <ServiceDetailPage service={service} />;
}
