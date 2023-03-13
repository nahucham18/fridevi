import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import Nosotros from './views/Nosotros/Nosotros'
import Noticias from './components/Noticias/Noticias'
import Clientes from './views/Clientes/Clientes'
import Contacto  from './views/Contacto/Contacto';
import Login from './views/Login/Login'


function App() {
  return (
    <div className="App">
        <Nav/>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/noticias' element={<Noticias/>}/>
        <Route path='/clientes' element={<Clientes/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
