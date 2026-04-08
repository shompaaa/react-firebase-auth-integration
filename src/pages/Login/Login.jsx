import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-base-200 min-h-screen max-w-full">
      <div className="hero-content flex-col mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Please Login</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                {/* Email Field */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                {/* Password Field */}
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <div>
              <p>
                Don't have an account? Please{" "}
                <Link
                  to="/register"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
