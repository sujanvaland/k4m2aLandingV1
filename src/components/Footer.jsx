import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer">
      <div className="page-padding">
        <div className="container">
          <div className="footer-menu">
            <Link to="/" className="footer-logo">
              <div className="svg-embed cc-logo-icon">
                <img src="/images/logo-main-wh.svg" alt="K4M2A Logo" />
              </div>
            </Link>
            
            <div className="footer-cell">
              <div className="footer-heading">The Good</div>
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/manifesto" className="footer-link">Manifesto</Link>
              <Link to="/research" className="footer-link">Research</Link>
              <Link to="/careers" className="footer-link">Careers</Link>
            </div>

            <div className="footer-cell">
              <div className="footer-heading">The Boring</div>
              <Link to="/terms" className="footer-link">Terms</Link>
              <Link to="/rules" className="footer-link">Play by the Rules</Link>
              <Link to="/privacy" className="footer-link">Privacy</Link>
            </div>

            <div className="footer-cell">
              <div className="footer-heading">The Cool</div>
              <a href="#" className="footer-link">X</a>
              <a href="#" className="footer-link">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

