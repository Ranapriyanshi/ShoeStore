import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        margin: "35px 115px",
        justifyContent: "space-between",
        alignItems: "center",
        textDecoration: "none",
        padding: "14px 25px",
        top: 0,
        borderRadius: "100px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        border: "1px solid #444",
        fontSize: "25px",
        backgroundColor: "white",
      }}
    >
      <div>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            backgroundColor: "yellow",
            padding: "5px 10px",
            color: "black",
          }}
        >
          ShoeCompare
        </Link>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          style={{
            padding: "9px 18px",
            border: "1px solid black",
            cursor: "pointer",
            fontSize: "20px",
            borderRadius: "25px",
          }}
        >
          Login
        </button>
        <button
          style={{
            backgroundColor: "black",
            padding: "9px 18px",
            color: "white",
            fontSize: "20px",
            borderRadius: "25px",
            border: "1px solid black",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
