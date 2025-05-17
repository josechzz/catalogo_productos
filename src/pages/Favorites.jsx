import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useFavorites } from '../context/FavoritesContext'; // Usamos el contexto

export default function Favorites() {
  const { favoritos } = useFavorites(); // Obtenemos la lista de IDs favoritos
  const [productos, setProductos] = useState([]);

  // Al cargar (y cada vez que cambia la lista de favoritos), obtenemos los productos favoritos desde la API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products') // Obtenemos todos los productos
      .then((res) => res.json())
      .then((data) => {
        // Filtramos solo los que están en la lista de favoritos
        const productosFavoritos = data.filter((p) => favoritos.includes(p.id));
        setProductos(productosFavoritos);
      });
  }, [favoritos]); // Este efecto se vuelve a ejecutar si cambia `favoritos`

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mis Favoritos</h1>

      {/* Si no hay productos, mostramos un mensaje */}
      {productos.length === 0 ? (
        <p>No tienes productos favoritos.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Mostramos las tarjetas de producto favoritas */}
          {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  );
}
