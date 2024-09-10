import React from "react";
import { Button } from "../button/Button";
import menu from "../../assets/menu.svg";
export const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-5 sm:px-12 py-10 ">
      <p className="text-green font-extrabold text-xl">Lic.Daniela Rodriguez</p>
      <ul className="hidden lg:flex list-none justify-between items-center">
        <li className=" font-medium text-lg text-grey px-4 cursor-pointer hover:text-green hover:opacity-80 transition-all">
          Inicio
        </li>
        <li className=" font-medium text-lg text-grey px-4 cursor-pointer hover:text-green hover:opacity-80 transition-all">
          Solucion
        </li>
        <li className=" font-medium text-lg text-grey px-4 cursor-pointer hover:text-green hover:opacity-80 transition-all">
          Testimonios
        </li>
        <li className=" font-medium text-lg text-grey px-4 cursor-pointer hover:text-green hover:opacity-80 transition-all">
          Preguntas Frecuentes
        </li>
      </ul>
      <Button />
      <img className="lg:hidden w-8" src={menu} alt="" />
    </div>
  );
};
