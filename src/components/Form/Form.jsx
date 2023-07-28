import styles from "./form.module.css";
import React, { useState } from "react";
import validation from "./validation";
export default function Form(props){

const [userData, setUserData] = useState(
        {
            email: "",
            password: ""
        }
) 

const [errors, setErrors] = useState({})

const handleChange = event => {
    const {name, value} = event.target;
    setUserData({
            ...userData,
            [name]: value // puede recibir email o password es una propiedad de EMC6
    })
    setErrors(validation({
        ...userData,
        [name]: value
    }))
}

const handleSubmit = event => {
    event.preventDefault();
    props.login(userData);



}
return(
    <div>
        <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input 
                placeholder="Email...."
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}

            />
            <p>{errors.email ? errors.email : null}</p>
            
            <label>Password: </label>
            <input 
                 placeholder="Password...."
                 type="password"
                 name="password"
                 value={userData.password}
                 onChange={handleChange}
            
            />
            <p>{errors.password && errors.password}</p>

            <hr/>
            <button type="submit" >Submit</button>
        </form>

    </div>
    )
}