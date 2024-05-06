import React from "react";
import "./signup.css"
import Googleimg from "../../images/Google.png"

const SignUp = () => {
  return (
    <div>
        <div className="signedUp">
                    <h1>Create an Account</h1>
                  <div className="check1">
                  <h3 className="signups">First name</h3>
                    <input placeholder="First name"></input>
                  </div>
                    <h3 className="signups">Last name</h3>
                    <input placeholder="Last name"></input>
                    <h3 className="signup">email</h3>
                    <input placeholder="email address"></input>
                    <h3 className="signupis">Phone number</h3>
                    <input placeholder="Phone number"></input>
                    <h3 className="signupsss">Password</h3>
                    <input placeholder="password"></input>
                    <h3 className="signupss">Confirm Password</h3>
                    <input placeholder="Confirm password"></input>
                    <h3 className="mustBe">Must be at least 8 letters</h3>
                    <button className="btns">Sign up</button>
                    <button className="btn">Sign up with google</button>
                    <img src={Googleimg} width={30} height={30} className="google"/>
                    <h3 className="linkUp">Already have an account? <a href="google.com">Login</a></h3>
        </div>
    </div>
  );
};

export default SignUp;
