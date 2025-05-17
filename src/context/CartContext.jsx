import { createContext, useContext, useState, useEffect } from 'react';

// Crear contexto
const CartContext = createContext();

// Proveedor del contexto
export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // Cargar carrito desde localStorage
  useEffect(() => {
    const guardado = JSON.parse(localStorage.getItem('carrito') || '[]');
    setCarrito(guardado);
  }, []);

  // Guardar cambios en localStorage
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  // Agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const yaExiste = prev.find((p) => p.id === producto.id);
      if (yaExiste) {
        // Si ya existe, aumentamos la cantidad
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      // Si no está, lo agregamos con cantidad 1
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado
export function useCart() {
  return useContext(CartContext);
}
