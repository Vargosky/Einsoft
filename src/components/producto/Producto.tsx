import React from 'react';
import { Star, ShoppingCart, Share2, Heart } from 'lucide-react';

interface Producto {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export default function ProductDetail({ producto }: { producto: Producto }) {
    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < Math.round(rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
            />
        ));
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Imagen del producto */}
                    <div className="relative p-8 flex items-center justify-center bg-white">
                        <div className="absolute top-4 right-4 space-x-2">
                            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                <Heart className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors" />
                            </button>
                            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                <Share2 className="w-5 h-5 text-gray-500 hover:text-blue-500 transition-colors" />
                            </button>
                        </div>
                        <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
                            <img
                                src={producto.image}
                                alt={producto.title}
                                className="object-contain w-full h-full transition-all duration-300 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Detalles del producto */}
                    <div className="p-8 bg-white">
                        <span className="inline-block px-3 py-1 text-sm border border-gray-200 rounded-full text-gray-600 mb-4">
                            {producto.category}
                        </span>

                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            {producto.title}
                        </h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center gap-1">
                                {renderStars(producto.rating.rate)}
                            </div>
                            <span className="text-sm text-gray-500">
                                ({producto.rating.count} reviews)
                            </span>
                        </div>

                        <p className="text-gray-600 mb-6 line-clamp-3">
                            {producto.description}
                        </p>

                        <div className="flex items-baseline gap-2 mb-8">
                            <span className="text-3xl font-bold text-gray-900">
                                ${producto.price}
                            </span>
                            <span className="text-sm text-gray-500">USD</span>
                        </div>

                        <div className="space-y-4">
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors">
                                <ShoppingCart className="w-5 h-5 mr-2" />
                                Agregar al carrito
                            </button>
                            <button className="w-full border border-gray-300 hover:border-gray-400 bg-white text-gray-800 py-3 px-6 rounded-lg font-medium transition-colors">
                                Comprar ahora
                            </button>
                        </div>

                        <div className="mt-8 pt-8 border-t">
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <span className="block text-sm font-medium text-gray-500">Envío gratis</span>
                                    <span className="text-xs text-gray-400">En pedidos +$50</span>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <span className="block text-sm font-medium text-gray-500">Devolución</span>
                                    <span className="text-xs text-gray-400">30 días</span>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <span className="block text-sm font-medium text-gray-500">Garantía</span>
                                    <span className="text-xs text-gray-400">12 meses</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}