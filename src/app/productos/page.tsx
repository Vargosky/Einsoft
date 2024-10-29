'use client';
import { roll } from '@/api/library';

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

import { getProducto } from '@/api/library';
import ProductDetail from '@/components/producto/Producto';
import { useEffect, useState } from 'react';




export default function ProductPage() {
    const [producto, setProducto] = useState<Producto | null>(null);
    const [error, setError] = useState<string>('');

    const isProductoAzar= roll(1,10);

    useEffect(() => {
        async function fetchProducto() {
            try {
                const data = await getProducto(isProductoAzar);
                setProducto(data);
            } catch (err) {
                setError('Error al cargar el producto');
            }
        }

        fetchProducto();
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!producto) return <div>Cargando...</div>;

    return <ProductDetail producto={producto} />;
}