import React from "react";
import arrow from "../../assets/arrow.svg";
import testimonio from "../../assets/testimonio.jpg";

export const Testimonio = () => {
  return (
    <div className="pattern py-5 flex justify-evenly items-center w-screen">
      <div className="h-full py-20 px-12 flex flex-col items-center lg:items-start">
        <h2 className="text-grey w-80 leading-tight md:w-11/12 lg:w-4/5 2xl:w-4/5 lg:leading-tight text-4xl text-center md:text-5xl lg:leading-tight xl:leading-normal md:leading-tight lg:text-start lg:text-6xl ">
          CONOCE COMO <span className="text-yellow">AYUDAMOS</span> A{" "}
          <span className="bg-yellow px-2">VALERIA</span> A MEJORAR SU
          <span className="text-yellow"> CALIDAD DE VIDA</span>
        </h2>
        <p className="py-8 text-grey text-xl text-center md:text-2xl lg:text-start italic -mt-2 lg:-mt-5 font-medium lg:text-2xl w-full md:w-3/4 lg:w-2/4">
          Con un plan nutricional ajustado a sus necesidades, Valeria pudo
          mejorar su bienestar y disfrutar de un estilo de vida más balanceado.
          ¿Estás listo para alcanzar tus metas de salud?
        </p>
        <a className="bg-yellow py-3 px-8 cursor-pointer mt-2 poppins flex items-center justify-center text-green text-xl font-bold hover:bg-transparent hover:outline hover:outline-yellow transition-all">
          Hace de tu bienestar una prioridad
          <img className="w-8 pl-2" src={arrow} alt="calendar" />
        </a>
      </div>
      <div className="pr-20">
        <img className="w-96 rounded-2xl" src={testimonio} alt="" />
      </div>
    </div>
  );
};
