import React from "react";
import Link from "antd/lib/typography/Link";

function Privacy() {
  return (
    <main className="main cc-home termspage securitypage">
      <section className="hero">
        <div className="page-padding">
          <div className="frontcontainer frontcontainer--small">
            <div className="section-header cc-legal">
              <div className="eyebrow-pill">
                <div className="eyebrow-pill-inner">
                  <div>Policy</div>
                </div>
                <div className="eyebrow-pill-bg u-rainbow u-blur-perf" />
              </div>
              <h1 className="section-heading cc-large">Privacy Policy</h1>
            </div>
            <div className="legal-rt w-richtext termspage">
              <p>
                At <b>K4M2A</b>, your privacy is sacred. As a trusted <b>spiritual platform</b> serving a global <b>spiritual community</b>, we are committed to protecting your personal data while providing a safe space for <b>spirituality</b>, expression, and growth.
              </p>
              <p className='martop10'>By using K4M2A, you agree to the practices outlined in this Privacy Policy.</p>
              <h2>1. What We Collect and Why</h2>
              <p>
                We collect only the data needed to help you explore your <b>spiritual awakening</b> in a secure, meaningful way.

              </p>
              <h4>Information You Provide</h4>
              <ul>
                <li>
                  <strong>Account Details:</strong>Your name, email, and profile preferences when you register on K4M2A.

                </li>
                <li>
                  <strong>Content:</strong>Posts, reflections, and contributions shared with the broader <b>spiritual community</b>.

                </li>
              </ul>
              <h4>Information We Collect Automatically</h4>
              <ul>
                <li>
                  <strong>Device and Technical Data:</strong>IP address, browser type, device ID — used to improve performance and security.

                </li>
                <li>
                  <strong>Usage Data:</strong> Insights into how you interact with our <strong>spiritual platform</strong>, so we can better support your journey.

                </li>
              </ul>
              <h2>2. How We Use Your Information</h2>
              <p>
                Your information is used to offer a secure and enriching <strong>spirituality</strong>-based experience on K4M2A.

              </p>

              <ul>
                <li>
                  <strong>To provide platform services :</strong>Secure login, profile access, community engagement.

                </li>
                <li>
                  <strong>To personalize your experience :</strong>Custom content recommendations based on your interests in spiritual gifts or other themes.

                </li>
                <li>
                  <strong>To communicate updates:</strong>Notifications, support responses, and platform changes.

                </li>
                <li>
                  <strong>To comply with legal obligations:</strong>Ensuring user safety and regulatory compliance.
                </li>
              </ul>

              <h2>3. We Do Not Sell Your Data</h2>
              <p>
                K4M2A does not sell or misuse your data. We exist to support your path — not to profit from
                your personal information. Your trust is essential to the strength of this <strong>spiritual community</strong>.

              </p>

              <h2>4. When We Share Data</h2>
              <p>
                We may share limited data with verified service providers to ensure seamless operation of the
                <strong>spiritual platform</strong>. These include hosting, analytics, or security partners — all under strict
                confidentiality agreements.
              </p>
              <p className="martop10">Data may also be shared in rare situations:</p>
              <ul>
                <li>To comply with applicable laws</li>
                <li>To protect the safety of K4M2A users or the broader <strong>spirituals community</strong>
                </li>
              </ul>
              <h2>5. How We Protect Your Data</h2>
              <p>
                We use industry-standard protection measures, including: </p>
              <ul>
                <li>Data encryption</li>
                <li>Secure cloud storage</li>
                <li>Regular internal audits</li>
              </ul>
              <p className="martop10">You can also help by:</p>
              <ul>
                <li>Creating strong passwords</li>
                <li>Avoiding sharing personal details in public forums</li>
                <li>Reporting suspicious activity immediately</li>
              </ul>

              <h2>6. Your Rights & Choices</h2>
              <p>
                You control your data. At any time, you may:
              </p>
              <ul>
                <li>
                  <strong>Access or update </strong>your profile

                </li>
                <li>
                  <strong>Request deletion</strong>of your account and personal data </li>
                <li>
                  <strong>Adjust privacy settings</strong> to manage communication preferences

                </li>
                <li>
                  <strong>Request a data export</strong>   in a portable format </li>
              </ul>
              <p>To exercise your rights, email us at: <Link to="mailto:privacy@k4m2a.com">privacy@k4m2a.com</Link></p>

              <h2>7. Data Retention & Minimization</h2>
              <p>We retain only the data necessary to provide you with a secure and fulfilling <strong>spiritual
                platform</strong> experience. Once no longer needed, your information is deleted securely.
                We believe in collecting the minimum required to honor your journey through <strong>spirituality</strong>.
              </p>
              <h2>8. Policy Updates</h2>
              <p>
                We may update this Privacy Policy to reflect new features or evolving legal standards. Significant changes will be communicated in advance. Continued use of K4M2A means you accept those updates.

              </p>
              <h2>9.  Legal Compliance</h2>
              <p>
                K4M2A complies with major U.S. and global privacy laws, including:
              </p>
              <ul>
                <li><strong>GDPR</strong> (General Data Protection Regulation)</li>
                <li><strong>CCPA</strong> (California Consumer Privacy Act)</li>
              </ul>
              <p>We are committed to ethical digital practices in support of a conscious <strong>spiritual community</strong>.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                Have a question about your privacy?

              </p>

              <p>
                <strong>K4M2A Privacy Team</strong>
                <br />
                <Link to="mailto:privacy@k4m2a.com">privacy@k4m2a.com</Link>
              </p>
              <p>We’re here to protect both your data and your spiritual path.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Privacy;
