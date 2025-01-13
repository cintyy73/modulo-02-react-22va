

import { Login } from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import { Header } from "./layout/Header";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";

import './App.css'
import { Users } from "./pages/Users";
import { UsersDetails } from "./pages/UsersDetails";

function App() {
// SPA antes haciamos todo en app
// <Routes/> genera un arbol de rutas y a partir de este nos permite reemplazar la vista de cada componente/pagina que coincida con la url del navegador

// <Route /> Representa una ruta en el "arbol" y necesitamos si o si el path (la url del navegador) y el element (componente/pagina)
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={ <Login />}/>
        <Route path="/register" element={ <Register />}/>

        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<UsersDetails/>}/>


      </Routes>

    </div>
  );
}

export default App;
