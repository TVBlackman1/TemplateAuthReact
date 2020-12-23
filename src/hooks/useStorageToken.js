
const localStorageToken = "userToken"

/**
 * This function is using for getting and setting user token in localStorage
 * Called from useAuth for authorization and from AuthContext
 * @returns {{setToken: function, removeToken: function, getToken: function}}
 */
export function useToken() {
    function setToken(token) {
        // data - login, password...
        localStorage.setItem(localStorageToken, token)

    }

    function getToken() {
        return localStorage.getItem(localStorageToken)
    }

    function removeToken() {
        localStorage.removeItem(localStorageToken)
    }

    return {
        setToken, getToken, removeToken
    }

}