'use client';

import React from 'react';
import { Leaf, Users, Code2, Database, Zap } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import { aiSummaries } from '@/data/ai-summaries';
import { colors } from '@/data/content';

const iconMap: Record<string, React.ElementType> = {
  Leaf,
  Users,
  Code2,
  Database,
  Zap,
};

interface FeatureData {
  iconName: string;
  title: string;
  description: string;
  colorIndex: number;
  summaryKey: string;
}

interface FeaturesSectionProps {
  features: FeatureData[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, i) => {
        const Icon = iconMap[feature.iconName] ?? Code2;
        const summary = aiSummaries.find(s => s.key === feature.summaryKey);
        return (
          <FeatureCard
            key={i}
            icon={Icon}
            title={feature.title}
            description={feature.description}
            color={colors[feature.colorIndex]}
            summaryEs={summary?.es}
            summaryEn={summary?.en}
          />
        );
      })}
    </div>
  );
}
