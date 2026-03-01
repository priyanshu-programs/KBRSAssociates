"use client";

import { ReactLenis } from "lenis/react";
import React from "react";

export default function SmoothScrolling({
    children,
}: {
    children: React.ReactNode;
}) {
    // Basic settings to achieve a "premium" smooth scrolling feel
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
}
