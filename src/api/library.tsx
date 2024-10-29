// library.tsx

// Primero definimos una interfaz para el tipo de producto
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

export async function getProducto(id: number): Promise<Producto> {
    // Agregamos try-catch para manejar errores
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!response.ok) {
            throw new Error('Error al obtener el producto');
        }

        const producto = await response.json();
        return producto;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}


export function roll (min:number, max : number){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
