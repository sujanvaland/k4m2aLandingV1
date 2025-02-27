import  React from "react"
import { useState } from "react"





export default function BugReportForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    title: "",
    description: "",
    priority: "",
    steps: "",
  })

  const [files, setFiles] = useState([])
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validateFields = (_formData = formData) => {
    const fieldErrors = {}

    if (!_formData.fullName) {
      fieldErrors.fullName = "Full name is required."
    }

    if (!_formData.email) {
      fieldErrors.email = "Email is required."
    } else if (!isValidEmail(_formData.email)) {
      fieldErrors.email = "Please enter a valid email."
    }

    if (!_formData.title) {
      fieldErrors.title = "Bug title is required."
    }

    if (!_formData.description) {
      fieldErrors.description = "Bug description is required."
    }

    if (!_formData.priority) {
      fieldErrors.priority = "Priority selection is required."
    }

    return fieldErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const updatedFormData = {
      ...formData,
      [name]: value,
    }
    setFormData(updatedFormData)

    if (isSubmitted) {
      const fieldErrors = validateFields(updatedFormData)
      setErrors(fieldErrors)
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitted(true)

    const fieldErrors = validateFields()
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }

    setLoading(true)

    // Simulate API call
    try {
      // Replace with your actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log("Form submitted:", { ...formData, files })
      setSuccess(true)
      setLoading(false)

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        title: "",
        description: "",
        priority: "",
        steps: "",
      })
      setFiles([])
      setIsSubmitted(false)
    } catch (error) {
      console.error("Error submitting form:", error)
      setLoading(false)
    }
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
                Help us improve by reporting any issues you encounter. Your feedback is valuable in making our product
                better.
              </p>
            </div>
          </div>
        </div>
        <div className="manifesto-hero-img-wrap report-issue-hero-img-wrap">
          <div className="formmainbox">
            <form onSubmit={handleSubmit}>
              <ul>
                <li>
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
                </li>

                <li>
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
                </li>

                <li>
                  <input
                    type="text"
                    name="title"
                    maxLength={100}
                    className={`form-control input ${errors.title ? "input-error" : ""}`}
                    placeholder="Bug Title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                  {errors.title && <p className="error-text">{errors.title}</p>}
                </li>

                <li>
                  <textarea
                    name="description"
                    className={`areabox ${errors.description ? "input-error" : ""}`}
                    maxLength={500}
                    placeholder="Bug Description"
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                  {errors.description && <p className="error-text">{errors.description}</p>}
                </li>

                <li>
                  <select
                    name="priority"
                    className={`form-control input ${errors.priority ? "input-error" : ""}`}
                    value={formData.priority}
                    onChange={handleChange}
                  >
                    <option value="">Select Priority</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                  {errors.priority && <p className="error-text">{errors.priority}</p>}
                </li>

                <li>
                  <textarea
                    name="steps"
                    className="areabox"
                    maxLength={500}
                    placeholder="Steps to Reproduce (Optional)"
                    value={formData.steps}
                    onChange={handleChange}
                  ></textarea>
                </li>

                <li className="file-upload-container">
                  <label htmlFor="file-upload" className="file-upload-label">
                    <span>Upload Files (Screenshots, Logs)</span>
                  </label>
                  <input id="file-upload" type="file" multiple className="file-input" onChange={handleFileChange} />
                  {files.length > 0 && (
                    <div className="file-list">
                      {files.map((file, index) => (
                        <div key={index} className="file-item">
                          <span className="file-name">{file.name}</span>
                          <button type="button" onClick={() => removeFile(index)} className="file-remove-btn">
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </li>

                <li>
                  <button type="submit" className="btnsubmit w-button" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Bug Report"}
                  </button>
                </li>
              </ul>
              {success && <p className="success-message">Your bug report has been submitted successfully!</p>}
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
  )
}

