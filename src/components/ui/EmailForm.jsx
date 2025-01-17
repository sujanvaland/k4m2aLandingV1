import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function EmailForm({ 
  buttonText = "Request",
  placeholder = "Enter your e-mail",
  notice = "Request invite to get access",
  className = ""
}) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/request-invite')
  }

  return (
    <div className={`form-wrap ${className}`}>
      <form onSubmit={handleSubmit} className="input-wrap">
        <input
          type="email"
          className="input w-input"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="input-bg u-rainbow u-blur-perf"></div>
        <button type="submit" className="form-submit">
          {buttonText}
        </button>
      </form>
      {notice && (
        <div className="hero-notice martop10 textalcenter">{notice}</div>
      )}
    </div>
  )
}

