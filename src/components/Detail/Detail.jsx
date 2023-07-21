import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function Detail(){

    const { id }= useParams(); // (path="/detail/:id")toma los parametros dinamicos del Path y genera un objeto

    const [pjDetail, setPjDetail] = useState({});// estado local
    
    useEffect(() => {

    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
                if (data.name) {
                  setPjDetail(data);
            } 
            else {
                    window.alert('No hay personajes con ese ID');
            }
   });
   return () => { console.log("Me desmonte, adios!")};

    }, []);

    return(
        <div>
            <h3>{pjDetail.name && pjDetail.name}</h3>
            <h5>{pjDetail.status ? pjDetail.status: ":(no hay status"}</h5>
            <img src = {pjDetail.image} alt={pjDetail.name}/>

            <section>
                <span>Species: {pjDetail.species}</span>
                <span>Gender:{pjDetail.gender}</span>
                <span>name {pjDetail.origin?.name}</span>
            </section>


        </div>
        );
}


// Fucionamineto del useEffect
// [] montaje
// [id] update
// () => {return () => {}} desmontaje