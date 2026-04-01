'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/useTranslation';

interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
    summaryEs?: string;
    summaryEn?: string;
}

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

const FeatureCard: React.FC<FeatureCardProps> = ({
    icon: Icon,
    title,
    description,
    color,
    summaryEs,
    summaryEn,
}) => {
    const [open, setOpen] = useState(false);
    const { language } = useTranslation();
    const summary = language === 'en' ? summaryEn : summaryEs;

    return (
        <Card className="flex flex-col h-full transition-all hover:border-primary/50 hover:shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${color}20`, color }}
                >
                    <Icon size={24} />
                </div>
                <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 flex-1">
                <p className="text-sm text-muted-foreground">{description}</p>

                {summary && (
                    <div className="relative mt-auto">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setOpen(!open)}
                            className="w-full justify-between gap-2 text-xs font-semibold border border-dashed border-primary/40 hover:border-primary hover:bg-primary/5 text-primary"
                        >
                            <span className="flex items-center gap-1.5">
                                <Sparkles size={13} />
                                Resume AI
                            </span>
                            {open ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                        </Button>

                        {open && (
                            <div className="absolute bottom-full left-0 right-0 mb-2 z-50 rounded-lg bg-background border border-primary/30 shadow-xl p-4 text-sm text-foreground leading-relaxed animate-in fade-in duration-150">
                                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-primary/20">
                                    <Sparkles size={13} className="text-primary" />
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">AI Summary</span>
                                </div>
                                <p className="leading-relaxed">
                                    <TypewriterText text={summary} />
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default FeatureCard;
