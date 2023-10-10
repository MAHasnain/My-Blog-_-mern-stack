import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Article from "./Pages/Article";
import ArticlesList from "./Pages/ArticlesList";

const App = () => {
  return (
    <div className="max-w-screen-md mx-auto pt-20">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles-list" element={<ArticlesList />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
