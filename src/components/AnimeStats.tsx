'use client';

import React, { useEffect, useRef } from 'react';

interface Stat {
    value: string;
    label: string;
}

export default function AnimeStats({ stats }: { stats: Stat[] }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // animejs v4 uses named exports — no default `anime()` function
        import('animejs').then(({ createTimeline, animate, stagger }) => {
            // Timeline for staggered entrance
            // In animejs v4: easing is `ease`, and goes inside `defaults`
            const tl = createTimeline({
                defaults: {
                    ease: 'outExpo',
                    duration: 1000
                }
            });

            tl.add('.stat-item', {
                translateY: [50, 0],
                opacity: [0, 1],
                delay: stagger(200),
                scale: [0.9, 1]
            })
                .add('.tech-tag', {
                    opacity: [0, 0.4],
                    translateY: [20, 0],
                    delay: stagger(100),
                }, '-=500');

            // Floating effect for the numbers
            // In animejs v4: `direction: 'alternate'` → `alternate: true`; `easing` → `ease`
            animate('.stat-value', {
                translateY: [-2, 2],
                alternate: true,
                loop: true,
                duration: 2000,
                ease: 'inOutSine',
                delay: stagger(300)
            });
        });
    }, []);

    return (
        <div ref={containerRef} className="max-w-6xl mx-auto px-6 py-20 relative overflow-hidden">
            <div className="grid grid-cols-2 gap-12 max-w-2xl mx-auto text-center relative z-10">
                {stats.map((stat, i) => (
                    <div key={i} className="stat-item opacity-0 group">
                        <div className="stat-value text-4xl md:text-5xl font-black text-primary mb-3 tracking-tighter">
                            {stat.value}
                        </div>
                        <div className="text-sm uppercase tracking-widest font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
