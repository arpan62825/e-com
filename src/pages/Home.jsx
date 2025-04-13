import heroModelMin from "../assets/images/hero-model-min.png";
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
  return (
    <main className="landing-page">
      <div className="hero">
        <section className="hero-text">
          <h1 className="hero-headline">
            {/* THIS SEEMS MESSY CAUSE OF THE EXTRA STYLING. */}
            Where C
            <span className="image-as-letter">
              <img src={spanImage1} alt="span-element" />
            </span>
            nsci
            <span className="image-as-letter">
              <img src={spanImage2} alt="span-element" />
            </span>
            us Design Meets Timeless Style.
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
          <div className="navigation">
            <button className="nav-button">←</button>
            <button className="nav-button">→</button>
          </div>

          <div className="testimonial-slide">
            <div className="quote-mark">"</div>
            <div className="testimonial-content">
              I’ve never felt more aligned with a brand’s values. Not only are
              the pieces beautifully made, but knowing that they’re produced
              with sustainability at the forefront makes each wear feel
              meaningful. It’s fashion with purpose, and my wardrobe—and
              conscience—thank you for it.
            </div>
            <div className="testimonial-author">John B.</div>
            <div className="rating-container">
              <div className="left-rating">
                <div className="stars">★★★★★</div>
                <div className="verification">
                  <div>5-Star</div>
                  <div>Verified Review</div>
                </div>
              </div>
              <div className="right-rating">
                <img
                  src="/api/placeholder/50/50"
                  alt="BBB Logo"
                  className="bbb-logo"
                />
                <div className="verification">
                  <div>5-Star</div>
                  <div>Verified Review</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="more-button">More journeys</button>
      </section>
    </main>
  );
}
