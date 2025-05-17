import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

// Página principal que muestra la lista de productos con filtrado
export default function Home() {
  const [productos, setProductos] = useState([]);
  const [categoria, setCategoria] = useState('');
  const [categorias, setCategorias] = useState([]);

  // Obtener productos y categorías desde Fake Store API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProductos(data));

    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategorias(data));
  }, []);

  // Filtrar productos según la categoría seleccionada
  const productosFiltrados = categoria
    ? productos.filter(p => p.category === categoria)
    : productos;

  return (
    <div className="p-4">
      {/* Selector de categorías */}
      <select
        onChange={e => setCategoria(e.target.value)}
        className="mb-4 border p-2"
      >
        <option value="">Todas las categorías</option>
        {categorias.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Renderizar tarjetas de producto */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {productosFiltrados.map(producto => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}
