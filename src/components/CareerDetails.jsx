import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { toast } from 'react-toastify';
import { Select } from 'antd';
import { API_URL } from '../api_config';


const joblist = [
  {
    "category": "Content & Research Roles",
    "jobs": [
      { "title": "Researcher", "description": "Study ancient texts, philosophies, and wisdom traditions to guide platform content.", "link": "/careerdetails" },
      { "title": "Content Curator", "description": "Develop, review, and organize transformative knowledge." },
      { "title": "Knowledge Architect", "description": "Design structured learning paths and insights for users." },
      { "title": "AI Trainer", "description": "Teach AI models to understand and generate meaningful responses." }
    ]
  },
  {
    "category": "Technology & AI Roles",
    "jobs": [
      { "title": "AI Engineer", "description": "Develop AI that enhances knowledge discovery and learning." },
      { "title": "UX/UI Designer", "description": "Craft digital experiences that are intuitive and engaging." },
      { "title": "Algorithm Engineer", "description": "Build recommendation engines that support personal growth." }
    ]
  },
  {
    "category": "Growth & Engagement Roles",
    "jobs": [
      { "title": "User Engagement Lead", "description": "Foster deep connections with users and drive engagement." },
      { "title": "Marketing Lead", "description": "Share the mission and attract aligned audiences." },
      { "title": "Partnerships Manager", "description": "Build relationships with organizations and teachers." }
    ]
  },
  {
    "category": "Operations & Strategy Roles",
    "jobs": [
      { "title": "Product Manager", "description": "Oversee the evolution of platform features with purpose." },
      { "title": "People & Culture Lead", "description": "Ensure internal culture aligns with core values." },
      { "title": "Strategy Lead", "description": "Guide the platform’s long-term vision and impact." }
    ]
  }
]


