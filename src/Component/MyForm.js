import React, { useState } from "react";

export default function MyForm() {

    const [name, setName] = useState("")
    return (
        <form>
            <label>Enter your name:
                <input type="text" onChange={e => setName(e.target.value)}/>
            </label>
            <div>
                {`Your name is : ${name}`}
            </div>
        </form>
    )
}

