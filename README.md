**Solicitud del Cliente: Desarrollo de un Blog Básico con Rutas y Navegación**

El cliente solicita el desarrollo de un blog básico que incluya las siguientes características y funcionalidades:

1. **Página de Inicio**  
   - Crear una ruta para la página de inicio (`/`) que muestre una lista de publicaciones del blog.
   - Cada publicación debe incluir un título, un extracto del contenido, y un enlace para ver más detalles de la publicación.

2. **Página de Detalles**  
   - Crear una ruta para la página de detalles (`/post/:id`) que permita mostrar una publicación en particular basada en su ID.
   - La página debe incluir el título completo, el contenido completo de la publicación y otros detalles relevantes (fecha, autor, etc.).

3. **Página de Creación**  
   - Crear una ruta para la página de creación (`/create`) que permita a los usuarios crear una nueva publicación del blog.
   - El formulario debe incluir campos como título, contenido y autor. 
   - Utilizar validación básica para los campos obligatorios.

4. **Enlaces de Navegación**  
   - Agregar un sistema de navegación que permita moverse entre las rutas principales:
     - Página de Inicio
     - Página de Creación
     -  enlaces dinámicos a las páginas de detalles desde las publicaciones listadas en la página de inicio.

5. **Gestión de Estado con Context API**  
   - Implementar Context API para gestionar el estado global de las publicaciones del blog.
   - El estado debe incluir:
     - La lista de publicaciones.
     - Funciones para agregar una nueva publicación y buscar una por ID.

6. **Extras Solicitados**  
  
   - Asegurar que todas las rutas sean accesibles mediante navegación directa.  

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
