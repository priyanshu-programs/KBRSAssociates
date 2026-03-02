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
    title: "KBRS & Associates",
    description: "KBRS & Associates",
    icons: {
        icon: "/logo.jpg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body className="min-h-screen bg-brand-light font-sans text-brand-dark selection:bg-brand-accent selection:text-white antialiased">
                <SmoothScrolling>
                    <Navbar />
                    {children}
                    <Footer />
                </SmoothScrolling>
            </body>
        </html>
    );
}
