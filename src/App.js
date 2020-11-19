import './App.css';
import Abajo from './components/abajo/Abajo';
import Formulario from "./components/abajo/formulario/Formulario"


function App() {
  return (
    <>
    <div>
    <header class="cabezera"> <img class="logo" src="logo.png" alt="logo"/></header>
    </div>
    <section><Abajo/>  <Formulario/></section>
    </>
  );
}

export default App;
