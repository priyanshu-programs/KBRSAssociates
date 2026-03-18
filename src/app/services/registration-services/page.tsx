import type { Metadata } from 'next';
import { serviceDetails } from '../../../data/serviceDetails';
import ServiceDetailPage from '../../../components/ServiceDetailPage';

export const metadata: Metadata = {
    title: "Registration Services | K B R S & Associates",
    description: "Seamless business registrations — trade license, MSME, FSSAI, RERA, import-export code, digital signature, professional tax and trademark registration by K B R S & Associates.",
};

export default function RegistrationServicesPage() {
    const service = serviceDetails.find(s => s.slug === 'registration-services')!;
    return <ServiceDetailPage service={service} />;
}
