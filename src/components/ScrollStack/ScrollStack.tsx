"use client";
import React, { useEffect, useRef, ReactNode } from 'react';
import './ScrollStack.css';

interface ScrollStackProps {
    children: ReactNode[];
    className?: string;
    itemStackDistance?: number;
    baseScale?: number;
    // We keep these props backward compatible but unused in the simple implementation
    itemDistance?: number;
    itemScale?: number;
    stackPosition?: string;
    scaleEndPosition?: string;
    scaleDuration?: number;
    rotationAmount?: number;
    blurAmount?: number;
    onStackComplete?: () => void;
}

export const ScrollStackItem = ({ children, itemClassName = '' }: { children: ReactNode; itemClassName?: string }) => (
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>
        {children}
    </div>
);

const ScrollStack = ({
    children,
    className = '',
    itemStackDistance = 40,
    baseScale = 0.9,
}: ScrollStackProps) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const wrappersRef = useRef<HTMLDivElement[]>([]);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const updateTransforms = () => {
            const wrappers = wrappersRef.current.filter(Boolean);
            if (!wrappers.length) return;

            const vh = window.innerHeight;

            wrappers.forEach((wrapper, i) => {
                const rect = wrapper.getBoundingClientRect();
                const nextWrapper = wrappers[i + 1];
                let scale = 1;

                if (nextWrapper) {
                    const nextRect = nextWrapper.getBoundingClientRect();
                    // Distance from top of this wrapper to top of the next wrapper
                    const distance = nextRect.top - rect.top;

                    // We start scaling down when the distance falls below `vh` (which means next wrapper is overlapping)
                    if (distance < vh) {
                        const maxDist = vh;
                        const minDist = itemStackDistance;
                        // Prevent issues if something goes wrong with layout
                        const boundedDist = Math.max(minDist, Math.min(maxDist, distance));

                        // Progress from 0 (at vh) to 1 (at itemStackDistance)
                        const rawProgress = 1 - ((boundedDist - minDist) / (maxDist - minDist));
                        const progress = Math.pow(rawProgress, 1.3); // Add slight easing to the scale shrink

                        scale = Math.max(baseScale, 1 - (progress * (1 - baseScale)));
                    }
                }

                const card = wrapper.querySelector('.scroll-stack-card') as HTMLDivElement;
                if (card) {
                    card.style.transform = `scale(${Math.round(scale * 1000) / 1000})`;
                }
            });
        }

        const onScroll = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(updateTransforms);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        // Apply transforms immediately on mount to prevent flash
        onScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [baseScale, itemStackDistance]);

    return (
        <div className={`scroll-stack-wrapper ${className}`.trim()} ref={scrollerRef}>
            <div className="scroll-stack-inner">
                {React.Children.map(children, (child, index) => {
                    if (!React.isValidElement(child)) return child;

                    return (
                        <div
                            className="scroll-stack-card-wrapper"
                            ref={el => { if (el) wrappersRef.current[index] = el; }}
                            style={{
                                // Calculate sticky top taking standard navbars/header heights into account
                                top: `calc(10vh + ${index * itemStackDistance}px)`,
                                // Determines how much height scrolling we need to overlap the cards perfectly
                                height: '100vh',
                                zIndex: index + 10,
                            }}
                        >
                            {child}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ScrollStack;
