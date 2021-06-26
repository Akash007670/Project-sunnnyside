import React from "react";
import "./App.css";
import BrandItems from "./components/BrandItems";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrandItems />
    </div>
  );
}

export default App;
