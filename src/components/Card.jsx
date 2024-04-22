import React from "react";
import { useState,useEffect } from "react";


const Card = ({ID, Name, Email, Number}) => {

  return (
    <div className="parent">

      <div className=" flex w-11/12 bg-gray-700 h-20 m-auto mt-16 rounded-full  justify-between text-center items-center ps-20 pe-20">
      <div className="flex gap-3">
        <h1 className=" text-xl">{ID}.</h1>
        <h1 className=" text-xl">{Name?Name:'loading'}</h1>
      </div>
        
        <h1 className=" text-xl">{Email?Email:'loading'}</h1>
        <h1 className="text-xl">{Number?Number:'loading'}</h1>
    
      </div>
      <div className="flex w-2/12 justify-around h-8 m-auto mt-1">
        <i className="text-green-500 text-2xl font-normal ri-pencil-line cursor-pointer"></i>
        <i className="text-red-500 text-2xl font-normal ri-delete-bin-line cursor-pointer"></i>
      </div>
    </div>
  );
};

export default Card;