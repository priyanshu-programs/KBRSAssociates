export type SubService = {
    title: string;
    line1: string;
    line2: string;
};

export type ServiceDetail = {
    slug: string;
    title: string;
    tagline: string;
    iconName: 'FileText' | 'Building2' | 'ShieldCheck' | 'Briefcase';
    itemColor: string;
    accentHex: string;
    image: string;
    subServices: SubService[];
};

export const serviceDetails: ServiceDetail[] = [
    {
        slug: 'accounts-audit-income-tax',
        title: 'Accounts, Audit & Income\u00A0Tax',
        tagline: 'Precision-driven accounting, audit and tax solutions that empower confident decision-making.',
        iconName: 'FileText',
        itemColor: 'bg-brand-accent',
        accentHex: '#3179AC',
        image: 'https://res.cloudinary.com/ddooeqf5m/image/upload/v1772988897/accounts-audit-income-tax_pb9fh7.png',
        subServices: [
            {
                title: 'Preparation & Finalisation of Accounts',
                line1: 'Ensuring accurate and compliant preparation of financial statements with structured closing of books.',
                line2: 'Delivered with precision to support statutory reporting, tax filings and informed decision-making.',
            },
            {
                title: 'Income Tax Return Filing & Tax Planning',
                line1: 'End-to-end filing of individual and corporate tax returns with adherence to current regulations.',
                line2: 'Strategic tax planning to optimise liabilities while maintaining full legal compliance.',
            },
            {
                title: 'TDS Returns',
                line1: 'Comprehensive management of TDS deduction, deposit and quarterly return filing.',
                line2: 'Includes timely compliance monitoring to avoid penalties and ensure seamless reconciliation.',
            },
            {
                title: 'Statutory Audits',
                line1: 'Independent examination of financial statements to ensure regulatory and accounting-standard compliance.',
                line2: 'Provides stakeholders with a transparent and reliable assessment of financial health.',
            },
            {
                title: 'Internal Audits',
                line1: 'Risk-based internal audit procedures to assess internal controls, operational efficiency and governance.',
                line2: 'Delivers actionable insights to strengthen processes and safeguard organisational assets.',
            },
            {
                title: 'Tax Audits',
                line1: 'Detailed verification of books and transactions as mandated under the Income Tax Act.',
                line2: 'Ensures accuracy in reporting, compliance with tax laws and risk mitigation during assessments.',
            },
            {
                title: 'Social Audits',
                line1: 'Evaluation of welfare-oriented schemes, CSR initiatives and institution-specific social obligations.',
                line2: 'Provides transparent reporting to stakeholders on effectiveness, utilisation and impact.',
            },
            {
                title: 'Scrutiny Assessment & Appeals',
                line1: 'Professional representation before tax authorities for scrutiny cases and appellate proceedings.',
                line2: 'Includes documentation, strategy and end-to-end handling to safeguard taxpayer interests.',
            },
        ],
    },
    {
        slug: 'gst-corporate-laws',
        title: 'GST & Corporate Laws',
        tagline: 'Navigate GST compliance and corporate regulations with expert precision and strategic foresight.',
        iconName: 'Building2',
        itemColor: 'bg-brand-dark',
        accentHex: '#164161',
        image: 'https://res.cloudinary.com/ddooeqf5m/image/upload/v1772988896/gst-corporate-laws_ljbr92.jpg',
        subServices: [
            {
                title: 'GST Registration, Returns and Litigation Handling',
                line1: 'Assistance with GST registration, periodic returns, reconciliations and compliance management.',
                line2: 'Representation and support in GST notices, disputes and litigation matters.',
            },
            {
                title: 'Company Formation & Striking Off',
                line1: 'Full support in incorporation of private/public companies with statutory documentation.',
                line2: 'Includes advisory and execution for striking-off inactive or non-operational entities.',
            },
            {
                title: 'Partnerships & LLP Formation',
                line1: 'Drafting, registration and compliance support for partnership firms and LLPs.',
                line2: 'Ensures legally robust agreements aligned with business objectives.',
            },
            {
                title: 'Trust Formation & Advisory',
                line1: 'End-to-end assistance in establishing trusts, societies and Section 8 entities.',
                line2: 'Covers drafting, registration, compliance and ongoing advisory support.',
            },
            {
                title: 'ROC Filings',
                line1: 'Management of annual filings, event-based compliances and MCA reporting requirements.',
                line2: 'Ensures timely adherence to corporate law obligations to avoid penalties.',
            },
            {
                title: 'GST Annual Audits, Notices & Representation',
                line1: 'Detailed reconciliation and certification for GST annual audits.',
                line2: 'Includes expert handling of notices, assessments and departmental representation.',
            },
            {
                title: 'Corporate Governance & Compliance Advisory',
                line1: 'Advisory support to strengthen governance frameworks, policies and legal compliance.',
                line2: 'Focuses on ethical, transparent and legally compliant organisational functioning.',
            },
        ],
    },
    {
        slug: 'registration-services',
        title: 'Registration Services',
        tagline: 'Seamless business registrations and certifications to get you operating with full compliance.',
        iconName: 'ShieldCheck',
        itemColor: 'bg-[#2A648F]',
        accentHex: '#2A648F',
        image: 'https://res.cloudinary.com/ddooeqf5m/image/upload/v1772988931/registration-services_mlpft3.jpg',
        subServices: [
            {
                title: 'Trade License / Shop & Establishment Registration',
                line1: 'Assistance with obtaining mandatory local trade and establishment registrations.',
                line2: 'Ensures effortless compliance with municipal and state regulations.',
            },
            {
                title: 'MSME / FSSAI / RERA / Import-Export Code Registrations',
                line1: 'End-to-end support for industry-specific registrations critical for business operations.',
                line2: 'Covers documentation, submission and advisory for smooth approval.',
            },
            {
                title: 'Digital Signature & Professional Tax Registration',
                line1: 'Facilitates issuance of Digital Signature Certificates and enrolment under professional tax laws.',
                line2: 'Enables legally valid authentication and statutory compliance.',
            },
            {
                title: 'Trade Mark Registration',
                line1: 'Comprehensive assistance in trademark search, application filing and objection handling.',
                line2: 'Protects brand identity through enforceable intellectual property rights.',
            },
        ],
    },
    {
        slug: 'other-allied-services',
        title: 'Other Allied Services',
        tagline: 'Specialised advisory and support services that go beyond the conventional — built for modern businesses.',
        iconName: 'Briefcase',
        itemColor: 'bg-[#3B82B8]',
        accentHex: '#3B82B8',
        image: 'https://res.cloudinary.com/ddooeqf5m/image/upload/v1772988932/other-services_fksuus.jpg',
        subServices: [
            {
                title: 'Business Valuation',
                line1: 'Objective valuation services for mergers, acquisitions, investments and regulatory needs.',
                line2: 'Delivered using accepted valuation standards to support informed decision-making.',
            },
            {
                title: 'Bank Funding / Project Financing',
                line1: 'Preparation of financial projections, DPRs and documentation for bank loans or funding.',
                line2: 'Supports clients in securing optimal finance terms through structured financial proposals.',
            },
            {
                title: 'SOP Preparation & Implementation',
                line1: 'Development of clear, practical Standard Operating Procedures tailored to organisational needs.',
                line2: 'Ensures consistency, accountability and improved operational performance.',
            },
            {
                title: 'PF / ESI Returns and Filings',
                line1: 'Complete compliance support for PF and ESI registrations, contributions and periodic filings.',
                line2: 'Prevents statutory lapses and ensures smooth employee-benefit administration.',
            },
            {
                title: 'Comprehensive Training in Finance, Corporate Laws and Basic AI',
                line1: 'Structured training modules covering essential finance, regulatory compliance and introductory AI skills.',
                line2: 'Designed to build competence for professionals, students and organisational teams.',
            },
            {
                title: 'Accounting & Allied Services to International Clients',
                line1: 'Book Keeping & Tax Advisory Services to international clients — US / UK / ME / Africa.',
                line2: 'Tailored cross-border financial support ensuring compliance across multiple jurisdictions.',
            },
        ],
    },
];
