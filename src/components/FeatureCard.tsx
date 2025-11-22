import React, { useState } from 'react';

interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, color }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 bg-white/50 backdrop-blur-sm hover:shadow-md group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="mb-4 flex items-start justify-between">
                <div className={`w-10 h-10 rounded-md flex items-center justify-center transition-colors duration-300`}
                    style={{ backgroundColor: `${color}15`, color }}>
                    <Icon size={20} />
                </div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

export default FeatureCard;
