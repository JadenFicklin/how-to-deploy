import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [info, setInfo] = useState("");

  const buttonClick = async () => {
    await axios
      .get("/test")
      .then((res) => setInfo(res.data[0][0].info))
      .catch((err) => alert("No connection or data"));
  };

  return (
    <div className="App">
      <header className="App-header">
        {info ? info : <p>Heroku Deployment Example</p>}
        <button onClick={buttonClick}>Click here</button>
      </header>
    </div>
  );
}

export default App;
