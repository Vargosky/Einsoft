// src/components/sections/HeroSection.tsx
import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

const HeroSection: React.FC = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 to-blue-900">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                <span className="block">Soluciones tecnológicas</span>
                                <span className="block text-indigo-400">para el futuro</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Transformamos tu negocio con soluciones informáticas innovadoras y personalizadas.
                                Expertos en tecnología al servicio de tu éxito.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                        Comenzar
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </button>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                        Contáctanos
                                        <MessageSquare className="ml-2 w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;