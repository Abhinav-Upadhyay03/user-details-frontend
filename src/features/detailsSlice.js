import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState, useEffect } from "react";



const initialState = axios.get("http://localhost:1337/api/user-details")

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      const { Name, Number, Email } = action.payload; 
      axios
        .post("http://localhost:1337/api/user-details", {
          data: { Name, Number, Email },
        })
        .then((response) => {
          console.log("Resource created successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error creating resource:", error);
        });
    },
    removeDetails: (state, action) => {
      axios
        .delete(`http://localhost:1337/api/user-details/${action.payload}`)
        .then((response) => {
          console.log("Resource deleted successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error deleting resource:", error);
        });
    },
    updateDetails: (state, action) => {
      const newData = {
        data: {
          Name: action.payload.Name,
          Number: action.payload.Number,
          Email: action.payload.Email,
        },
      };
      axios
        .put(
          `http://localhost:1337/api/user-details/${action.payload.id}`,
          newData
        )
        .then((response) => {
          console.log("Resource updated successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error deleting resource:", error);
        });
    },
  },
});

export const {addDetails, removeDetails, updateDetails} = detailsSlice.actions

export default detailsSlice.reducer
