import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome back, ${form.email}!`);
  };

  return (
    <div className="auth-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Sign In</button>
        <p className="signup-p">
          Do You Have An Account?
          <Link to="/SignUp">
            <button>SignUp</button>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
