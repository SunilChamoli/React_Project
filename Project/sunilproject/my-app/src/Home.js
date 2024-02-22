import React, { useState } from "react";
import FormAction from "./FormAction";
import "./new.css";

function Home() {
  const [userData, setUserData] = useState(null);
  const handleFormSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <FormAction onFormSubmit={handleFormSubmit} />{" "}
      {/* Pass the onFormSubmit function to the FormAction component */}
      {userData ? (
        <div class="form2">
          <h2>User Details:</h2>
          <p>Name: {userData.name}</p>
          <p>Age: {userData.age}</p>
          <p>Address: {userData.address}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Home;
