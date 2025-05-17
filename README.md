# Catálogo de Productos con Favoritos 

Aplicación web desarrollada con **React** que permite explorar un catálogo de productos, filtrarlos por categoría y agregar productos a favorito todos los datos se consumen desde la API pública [Fake Store API](https://fakestoreapi.com/).

---

## Tecnologías Utilizadas

- **React** — Librería principal para la construcción de la interfaz.
- **TailwindCSS** — Estilizado moderno y responsive.
- **Vite** — Herramienta de construcción rápida para proyectos React.
- **React Router DOM** — Para manejar rutas dinámicas como `/producto/:id`.
- **React Context API** — Manejo global del estado de favoritos y carrito.
- **localStorage** — Persistencia de favoritos y carrito entre sesiones.

---

## Instrucciones para correr localmente

1. **Clona el repositorio:**

```bash 
git clone https://github.com/tu-usuario/catalogo-productos.git
cd catalogo-productos
```

2. **Instala las dependencias:**
```bash 
npm install
```

3. **Ejecuta la aplicación:**
```bash 
npm run dev
```

4. **Abre en tu navegador:**
```bash 
http://localhost:5173

```

# Descripción de la solución
Esta aplicación cuenta con tres vistas principales:

1. Catálogo (Home)
Lista de productos obtenidos desde Fake Store API.

Filtro por categoría.

Visualización de imagen, nombre, precio y categoría.

Botón ♥ para marcar como favorito.

2. Favoritos
Vista con los productos marcados como favoritos.

Favoritos almacenados de forma persistente en localStorage.

3. Detalle del producto
Imagen ampliada, título, categoría, descripción y precio.

Botón para agregar al carrito(se implementará esta función pronto) y marcar como favorito.

# Despliegue
El proyecto está desplegado en Netlify y puedes acceder a él en:

https://catalogo-productos-chz.netlify.app/



