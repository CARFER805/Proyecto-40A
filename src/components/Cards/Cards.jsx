import Card from "./Singular/Card.jsx";
import styles from "./Cards.module.css"

export default function Cards(props) {
  
   return (
   <div className={styles.div}>
    {props.characters.map((pj) => (
      <Card
         key={pj.id}// para que react no de error porque los elementos no tengan una keys
         id= {pj.id}
         name={pj.name}
         species={pj.species}
         onClose={props.onClose}
         gender={pj.gender}
         status={pj.status}
         image={pj.image}
         origin={pj.origin.name}
      />
   ))}         
   </div>
   );  
}
