import { useState } from "react";
import { Article, Gavel, Security, Public } from "@mui/icons-material";

export default function TermsConditions() {
  const [activeSection, setActiveSection] = useState(0);

  const termSections = [
    {
      id: "overview",
      icon: <Article className="section-icon" />,
      title: "Overview",
      content: `These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our platform, you agree to be bound by these Terms. Our commitment to sustainable fashion extends to creating transparent, fair relationships with our customers.`,
    },
    {
      id: "account",
      icon: <Security className="section-icon" />,
      title: "Account Responsibilities",
      content: `When you create an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. We reserve the right to suspend or terminate accounts that violate these Terms.`,
    },
    {
      id: "purchases",
      icon: <Gavel className="section-icon" />,
      title: "Purchases & Transactions",
      content: `All purchases are subject to our ethical pricing policy. Prices are listed in the designated currency and exclude applicable taxes and shipping costs. We reserve the right to refuse service to anyone who violates these Terms. Promotional codes must be used in accordance with their specific terms.`,
    },
    {
      id: "intellectual",
      icon: <Public className="section-icon" />,
      title: "Intellectual Property",
      content: `All content on this website, including but not limited to text, graphics, logos, images, and software, is our property and is protected by intellectual property laws. You may not use, reproduce, or distribute our content without express written permission.`,
    },
  ];

  return (
    <div className="terms-page">
      <section className="terms-hero">
        <h1>TERMS & CONDITIONS</h1>
        <p className="hero-sub">Last Updated: February 14, 2024</p>
      </section>

      <section className="terms-content">
        <div className="terms-navigation">
          {termSections.map((section, index) => (
            <button
              key={section.id}
              className={`nav-button ${
                activeSection === index ? "active" : ""
              }`}
              onClick={() => setActiveSection(index)}
            >
              {section.icon}
              <span>{section.title}</span>
            </button>
          ))}
        </div>

        <div className="terms-sections">
          <div className="content-wrapper">
            {termSections[activeSection].icon}
            <h2>{termSections[activeSection].title}</h2>
            <div className="terms-section-content">
              <p>{termSections[activeSection].content}</p>

              {activeSection === 0 && (
                <div className="additional-content">
                  <h3>Acceptance of Terms</h3>
                  <p>
                    By accessing our website, you acknowledge that you have
                    read, understood, and agree to be bound by these Terms, our
                    Privacy Policy, and any other applicable laws and
                    regulations.
                  </p>

                  <h3>Modifications</h3>
                  <p>
                    We reserve the right to modify these Terms at any time.
                    Changes will be effective immediately upon posting to the
                    website. Your continued use of the site constitutes
                    acceptance of modified Terms.
                  </p>
                </div>
              )}

              {activeSection === 1 && (
                <div className="additional-content">
                  <h3>Account Security</h3>
                  <p>
                    You agree to notify us immediately of any unauthorized
                    access to your account. We may suspend or terminate accounts
                    that we believe are compromised or violate our Terms.
                  </p>

                  <h3>Age Restrictions</h3>
                  <p>
                    You must be at least 18 years old to create an account and
                    make purchases. By creating an account, you represent that
                    you are of legal age.
                  </p>
                </div>
              )}

              {activeSection === 2 && (
                <div className="additional-content">
                  <h3>Payment Processing</h3>
                  <p>
                    We use secure, industry-standard payment processors. Your
                    payment information is protected according to applicable
                    data protection laws and industry standards.
                  </p>

                  <h3>Order Confirmation</h3>
                  <p>
                    All orders are subject to acceptance and availability. We
                    reserve the right to refuse or cancel any order for any
                    reason, including errors in product description or pricing.
                  </p>
                </div>
              )}

              {activeSection === 3 && (
                <div className="additional-content">
                  <h3>Trademark Rights</h3>
                  <p>
                    Our trademarks, service marks, and logos may not be used
                    without prior written consent. Any unauthorized use may
                    violate trademark laws.
                  </p>

                  <h3>User Content</h3>
                  <p>
                    By submitting content to our platform (such as reviews or
                    comments), you grant us a non-exclusive, royalty-free
                    license to use, modify, and display that content.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="terms-footer">
          <p>
            For questions about these Terms & Conditions, please contact us at:
          </p>
          <p className="contact-email">legal@example.com</p>
          <p className="contact-address">
            Legal Department
            <br />
            Ephemeral Clothing
            <br />
            123 Sustainable Way
            <br />
            Earth-Friendly City, 12345
          </p>
        </div>
      </section>
    </div>
  );
}
