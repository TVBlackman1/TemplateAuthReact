import React from 'react'
import {useAuthContent} from "../content/AuthContent";
import {useAuth} from "../hooks/useAuth";

export function LoginBlock() {
    const auth = useAuthContent()
    const { login, logout } = useAuth()

    return (
        <div>
            <button onClick={login} >login</button>
            <button onClick={logout}>logout</button>
            <div>token: {auth.token}</div>
        </div>
    )
}