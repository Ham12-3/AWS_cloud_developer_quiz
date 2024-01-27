import React, { useState } from "react";
import Quiz from "./components/Quiz/Quiz";
import WelcomeDialog from "./components/welcomeDialog/WelcomeDialog";

const App = () => {
  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  const handleNameSubmit = (name) => {
    setUserName(name);
  };

  return (
    <div>
      {userName ? (
        <Quiz userName={userName} />
      ) : (
        <WelcomeDialog onNameSubmit={handleNameSubmit} />
      )}
    </div>
  );
};

export default App;
