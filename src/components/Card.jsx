import React from "react";
import { useState,useEffect } from "react";


const Card = ({Name, Email, Number}) => {
 
//  useEffect(() => {
//   console.log(detail);
//   setdata(data)
//  }, [])
 
  return (
    <div className="parent">

      <div className=" flex w-11/12 bg-gray-700 h-20 m-auto mt-16 rounded-full  justify-around text-center items-center text-center">
        <h1 className=" text-xl">{Name?Name:'loading'}</h1>
        <h1 className=" text-xl">{Email?Email:'loading'}</h1>
        <h1 className="text-xl">{Number?Number:'loading'}</h1>
    
      </div>
      <div className="flex w-2/12 bg-gray-100 h-8 m-auto">
        
      </div>
    </div>
  );
};

export default Card;
