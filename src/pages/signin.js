import React from "react";
import "./login.css";
import { NavBtnLink } from "../components/Navbar/NavbarElements";
const SigninPage = () => {
  return (
    <>
      <div className="whole">
        <div className="sing">
          <p>Sign in to your account</p>
          <div className="inputss">
            <label>Email:</label>
            <input type="text" name="name" />
          </div>
          //break
          <div className="inputss">
            <label>Password:</label>
            <input type="password" name="password" />
          </div>
          <div className="inputsy">
            <NavBtnLink className="buts" to="//localhost:8080/">
              Continue
            </NavBtnLink>
          </div>
          //break
          <p className="p2">Forgot password</p>
        </div>
      </div>
    </>
  );
};

export default SigninPage;
