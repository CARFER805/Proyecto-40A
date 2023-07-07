import React from "react";
import styles from "./SearchBar.modules.css";

export default function SearchBar(props) {
   return (
      <div className={styles.div}>
         <input
            className={styles.input}
            type="text"
            placeholder="Busca un personaje..." 
         />
         <button className={styles.btn} onClick={props.onSearch}>
         Agregar
         </button>
      </div>
   );
}
