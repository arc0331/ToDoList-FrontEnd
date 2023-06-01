import React, { useState } from "react";

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
            <div className="">
                Login Page
            </div>
            <div>
                Username 
                <input type="text" onChange={e=>setUsername(e.target.value)}></input>
            </div>
            <div>
                Password 
                <input type="password" onChange={e=>setPassword(e.target.value)}></input>
            </div>



        </>
    )
}