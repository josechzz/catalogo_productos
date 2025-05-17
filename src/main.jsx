import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { FavoritesProvider } from './context/FavoritesContext'; // Importamos el proveedor

const rootElement = document.getElementById('root');

// Renderizamos la aplicación y la envolvemos con el proveedor de favoritos
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <FavoritesProvider> {/* Permite que toda la app tenga acceso al contexto */}
      <App />
    </FavoritesProvider>
  </React.StrictMode>
);
