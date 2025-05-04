import heroModelMin from "../assets/images/hero-model.png";
import spanImage1 from "../assets/images/span-image-1.jpeg";
import spanImage2 from "../assets/images/span-image-2.jpeg";
import showCaseModel1 from "../assets/images/product-images/model-showcase-1.jpeg";
import showCaseModel2 from "../assets/images/product-images/model-showcase-2.jpeg";
import showCaseModel3 from "../assets/images/product-images/model-showcase-3.jpeg";
import showCaseModel4 from "../assets/images/product-images/model-showcase-4.jpeg";
import showCaseModel5 from "../assets/images/product-images/model-showcase-5.jpeg";
import showCaseModel6 from "../assets/images/product-images/model-showcase-6.jpeg";
import showCaseModel7 from "../assets/images/product-images/model-showcase-7.jpeg";
import showCaseModel8 from "../assets/images/product-images/model-showcase-8.jpeg";
import showCaseModel9 from "../assets/images/product-images/model-showcase-9.jpeg";
import showCaseModel10 from "../assets/images/product-images/model-showcase-10.jpeg";

export default function Home() {
  const reviewPlaceholderArray = [
    {
      name: "Alice Johnson",
      rating: 5,
      review: "Absolutely love this product! Exceeded my expectations.",
    },
    {
      name: "Bob Smith",
      rating: 4,
      review: "Great quality and fast delivery. Will buy again.",
    },
    {
      name: "Charlie Davis",
      rating: 3,
      review: "Good, but there's room for improvement in packaging.",
    },
    {
      name: "Diana Lee",
      rating: 5,
      review: "Perfect! I’ve recommended it to all my friends.",
    },
    {
      name: "Ethan Wright",
      rating: 2,
      review: "Didn’t work as expected. Customer support was slow.",
    },
    {
      name: "Fiona Kim",
      rating: 4,
      review: "Solid product, looks and feels premium.",
    },
  ];

  return (
    <>
      <main className="landing-page">
        <div className="hero">
          <section className="hero-text">
            <h1 className="hero-headline">
              {/* THIS SEEMS MESSY CAUSE OF THE EXTRA STYLING. */}
              Where{" "}
              <div>
                C
                <span className="image-as-letter">
                  <img src={spanImage1} alt="span-element" />
                </span>
                nsci
                <span className="image-as-letter">
                  <img src={spanImage2} alt="span-element" />
                </span>
                us
              </div>
              Design Meets Timeless Style.
            </h1>

            <h2 className="hero-subhead">
              Wear Your Values with Sustainable Luxury.
            </h2>

            <p className="hero-description">
              Every stitch tells a story of ethical craftsmanship and
              environmental stewardship. Join the movement where every purchase
              helps regenerate our planet.
            </p>
          </section>
          <section className="hero-image-wrapper">
            <img className="hero-model" src={heroModelMin} alt="hero-model" />
          </section>
        </div>
        <section className="model-showcase-slider">
          <div className="list">
            <div className="model-items" style={{ "--position": 1 }}>
              <img src={showCaseModel1} alt="" className="model-image" />
            </div>
            <div className="model-items" style={{ "--position": 2 }}>
              <img src={showCaseModel2} alt="" className="model-image" />
            </div>
            <div className="model-items" style={{ "--position": 3 }}>
              <img src={showCaseModel3} alt="" className="model-image" />
            </div>
            <div className="model-items" style={{ "--position": 4 }}>
              <img src={showCaseModel4} alt="" className="model-image" />
            </div>
            <div className="model-items" style={{ "--position": 5 }}>
              <img src={showCaseModel5} alt="" className="model-image" />
            </div>
            <div className="model-items" style={{ "--position": 6 }}>
              <img src={showCaseModel6} alt="" className="model-image" />
            </div>
            <div className="model-items" style={{ "--position": 7 }}>
              <img src={showCaseModel7} alt="" className="model-image" />
            </div>
            <div className="model-items" style={{ "--position": 8 }}>
              <img src={showCaseModel8} alt="" className="model-image" />
            </div>
            <div className="model-items" style={{ "--position": 9 }}>
              <img src={showCaseModel9} alt="" className="model-image" />
            </div>
            <div className="model-items" style={{ "--position": 10 }}>
              <img src={showCaseModel10} alt="" className="model-image" />
            </div>
          </div>
        </section>
        <section className="reviews">
          <h1>Interesting stories</h1>

          <div className="testimonial-carousel">
            {reviewPlaceholderArray.map((review, index) => (
              <div key={index} className="review-card">
                <p className="review-text">"{review.review}"</p>
                <div className="review-rating">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <p className="review-name">- {review.name}</p>
              </div>
            ))}
          </div>

          <button className="more-button">More journeys</button>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li>Products Overview</li>
              <li>Models Overview</li>
              <li>Search</li>
              <li>Generate</li>
              <li>Embed</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Social</h4>
            <ul>
              <li>LinkedIn</li>
              <li>Youtube</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>For Developers</h4>
            <ul>
              <li>Sample Apps</li>
              <li>Developer Hub</li>
              <li>API Docs</li>
              <li>SDKs</li>
              <li>Discord</li>
              <li>Status</li>
              <li>Research</li>
              <li>Enterprise</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Solutions</h4>
            <ul>
              <li>Advertising</li>
              <li>Automotive</li>
              <li>Government & Security</li>
              <li>Media & Entertainment</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Trust Center</li>
              <li>Website Terms</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <h1 className="footer-logo">Verde Luxe</h1>
          <p>© 2021 – 2025 Verde Luxe, Inc. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
