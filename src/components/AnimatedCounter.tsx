'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedCounterProps {
    value: string;
    className?: string;
}

export default function AnimatedCounter({ value, className }: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Extract numeric part and non-numeric suffix
    const numericValue = parseInt(value.replace(/[^0-9]/g, '') || '0', 10);
    const suffix = value.replace(/[0-9]/g, '');

    useEffect(() => {
        if (isInView) {
            motionValue.set(numericValue);
        }
    }, [isInView, motionValue, numericValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                // Round to integer to avoid decimals during animation
                ref.current.textContent = Math.floor(latest).toString() + suffix;
            }
        });
        return () => unsubscribe();
    }, [springValue, suffix]);

    return <span ref={ref} className={className}>{0 + suffix}</span>;
}
