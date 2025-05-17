import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext'; // Añadir contexto de favoritos

export default function ProductDetail() {
  const {id } = useParams();
  const [producto, setProducto] = useState(null);
  const { favoritos, toggleFavorito } = useFavorites(); // Usar contexto de favoritos

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducto(data));
  }, [id]);

  if (!producto) return (
    <div className="flex justify-center items-center h-64">
      <p className="text-lg text-gray-600">Cargando producto...</p>
    </div>
  );

  const isFavorito = favoritos.includes(producto.id); // verificar si el porducto es favorito


  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Contenedor con la imagen del producto*/}
        <div className="bg-gray-50 p-8 flex items-center justify-center h-full">
          <img
            src={producto.image}
            alt={producto.title}
            className="max-h-96 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Información del producto */}
        <div className="p-8 space-y-6">
          {/* Encabezado con título y categoría */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">{producto.title}</h1>
            <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800">
              {producto.category}
            </span>
          </div>

          {/* Descripción*/}
          <div className="prose max-w-none text-gray-700">
            <p className="leading-relaxed">{producto.description}</p>
          </div>

          {/* Precio con formato $00.00 */}
          <div className="text-3xl font-bold text-gray-900">
            ${producto.price.toFixed(2)}
          </div>

          {/* Botón simulado de compra o favoritos opcional */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex-1 flex items-center justify-center gap-2">
              <span>🛒</span>
              Agregar al carrito
            </button>

            <button
              onClick={() => toggleFavorito(producto.id)}
              className={`px-4 py-3 font-medium rounded-lg border transition-colors flex items-center justify-center gap-2 ${
                isFavorito 
                  ? 'bg-red-50 border-red-200 text-red-600' 
                  : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {isFavorito ? '❤️ Quitar de favoritos' : '🤍 Añadir a favoritos'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}