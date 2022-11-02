import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../actions/userAction";
import GoogleLogin from "react-google-login";

const LoginSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const alert = useAlert();

  const { error, isAuthenticated } = useSelector((state) => state.user);
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;

  const googleLoginSubmit = (e) => {
    e.preventDefault();
    window.open("api/v1/googlelogin", "_self");
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    dispatch(register(myForm));
  };

  const nameChange = (e) => {
    const result = e.target.value.replace(/[^a-zA-Z] + $/gi, "");
    if (e.target.value === result) {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate("/courses");
    }
  }, [dispatch, error, isAuthenticated, navigate]);

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");
      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }

    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");
      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  return (
    <Fragment>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div>
            <div className="login_signUp_toggle">
              <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
              <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
            </div>
            <button ref={switcherTab}></button>
          </div>
          <form
            action=""
            className="loginForm"
            ref={loginTab}
            onSubmit={loginSubmit}
          >
            <div className="loginEmail">
              <input
                type="email"
                placeholder="enter-email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="loginPassword">
              <input
                type="text"
                placeholder="enter-password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Login" className="loginBtn" />
            {/* //google */}
            <GoogleLogin
              clientId="150151659242-04r38fqs4it9ruj3amaju02tr0ufhsq7.apps.googleusercontent.com"
              buttonText="Login"
              onClick={googleLoginSubmit}
              // onFailure={responseGoogleError}
              cookiePolicy={"single_host_origin"}
            />
          </form>

          <form
            action=""
            className="signUpForm"
            ref={registerTab}
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <div className="signUpName">
              <input
                type="text"
                placeholder="name"
                required
                name="name"
                value={name}
                onChange={nameChange}
              />
            </div>
            <div className="signUpEmail">
              <input
                type="text"
                placeholder="email"
                required
                name="email"
                value={email}
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpPassword">
              <input
                type="text"
                placeholder="password"
                required
                name="password"
                value={password}
                onChange={registerDataChange}
              />
            </div>

            <input type="submit" value="Register" className="signUpBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};
export default LoginSignUp;
