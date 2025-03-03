import React from "react";
import { useState } from "react";
import { API_URL } from "../api_config";
import { Link } from "react-router-dom";

export default function BugReportForm() {
  const [formData, setFormData] = useState({
    // fullName: "",
    // email: "",
    title: "",
    description: "",
    priority: "",
    // steps: "",
  });

  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateFields = (_formData = formData) => {
    const fieldErrors = {};

    // if (!_formData.fullName) {
    //   fieldErrors.fullName = "Full name is required."
    // }

    // if (!_formData.email) {
    //   fieldErrors.email = "Email is required."
    // } else if (!isValidEmail(_formData.email)) {
    //   fieldErrors.email = "Please enter a valid email."
    // }

    if (!_formData.title) {
      fieldErrors.title = "Bug title is required.";
    }

    if (!_formData.description) {
      fieldErrors.description = "Bug description is required.";
    }

    if (!_formData.priority) {
      fieldErrors.priority = "Priority selection is required.";
    }

    return fieldErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedFormData);

    if (isSubmitted) {
      const fieldErrors = validateFields(updatedFormData);
      setErrors(fieldErrors);
    }
  };

  const handleFileChange = (e) => {
    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/gif",
      "application/pdf",
      "text/plain",
    ];
    const selectedFiles = Array.from(e.target.files);

    // Filter out unsupported file types
    const validFiles = selectedFiles.filter((file) =>
      allowedTypes.includes(file.type)
    );

    if (validFiles.length !== selectedFiles.length) {
      alert("Only images, PDFs, and text files are allowed!");
    }

    setFiles(validFiles);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // const postUpload = (postfiles, postdata, clearStates) => {
  //   // eslint-disable-next-line no-unreachable
  //   return async (dispatch, getState) => {
  //     try {
  //       dispatch(postUploadRequest());
  //       const formData = new FormData();

  //       formData.append("text", JSON.stringify(postdata));

  //       postfiles.forEach((element, i) => {
  //         formData.append(i.toString(), {
  //           uri: element.uri,
  //           type: element.type,
  //           name: element.fileName,
  //         });
  //       });

  //       const res = await DataService.binaryPost(
  //         "Post/PostUpload",
  //         formData,
  //         { "Content-Type": "multipart/form-data" },
  //         dispatch
  //       );

  //       if (res.data.message === "Success") {
  //         // const profile = await getItem('profile');
  //         clearStates();
  //         dispatch(postUploadSuccess(res));
  //         if (postdata.type === "comment") {
  //           dispatch(doComment({ postId: postdata.parentId }));
  //           Toast.show(`messages postdata.parentId ${postdata.parentId} `);

  //           dispatch(UserActivityLog({ refId1: postdata.parentId, activityType: "comment", type: "post" }));
  //         }
  //         if (postdata?.type?.toLowerCase() == "post") {
  //           Toast.show("Your Post Sent");
  //         }
  //       } else {
  //         dispatch(postUploadErr(res));
  //       }
  //     } catch (err) {
  //       dispatch(postUploadErr(err));
  //     }
  //   };
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const fieldErrors = validateFields();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");

      if (!token) {
        console.error("Token is missing in the URL");
        setLoading(false);
        return;
      }

      // Create form data
      const formDataValues = new FormData();
      const data = {
        BugTitle: formData.title,
        BugDescription: formData.description,
        Priority: formData.priority,
        Files: [],
      };

      formDataValues.append("text", JSON.stringify(data));

      if (files.length > 0) {
        files.forEach((file, index) => {
          if (file instanceof File) {
            formDataValues.append(`${index}`, file); // Ensure indexed array format
          }
        });
      } else {
        formDataValues.append("Files[]", ""); // Ensure 'Files[]' key exists if no files
      }

      // Send request
      const response = await fetch(
        "https://k4m2a-api.azurewebsites.net/api/User/ReportBugs",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formDataValues,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit bug report");
      }

      console.log("Bug report submitted successfully");
      setSuccess(true);
      setFormData({
        title: "",
        description: "",
        priority: "",
      });
      setFiles([]);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
      setIsSubmitted(false);
    }
  };

  if (success) {
    return (
      <main className="main cc-home">
        <div
          data-w-id="077155df-02cf-ce52-d236-39089a93392f"
          className="manifesto-hero-trigger"
        ></div>
        <header className="hero cc-manifesto">
          <div className="page-padding">
            <div className="container">
              <div className="manifesto-header">
                <img src="images/img_thankyou.png" />
                <div className="eyebrow-pill">
                  <div className="greenbox">
                    <div>Thank You</div>
                  </div>
                  <div className="eyebrow-pill-bg u-rainbow u-blur-perf"></div>
                </div>

                {/* <button >{UserFullName}</button> */}

                <p className="subheading maxw530 marbtm20">
                  Did you know that 85% of people believe they have the power to
                  make the world a better place, yet only 5% consistently take
                  concrete action toward that goal? You've already taken the
                  crucial first step, and we want to celebrate that.{" "}
                </p>
                <p className="subheading maxw530">
                  We receive hundreds of requests every day, but yours stands
                  out. You’re special to us, and we want to make sure we
                  approach this with the care it deserves. Our team will reach
                  out soon via call and email to learn more about you. Keep an
                  eye out, and let’s take the next step together!
                </p>
                {/* <Link onClick={()=>setS} to="/report-issue" className="linkreturnhomepage">
                  Return to Report a Bug
                </Link> */}
              </div>
            </div>
          </div>
        </header>
      </main>
    );
  }

  return (
    <main className="main cc-home">
      <header className="hero cc-manifesto">
        <div className="page-padding">
          <div className="container">
            <div className="manifesto-header">
              <div className="eyebrow-pill">
                <div className="eyebrow-pill-inner">
                  <div>Help Us Improve</div>
                </div>
                <div className="eyebrow-pill-bg u-rainbow u-blur-perf"></div>
              </div>
              <h1 className="home-hero-heading">Report a Bug</h1>
              <p className="subheading maxw530">
                Help us improve by reporting any issues you encounter. Your
                feedback is valuable in making our product better.
              </p>
            </div>
          </div>
        </div>
        <div className="manifesto-hero-img-wrap report-issue-hero-img-wrap">
          <div className="formmainbox">
            <form onSubmit={handleSubmit}>
              <ul>
                {/* <li>
                  <input
                    type="text"
                    name="fullName"
                    maxLength={100}
                    className={`form-control input ${errors.fullName ? "input-error" : ""}`}
                    placeholder="Enter Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && <p className="error-text">{errors.fullName}</p>}
                </li> */}

                {/* <li>
                  <input
                    type="email"
                    name="email"
                    maxLength={100}
                    className={`form-control input ${errors.email ? "input-error" : ""}`}
                    placeholder="Enter Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </li> */}

                <li>
                  <input
                    type="text"
                    name="title"
                    maxLength={100}
                    className={`form-control input ${
                      errors.title ? "input-error" : ""
                    }`}
                    placeholder="Bug Title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                  {errors.title && <p className="error-text">{errors.title}</p>}
                </li>

                <li>
                  <textarea
                    name="description"
                    className={`areabox ${
                      errors.description ? "input-error" : ""
                    }`}
                    maxLength={500}
                    placeholder="Bug Description"
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                  {errors.description && (
                    <p className="error-text">{errors.description}</p>
                  )}
                </li>

                <li>
                  <select
                    name="priority"
                    className={`form-control input ${
                      errors.priority ? "input-error" : ""
                    }`}
                    value={formData.priority}
                    onChange={handleChange}
                  >
                    <option value="">Select Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                  {errors.priority && (
                    <p className="error-text">{errors.priority}</p>
                  )}
                </li>

                {/* <li>
                  <textarea
                    name="steps"
                    className="areabox"
                    maxLength={500}
                    placeholder="Steps to Reproduce (Optional)"
                    value={formData.steps}
                    onChange={handleChange}
                  ></textarea>
                </li> */}

                <li className="file-upload-container">
                  <label htmlFor="file-upload" className="file-upload-label">
                    <span>Upload Files (Screenshots, Logs)</span>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    className="file-input"
                    accept="image/*,.pdf,.txt" // Allow only images, PDFs, and text files
                    onChange={handleFileChange}
                  />
                  {files.length > 0 && (
                    <div className="file-list">
                      {files.map((file, index) => (
                        <div key={index} className="file-item">
                          <span className="file-name">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="file-remove-btn"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </li>

                <li>
                  <button
                    type="submit"
                    className="btnsubmit w-button"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Bug Report"}
                  </button>
                </li>
              </ul>
            </form>
          </div>
          <div className="hero-cloud-1">
            <div className="cloud-img cc-1"></div>
          </div>
          <div className="hero-cloud-2">
            <div className="cloud-img cc-2"></div>
          </div>
        </div>
      </header>
    </main>
  );
}
