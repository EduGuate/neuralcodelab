'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { missionSummaries } from '@/data/ai-summaries';
import { useTranslation } from '@/lib/useTranslation';

function TypewriterText({ text }: { text: string }) {
    const [displayed, setDisplayed] = useState('');
    const [done, setDone] = useState(false);
    const indexRef = useRef(0);

    useEffect(() => {
        setDisplayed('');
        setDone(false);
        indexRef.current = 0;

        const interval = setInterval(() => {
            indexRef.current += 1;
            setDisplayed(text.slice(0, indexRef.current));
            if (indexRef.current >= text.length) {
                clearInterval(interval);
                setDone(true);
            }
        }, 18);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <span>
            {displayed}
            {!done && (
                <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 align-middle animate-pulse" />
            )}
        </span>
    );
}

const summaryKeys = ['digitalPlatforms', 'techTraining', 'culturalPreservation', 'freeSoftware'];

interface MissionHighlightsProps {
    highlights: string[];
}

export default function MissionHighlights({ highlights }: MissionHighlightsProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { language } = useTranslation();

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div className="space-y-4">
            {highlights.map((highlight, index) => {
                const summaryData = missionSummaries.find(s => s.key === summaryKeys[index]);
                const summary = language === 'en' ? summaryData?.en : summaryData?.es;
                const isOpen = openIndex === index;

                return (
                    <div key={index} className="group">
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                                <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-3 flex-wrap">
                                    <p className="text-foreground text-lg">{highlight}</p>
                                    {summary && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => toggle(index)}
                                            className="shrink-0 h-7 px-2.5 text-xs font-semibold border border-dashed border-primary/40 hover:border-primary hover:bg-primary/5 text-primary gap-1.5"
                                        >
                                            <Sparkles size={11} />
                                            Resume AI
                                        </Button>
                                    )}
                                </div>

                                {isOpen && summary && (
                                    <div className="mt-3 rounded-lg bg-background border border-primary/30 shadow-lg p-4 text-sm text-foreground leading-relaxed animate-in fade-in duration-150">
                                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-primary/20">
                                            <Sparkles size={12} className="text-primary" />
                                            <span className="text-xs font-semibold text-primary uppercase tracking-wider">AI Summary</span>
                                        </div>
                                        <TypewriterText text={summary} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
