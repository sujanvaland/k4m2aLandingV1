import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../api_config";
import { toast } from "react-toastify";

export default function EmailForm({
  buttonText = "Request",
  placeholder = "Enter your e-mail",
  notice = "Request invite to get access",
  className = "",
  classNameNote="textalcenter",
  onSuccess =()=>{}
}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(""); // Clear any previous error messages
    setLoading(true);
    const request={
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
     
     
      setLoading(false);
      if(typeof data?.result === 'string' && data?.result?.toLowerCase()  == "already registered"){
        toast.error('You are already on the waitlist.');
      }
      else if(data.success){
        setSuccess(true);
        onSuccess()

        // toast.success('Email Sent Sucessfully!');

        // Navigate to the next page or show success message
        navigate("/request-invite", {state:{email, id: data?.result?.id}});

         //reset
         setEmail("")
         setSuccess(false)
         setError("")
      }
      else{
        toast.error('Something went wrong. Please try again.');
        // setError(error.message || "Something went wrong. Please try again.");
      }
      
    } catch (error) {
      console.log(error)
      setLoading(false);
      toast.error('Something went wrong. Please try again.');
      // setError(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className={`form-wrap ${className}`}>
      <form onSubmit={handleSubmit} className="input-wrap">
        <input
          type="email"
          maxLength={320}
          className={`input w-input ${error ? "input-error" : ""}`}
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="input-bg u-rainbow u-blur-perf"></div>
        <button
          type="submit"
          className="form-submit w-button"
          disabled={loading}
        >
          {loading ? "Requesting..." : buttonText}
        </button>
      </form>
      {error && <div className="error-message martop10">{error}</div>}
      {success && (
        <div className="success-message martop10">
          Invitation request submitted successfully!
        </div>
      )}
      {notice && !success && (
        <div className={`hero-notice martop10 ${classNameNote}`}>{notice}</div>
      )}
    </div>
  );
}
