
import './App.css';
import ListaLibros from './components/ListaLibros';
import {libros} from './data/libros';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AcercaDe from './components/AcercaDe.';
import PaginaNoEncontrada from './components/PaginaNoEncontrada';
import Menu from './components/Menu';
import DetalleLibro from './components/DetalleLibro';


function App() {
  return (
    <>
     <div className="container">
    <BrowserRouter>
    <Menu />
    <Routes>
     <Route path='/' element={<ListaLibros libros={libros} />} />
     <Route path='/acerca-de' element={<AcercaDe/>} />
     <Route path='/libro/:id' element={<DetalleLibro libros={libros} />} />
     <Route path='*' element={<PaginaNoEncontrada/>} />
    </Routes>
    </BrowserRouter>  
     </div>
    </>
  );
}

export default App;
