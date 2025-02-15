import { useState } from 'react';
import { LocalShipping, Replay, AttachMoney, CheckCircle } from '@mui/icons-material';

export default function RefundPolicy() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqItems = [
    {
      question: "How long do I have to initiate a return?",
      answer: "You have 30 days from the delivery date to initiate a return. All items must be unworn, unwashed, and have original tags attached."
    },
    {
      question: "How will I receive my refund?",
      answer: "Refunds will be processed to your original payment method within 5-7 business days after we receive and inspect your return."
    },
    {
      question: "Do I need to pay for return shipping?",
      answer: "We provide free returns within the domestic market. For international returns, shipping costs will be deducted from the refund amount."
    },
    {
      question: "What if I received a defective item?",
      answer: "For defective items, we cover all shipping costs and will either provide a replacement or full refund, including any original shipping charges."
    }
  ];

  const returnSteps = [
    {
      icon: <Replay className="step-icon" />,
      title: "Initiate Return",
      description: "Log into your account and select the items you wish to return"
    },
    {
      icon: <LocalShipping className="step-icon" />,
      title: "Ship Items",
      description: "Use our prepaid shipping label to send items back"
    },
    {
      icon: <CheckCircle className="step-icon" />,
      title: "Quality Check",
      description: "We inspect returned items within 48 hours of receipt"
    },
    {
      icon: <AttachMoney className="step-icon" />,
      title: "Refund Issued",
      description: "Refund processed to original payment method"
    }
  ];

  return (
    <div className="refund-policy-page">
      <section className="refund-hero">
        <h1>RETURNS & REFUNDS</h1>
        <p className="hero-sub">Fair, Simple, and Sustainable Return Process</p>
      </section>

      <section className="refund-content">
        <div className="policy-overview">
          <h2>Our Commitment</h2>
          <p>We stand behind the quality of our sustainable fashion pieces and want you to be completely satisfied with your purchase. Our return policy reflects our commitment to both our customers and the environment.</p>
        </div>

        <div className="return-process">
          <h2>Return Process</h2>
          <div className="steps-grid">
            {returnSteps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-icon-wrapper">
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="refund-faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${selectedQuestion === index ? 'active' : ''}`}
                onClick={() => setSelectedQuestion(selectedQuestion === index ? null : index)}
              >
                <h3>{item.question}</h3>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sustainability-note">
          <h2>Our Sustainable Approach to Returns</h2>
          <p>As part of our commitment to environmental stewardship, returned items are carefully inspected and processed using eco-friendly practices. Items that cannot be resold are responsibly recycled through our textile recycling partners.</p>
        </div>

        <div className="contact-support">
          <h2>Need Assistance?</h2>
          <p>Our dedicated support team is here to help with any questions about returns or refunds.</p>
          <p className="contact-email">Email: returns@example.com</p>
          <p className="contact-hours">Available Monday-Friday, 9am-5pm EST</p>
        </div>
      </section>
    </div>
  );
}
