import React from "react";
import arrow from "../../assets/arrow.svg";
const servicios = [
  {
    id: Math.random * 3,
    title: "Planes Personalizados",
    descripcion:
      "Creación de dietas y planes nutricionales adaptados a las necesidades y objetivos individuales",
  },
  {
    id: Math.random * 3,
    title: "Asesoría Nutricional",
    descripcion:
      "Dietas diseñadas para personas con condiciones de salud como diabetes, hipertensión, intolerancias alimentarias o colesterol alto",
  },
  {
    id: Math.random * 3,
    title: "Nutrición Deportiva",
    descripcion:
      "Planes especializados para deportistas o personas activas que buscan optimizar su rendimiento físico y recuperación",
  },
];

export const Servicios = () => {
  return (
    <div className="bg-yellow bg-opacity-40 flex flex-col items-center py-20">
      <h3 className="text-grey  py-4 text-4xl text-center md:text-5xl md:leading-tight lg:text-start lg:text-5xl xl:leading-tight 2xl:leading-tight">
        TE <span className="text-yellow">AYUDAMOS</span> A MEJORAR
      </h3>
      <div className="  cursor-pointer flex flex-col md:w-11/12 lg:flex-row items-center justify-between lg:w-full h-full p-10 ">
        {servicios.map((servicio) => (
          <div
            key={servicio.id}
            className="flex rounded-2xl flex-col m-4 py-5 px-8 items-center text-center outline outline-2 outline-green hover-scale transition-all"
          >
            <h3 className="text-gre bg-yellow  py-2 px-3 text-xl text-center md:leading-tight lg:text-start 2xl:text-3xl xl:leading-tight 2xl:leading-tight">
              {servicio.title}
            </h3>
            <p className="my-5 md:px-3 font-medium italic text-xl">
              {servicio.descripcion}
            </p>
            <a className="cursor-pointer font-bold text-lg text-green flex items-center hover:text-yellow transition-all">
              Conoce Más <img className="w-6 pl-2" src={arrow} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
