"use client";

import { ReactLenis } from "lenis/react";
import React from "react";

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
            {children}
        </ReactLenis>
    );
}
