import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <a>Welcome to my devsbase</a>

      <Link to="/login">Login page</Link>
    </div>
  );
}

export default Header;
