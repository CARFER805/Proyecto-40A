import styles from "./form.module.css";
import React, { useState } from "react";
export default function Form(props){

const [userData, setUserData] = useState(
        {
            email: "",
            password: "",
        }
) 

const handleChange = event => {
    const {name, value} = event.target
    setUserData({
            ...userData,
            [name]: value // puede recibir email o password es un propieda de EMC6
    })
}

return(
    <div>
        <form>
            <label>Email: </label>
            <input 
                placeholder="Email...."
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}

            />

            <label>Password: </label>
            <input 
                 placeholder="Password...."
                 type="text"
                 name="password"
                 value={userData.password}
            
            />
            <hr/>
            <button type="submit" >Submit</button>
        </form>

    </div>
    )
}