import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">FireChat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/14845056/pexels-photo-14845056.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>Inzamum</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
