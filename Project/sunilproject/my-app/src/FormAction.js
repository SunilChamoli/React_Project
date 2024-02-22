import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function FormAction({ onFormSubmit }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [ageError, setAgeError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && address && email) {
      if (!isNaN(age)) {
        onFormSubmit({ name, age, address, email });
        navigate("/home2");
      } else {
        setAgeError("Please enter a valid number");
      }
    } else {
      // Visual feedback for mandatory fields
      document.getElementById("form").reportValidity();
    }
  };

  return (
    <form id="form" class="form-container" onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Age: </label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <span style={{ color: "red" }}>{ageError}</span>
      </div>
      <div>
        <label>Address: </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" class="button-24">
        Submit
      </button>
    </form>
  );
}

export default FormAction;
