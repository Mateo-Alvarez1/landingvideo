import React from "react";

import calendar from "../../assets/calendar.svg";
export const Solution = () => {
  return (
    <div className="py-5">
      <div className="px-12 py-12 flex flex-col items-center lg:items-start">
        <h2 className="h-full py-4 2xl:pr-20 w-screen text-grey leading-tight md:w-11/12 lg:w-3/5 2xl:w-2/4 lg:leading-tight text-4xl text-center md:text-5xl md:leading-tight lg:text-start lg:text-6xl ">
          <span className="text-yellow">CUMPLIR</span> CON TU
          <span className="text-yellow"> MISION</span> ES MI OBJETIVO
        </h2>
        <p className="py-5 text-grey text-xl text-center md:text-2xl lg:text-start italic -mt-2 lg:-mt-5 font-medium lg:text-2xl w-full md:w-3/4 lg:w-2/4">
          Mi misión es ayudarte a alcanzar tus metas de salud y bienestar a
          través de una asesoría nutricional personalizada y comprometida.
          Entendemos que cada persona es única, por lo que diseñamos planes de
          alimentación adaptados a tus necesidades y objetivos individuales.
        </p>
        <button className=" text-green font-extrabold cursor-pointer mt-5 poppins flex items-center justify-center bg-none border-none outline outline-green  px-12 md:px-16 lg:px-20 py-3 text-lg font-medium hover:outline-none hover:bg-green hover:text-grey transition-all">
          Empeza hoy !
        </button>
      </div>
      <div></div>
    </div>
  );
};
