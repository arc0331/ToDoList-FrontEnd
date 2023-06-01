import React, { useState } from "react";
import "./Register.css";

export default function Register() {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister = () => {
        console.log(name, username, password)
    }

    return (
        
        <>
            <div className="registration-content">
                <div className="registration-page-heading">
                    Registration Page<br/><br/>
                </div>
                <div className="registration-body" >
                    <div className="registration-name">
                        Name <br/>
                        <input type="text" onChange={e=> setName(e.target.value)}></input><br/>
                    </div>
                    <div className="registration-username">
                        Username <br/>
                        <input type="text" onChange={e=> setUsername(e.target.value)}></input><br/>
                    </div>
                    <div className="registration-password">
                        Password <br/>
                        <input type="password" onChange={e=> setPassword(e.target.value)}></input><br/>
                    </div>
                    <div className="register-button">
                        <input type="button" value={"Register"} onClick={handleRegister}></input>
                    </div>
                </div>
            </div>

        </>
    )
}