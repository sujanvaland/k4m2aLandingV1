import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { API_URL } from '../../api_config';

const isAndroid = /Android/i.test(navigator.userAgent);
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);


export default function EmailForm({
  buttonText = 'Download App',
  placeholder = "What's your email?",
  notice = 'Enter your email to download for both iOS and Android',
  noticeandroid = 'Enter your email to download for Android app',
  noticeios = 'Enter your email to download for iOS app',
  className = '',
  classNameNote = 'textalcenter',
  onSuccess = () => { },
  isCreator = false
}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errortext, setErrortext] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      setErrortext("Please enter a valid email address.");
      return;
    }

    setError(""); // Clear any previous error messages
    setLoading(true);
    const request = {
      // "id": 0,
      "email": email,
      "name": "",
      "phone": "",
      "city": "",
      "journey": "",
      "inviter": ""
    }

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
      console.log("API response data:", data);  // Log to inspect the data

      setLoading(false);

      if (typeof data?.result === "string" && data?.result?.toLowerCase() === "already registered") {
        setError(true);
        setErrortext("You are already on the waitlist.");
      } else if (data?.success) {  // Simplified truthy check
        setSuccess(true);
        onSuccess();

        // navigate("/request-invite", { state: { email, id: data?.result?.id } });
        // navigate.push("/request-invite", { state: { email, id: data?.result?.id } });
        const targetRoute = "/downloadapp";
        // navigate(targetRoute, { state: { email, id: data?.result?.id } });
        // {
        //       isIOS &&

        // }

        // navigate(targetRoute, {
        //   state: {
        //     email,
        //     id: data?.result?.id,
        //     successMessage: "Invitation request submitted successfully!"
        //   }
        // });



        // Redirect based on device
        if (isAndroid) {
          window.location.href = "https://play.google.com/store/apps/details?id=com.k4m2a&hl=en_IN";
        } else if (isIOS) {
          window.location.href = "https://apps.apple.com/in/app/k4m2a/id6743112577";
        } else {
          // If not mobile, navigate internally
          navigate(targetRoute);
        }


        setEmail("");
        // setSuccess(false);
        setError("");
      } else {
        toast.error(data?.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className={`form-wrap ${className}`}>
      <form onSubmit={handleSubmit} className="input-wrap emailform">
        <input
          type="email"
          maxLength={320}
          className={`input w-input ${error ? "input-error" : ""}`}
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="input-bg u-rainbow u-blur-perf" />
        <button
          type="submit"
          className="form-submit w-button applebutton"
          disabled={loading}
        >
          {loading ? "Downloading..." : buttonText}

          {
            isIOS &&
            <img
              src="/images/apple-logo.png" // Fallback image in JPEG/PNG
              alt="K4M2A Portal"
              className="home-hero-portal"
            />
          }
          {
            isAndroid &&
            <img
              src="/images/android_logo.png" // Fallback image in JPEG/PNG
              alt="K4M2A Portal"
              className="home-hero-portal"
            />
          }
        </button>
      </form>
      {error && <div className="error-message martop10">{errortext}</div>}
      {/* {success && (
        <div className="success-message martop10">
          Invitation request submitted successfully!
        </div>

      )} */}
      {notice && !success && (

        <div className={`hero-notice martop10 ${classNameNote}`}>
          {isAndroid && noticeandroid}
          {isIOS && noticeios}
          {!isAndroid && !isIOS && notice}


        </div>
      )}
    </div>
  );
}


EmailForm.propTypes = {
  buttonText: PropTypes.string,
  placeholder: PropTypes.string,
  notice: PropTypes.string,
  className: PropTypes.string,
  classNameNote: PropTypes.string,
  onSuccess: PropTypes.func,
  isCreator: PropTypes.bool,

};
