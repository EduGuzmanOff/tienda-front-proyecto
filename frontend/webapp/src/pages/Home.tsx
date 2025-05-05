import React from "react";
import { productosMock } from "../data/productosMock";
import ProductoCard from "../components/ProductoCard";

const Home: React.FC = () => {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            padding: '2rem',
        }}>
            {productosMock.map(producto => (
                <ProductoCard key={producto.id} producto={producto}/>
            ))}
        </div>
    );
};

export default Home;