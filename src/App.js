import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="max-w-screen-md mx-auto pt-20">
      <Router>
        <Routes>
          <Route path="/" element = {<Home />}/>
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
