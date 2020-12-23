import React from 'react'
import {useAuthContent} from "../../content/AuthContent";
import {useAuth} from "../../hooks/useAuth";
import './LoginBlock.scss'
import classNames from 'classnames';

export function LoginBlock() {
    const auth = useAuthContent()
    const { login, logout } = useAuth()

    const tokenClasses = classNames({
        "exist": auth.token
    })

    return (
        <div className={"login-elements"}>
            <div className={"buttons"}>
                <button onClick={login} >login</button>
                <button onClick={logout}>logout</button>
            </div>
            <div className={"token-info " + tokenClasses}>token: {auth.token}</div>
        </div>
    )
}