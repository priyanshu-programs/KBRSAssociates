import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScrolling from "../components/SmoothScrolling";

export const metadata: Metadata = {
    title: "My Google AI Studio App",
    description: "App description",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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
