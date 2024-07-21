const logout = document.querySelector('#btn-logout') as HTMLButtonElement
const logoutR = document.querySelector('#btn-logout-r') as HTMLButtonElement

export function logoutUser(): void {
    logout.addEventListener('click', () => {
        localStorage.removeItem('token')
        window.location.href = '/dist/'
    })
    
    logoutR.addEventListener('click', () => {
        localStorage.removeItem('token')
        window.location.href = '/dist/'
    })
}