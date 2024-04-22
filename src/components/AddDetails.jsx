import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDetails } from "../features/detailsSlice";
const AddDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const addDetailHandler = (e) => {
    console.log(name)
    console.log(email)
    console.log(number)
    e.preventDefault();
    dispatch(
      addDetails({
        Name: name,
        Email: email,
        Number: number,
      })
    );
    setName("")
    setEmail("")
    setNumber("")
  };
  return (
    <div className="w-8/12 rounded-3xl h-auto bg-gray-500 border border-black m-auto mt-10 space-x-3">
      <form onSubmit={addDetailHandler} className="flex flex-col gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="bg-white text-black h-12 w-52 p-4 mt-4 m-auto rounded border-gray-700 outline-none"
        />
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Number"
          className="bg-white text-black h-12 w-52 p-4 m-auto rounded border-gray-700 outline-none"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
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
