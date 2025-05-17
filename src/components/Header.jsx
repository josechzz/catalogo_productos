import { Link } from 'react-router-dom';

// Header básico con enlaces de navegación
export default function Header() {
  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-xl font-bold">Catálogo</h1>
      <nav className="space-x-4">
        {/* Enlaces de navegación con React Router */}
        <Link to="/">Inicio</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  );
}
