import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <h1>22va REACT</h1>
      {/* <a href='/login'>Login</a> */}

      <nav>
        {/* <Link to='/' >Home</Link>
      <Link to='/login' >Login</Link> */}
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>
      
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/register"
        >
          Register
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/users"
        >
          users
        </NavLink>
      </nav>
    </div>
  );
};
