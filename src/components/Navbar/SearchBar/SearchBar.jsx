import React, { useState } from "react";
import styles from "./SearchBar.modules.css";



export default function SearchBar(props) {
   const[id, setId] = useState("")
   const handleChange = (evento) => {// modiffica el estado del Id

      console.log("Funciona el handle",evento.target.value);
      setId(evento.target.value);
   }

   return (
      <div className={styles.div}>
         <input
            className={styles.input}
            type="text"
            placeholder="Busca un personaje..." 
            onChange={handleChange}// por el comportamineto de onCahnge, y de React, la funcion handleChange recibe el parametyro evento 
            value={id}
         />
         <button className={styles.btn} onClick= {() => props.onSearch(id)}>
         Agregar
         </button>
      </div>
   );
}
