import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

import { AuthContext } from "../../context/AuthContext/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  //Password Validation RegEx
  const testCase = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
  const testSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/;

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    //Password Validation
    if (!name) {
      setNameError("Name is required");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    } else if (!testCase.test(password)) {
      setError("Password must have one upper/lower case");
      return;
    } else if (!testSpecialCharacter.test(password)) {
      setError("Password should have at least one special character");
      return;
    } else if (password !== confirmPassword) {
      setError("Password didn't match");
      return;
    }

      //Reset Error
        setNameError('')
        setError("");

    createUser(email, password)
      .then((result) => {
        console.log(result);
        e.target.reset();
      
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-base-200 min-h-screen max-w-full">
      <div className="hero-content flex-col mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Please Register</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                {/* Name Field */}
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                />
                {
                  nameError && <small className="text-red-500">{nameError}</small>
                }
                {/* Email Field */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                {/* Password Field */}
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <button onClick={togglePassword}>
                    {showPassword ? (
                      <IoEye size={20} className="absolute top-3 right-5" />
                    ) : (
                      <IoEyeOff size={20} className="absolute top-3 right-5" />
                    )}
                  </button>
                </div>
                {/* Confirm Password Field */}
                <label className="label">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    className="input"
                    placeholder="Password"
                  />
                  {/* <button onClick={togglePassword}>
                    {showPassword ? (
                      <IoEye size={20} className="absolute top-3 right-5" />
                    ) : (
                      <IoEyeOff size={20} className="absolute top-3 right-5" />
                    )}
                  </button> */}
                </div>
                {error && <small className="text-red-500">{error}</small>}
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            <div>
              <p>
                Already have an account? Please{" "}
                <Link to="/login" className="text-blue-500 hover:text-blue-700">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
