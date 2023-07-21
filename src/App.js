import style from './App.module.css';
//import Cards from "./components/Cards/Cards"
import Nav from './components/Navbar/Nav.jsx';
import { useState } from "react";
import axios from "axios";
import Detail from "./components/Detail/Detail.jsx"
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Form from './components/Form/Form.jsx';

function App() {


   function onSearch(dato) {
      axios(`https://rickandmortyapi.com/api/character/${dato}`).then((respuesta) => {
      
      if (respuesta.data.name) {
          setCharacters((oldChars) => [...oldChars, respuesta.data]);
         } 
      else {
          window.alert('¡No hay personajes con este ID!');
         }
      })
      .catch((err) => console.log(err));
   }

   function onClose(id){
         setCharacters(
            characters.filter((pj) => {
               return pj.id !== Number(id)})
         );
   }

   const [characters, setCharacters] = useState([]);
   const location = useLocation();
 

   return (
      <div className={style.App}>
         { 
            location.pathname !== "/" &&  <Nav onSearch={onSearch}/>
         }

         <Routes>
            <Route path="/" element={<Form/>}/>
            <Route
               path="/home"
               element={<Home characters={characters} onClose={onClose} />}
            />

            <Route path="/about" element={<About/>} />
          
            <Route path="/detail/:id" element={<Detail/>} />
         </Routes>

      </div>
   );
}

export default App;


// lo que tenemos con Axios pero con fetch
//fetch(`https://rickandmortyapi.com/api/character/${dato}`)
//.then(respuesta => respuesta.json())
//.then((respuestaJson) => {
      
      //if (respuesta.data.name) {
        //  setCharacters((oldChars) => [...oldChars, respuestaJson]);
      //   } 
    //  else {
  //        window.alert('¡No hay personajes con este ID!');
//         }
//   })

//.catch((err) => console.log(err));
   
