import React from "react";
import calendar from "../../assets/calendar.svg";
import tool from "../../assets/tool.svg";
import refresh from "../../assets/refresh.svg";
import file from "../../assets/file.svg";
import wacha from "../../assets/wacha.png";
export const Home = () => {
  return (
    <div className=" flex-col lg:flex-row flex items-center pattern py-20 pb-64 lg:pb-8 2xl:py-32">
      <div className="pb-72 lg:pb-10 h-full w-full px-12 lg:w-3/5 flex flex-col items-center justify-between lg:items-start justify-center ">
        <h1 className="text-grey py-4 text-4xl text-center md:text-5xl md:leading-tight lg:text-start lg:text-5xl xl:leading-tight 2xl:leading-tight">
          TRANSFORMA TU SALUD CON <span className="text-yellow">ASESORÍA</span>{" "}
          <span className="text-yellow">NUTRICIONAL</span> PERSONALIZADA
        </h1>
        <p className=" py-4 w-full text-grey text-xl text-center md:text-2xl lg:text-start italic -mt-2 font-medium lg:text-2xl lg:w-3/4">
          Descubrí cómo un plan de nutrición adaptado a tus necesidades puede
          mejorar tu calidad de vida
        </p>
        <button className=" text-green font-extrabold cursor-pointer mt-5 poppins flex items-center justify-center bg-none border-none outline outline-green  px-12 md:px-16 lg:px-28 py-3 text-lg font-medium hover:outline-none hover:bg-green hover:text-grey transition-all">
          <a
            className="text-green no-underline"
            href="https://app.acuityscheduling.com/schedule.php?owner=33406992"
          >
            Agenda tu turno
          </a>
        </button>
        <ul className="-ml-11 mt-8 lg:mt-10 list-none flex-col lg:flex-row flex items-center">
          <li className=" text-grey font-grey font-medium text-base md:text-lg pb-2 lg:pb-0 lg:text-lg flex items-center pr-4">
            <img className="pr-1 w-8" src={file} alt="file" />
            Planes Personalizados
          </li>
          <li className=" text-grey font-grey font-medium text-base md:text-lg pb-2 lg:pb-0 lg:text-lg flex items-center pr-4">
            <img className="pr-1 w-8" src={refresh} alt="refresh" />
            Apoyo Continuo
          </li>
          <li className=" text-grey font-grey font-medium text-base md:text-lg pb-2 lg:pb-0 lg:text-lg flex items-center">
            <img className="pr-1 w-8" src={tool} alt="tool" />
            Herramientas Prácticas
          </li>
        </ul>
      </div>
      <div className="flex relative items-center -ml-96 lg:ml-28 ">
        <div className="rotate w-48 h-80 md:w-60 md:h-96 rounded-2xl bg-green absolute z-10 left-12 md:left-0"></div>
        <div className="rotate-negative w-48 h-80 md:w-60 md:h-96 rounded-2xl bg-yellow absolute left-36 md:left-40"></div>
        <img
          className="degradado z-20 absolute w-72 md:w-96 left-12 md:left-5 -top-32 md:-top-48 "
          src={wacha}
          alt="medica"
        />
      </div>
    </div>
  );
};
