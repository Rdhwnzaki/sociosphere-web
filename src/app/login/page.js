"use client"
import React, { useEffect } from 'react'

function Login() {
    useEffect(() => {
        document.title = "Login";
    }, []);
    return (
        <div>Login</div>
    )
}

export default Login