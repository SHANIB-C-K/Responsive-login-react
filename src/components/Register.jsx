// This is register page

// This is importing section
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

const Register = () => {
  // This is a useState created
  const [isLogedIn, setIsLogedIn] = useState(false);
  // initialy its false

  return (
    <>
      <div className="bg-gray-900 h-screen w-screen relative overflow-hidden flex items-center justify-center">
        <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
        <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
        {/* Its hover animation section */}
        <Tilt>
          <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
            <form className="h-full w-full flex flex-col justify-evenly items-center">
              <div className="text-white font-poppins text-2xl tracking-widest">
                {isLogedIn ? "Login" : "Register"} Form
              </div>
              <input
                type="text"
                placeholder="Enter your username"
                className="input-text"
                required
              />
              <input
                type="text"
                placeholder="Enter your name"
                className="input-text"
                required
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="input-text"
                required
              />
              {!isLogedIn ? (
                <input
                  placeholder="Conform Password"
                  type="password"
                  className="input-text"
                />
              ) : null}
              <div className="text-gray-900 text-md">
                <div className="text-white">
                  {isLogedIn
                    ? "Dont have an account? "
                    : "Already have a account "}
                  <a
                    className="text-blue-600 font-bold text-"
                    onClick={() => setIsLogedIn(!isLogedIn)}
                  >
                    {isLogedIn ? "Sign Up" : "Login"}
                  </a>
                </div>
              </div>
              <input
                type="submit"
                className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80"
                value={isLogedIn ? "Login" : "Sign up"}
              />
            </form>
          </div>
        </Tilt>
      </div>
    </>
  );
};

export default Register;
