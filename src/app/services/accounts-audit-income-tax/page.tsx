import { serviceDetails } from '../../../data/serviceDetails';
import ServiceDetailPage from '../../../components/ServiceDetailPage';

export default function AccountsAuditIncomeTaxPage() {
    const service = serviceDetails.find(s => s.slug === 'accounts-audit-income-tax')!;
    return <ServiceDetailPage service={service} />;
}
