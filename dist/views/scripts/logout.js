// Selección de elementos del DOM para los botones de cierre de sesión
const logout = document.querySelector('#btn-logout');
const logoutR = document.querySelector('#btn-logout-r');
// Función para gestionar el cierre de sesión
export function logoutUser() {
    logout.addEventListener('click', () => {
        localStorage.removeItem('token'); // Remueve el token del almacenamiento local
        window.location.href = '/dist/'; // Redirige a la página principal 
    });
    // Cuando está en responsive actúa el otro botón que está habilitado cuando está en mobile
    logoutR.addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = '/dist/';
    });
}
