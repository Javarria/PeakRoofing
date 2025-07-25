"use client";
import { useState } from "react";
export default function UserInputForm() {
  // 1.Handle Form Input Changes: Capture the values of the input fields in state.
  // 2.Handle Form Submission: Send the data to the backend when the button is clicked.
  // 3.Add onClick Event Handler for Button: Trigger the submission when the user clicks the "Next" button.
  const [formData, setFormData] = useState({
    address: "",
    zip: "",
  });

  // Handle input changes and update formData state immediately
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setFormData((prevData) => ({
      ...prevData, // Copy previous data
      [name]: value, // Update the specific field in formData (address or zip)
    }));
  };

  // Send form data to backend and navigate to next page.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // //gathering data from the DOM using "id"
    const address = document.getElementById("address");
    const zip = document.getElementById("zip");

    console.log(address, zip);

    setFormData({ address: address.value, zip: zip.value });

    fetch("http://localhost:8080/submittingHOInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).catch((error) => {
      console.error("error submitting data", error);
    });

    console.log("Data Sent to the background");

    console.log("SENT DATA TO THE BACKEND: ", {
      address: address.value,
      zip: zip.value,
    }); // Should log {address: "123 Main St", zip: "12345"} into the console if working correctly.

    console.log("LOGGING ADRESS FROM formData: " + formData.address);

    console.log("LOGGING ZIP FROM formData: " + formData.zip);
  };

  return (
    <div
      className="relative bg-white p-6 rounded-xl"
      style={{
        minWidth: "400px",
        padding: "20px",
        borderRadius: "16px", // Rounds corners
        border: "8px solid transparent", // Transparent base border
        backgroundImage:
          "linear-gradient(white, white), linear-gradient(45deg, #b76e79, #bb9a97, #e4c1c1)", // White inner + Gradient border
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box", // Ensures gradient applies only to the border
      }}
    >
      <div className=" h-1/5 rounded-t-lg">
        <h1 className="text-black text-center font-bold text-3xl p-4">
          LET'S GET STARTED
        </h1>
      </div>
      {/* 1 - 2 - 3 HEADER ABOVE USER INPUT */}
      <div className=" h-[50%] flex justify-start items-center">
       <h1 className="text-black text-2xl font-black  py-2 pr-5 pl-5">1</h1>
        <div className="w-[35%] h-1 bg-gray-300"></div>
        <h1 className="text-black text-2xl font-black px-5 py-2  ">2</h1>
         <div className="border-2 w-[35%] bg-gray-300"></div>
       <h1 className="text-black text-2xl font-black px-5 py-2">3</h1>
      </div>

      <div className="h-3/20 flex justify-center items-center py-4 px-8">
        <h1 className="text-center font-bold text-2xl font-weight-900 text-black" style={{  }}>
          WHERE ARE YOU LOCATED?
        </h1>
      </div>

      {/* INPUT FIELDS */}
      <div className="h-2/5 flex flex-col justify-center items-center px-2 pb-9">
        {/* 1st Input Field & Header */}
        <div className="w-full">
          <h2 className="text-black font-light tracking-wider">Street Address</h2>
          <input
            onChange={handleInputChange}
            id="address"
            type="text"
            name="address"
            className="w-full h-7.5 mb-4 text-black bg-gray-300 shadow-md"
          />
        </div>
        {/* SPACER IN BETWEEN FIELDS */}
        <div className="h-3"></div>
        {/* 2nd Input Field & Header */}
        <div className="w-full">
          <h2 className="text-black font-light tracking-wider">Zip</h2>
          <input
            id="zip"
            onChange={handleInputChange}
            type="text"
            name="zip"
            className="w-full h-7.5 mb-4 text-black bg-gray-300 shadow-md"
          />
        </div>
        <div className="h-3"></div>
        

      </div>

      {/* SUBMISSION BUTTON */}
      <div className="flex justify-center  rounded-2xl">
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-[#b36e77] via-[#a7838a] to-[#d2947d] text-white py-4 px-8 rounded-full text-xl font-black font-weight-900 tracking-wider"
          >Next
        </button>
      </div>
    </div>
  );
}
