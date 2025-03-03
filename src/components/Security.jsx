import React from "react";

function Security() {
  return (
    <main className="main cc-home">
      <section className="hero">
        <div className="page-padding">
          <div className="container container--small">
            <div className="section-header cc-legal">
              <div className="eyebrow-pill">
                <div className="eyebrow-pill-inner">
                  <div>Security</div>
                </div>
                <div className="eyebrow-pill-bg u-rainbow u-blur-perf"></div>
              </div>
              <h1 className="section-heading cc-large">Security at K4M2A</h1>
              <p>Vulnerability Disclosure Program</p>
            </div>
            <div className="legal-rt w-richtext">
              <p className="fnt28">
              At K4M2A, we are committed to maintaining the security of our systems and protecting the data of our users. We embrace the security research community and hope to foster a responsible and safe environment for reporting security vulnerabilities.
              </p>
              <h2>Documentation</h2>
              <p>
              For documentation about K4M2A's Security and Compliance, visit K4M2A's Trust Center. For more information about how to use K4M2A for businesses, visit K4M2A Enterprise Pro.
              </p>
              <h2>Vulnerability Disclosure Program</h2>
               <p>K4M2A's Vulnerability Disclosure Program (VDP) covers all public facing endpoints of K4M2A. All user-facing clients and API endpoints are in scope. Please note, however, that AI-related issues such as hallucinations and model safety are not in scope of the security program. Report any account-specific, functional, safety, or quality issues to support@K4M2A.ai. Direct any privacy, data retention, or data deletion concerns to privacy@K4M2A.ai.</p>
              <h2>Ethical Guidelines and Responsible Research</h2>
               <p>We believe that security research should be conducted with respect for user privacy and data. When participating in K4M2A’s VDP, researchers must avoid actions that could compromise the privacy of our users, disrupt services, or damage the integrity of our systems. Any vulnerability found should be responsibly disclosed through either the submission form below, ensuring sufficient time for investigation and remediation before any public disclosure.</p>
              
              <h2>Collaboration and Rewards</h2>
              <p>
              K4M2A is committed to building long-term strong partnerships with the security research community. In recognition of valuable contributions, we provide acknowledgment to researchers who responsibly disclose valid vulnerabilities. Depending on the severity and impact of disclosed vulnerabilities, we will offer rewards on a case-by-case basis.
              </p>

               
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Security;
