import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./Spotify";

function App() {
  // Run code based on a given condition
  useEffect(() => {
    const token = getTokenFromUrl();
    console.log("token>>", token);
  }, []);

  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
