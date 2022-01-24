import React from "react";
import "./index.css";
function LoginPage10() {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };
  return (
    <div>
      <div className="login-page-10">
        <div className="row align-items-center h-100">
          <div className="col-md-5 first-part d-flex align-items-center justify-content-center flex-column">
            <h1 className="text-start w-100">Welcome Back</h1>
            <p className="text-start w-100">
              Sign in with your credentionals to enjoy our uninterupted services
            </p>
            <p className="text-start w-100">Dont have an account Yet ?</p>
            <button>SIGN UP</button>
          </div>
          <div className="col-md-7 second-part d-flex flex-column align-items-end">
            <div className="text-part d-flex flex-column">
              <h1>SIGN IN Task2</h1>
          
              <div className="d-flex justify-content-center my-2">
              <div className="loginButton google" onClick={google}>
            <img src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg" alt="" className="icon" />
            Google
          </div>
        
          <div className="loginButton github" onClick={github}>
            <img src="https://www.howtogeek.com/wp-content/uploads/2019/12/github-logo.jpg?height=200p&trim=2,2,2,2" alt="" className="icon" />
            Github
          </div>
          </div>

              <p>OR</p>

              <span>Use email and Password</span>

              <input type="text" placeholder="username" />
              <input type="text" placeholder="password" />
              <button>LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage10;