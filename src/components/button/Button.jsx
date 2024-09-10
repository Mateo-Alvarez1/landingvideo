import React from "react";
import calendar from "../../assets/calendar.svg";
export const Button = () => {
  return (
    <button className=" text-green font-extrabold cursor-pointer  poppins flex items-center justify-center bg-none border-none outline outline-green  px-12 md:px-16 lg:px-12 py-3 text-lg font-medium hover:outline-none hover:bg-green hover:text-grey transition-all">
      Agendar turno
    </button>
  );
};
