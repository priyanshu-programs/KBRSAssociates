"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

const ReactLenis = dynamic(
    () => import("lenis/react").then((mod) => mod.ReactLenis),
    { ssr: false }
);

/**
 * Inner component that has access to the Lenis context.
 * Scrolls to the top instantly whenever the Next.js route changes.
 */
function ScrollToTopOnRouteChange() {
    const pathname = usePathname();
    const lenis = useLenis();
    const handledPathname = useRef<string | null>(null);

    useEffect(() => {
        if (handledPathname.current === pathname) return;

        if (sessionStorage.getItem('scrollTarget')) {
            // Hash navigation pending — Navbar exclusively owns the scroll
            handledPathname.current = pathname;
            return;
        }

        // Regular navigation: scroll to top with Lenis
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
            handledPathname.current = pathname;
        }
    }, [pathname, lenis]);

    return null;
}

export default function SmoothScrolling({
    children,
}: {
    children: React.ReactNode;
}) {
    // Disable browser scroll restoration to prevent cached positions
    // from interfering with cross-page hash navigation
    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, []);

    return (
        <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
            <ScrollToTopOnRouteChange />
            {children}
        </ReactLenis>
    );
}