function CareerDetails() {
  const { jobSlug } = useParams();
  const history = useNavigate();
  // Convert jobSlug to readable format
  const jobTitle = jobSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  // Find job description
  let jobDescription = "Job description not found.";
  joblist.forEach(category => {
    category.jobs.forEach(job => {
      if (job.title.toLowerCase() === jobTitle.toLowerCase()) {
        jobDescription = job.description;
      }
    });
  });

  const location = useLocation();
  console.log('location', location);
  const navigate = useNavigate();
  const initialEmail = location.state?.state?.email || ''; // Retrieve email from state or fallback to empty string
  const UserID = '0'; // Retrieve email from state or fallback to empty string

  console.log('locationemail', location.state?.state?.email);

  const [formData, setFormData] = useState({
    how: '',
    // jobTitle: jobTitle,
    howMuchTime: '',
    fullName: '',
    email: initialEmail,
    phone: '',
    city: '',
    about: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateFields = (_formData = formData) => {
    const fieldErrors = {};

    if (!_formData.fullName) fieldErrors.fullName = 'Full name is required.';

    if (!_formData.email || !isValidEmail(_formData.email)) fieldErrors.email = 'Please enter a valid email.';

    if (!_formData.phone || !isValidPhoneNumber(_formData.phone))
      fieldErrors.phone = 'Please enter a valid phone number.';

    if (!_formData.city) fieldErrors.city = 'City is required.';

    if (!_formData.about) fieldErrors.about = 'Abouts details are required.';

    if (!_formData.how) fieldErrors.how = 'Please select how you would like to work with us.';

    if (!_formData.howMuchTime) fieldErrors.howMuchTime = 'Please select how much time you can give.';


    return fieldErrors;
  };


  //   const handleChange = (e) => {
  // console.log('e', e);
  //     const { name, value } = e.target;
  //     const formDataUpdated = {
  //       ...formData,
  //       [name]: value,
  //     };
  //     setFormData(formDataUpdated);
  //     if (isSubmit) {
  //       setErrors({});
  //       const fieldErrors = validateFields(formDataUpdated);
  //       if (Object.keys(fieldErrors).length > 0) {
  //         setErrors(fieldErrors);
  //       }
  //     }
  //   };

  const handleChange = (eventOrValue, maybeName) => {
    let name;
    let value;

    if (typeof eventOrValue === 'object' && eventOrValue?.target) {
      // For native inputs: event.target.name & value
      ({ name, value } = eventOrValue.target);
    } else {
      // For custom components like AntD Select
      value = eventOrValue;
      name = maybeName;
    }

    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedFormData);

    if (isSubmit) {
      setErrors({});
      const fieldErrors = validateFields(updatedFormData);
      if (Object.keys(fieldErrors).length > 0) {
        setErrors(fieldErrors);
      }
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

    setErrors({});
    setLoading(true);

    const request = {
      id: UserID,
      email: formData.email,
      name: formData.fullName,
      phone: formData.phone,
      city: formData.city,
      // jobTitle: formData.jobTitle,
      about: formData.about,
      how: formData.how,
      howMuchTime: formData.howMuchTime,
      // jobDescription: formData.jobDescription,

      // journey: formData.journeyDetails,
      // inviter: formData.referredBy,
    };

    console.log('request', request);

    try {
      const response = await fetch(`${API_URL}/User/CareerRequest`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error('Failed to submit. Please try again later.');
      }

      const data = await response.json();
      console.log('datadata', data?.result);
      setLoading(false);
      setIsSubmit(false);

      if (typeof data?.result === 'string' && data?.result?.toLowerCase() === 'phone number already registered') {
        toast.error('Phone Number already registered.');

        console.log('data', data?.result);
      } else if (data.success) {
        if (data?.message === 'Success') {
          setSuccess(true);
          //  navigate('/thank-you', { state: { name: data?.result?.name, pagename: 'career' } });
          navigate('/thank-you', {
            state: {
              name: data?.result?.name,
              pagename: 'career',
            },
          });
          // history('/thank-you', {
          //   name: data?.result?.name,
          //   pagename: 'career',
          // });
        }
        else {
          toast.error(data?.result);
        }
        console.log('data2', data?.result);
        // toast.success('Thank You Sharing information.');


      } else {
        toast.error('Something went wrong. Please try again.');

        // setErrors({ form: "Something went wrong. Please try again." });
      }
    } catch (error) {
      setLoading(false);
      toast.error('Something went wrong. Please try again.');

      //   setErrors({ form: "Something went wrong. Please try again." });
    }
  };

  const handlePhoneChange = (phone) => {
    if (phone) {
      const formDataUpdated = { ...formData, phone };
      setFormData(formDataUpdated);
      if (isSubmit) {
        setErrors({});
        const fieldErrors = validateFields(formDataUpdated);
        if (Object.keys(fieldErrors).length > 0) {
          setErrors(fieldErrors);
        }
      }
    }
  };



  return (
    <main className="main cc-home careerpagedetails">
      <section className="hero">
        <div className="page-padding">
          <div className="frontcontainer">
            <div className="section-header cc-legal frontcontainer--small">
              <h1 className="section-heading cc-large"> {jobTitle} : {jobDescription}</h1>
            </div>
            <div className="frontcontainer frontcontainer--small">
              <div className="legal-rt w-richtext">
                <div className="formmainbox">
                  <form onSubmit={handleSubmit}>
                    <ul>
                      <li>
                        <Select
                          name="how"
                          placeholder={
                            <span style={{ color: "#818181", fontSize: '14px' }}>How would you like to work with us:</span> // Change the color
                          }
                          style={{ width: '100%' }}
                          onChange={(value) => handleChange(value, 'how')}
                          options={[
                            { value: 'I want to help humanity but I want money', label: 'I want to help humanity but I want money' },
                            { value: 'I want to help humanity and I dont need money', label: 'I want to help humanity and I dont need money' },

                          ]}
                          className="custom-select"
                        />
                        {errors.how && <p className="error-text">{errors.how}</p>}
                      </li>
                      <li>
                        <Select
                          name="howMuchTime"
                          placeholder={
                            <span style={{ color: "#818181", fontSize: '14px' }}>How much time can you give:</span> // Change the color
                          }
                          style={{ width: '100%' }}
                          onChange={(value) => handleChange(value, 'howMuchTime')}
                          options={[
                            { value: '40 hours per week', label: '40 hours per week' },
                            { value: '20 hours per week', label: '20 hours per week' },
                            { value: '10 hours per week', label: '10 hours per week' },
                            { value: '4 hours per week', label: '4 hours per week' },
                            { value: 'I will decide later and inform', label: 'I will decide later and inform' },

                          ]}
                          className="custom-select"
                        />
                        {errors.howMuchTime && <p className="error-text">{errors.howMuchTime}</p>}
                      </li>
                      <li>
                        <input
                          type="text"
                          name="fullName"
                          maxLength={100}
                          className={`form-control input ${errors.fullName ? 'input-error' : ''}`}
                          placeholder="Enter Full Name"
                          value={formData.fullName}
                          // onChange={handleChange}
                          onChange={(e) => {
                            const { value } = e.target;

                            const capitalizedValue = value
                              .split(' ')
                              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                              .join(' ');
                            handleChange({ target: { name: 'fullName', value: capitalizedValue } });
                          }}
                        />
                        {errors.fullName && <p className="error-text">{errors.fullName}</p>}
                      </li>
                      <li className={`phonebox ${isValidPhoneNumber(formData.phone) ? '' : 'phone-error'}`}>
                        <PhoneInput
                          international
                          className={`form-control input ${errors.phone ? 'input-error' : ''}`}
                          defaultCountry="US"
                          value={formData.phone}
                          limitMaxLength={20}
                          onChange={handlePhoneChange}
                        />
                        <div>
                          {errors.phone ? (
                            <p className="error-text">{errors.phone}</p>
                          ) : formData.phone ? (
                            isValidPhoneNumber(formData.phone) ? undefined : (
                              <p className="error-text">Please enter a valid phone number.</p>
                            )
                          ) : (
                            ''
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
                               </li> */
                        <li>
                          <input
                            type="email"
                            name="email"
                            maxLength={100}
                            className={`form-control input ${errors.email ? "input-error" : ""
                              }`}
                            placeholder="Enter your Email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {errors.email && (
                            <p className="error-text">{errors.email}</p>
                          )}
                        </li>}
                      <li>
                        <input
                          type="text"
                          name="city"
                          maxLength={100}
                          className={`form-control input ${errors.city ? 'input-error' : ''}`}
                          placeholder="Enter Your City"
                          value={formData.city}
                          onChange={handleChange}
                        />
                        {errors.city && <p className="error-text">{errors.city}</p>}
                      </li>
                      {/* <li>
                                 <input
                                   type="text"
                                   name="referredBy"
                                   maxLength={100}
                                   className={`form-control input ${errors.referredBy ? 'input-error' : ''}`}
                                   placeholder="Someone Referred you to the Circle? Enter Name"
                                   value={formData.referredBy}
                                   onChange={handleChange}
                                 />
                                 {errors.referredBy && <p className="error-text">{errors.referredBy}</p>}
                               </li> */}
                      <li>
                        <textarea
                          name="about"
                          className={`areabox ${errors.about ? 'input-error' : ''}`}
                          maxLength={500}
                          placeholder="Tell us a bit about your spiritual journey"
                          value={formData.about}
                          onChange={handleChange}
                        />
                        {errors.about && <p className="error-text">{errors.about}</p>}
                      </li>
                      <li>
                        <button type="submit" className="btnsubmit w-button" disabled={loading}>
                          {loading ? 'Submitting...' : 'Submit'}
                        </button>
                      </li>
                    </ul>
                    {errors.form && <p className="error-message">{errors.form}</p>}
                    {success && <p className="success-message">Your request has been submitted successfully!</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CareerDetails;
