import React from "react";
import complete from "../../assets/complete.jpg";
export const Solution = () => {
  return (
    <div className=" flex flex-col lg:flex-row items-center -mt-10">
      <div className="h-full py-20 px-12 flex flex-col items-center lg:items-start">
        <h2 className="text-grey w-80 leading-tight md:w-11/12 lg:w-full lg:pr-10 2xl:w-4/5 lg:leading-tight text-4xl text-center md:text-5xl lg:leading-tight xl:leading-normal md:leading-tight lg:text-start lg:text-5xl ">
          <span className="text-yellow">CUMPLIR</span> CON TU
          <span className="text-yellow"> MISIÓN</span> ES MI OBJETIVO
        </h2>
        <p className="py-8 text-grey text-xl text-center md:text-2xl lg:text-start italic -mt-2 lg:-mt-5 font-medium lg:text-2xl w-full md:w-3/4 lg:w-2/3">
          Mi misión es ayudarte a alcanzar tus metas de salud y bienestar a
          través de una asesoría nutricional personalizada y comprometida.
          Entendemos que cada persona es única, por lo que diseñamos planes de
          alimentación adaptados a tus necesidades y objetivos individuales.
        </p>
        <button className=" text-green font-extrabold cursor-pointer mt-5 poppins flex items-center justify-center bg-none border-none outline outline-green  px-12 md:px-16 lg:px-20 py-3 text-lg font-medium hover:outline-none hover:bg-green hover:text-grey transition-all">
          ¡ Empeza hoy !
        </button>
      </div>
      <div className="lg:pr-28 mb-20 lg:-mt-0 lg:pt-20">
        <img className="w-80 h-auto rounded-2xl " src={complete} alt="" />
      </div>
    </div>
  );
};
