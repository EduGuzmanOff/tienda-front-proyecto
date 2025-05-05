import React from 'react';
import Home from '../pages/Home';

const App: React.FC = () => {
  return(
    <div>
      <h1 style={{
        textAlign: 'center',
      }}>Bienvenido a la Tienda Online</h1>
      <Home />
      <div className="bg-red-500 text-white p-4 rounded text-center">
        ¡Hola Tailwind v3!
      </div>
    </div>
    
  
  );
};

export default App;
