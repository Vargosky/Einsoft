import React from 'react'

export function login(id:number){

    const producto = fetch('https://fakestoreapi.com/products/'+ id);
    return(producto);

}
