import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import Input from "../../../Components/Input";
import { theme, webFontSize } from "../../../Constants";
import { createUseStyles } from "react-jss";
import { login, register } from "../../../Action/authAction";
import { auth } from "../../../Constants/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyle = createUseStyles({
  ...webFontSize,
  inputField: {
    maxWidth: "380px",
    width: "100%",
    background: theme.inputFieldBackground,
    display: "flex",
    justifyContent: "center",
  },
  inputFieldGroup: {
    maxWidth: "380px",
    width: "100%",
    display: "flex",
    gap: "20px",
  },
  container: {
    "&:before": {
      backgroundImage: `${theme.websiteGradient}`,
    },
  },
  actionButton: {
    background: `${theme.buttonColor}`,
    color: `${theme.secondaryText}`,
    padding: "20px 40px",
    fontSize: "20px",
    borderRadius: "9px",
    cursor: "pointer",
    border: "0px",
    "&:hover": {
      background: `${theme.buttonHoverColor}`,
    },
  },
  cursorPointer: {
    cursor: "pointer",
  },
});

function SignInSignUpForm() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    signInEmail: "",
    signUpEmail: "",
    signInPassword: "",
    signUpPassword: "",
  });

  const navigate = useNavigate();
  const classes = useStyle();

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: data.signInEmail,
      password: data.signInPassword,
    };
    const user = await login(userData);
    if (user) {
      user?.aws ? navigate("/dashboard") : navigate("/auth/aws");
    } else {
      toast("Login Failed", { type: "error" });
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.signUpEmail,
      password: data.signUpPassword,
    };
    const res = await register(userData);
    if (res) {
      navigate("/auth/aws");
    } else {
      toast("Register Failed", { type: "error" });
      toast("Change Email", { type: "warning" });
    }
  };

  return (
    <div
      className={`container ${classes.container} ${
        isSignUpMode ? "sign-up-mode" : ""
      }`}
    >
      <div className="forms-container">
        <div className="signin-signup">
          <form
            action="#"
            className="sign-in-form"
            onSubmit={handleSignInSubmit}
          >
            <div className={classes.boldHeading}>Sign in</div>
            <div className={classes.inputField}>
              <Input
                lable="Email"
                type="email"
                placeholder="Email"
                id="Email"
                changeHandler={(val) => {
                  setData({ ...data, signInEmail: val });
                }}
                required
              />
            </div>
            <div className={classes.inputField}>
              <Input
                lable="Password"
                type="password"
                placeholder="Password"
                id="Password"
                changeHandler={(val) => {
                  setData({ ...data, signInPassword: val });
                }}
                required
              />
            </div>
            <button className={classes.actionButton} type="submit">
              Login
            </button>
            <div className="loginSignup">
              <div>If you don't have account?</div>
              <div onClick={handleSignUpClick}>
                <u className={classes.cursorPointer}>Register</u>
              </div>
            </div>
          </form>
          <form
            action="#"
            className="sign-up-form"
            onSubmit={handleSignUpSubmit}
          >
            <div className={classes.boldHeading}>Sign up</div>
            <div className={classes.inputFieldGroup}>
              <div className={classes.inputField}>
                <Input
                  lable="Firstname"
                  type="text"
                  placeholder="Firstname"
                  id="registerFirstname"
                  changeHandler={(val) => {
                    setData({ ...data, firstName: val });
                  }}
                />
              </div>
              <div className={classes.inputField}>
                <Input
                  lable="Lastname"
                  type="text"
                  placeholder="Lastname"
                  id="registerLastname"
                  changeHandler={(val) => {
                    setData({ ...data, lastName: val });
                  }}
                />
              </div>
            </div>
            <div className={classes.inputField}>
              <Input
                label="Email"
                type="email"
                placeholder="Email"
                id="registerEmail"
                changeHandler={(val) => {
                  setData({ ...data, signUpEmail: val });
                }}
              />
            </div>
            <div className={classes.inputField}>
              <Input
                label="Password"
                type="password"
                placeholder="Password"
                id="registerPassword"
                changeHandler={(val) => {
                  setData({ ...data, signUpPassword: val });
                }}
              />
            </div>

            <button className={classes.actionButton} type="submit">
              Register
            </button>
            <div className="loginSignup">
              <div>If you have already account?</div>
              <div onClick={handleSignInClick}>
                <u className={classes.cursorPointer}>Login</u>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <div
              className={`${classes.boldHeading}`}
              style={{ padding: "40px 60px 0px 20px" }}
            >
              {auth.signup.title}
            </div>
            <p
              className={`${classes.lightSubHeading}`}
              style={{ padding: "20px 140px 40px 40px" }}
            >
              {auth.signup.subTitle}
            </p>
            <button
              className={`btn transparent`}
              onClick={handleSignUpClick}
              style={{ borderRadius: "10px", transform: "translateX(-25%)" }}
            >
              <div
                className={`${classes.boldSubHeading} ${classes.cursorPointer}`}
                style={{ padding: "10px 20px" }}
              >
                Sign up
              </div>
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <div
              className={`${classes.boldHeading}`}
              style={{ padding: "40px 0px 0px 40px" }}
            >
              {auth.signin.title}
            </div>
            <p
              className={`${classes.lightSubHeading}`}
              style={{ padding: "20px 40px 40px 100px" }}
            >
              {auth.signin.subTitle}
            </p>
            <button
              className="btn transparent"
              onClick={handleSignInClick}
              style={{ borderRadius: "10px", transform: "translateX(25%)" }}
            >
              <div
                className={`${classes.boldSubHeading} ${classes.cursorPointer}`}
                style={{ padding: "10px 20px" }}
              >
                Sign in
              </div>
            </button>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-left" autoClose={5000} closeOnClick />
    </div>
  );
}

export default SignInSignUpForm;
