"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
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

    useEffect(() => {
        // Skip scroll-to-top when there's a pending scroll target — let the Navbar's hash handler manage it
        if (sessionStorage.getItem('scrollTarget')) return;
        lenis?.scrollTo(0, { immediate: true });
    }, [pathname, lenis]);

    return null;
}

export default function SmoothScrolling({
    children,
}: {
    children: React.ReactNode;
}) {
    // Tuned for responsiveness: lower lerp = faster response to scroll input.
    // duration 1.2 (was 1.5) and lerp 0.08 (was 0.1) removes the sluggish "lag" feel
    // while still keeping silky smooth momentum.
    return (
        <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
            <ScrollToTopOnRouteChange />
            {children}
        </ReactLenis>
    );
}
