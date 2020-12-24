
const localStorageToken = "userToken"

/**
 * This function is using for getting and setting user token in localStorage.
 * Called from useAuth for authorization and from AuthContext.
 * @return {{removeStorageToken: removeStorageToken, getStorageToken: (function(): string), setStorageToken: setStorageToken}}
 */
export function useStorageToken() {
    function setStorageToken(token) {
        // data - login, password...
        localStorage.setItem(localStorageToken, token)

    }

    function getStorageToken() {
        return localStorage.getItem(localStorageToken)
    }

    function removeStorageToken() {
        localStorage.removeItem(localStorageToken)
    }

    return {
        setStorageToken, getStorageToken, removeStorageToken
    }

}