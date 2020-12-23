import React, { useState, useEffect, useContext } from 'react'
import { useStorageToken } from "../hooks/useStorageToken";

const AuthContent = React.createContext({
    token: null,
    setToken: () => {}
})

export function useAuthContent() {
    return useContext(AuthContent)
}


export function AuthProvider({children}) {
    const [tokenContext, setContextToken] = useState(null)
    const { getStorageToken, setStorageToken, removeStorageToken } = useStorageToken()

    useEffect(() => {
        setContextToken(getStorageToken())
    }, [tokenContext])

    function setToken(token) {
        console.log(`Set token: ${token}`)
        setContextToken(token)
        token ? setStorageToken(token) : removeStorageToken()
    }

    return (
        <AuthContent.Provider value={{token: tokenContext, setToken}}>{children}</AuthContent.Provider>
    )
}
