# BookManager-API

### Introducción

BookManager-API es una aplicación web que utiliza una API para gestionar libros mediante operaciones CRUD. La aplicación está construida utilizando HTML, TypeScript y sigue el patrón MVC (Modelo-Vista-Controlador). Proporciona funcionalidades de autenticación para usuarios y administradores, así como operaciones básicas de administración de libros.

### Estructura del Proyecto

El proyecto está organizado en dos directorios principales:

- **/src**: Contiene el código fuente TypeScript y los recursos de la aplicación.
    - **/controllers**: Contiene controladores para la lógica de negocio.
    - **/models**: Define modelos de datos utilizando interfaces TypeScript.
    - **/views**: Contiene scripts adicionales para las vistas de la aplicación.
    - **index.ts**: Archivo de inicio que maneja la autenticación y la inicialización de la aplicación.
- **/dist**: Contiene el código compilado JavaScript y recursos estáticos para producción.

### Características

- Autenticación de usuarios y administradores.
- Operaciones CRUD para libros.

### Tecnologías Utilizadas

- HTML
- CSS (utilizando Tailwind CSS)
- TypeScript
- Swagger para documentación de API
- Postman para pruebas de API
- Node.js
- Git y GitHub

### Configuración

Para configurar y ejecutar el proyecto, sigue estos pasos:

1. Instala TypeScript globalmente: `npm i -g typescript`
2. Ejecuta `npm init` para inicializar el proyecto.
3. Compila TypeScript en modo watch: `npm run build` (equivale a `tsc --w`).
4. Compila y ejecuta la aplicación: `npm run fast` (equivale a `tsc && node dist/index.js`).

### Endpoints

- **Auth**
    - POST `/api/v1/auth/login`: Inicia sesión con credenciales de usuario.
- **Books**
    - POST `/api/v1/books`: Crea un nuevo libro.
    - GET `/api/v1/books`: Obtiene todos los libros.
    - GET `/api/v1/books/{id}`: Obtiene un libro por ID.
    - PATCH `/api/v1/books/{id}`: Actualiza un libro por ID.
    - DELETE `/api/v1/books/{id}`: Elimina un libro por ID.
- **Users**
    - POST `/api/v1/users`: Crea un nuevo usuario.
    - GET `/api/v1/users`: Obtiene todos los usuarios.
    - PATCH `/api/users/{id}/role?role={role}`: Actualiza el rol de un usuario por ID.

### Ramificación del Proyecto

El proyecto utiliza el siguiente esquema de ramificación:

- **main**: Contiene la versión estable de producción.
- **develop**: Ramificación de desarrollo para características, correcciones y mejoras.
- **feature/x**: Ramas individuales para desarrollar nuevas funcionalidades, fusionadas con `develop`.

### Video de Demostración

Consulta este [video de demostración](https://vimeo.com/988139320?share=copy) para ver cómo se utiliza el código y sus funcionalidades en acción.

### Autor

- GitHub: [@ecc97](https://github.com/ecc97)
- Correos electrónicos: [carmonaedwin5@gmail.com](mailto:carmonaedwin5@gmail.com), [carmonaedwin1123@gmail.com](mailto:carmonaedwin1123@gmail.com)

Este archivo [README.md](https://github.com/ecc97/HU-BooksManager-API/tree/develop#README) proporciona una visión general del proyecto BookManager-API, incluyendo su estructura, características, configuración, endpoints principales y detalles de ramificación.