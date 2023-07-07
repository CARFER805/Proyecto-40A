import './App.css';
//import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
//import characters, { Rick } from './data.js';
import Nav from './components/Navbar/Nav';
import { useState } from "react";

function App() {

   const [characters, setCharacters] = useState([
     
   ]);

   const onSearch = () => {

   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <div>
            <Cards characters={characters}  />

         </div>  
       
      </div>
   );
}

export default App;
