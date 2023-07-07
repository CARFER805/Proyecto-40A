import React from "react";
import styles from "./Card.module.css"

export default function Card({
   name,
   species,
   gender,
   onClose,
   status,
   origin,
   image,
   key,
}) {
   return (
      <div className={styles.div}>
         <button className={styles.btn} onClick={onClose}>X</button>
         <img className={styles.image} src={image} alt={name} />
         <h4 className={styles.name}> {name}</h4>

         <div className={styles.data} >
            <h4>{species}</h4>
            <h4>{gender}</h4>
           
         </div>
      </div>
   );
}
