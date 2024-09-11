import React from "react";

export const Preguntas = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-0 pt-20 mb-28">
      <h2 className="text-grey w-80 leading-tight md:w-11/12 lg:w-8/12 lg:leading-tight text-3xl text-center md:text-4xl lg:text-5xl lg:leading-tight xl:leading-normal md:leading-tight pb-10">
        DE FRUSTRACIONES A{" "}
        <span className="bg-yellow px-2 py-1">SOLUCIONES</span>
      </h2>
      <div className="bg-yellow bg-opacity-40 py-12 px-10   rounded-xl text-center">
        <h3 className="text-2xl lg:text-4xl pt-2 pb-10">
          ¿ ALGO DE ESTO TE SUENA FAMILIAR ?
        </h3>
        <ul className="flex flex-col px-0 lg:px-12">
          <li className="flex py-7 items-center justify-center">
            <span className="text-yellow font-bold text-4xl pr-4">1</span>
            <p className="font-medium text-lg lg:text-xl ">
              ¿Por qué no veo resultados a pesar de seguir una dieta saludable?
            </p>
          </li>
          <li className="flex py-7 items-center justify-center">
            <span className="text-yellow font-bold text-4xl pr-4">2</span>
            <p className="font-medium text-lg lg:text-xl ">
              ¿Cómo puedo perder peso sin sentir hambre todo el tiempo?
            </p>
          </li>
          <li className="flex py-7 items-center justify-center">
            <span className="text-yellow font-bold text-4xl pr-4">3</span>
            <p className="font-medium text-lg lg:text-xl ">
              ¿Cómo puedo comer saludable sin que sea aburrido?
            </p>
          </li>
          <li className="flex py-7 items-center justify-center">
            <span className="text-yellow font-bold text-4xl pr-4">4</span>
            <p className="font-medium text-lg lg:text-xl ">
              ¿Cómo puedo llevar una dieta saludable cuando tengo eventos ?
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
