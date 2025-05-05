import React from 'react';
import { Producto } from '../types/producto';

type Props = {
    producto: Producto;
};

const ProductoCard: React.FC<Props> = ({ producto }) => {
    return(
        <div style= {{
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '8px',
            width: '200px',
            textAlign: 'center',
        }}>
            <img src={producto.imagenUrl} alt={producto.nombre} width="100%"/>
            <h3>{producto.nombre}</h3>
            <p>S/ {producto.precio.toFixed(2)}</p>
        </div>
    );
};

export default ProductoCard;