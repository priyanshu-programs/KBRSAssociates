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
    title: "K B R S & Associates",
    description: "K B R S & Associates",
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
        <html lang="en" className={`${inter.variable} ${playfair.variable} overflow-x-hidden`}>
            <body className="min-h-screen bg-brand-light font-sans text-brand-dark selection:bg-brand-accent selection:text-brand-lightest antialiased overflow-x-hidden">
                <SmoothScrolling>
                    <Navbar />
                    <div className="overflow-x-hidden w-full relative">
                        {children}
                    </div>
                    <Footer />
                </SmoothScrolling>
            </body>
        </html>
    );
}
