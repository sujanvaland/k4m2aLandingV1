import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="login-container">
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
          {/* <h1>Hello SaleSkip!👋</h1> */}
          <p>
            Skip repetitive and manual sales-marketing tasks. Get highly
            productive through automation and save tons of time!
          </p>
          <footer>© 2022 SaleSkip. All rights reserved.</footer>
        </div>
      </div>

      <div className="right-panel">
        <main className="main cc-home">
          <div className="hero cc-manifesto">
            <div className="page-padding">
              <div className="container">
                <div className="manifesto-header">
                  <h1 className="home-hero-heading">Sign In</h1>
                  <p className="subheading">Access your account</p>
                </div>
              </div>
            </div>
          </div>
          <div className="manifesto-hero-img-wrap">
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
                      type="password"
                      name="password"
                      className={`form-control input ${
                        errors.password ? "input-error" : ""
                      }`}
                      placeholder="Enter Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <p className="error-text">{errors.password}</p>
                    )}
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
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SignIn;
