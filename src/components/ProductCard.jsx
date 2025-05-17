import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

export default function ProductCard({ producto }) {
  const { favoritos, toggleFavorito } = useFavorites();
  const isFavorito = favoritos.includes(producto.id);

  return (
    <div className="border border-gray-200 rounded-lg p-4 relative hover:shadow-md transition-shadow duration-300 bg-white group">
      {/* Imagen del producto con mejor aspecto */}
      <div className="h-48 flex items-center justify-center mb-4 bg-gray-50 rounded-lg overflow-hidden">
        <img 
          src={producto.image} 
          alt={producto.title} 
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" 
        />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="space-y-2">
        {/* Título truncado para evitar desbordamiento */}
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2 h-14">
          {producto.title}
        </h2>
        
        {/* Categoría con estilo de badge */}
        <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
          {producto.category}
        </span>

        {/* Precio con mejor formato */}
        <p className="text-xl font-bold text-gray-900 mt-2">
          {producto.price ? `$${producto.price.toFixed(2)}` : 'Precio no disponible'}
        </p>
      </div>

      {/* Botón de favorito */}
      <button
        onClick={() => toggleFavorito(producto.id)}
        className={`absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:scale-110 transition-all ${
          isFavorito ? 'text-red-500' : 'text-gray-400 hover:text-red-400'
        }`}
        aria-label={isFavorito ? 'Quitar de favoritos' : 'Añadir a favoritos'}
      >
        {isFavorito ? '❤️' : '🤍'}
      </button>

      {/* Botón de "Ver más" */}
      <Link 
        to={`/producto/${producto.id}`} 
        className="mt-4 inline-block w-full py-2 text-center font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        Ver detalles
      </Link>
    </div>
  );
}