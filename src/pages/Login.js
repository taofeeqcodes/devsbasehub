import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <Link to="/">Home page</Link>

      <Link to="/signup">Login page</Link>
    </div>
  );
}

export default Login;
