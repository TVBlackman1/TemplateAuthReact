import {useAuthContent} from "../content/AuthContent";


/**
 *
 * @returns {{logout: logout, login: login}}
 */
export function useAuth() {
    const auth = useAuthContent()
    function login(data) {
        // data - login, password...
        const token = "A2E...G9"
        auth.setToken(token)
    }

    function logout() {
        auth.setToken(null)
    }

    return {
        login, logout
    }
}