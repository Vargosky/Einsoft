// src/components/sections/FeaturesSection.tsx
import React from 'react';
import { Shield, Cpu, Cloud, Users } from 'lucide-react';
import FeatureCard from '@/components/Card/FeatureCard';

const features = [
    {
        title: "Soluciones Cloud",
        description: "Infraestructura escalable y segura para tu negocio",
        icon: Cloud
    },
    {
        title: "Ciberseguridad",
        description: "Protección avanzada contra amenazas digitales",
        icon: Shield
    },
    {
        title: "Desarrollo Software",
        description: "Aplicaciones personalizadas de alta calidad",
        icon: Cpu
    },
    {
        title: "Soporte 24/7",
        description: "Asistencia técnica continua y personalizada",
        icon: Users
    }
];

const FeaturesSection: React.FC = () => {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                        Servicios
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Soluciones integrales para tu empresa
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Ofrecemos un conjunto completo de servicios tecnológicos diseñados para impulsar tu negocio.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;