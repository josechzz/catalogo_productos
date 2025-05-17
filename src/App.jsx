import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import ProductDetail from './pages/ProductDetail';
import Header from './components/Header';

// Componente principal con rutas
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Página de favoritos */}
        <Route path="/favoritos" element={<Favorites />} />

        {/* Página de detalle por ID */}
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
