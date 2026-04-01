'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { threeCXSummaries } from '@/data/ai-summaries';
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

const summaryKeys = ['smallBusiness', 'remoteTeams', 'callCenter', 'entrepreneurs'];

interface UseCase {
    title: string;
    description: string;
}

interface ThreeCXUseCasesProps {
    useCases: UseCase[];
}

export default function ThreeCXUseCases({ useCases }: ThreeCXUseCasesProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { language } = useTranslation();

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
                const summaryData = threeCXSummaries.find(s => s.key === summaryKeys[index]);
                const summary = language === 'en' ? summaryData?.en : summaryData?.es;
                const isOpen = openIndex === index;

                return (
                    <Card
                        key={index}
                        className="p-2 hover:shadow-lg transition-all border-muted-foreground/10 flex flex-col"
                    >
                        <CardHeader>
                            <CardTitle className="text-lg font-bold">
                                {useCase.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-3 flex-1">
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {useCase.description}
                            </p>

                            {summary && (
                                <div className="relative mt-auto">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => toggle(index)}
                                        className="w-full justify-between gap-2 text-xs font-semibold border border-dashed border-primary/40 hover:border-primary hover:bg-primary/5 text-primary"
                                    >
                                        <span className="flex items-center gap-1.5">
                                            <Sparkles size={11} />
                                            Resume AI
                                        </span>
                                        <span>{isOpen ? '▲' : '▼'}</span>
                                    </Button>

                                    {isOpen && (
                                        <div className="absolute bottom-full left-0 right-0 mb-2 z-50 rounded-lg bg-background border border-primary/30 shadow-xl p-4 text-sm text-foreground leading-relaxed animate-in fade-in duration-150">
                                            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-primary/20">
                                                <Sparkles size={12} className="text-primary" />
                                                <span className="text-xs font-semibold text-primary uppercase tracking-wider">AI Summary</span>
                                            </div>
                                            <TypewriterText text={summary} />
                                        </div>
                                    )}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}
