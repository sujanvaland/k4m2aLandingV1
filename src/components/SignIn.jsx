import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { API_URL } from "../api_config";
import { toast } from "react-toastify";
import "./styles/custom.css";
import "./styles/styles.css";

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isShowpassword, setIsShowpassword]=useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateFields = (_formData = formData) => {
    const fieldErrors = {};

    if (!_formData.emailOrPhone) {
      fieldErrors.emailOrPhone = "Email or phone number is required.";
    } else if (
      !isValidEmail(_formData.emailOrPhone) &&
      !isValidPhoneNumber(_formData.emailOrPhone)
    ) {
      fieldErrors.emailOrPhone = "Please enter a valid email or phone number.";
    }

    if (!_formData.password) {
      fieldErrors.password = "Password is required.";
    } else if (_formData.password.length < 6) {
      fieldErrors.password = "Password must be at least 6 characters long.";
    }

    return fieldErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const _formData = { ...formData, [name]: value };
    setFormData(_formData);
    if (isSubmit) {
      setErrors(validateFields(_formData));
    }
  };

  const showpassword=()=>{
    setIsShowpassword((prev) => !prev);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const fieldErrors = validateFields();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);

    try {
      setTimeout(() => {
        setLoading(false);
        toast.error("Invalid credentials. Please try again.");
      }, 1000);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="login-container loginpagebox">
      <div className="left-panel">
        <div className="content">
          <img src="/images/logo-main-wh.svg" className="whitelogo desktop small-logo" />
            <img
            src="/images/k4m2a-app-1.webp"
            loading="lazy"
            // width="60"
            // height="60"
            alt=""
            className="icon-img signin-image"
          />  
<div className="logincntBox">
<h2>Explore the Future</h2>
          <ul role="list" class="steps-list cc-research w-list-unstyled">
            <li class="list-item"><div class="list-item-icon">
              <div class="svg-embed w-embed">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0.805664C5.373 0.805664 0 6.17866 0 12.8057C0 19.4327 5.373 24.8057 12 24.8057C18.627 24.8057 24 19.4327 24 12.8057C23.981 6.18666 18.619 0.824664 12 0.805664ZM19.207 8.51266L10.207 17.5127C10.012 17.7077 9.756 17.8057 9.5 17.8057C9.244 17.8057 8.988 17.7077 8.793 17.5127L4.793 13.5127C4.402 13.1217 4.402 12.4897 4.793 12.0987C5.184 11.7077 5.816 11.7077 6.207 12.0987L9.5 15.3917L17.793 7.09866C18.184 6.70766 18.816 6.70766 19.207 7.09866C19.598 7.48966 19.598 8.12166 19.207 8.51266Z" fill="#B0B0B0"></path></svg>
                
                </div></div><div>Globally connected spiritual community</div></li>
                <li class="list-item"><div class="list-item-icon"><div class="svg-embed w-embed">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0.805664C5.373 0.805664 0 6.17866 0 12.8057C0 19.4327 5.373 24.8057 12 24.8057C18.627 24.8057 24 19.4327 24 12.8057C23.981 6.18666 18.619 0.824664 12 0.805664ZM19.207 8.51266L10.207 17.5127C10.012 17.7077 9.756 17.8057 9.5 17.8057C9.244 17.8057 8.988 17.7077 8.793 17.5127L4.793 13.5127C4.402 13.1217 4.402 12.4897 4.793 12.0987C5.184 11.7077 5.816 11.7077 6.207 12.0987L9.5 15.3917L17.793 7.09866C18.184 6.70766 18.816 6.70766 19.207 7.09866C19.598 7.48966 19.598 8.12166 19.207 8.51266Z" fill="#B0B0B0"></path></svg>
                  </div></div><div>Dedicated support for your spiritual journey</div></li>
                  <li class="list-item"><div class="list-item-icon">
                    <div class="svg-embed w-embed"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0.805664C5.373 0.805664 0 6.17866 0 12.8057C0 19.4327 5.373 24.8057 12 24.8057C18.627 24.8057 24 19.4327 24 12.8057C23.981 6.18666 18.619 0.824664 12 0.805664ZM19.207 8.51266L10.207 17.5127C10.012 17.7077 9.756 17.8057 9.5 17.8057C9.244 17.8057 8.988 17.7077 8.793 17.5127L4.793 13.5127C4.402 13.1217 4.402 12.4897 4.793 12.0987C5.184 11.7077 5.816 11.7077 6.207 12.0987L9.5 15.3917L17.793 7.09866C18.184 6.70766 18.816 6.70766 19.207 7.09866C19.598 7.48966 19.598 8.12166 19.207 8.51266Z" fill="#B0B0B0"></path></svg>
                    </div></div><div>Intelligent tools for personal spiritual growth</div>
                    </li></ul>
     
           
          <p>
            Skip repetitive and manual sales-marketing tasks. Get highly
            productive through automation and save tons of time!
          </p>
          </div>
        </div>
      </div>

      <div className="right-panel">
        <main className="main cc-home">
         
          <div className="manifesto-hero-img-wrap">
          <div className="hero cc-manifesto">
            <img src="/images/logo.png" class="deviceLogo"/> 
            <div className="page-padding">           
              <div className="container">
              
                <div className="manifesto-header">
                  <h1 className="home-hero-heading">Sign In</h1>
                  <p className="subheading signinSubhead">Access your account</p>
                </div>
              </div>
            </div>
          </div>
            <div className="formmainbox signin-height">
            
              <form onSubmit={handleSubmit}>
                <ul>
                  <li>
                    <input
                      type="text"
                      name="emailOrPhone"
                      className={`form-control input ${
                        errors.emailOrPhone ? "input-error" : ""
                      }`}
                      placeholder="Enter Email or Phone Number"
                      value={formData.emailOrPhone}
                      onChange={handleChange}
                    />
                    {errors.emailOrPhone && (
                      <p className="error-text">{errors.emailOrPhone}</p>
                    )}
                  </li>
                  <li>
                    <input
                     type={isShowpassword ? "text" : "password"}
                      name="password"
                      className={`form-control input ${
                        errors.password ? "input-error" : ""
                      }`}
                      placeholder="Enter Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {
                      formData.password!='' && 
                      <button type="button" class="btnshowpassword" onClick={showpassword}> 
                        <img src={isShowpassword ? "/images/eye.svg" : "/images/crossed-eye.svg"} className="showpassword" />
                      
                      </button>
                    }
                    
                    {errors.password && (
                      <p className="error-text">{errors.password}</p>
                    )}
                  </li>
                  <li className="forgotpass">
                   <Link> Forgot password?</Link>
                  </li>
                  <li className="button-center">
                    <button
                      type="submit"
                      className="btnsubmit w-button"
                      disabled={loading}
                    >
                      {loading ? "Signing in" : "Sign In"}
                    </button>
                  </li>
                </ul>
              </form>
              <footer>© 2025 K4M2A. All rights reserved.</footer>
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
}

export default SignIn;
