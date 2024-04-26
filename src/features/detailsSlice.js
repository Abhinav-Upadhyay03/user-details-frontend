import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState, useEffect } from "react";

// const initialState = axios
//   .get("http://localhost:1337/api/user-details")
//   .then((response) => {
//     console.log("Response fetched");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

export const detailsSlice = createSlice({
  name: "details",
  initialState: {},
  reducers: {
    addDetails: (state, action) => {
      const { Name, Number, Email, Image } = action.payload;
      
      const formData = new FormData();
      formData.append('data', JSON.stringify({ Name, Number, Email }));
      formData.append('files.Profile', Image); 
      
      axios
        .post("http://localhost:1337/api/user-details/", formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Important for file uploads
          },
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
      const { id, Name, Number, Email } = action.payload;
      const updatedData = {
        data: { Name, Number, Email },
      };
      axios
        .put(`http://localhost:1337/api/user-details/${id}`, updatedData)
        .then((response) => {
          console.log("Resource updated successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error updating resource:", error);
        });
    },
  },
});

export const { addDetails, removeDetails, updateDetails } =
  detailsSlice.actions;

export default detailsSlice.reducer;
