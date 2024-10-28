// src/components/ui/FeatureCard.tsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    description,
    icon: Icon,
}) => {
    return (
        <div className="relative group">
            <div className="h-full bg-white rounded-lg shadow-lg transition-all duration-300 transform group-hover:-translate-y-2 p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 group-hover:bg-indigo-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                    {description}
                </p>
                <div className="mt-4 flex items-center text-indigo-600">
                    <span className="text-sm font-medium">Saber más</span>
                    <ChevronRight className="ml-2 w-4 h-4" />
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;