import React from "react";
import styles from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card({
   name,
   species,
   gender,
   onClose,
   status,
   origin,
   image,
   id,
}) {
   return (
      <div className={styles.div}>
         <button className={styles.btn} onClick={() => onClose(id)}>
            X
         </button>
         <h4 className={styles.name}> {name}</h4>

         <Link to = {`/detail/${id}`}>
            <img className={styles.image} src={image} alt={name} />
         </Link>
        
         <div className={styles.data} >
            <h4>{species}</h4>
            <h4>{gender}</h4>
           
         </div>
      </div>
   );
}
