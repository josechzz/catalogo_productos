import { createContext, useContext, useState, useEffect } from 'react';

// 1. Creamos el contexto de favoritos
const FavoritesContext = createContext();

// 2. Creamos un componente proveedor del contexto
export function FavoritesProvider({ children }) {
  // Estado local para almacenar los IDs de los productos favoritos
  const [favoritos, setFavoritos] = useState([]);

  // Al montar el componente, cargamos los favoritos guardados en localStorage
  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem('favoritos') || '[]');
    setFavoritos(guardados);
  }, []);

  // Cuando cambien los favoritos, los guardamos en localStorage para que persistan
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  // Función para alternar si un producto está en favoritos o no
  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Proveemos el estado y la función a todos los componentes hijos
  return (
    <FavoritesContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// 3. Hook personalizado para acceder fácilmente al contexto en cualquier componente
export function useFavorites() {
  return useContext(FavoritesContext);
}
