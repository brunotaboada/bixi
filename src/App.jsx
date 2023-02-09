import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import Rentals from "./components/Rentals";
import Home from "./components/Home";
import Login from './components/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  const [id, setId] = useState();
  
  if(!id) {
    return <Login setId={setId} />
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <Link to={"/"} className="navbar-brand">
            &nbsp;&nbsp;&nbsp;Home
          </Link>
          <li className="nav-item">
            <Link to={"/rentals"} className="nav-link">
              Rentals
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/bikes"} className="nav-link">
              Bikes
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/bikes"} className="nav-link">
              Locations
            </Link>
          </li>
        </div>
      </nav>
    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/rentals" element={<Rentals user_id={id}/>} />
      </Routes>
    </div>
  </div>
  )
}

export default App
