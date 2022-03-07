import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <div className="container">
          <h1>Home</h1>
          <Link to="characters/all">All Characters</Link>
          <Link to="characters/juri">Go with Juri</Link>
          <Link to="characters/ash">Go with Ash</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<h1> Pick a character 👆🏽</h1>} />
      </Routes>
      <Outlet />
    </>
  );
};

export default Home;
