// Importación de modelos y controladores 
import { RequestLogin, ResponseLogin } from "./models/auth.model.js"
import { AuthController } from "./controllers/auth.controller.js"

// DOM cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtención de elementos del formulario y campos de entrada
    const loginForm = document.getElementById('loginForm') as HTMLFormElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    const authController: AuthController = new AuthController(); // Instancia del controlador de autenticación

     // Evento de envío del formulario (inicio de sesión)
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Construcción del objeto de datos para iniciar sesión
        const dataToLogin: RequestLogin= {
            email: emailInput.value,
            password: passwordInput.value
        };

        try {
            const resultLogin: ResponseLogin = await authController.postLogin(dataToLogin); // Llamada al método para enviar los datos de inicio de sesión al servidor
            const token: string = resultLogin.data.token; // Extracción del token de la respuesta
            localStorage.setItem('token', token); // Almacenamiento del token en el localStorage
            alert('Bienvenido')
            window.location.href = 'views/pages/books.html'; // redirección a la página de libros
        } catch (error) {
            console.error(`Login error: ${error}`); // Manejo de errores en caso de falla en el inicio de sesión
        }
    });
});

