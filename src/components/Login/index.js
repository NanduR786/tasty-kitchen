/*import "./index.css";

import {Navigate, useNavigate} from 'react-router-dom'
import banner from "../../assets/images/banner.jpg";
import image from "../../assets/images/image (28).png";
import Cookies from "js-cookie";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate()

  const jwtToken = Cookies.get('jwt_token')
  
  if(jwtToken){
    return <Navigate to="/" replace/>
  }

  const onLogin = async (event) => {
    event.preventDefault();
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      Cookies.set("jwt_token", data.jwt_token, { expires: 30 });
      navigate("/", {replace:true})
    } else {
      setErrMsg(data.error_msg);
    }
  };

  const onUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const onPassWordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-container">
      <form className="login-form-container" onSubmit={onLogin}>
        <div className="form-container">
          <div className="logo-container">
            <img src={image} alt="logo" />
            <h1>Vivaha Bojanambu</h1>
          </div>
          <h1>Login</h1>
          <div className="login-details-container">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="username"
              onChange={onUserNameChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="password"
              onChange={onPassWordChange}
            />
            {errMsg && <p className="err-msg">{errMsg}</p>}
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
        </div>
      </form>
      <div className="food-image-container">
        <img src={banner} alt="food-image" className="food-image" />
      </div>
      <div className="food-image-mb-container">
        <img src={banner} alt="food-image-mb" className="food-image-mb" />
      </div>
    </div>
  );
};

export default Login;
*/

import "./index.css";
import banner from "../../assets/images/banner-image.png";
import logo from "../../assets/images/logo.png";

import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { CustomButton } from "../../StyledComponents/CustomButton";

import Cookies from "js-cookie";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  const jwtToken = Cookies.get("jwt_token");

  if (jwtToken) {
    return <Navigate to="/" replace />;
  }

  const onLogin = async (event) => {
    event.preventDefault();
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      Cookies.set("jwt_token", data.jwt_token, { expires: 30 });
      navigate("/", { replace: true });
    } else {
      setErrMsg(data.error_msg);
    }
  };

  const onUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <div className="mb-banner-container">
          <img src={banner} alt="mb-banner" />
        </div>
        <form className="login-form" onSubmit={onLogin}>
          <img src={logo} alt="brand-logo" className="brand-logo" />
          <h1 className="brand-name">Tasty Kitchens</h1>
          <h1 className="lgn-heading">Login</h1>
          <div className="input-details">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={username}
              id="username"
              onChange={onUserNameChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              id="password"
              onChange={onPasswordChange}
            />
          </div>
          {errMsg && <p className="err-msg">{errMsg}</p>}
          <CustomButton type="submit">Login</CustomButton>
        </form>
      </div>
      <div className="banner-container">
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Login;
