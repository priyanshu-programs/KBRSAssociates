import type { Metadata } from 'next';
import { serviceDetails } from '../../../data/serviceDetails';
import ServiceDetailPage from '../../../components/ServiceDetailPage';

export const metadata: Metadata = {
    title: "Accounts, Audit & Income Tax | K B R S & Associates",
    description: "Precision-driven accounting, audit and tax solutions — statutory audits, internal audits, tax audits, TDS returns, income tax filing and scrutiny assessment services by K B R S & Associates.",
};

export default function AccountsAuditIncomeTaxPage() {
    const service = serviceDetails.find(s => s.slug === 'accounts-audit-income-tax')!;
    return <ServiceDetailPage service={service} />;
}
