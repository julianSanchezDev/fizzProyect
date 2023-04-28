import './App.css'
import Home from './components/homeCarpeta/Home'
import CardsRellenos from "./components/homeCarpeta/CardsRellenos";
import Clientes from "./components/homeCarpeta/Clientes";
import Formulario from "./components/homeCarpeta/Formulario";
import PiePagina from "./components/homeCarpeta/PiePagina";
import PreguntasFrecuentes from './components/homeCarpeta/PreguntasFrecuentes';
import FondoHome from './components/homeCarpeta/FondoHome';


function App() {
  
  return (
    <>
      <Home/>
      <FondoHome/>
      <CardsRellenos/>
      <Clientes/>
      <PreguntasFrecuentes/>
      <Formulario/>
      <PiePagina/>
     
    </>
  )
}

export default App
