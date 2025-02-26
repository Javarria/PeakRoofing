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

  // Send form data to backend and navigate to next page.
  const handleSubmit = async (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/submittingHOInfo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
         }).catch((error => {
            console.error("error submitting data", error);
         }))

         console.log("Data Sent to the background")

         // //gathering data from the DOM using "id"
         const address = document.getElementById("address");
         const zip = document.getElementById("zip");
 
             setFormData({ address: address.value, zip: zip.value });
 
             console.log("SENT DATA TO THE BACKEND: ", {
             address: address.value,
             zip: zip.value,
             }); // Should log {address: "123 Main St", zip: "12345"} into the console if working correctly.
 
             console.log("LOGGING ADRESS FROM formData: " + formData.address);
             
             console.log("LOGGING ZIP FROM formData: " + formData.zip);
           

    };

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "auto",
        height: "auto",
        border: "8px solid",
        borderImage: "linear-gradient(to right, #FF69B4, #ffc5c5) 4",
        borderRadius: "1rem",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      {/* HEADERS AND NUMBERS ABOVE INPUT FIELDS */}
      <div style={{ border: "4px solid blue", height: "20%" }}>
        <h1
          style={{
            color: "black",
            textAlign: "center",
            fontWeight: "900",
            fontSize: "2.5rem",
            padding: "1.2rem",
          }}
        >
          Let's Get Started
        </h1>
      </div>
      <div
        style={{
          border: "4px solid blue",
          height: "15%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <h1
          style={{
            color: "black",
            fontSize: "2rem",
            fontWeight: "900",
            marginRight: "0.5rem",
          }}
        >
          1
        </h1>
        <div
          style={{
            borderBottom: "3px solid black",
            width: "4rem",
            marginRight: "0.5rem",
          }}
        ></div>
        <h1 style={{ color: "black", fontSize: "2rem", fontWeight: "900" }}>
          2
        </h1>
        <div style={{ borderBottom: "5px solid black" }}></div>
        <div
          style={{
            borderBottom: "2px solid black",
            width: "4rem",
            marginRight: "0.5rem",
          }}
        ></div>
        <h1 style={{ color: "black", fontSize: "2rem", fontWeight: "900" }}>
          3
        </h1>
      </div>
      <div
        style={{
          border: "4px solid blue",
          height: "15%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <h1
          style={{
            color: "black",
            textAlign: "center",
            fontWeight: "900",
            fontSize: "1.60rem",
          }}
        >
          WHERE ARE YOU LOCATED?
        </h1>
      </div>

      {/* INPUT FIELDS */}
      <div
        style={{
          border: "4px solid blue",
          height: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingBottom: "2.25rem",
        }}
      >
        {/* 1st Input Field & Header */}
        <div style={{ width: "100%" }}>
          <h2 style={{ color: "black", fontWeight: "100" }}>Street Address</h2>
          <input
            id="address"
            type="text"
            name="address"
            style={{
              width: "100%",
              height: "1.90rem",
              marginBottom: "1rem",
              color: "black",
              backgroundColor: "#ccc",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
            }}
          />
        </div>
        {/* SPACER IN BETWEEN FIELDS */}
        <div style={{ height: ".75rem" }}></div>
        {/* 2nd Input Field & Header */}
        <div style={{ width: "100%" }}>
          <h2 style={{ color: "black", fontWeight: "100" }}>Zip</h2>
          <input
            id="zip"
            type="text"
            name="zip"
            style={{
              width: "100%",
              height: "1.90rem",
              marginBottom: "1rem",
              color: "black",
              backgroundColor: "#ccc",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.3)",
            }}
          />
        </div>
      </div>

      {/* SUBMISSION BUTTON */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          border: "2px solid blue",
          borderRadius: "2.25rem",
        }}
      >
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "2.25rem",
            fontSize: "1rem",
            fontWeight: "900",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
