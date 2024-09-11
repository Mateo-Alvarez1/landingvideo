import React from "react";
import { NavBar } from "./components/nav/NavBar";
import { Home } from "./components/home/Home";
import { Solution } from "./components/solution/Solution";
import { Testimonio } from "./components/testimonio/Testimonio";
import { Carrousel } from "./components/carrousel/Carrousel";
import { Preguntas } from "./components/F&Q/preguntas";
import { Footer } from "./components/footer/Footer";
import { Servicios } from "./components/servicios/Servicios";
export const App = () => {
  return (
    <div className="poppins">
      <NavBar />
      <Home />
      <Solution />
      <Servicios />
      <Testimonio />
      <Carrousel />
      <Preguntas />
      <Footer />
    </div>
  );
};
