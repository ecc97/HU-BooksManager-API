const logout = document.querySelector('#btn-logout');
const logoutR = document.querySelector('#btn-logout-r');
export function logoutUser() {
    logout.addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = '/dist/';
    });
    logoutR.addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = '/dist/';
    });
}
