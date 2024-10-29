import { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import Personajes from "./components/Personajes";
import ListaPersonajes from "./components/ListadePersonajes";
import { UserContext } from "./context/userContext";
import Login from "./components/Login";
import Administracion from "./components/Administracion";

function App() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Navbar />
      <h1>react router 2 </h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes/" element={<ListaPersonajes />} />
        <Route path="/personajes/:id" element={<Personajes />} />
        <Route
          path="/admin"
          element={user ? <Administracion /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
