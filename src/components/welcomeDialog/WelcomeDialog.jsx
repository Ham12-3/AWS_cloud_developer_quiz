import React, { useState } from "react";
import "./WelcomeDialog.css";

const WelcomeDialog = ({ onNameSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim() !== "") {
      localStorage.setItem("userName", name.trim());
      onNameSubmit(name.trim());
    }
  };

  return (
    <div className="blur-background">
      <div className="dialog-container">
        <div className="dialog">
          <h2>Welcome to the Quiz App!</h2>
          <p>Please enter your name to get started:</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeDialog;
