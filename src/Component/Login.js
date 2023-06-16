import React, { useState } from "react";
import "./Login.css";

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const a = [
        {
            item : "A",
            date : "25 jan",
            mail : true
        },
        {
            item : "B",
            date : "25 jan"
        },

    ] 
    return (
        <>
            <div className="login-page">
                <div className="login-heading">
                    Login Page
                </div>
                <div className="login-username">
                    Username
                    <input type="text" onChange={e=>setUsername(e.target.value)}></input>
                </div>
                <div className="login-password">
                    Password 
                    <input type="password" onChange={e=>setPassword(e.target.value)}></input>
                </div>

            </div>


        </>
    )
}