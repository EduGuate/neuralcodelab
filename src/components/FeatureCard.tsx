import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, color }) => {
    return (
        <Card className="flex flex-col h-full transition-all hover:border-primary/50 hover:shadow-md">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                     style={{ backgroundColor: `${color}20`, color }}>
                    <Icon size={24} />
                </div>
                <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
};

export default FeatureCard;
