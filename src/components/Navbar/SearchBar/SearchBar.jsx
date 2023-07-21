import React, { useState } from "react";
import styles from "./SearchBar.modules.css";



export default function SearchBar(props) {
   const[id, setId] = useState("")
   const handleChange = (evento) => {

      console.log("Funciona el handle",evento.target.value);
      setId(evento.target.value);
   }

   return (
      <div className={styles.div}>
         <input
            className={styles.input}
            type="text"
            placeholder="Busca un personaje..." 
            onChange={handleChange}
            value={id}
         />
         <button className={styles.btn} onClick= {() => props.onSearch(id)}>
         Agregar
         </button>
      </div>
   );
}
