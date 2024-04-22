import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addDetails, updateDetails} from "../features/detailsSlice";
const AddDetails = ({id, title,Name, Number, Email}) => {
  const [name, setName] = useState(Name);
  const [email, setEmail] = useState(Email);
  const [number, setNumber] = useState(Number);
  
  
  const dispatch = useDispatch();

  const editHandler = (e) => {
    window.alert("Item Updated")
    dispatch(
        updateDetails({
            id: id,
            Name:name,
            Number: number,
            Email: email
        })
    )
  }
  const addDetailHandler = (e) => {
    e.preventDefault();
    window.alert("New Item Added!")

    dispatch(
      addDetails({
        Name: name,
        Email: email,
        Number: number,
      })
    )
    setName("")
    setEmail("")
    setNumber("")
  };
  return (
    <div className="w-8/12 rounded-3xl h-auto bg-gray-700 border border-black m-auto mt-10 space-x-3">
    <h1 className="text-3xl mt-4 font-semibold">{title?title:"Add New Details"}</h1>
      <form onSubmit={title?editHandler:addDetailHandler} className="flex flex-col gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={Name?Name:"Name"}
          className="bg-white text-black h-12 w-52 p-4 mt-4 m-auto rounded border-gray-700 outline-none"
        />
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder={Number?Number:"Number"}
          className="bg-white text-black h-12 w-52 p-4 m-auto rounded border-gray-700 outline-none"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={Email?Email:"Email"}
          className="bg-white text-black h-12 w-52 p-4  m-auto rounded border-gray-700 outline-none"
        />
        <button
          type="submit"
          className="w-44 m-auto rounded-full mb-4 text-white bg-indigo-500 border-0 py-2 px-6 rounded text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddDetails;
