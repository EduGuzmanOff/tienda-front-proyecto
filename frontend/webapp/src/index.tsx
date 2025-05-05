import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './index.css';

// Creamos el nodo raíz (root) donde React insertará nuestra app
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// Renderizamos <App /> dentro del div con id "root"
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
