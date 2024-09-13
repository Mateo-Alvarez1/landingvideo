import React from "react";

export const Footer = () => {
  return (
    <div className="pattern flex flex-col lg:flex-row items-center justify-between h-full w-full lg:px-12 py-20 lg:py-10 m-0">
      <p className="text-green font-extrabold text-xl py-5 lg:py-0">
        Lic.Daniela Rodriguez
      </p>
      <ul className="-ml-10 py-5  lg:py-0 lg:-ml-0 flex flex-col list-none justify-between items-center">
        <li className=" font-medium text-lg text-grey px-4 cursor-pointer hover:text-green hover:opacity-80 transition-all">
          Inicio
        </li>
        <li className=" font-medium text-lg text-grey px-4 cursor-pointer hover:text-green hover:opacity-80 transition-all">
          Solución
        </li>
        <li className=" font-medium text-lg text-grey px-4 cursor-pointer hover:text-green hover:opacity-80 transition-all">
          Testimonios
        </li>
        <li className=" font-medium text-lg text-grey px-4 cursor-pointer hover:text-green hover:opacity-80 transition-all">
          Preguntas Frecuentes
        </li>
      </ul>
      <button className=" text-green font-extrabold px-12 cursor-pointer mt-5 poppins flex items-center justify-center bg-none border-none outline outline-green md:px-16 lg:px-28 py-3 text-lg font-medium hover:outline-none hover:bg-green hover:text-grey transition-all">
        <a
          className="text-green no-underline"
          href="https://app.acuityscheduling.com/schedule.php?owner=33406992"
        >
          Agenda tu turno
        </a>
      </button>
    </div>
  );
};
