import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import "./App.css";
import AddDetails from "./components/AddDetails";
import { addDetails } from "./features/detailsSlice";
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
  console.log(details)
 


  return (
    
    <div className="text-center m-auto">
    
      <h1 className="underline text-5xl mt-20 font-semibold">User Details</h1>
      <AddDetails/>
      <div>
        <button className="inset-x-0 bg-blue-600 h-12 w-40 float-end m-12 rounded-xl font-semibold hover:bg-white hover:text-black">
          <i className="ri-add-line me-1"></i>Create Entry
        </button>
      </div>

      <div className="details">
        <ul>
          {details.data
            ? details.data.map((detail, index) => (
              
                <Card
                  key={detail.id}
                  Name={detail.attributes.Name}
                  Email={detail.attributes.Email}
                  Number={detail.attributes.Number}
                  ID={detail.id}
                />
                
              ))
            : "Data LOADING"}
        </ul>
      </div>
    </div>
  );
}

export default App;
