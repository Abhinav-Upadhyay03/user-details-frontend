import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import "./App.css";
import AddDetails from "./components/AddDetails";
import { addDetails, updateDetails } from "./features/detailsSlice";
function App() {
  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/user-details?populate=*")
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [AddDetails]);
  console.log(details);
  

  return (
    <div className="text-center m-auto">
      <AddDetails/>
      <h1 className="underline text-5xl mt-16 font-semibold">User Details</h1>
      <div className="details">
        <ul>
          {details.data
            ? details.data.map((detail, index) => (
                <Card
                  key={detail.id}
                  Name={detail.attributes.Name}
                  Email={detail.attributes.Email}
                  Number={detail.attributes.Number}
                  Image = {detail.attributes.Profile.data.attributes.url}
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
