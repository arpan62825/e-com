import { useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

export default function PrivacyPolicy() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const policySections = [
    {
      title: "Information We Collect",
      content: `We collect information that you provide directly to us, including when you create an account, make a purchase, sign up for our newsletter, or contact us for support. This may include your name, email address, postal address, phone number, and payment information. We also automatically collect certain information about your device when you use our services.`
    },
    {
      title: "How We Use Your Information",
      content: `We use the information we collect to process your orders, communicate with you about our products and services, personalize your shopping experience, and improve our website. We may also use your information to send you marketing communications, subject to your preferences and applicable laws.`
    },
    {
      title: "Information Sharing",
      content: `We value your privacy and do not sell your personal information to third parties. We share your information only with service providers who assist us in operating our website, processing payments, and delivering products to you. These partners are bound by strict confidentiality agreements.`
    },
    {
      title: "Your Rights and Choices",
      content: `You have the right to access, correct, or delete your personal information. You can also opt out of marketing communications at any time. To exercise these rights or ask questions about our privacy practices, please contact our privacy team at privacy@example.com.`
    },
    {
      title: "Data Security",
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction. We regularly review and update our security practices to maintain the safety of your data.`
    },
    
  ];

  return (
    <div className="privacy-policy-page">
      <section className="privacy-hero">
        <h1>PRIVACY POLICY</h1>
        <p className="hero-sub">Protecting Your Privacy with the Same Care We Protect Our Planet</p>
      </section>

      <section className="privacy-content">
        <div className="policy-introduction">
          <p>At Ephemeral Clothing, we believe in transparency and respect for your privacy. This policy outlines our practices for collecting, using, and protecting your personal information. Last updated: February 2024.</p>
        </div>

        <div className="policy-sections">
          {policySections.map((section, index) => (
            <div
              key={index}
              className={`policy-section ${expandedSection === index ? 'expanded' : ''}`}
            >
              <button
                className="section-header"
                onClick={() => toggleSection(index)}
              >
                <h2>{section.title}</h2>
                {expandedSection === index ?
                  <KeyboardArrowUp className="toggle-icon" /> :
                  <KeyboardArrowDown className="toggle-icon" />
                }
              </button>
              <div className="section-content">
                <p>{section.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="policy-footer">
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <address>
            Privacy Team<br />
            Ephemeral Clothing<br />
            123 Sustainable Way<br />
            Earth-Friendly City, 12345<br />
            privacy@example.com
          </address>
        </div>
      </section>
    </div>
  );
}
