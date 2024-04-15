import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import "./App.css";


function App() {
  const [details, setDetails] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/user-details")
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return(
    <>
      <h1 className="underline text-5xl mt-20 font-semibold">User Details</h1>
      <div className="details">
        {/* //yaat eta map function jaabo */}
        

        <ul>
          {
            details.data?
          details.data.map((detail,index) => (
            <Card key={index} Name={detail.attributes.Name} Email = {detail.attributes.Email} Number = {detail.attributes.Number}/>


          )):'Data LOADING' }
        </ul>
      </div>
    </>
  );
}

export default App;
