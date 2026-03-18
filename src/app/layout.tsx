import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScrolling from "../components/SmoothScrolling";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://cakbrs.com"),
    title: "K B R S & Associates | Chartered Accountants",
    description:
        "K B R S & Associates — Chartered Accountants offering company registration, GST filing, audit, income tax, and corporate law services. Trusted professional CA firm.",
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "48x48" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
    openGraph: {
        title: "K B R S & Associates | Chartered Accountants",
        description:
            "Chartered Accountants offering company registration, GST filing, audit, income tax, and corporate law services. Trusted professional CA firm.",
        url: "https://cakbrs.com",
        siteName: "K B R S & Associates",
        type: "website",
        images: [{ url: "/logo.jpg", width: 400, height: 400, alt: "K B R S & Associates Logo" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "K B R S & Associates | Chartered Accountants",
        description:
            "Chartered Accountants offering company registration, GST filing, audit, income tax, and corporate law services. Trusted professional CA firm.",
    },
    alternates: {
        canonical: "https://cakbrs.com",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <head>
                <link rel="preconnect" href="https://res.cloudinary.com" />
                <link rel="dns-prefetch" href="https://res.cloudinary.com" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": ["ProfessionalService", "Organization"],
                            name: "K B R S & Associates",
                            url: "https://cakbrs.com",
                            logo: "https://cakbrs.com/logo.jpg",
                            description:
                                "Chartered Accountants offering registration services, GST, audit, income tax, and corporate law solutions.",
                            serviceType: [
                                "Chartered Accountancy",
                                "Tax Consulting",
                                "GST Services",
                                "Company Registration",
                                "Audit Services",
                            ],
                        }),
                    }}
                />
            </head>
            <body className="min-h-screen bg-brand-light font-sans text-brand-dark selection:bg-brand-accent selection:text-brand-lightest antialiased overflow-x-hidden">
                <SmoothScrolling>
                    <Navbar />
                    {children}
                    <Footer />
                </SmoothScrolling>
            </body>
        </html>
    );
}
