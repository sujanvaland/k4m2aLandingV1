import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "./styles/custom.css";
import "./styles/styles.css";
import { API_URL } from "../api_config";
import { toast } from "react-toastify";

function RequestInvite() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialEmail = location.state?.email || ""; // Retrieve email from state or fallback to empty string
  const UserID = location.state?.id || ""; // Retrieve email from state or fallback to empty string
  const [formData, setFormData] = useState({
    fullName: "",
    email: initialEmail,
    phone: "",
    city: "",
    referredBy: "",
    journeyDetails: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateFields = (_formData) => {
    const fieldErrors = {};

    if (!_formData.fullName) fieldErrors.fullName = "Full Name is required.";
    if (!_formData.email || !isValidEmail(_formData.email))
      fieldErrors.email = "A valid email address is required.";
    if (!_formData.phone || !isValidPhoneNumber(_formData.phone))
      fieldErrors.phone = "A valid phone number is required.";
    if (!_formData.city) fieldErrors.city = "City is required.";
    if (!_formData.journeyDetails)
      fieldErrors.journeyDetails = "Journey details are required.";

    return fieldErrors;
  };

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    const _formData ={
        ...formData, [name]: value
    }
    setFormData(_formData);
    if(isSubmit){
        const fieldErrors = validateFields(_formData);
        if (Object.keys(fieldErrors).length > 0) {
          setErrors(fieldErrors);
          return;
        }
    }
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true)
    const fieldErrors = validateFields();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    const request = {
      id: UserID,
      email: formData.email,
      name: formData.fullName,
      phone: formData.phone,
      city: formData.city,
      journey: formData.journeyDetails,
      inviter: formData.referredBy,
    };
    try {
      const response = await fetch(`${API_URL}/User/RequestInvite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error("Failed to submit. Please try again later.");
      }

      const data = await response.json();
      

      setLoading(false);
      setIsSubmit(false)
      if (data) {
        setSuccess(true);
        
        toast.success('Thank You Sharing information.');
        
        navigate("/thank-you", { state: { name: data?.result?.name } });
      } else {
        toast.error("Something went wrong. Please try again.");

        // setErrors({ form: "Something went wrong. Please try again." });
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong. Please try again.");

      //   setErrors({ form: "Something went wrong. Please try again." });
    }
  };

  const handlePhoneChange = (phone) => {
    if (phone) {
      setFormData({ ...formData, phone });
    }
  };

  return (
    <main className="main cc-home">
      <header className="hero cc-manifesto">
        <div className="page-padding">
          <div className="container">
            <div className="manifesto-header">
              <div className="eyebrow-pill">
                <div className="eyebrow-pill-inner">
                  <div>Request Invite</div>
                </div>
                <div className="eyebrow-pill-bg u-rainbow u-blur-perf"></div>
              </div>
              <h1 className="home-hero-heading">Join the Circle</h1>
              <p className="subheading maxw530">
                Request an invite to join a community of truth-seekers and
                science enthusiasts working together to explore life's most
                profound questions.
              </p>
            </div>
          </div>
        </div>
        <div className="manifesto-hero-img-wrap">
          <div className="formmainbox">
            <form onSubmit={handleSubmit}>
              <ul>
                <li>
                  <input
                    type="text"
                    name="fullName"
                    maxLength={100}
                    className={`form-control input ${
                      errors.fullName ? "input-error" : ""
                    }`}
                    placeholder="Enter Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && (
                    <p className="error-text">{errors.fullName}</p>
                  )}
                </li>
                <li
                  className={`phonebox ${
                    isValidPhoneNumber(formData.phone) ? "" : "phone-error"
                  }`}
                >
                  <PhoneInput
                    international
                    className={`form-control input ${
                      errors.phone ? "input-error" : ""
                    }`}
                    defaultCountry="US"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                  />
                  <div>
                    {errors.phone ? (
                      <p className="error-text">{errors.phone}</p>
                    ) : formData.phone ? (
                      isValidPhoneNumber(formData.phone) ? undefined : (
                        "Invalid phone number"
                      )
                    ) : (
                      ""
                    )}
                  </div>
                </li>
                {/* <li className="phonebox">
                  <span className="codebox">
                    <img src="images/img_flag.png" alt="Country Code" />
                  </span>
                  <input
                    type="text"
                    name="phone"
                    className="form-control input"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </li> */}
                <li>
                  <input
                    type="text"
                    name="city"
                    maxLength={100}
                    className={`form-control input ${
                      errors.city ? "input-error" : ""
                    }`}
                    placeholder="Enter Your City"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {errors.city && <p className="error-text">{errors.city}</p>}
                </li>
                <li>
                  <input
                    type="text"
                    name="referredBy"
                    maxLength={100}
                    className={`form-control input ${
                      errors.referredBy ? "input-error" : ""
                    }`}
                    placeholder="Someone Referred you to the Circle? Enter Name"
                    value={formData.referredBy}
                    onChange={handleChange}
                  />
                  {errors.referredBy && (
                    <p className="error-text">{errors.referredBy}</p>
                  )}
                </li>
                <li>
                  <textarea
                    name="journeyDetails"
                    className={`areabox ${
                      errors.journeyDetails ? "input-error" : ""
                    }`}
                    maxLength={500}
                    placeholder="Tell us about your journey, what are you seeking?"
                    value={formData.journeyDetails}
                    onChange={handleChange}
                  ></textarea>
                  {errors.journeyDetails && (
                    <p className="error-text">{errors.journeyDetails}</p>
                  )}
                </li>
                <li>
                  <button
                    type="submit"
                    className="btnsubmit w-button"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Request Submit"}
                  </button>
                </li>
              </ul>
              {errors.form && <p className="error-message">{errors.form}</p>}
              {success && (
                <p className="success-message">
                  Your request has been submitted successfully!
                </p>
              )}
            </form>
          </div>
          <section className="section cc-manifesto-intro">
            <div className="page-padding">
              <div className="container container--small cc-manifesto">
                <h2 className="section-heading cc-manifesto">
                  The future is ours to create let’s take the first step towards
                  living in harmony with each other and nature.
                </h2>
                <p className="manifesto-paragraph">
                  The answers to our greatest challenges lie at the intersection
                  of science, spirituality, and a shared commitment to live in
                  harmony with mother earth. We are building a community of
                  explorers, visionaries, and change makers who are ready to
                  rethink what’s possible and work together toward solutions
                  that can actually make a difference. <br />
                  <br />
                  K4M2A isn’t just a place to talk. It’s where action happens.
                  Where seekers of knowledge, wisdom, and progress come together
                  to spark real change. It’s for those who are tired of business
                  as usual and want to be part of something bigger, something
                  that embraces both science and spirituality in a way that
                  honors both our intellect and our humanity.
                  <br />
                  <br />
                  If you're ready to step up, explore new possibilities, and
                  join a movement dedicated to healing the divide between
                  humans, uniting us with nature, and resolving the conflicts
                  that separate us from one another.
                  <br />
                </p>
              </div>
            </div>
          </section>
          <div className="hero-cloud-1">
            <img
              src="images/k4m2a-cloud.webp"
              loading="eager"
              width="2984"
              height="936"
              alt=""
              srcSet="
                        images/k4m2a-cloud-500.webp   500w,
                        images/k4m2a-cloud-800.webp   800w,
                        images/k4m2a-cloud-1080.webp 1080w,
                        images/k4m2a-cloud-1600.webp 1600w,
                        images/k4m2a-cloud-2000.webp 2000w,
                        images/k4m2a-cloud-2600.webp 2600w,
                        images/k4m2a-cloud.webp        2984w
                    "
              sizes="100vw"
              className="cloud-img cc-1"
            />
          </div>
          <div className="hero-cloud-2">
            <img
              src="images/k4m2a-cloud.webp"
              loading="eager"
              width="2984"
              height="936"
              alt=""
              srcSet="
                        images/k4m2a-cloud-500.webp   500w,
                        images/k4m2a-cloud-800.webp   800w,
                        images/k4m2a-cloud-1080.webp 1080w,
                        images/k4m2a-cloud-1600.webp 1600w,
                        images/k4m2a-cloud-2000.webp 2000w,
                        images/k4m2a-cloud-2600.webp 2600w,
                        images/k4m2a-cloud.webp        2984w
                    "
              sizes="100vw"
              className="cloud-img cc-2"
            />
          </div>
          {/* Additional Content */}
        </div>
      </header>
    </main>
  );
}

export default RequestInvite;
