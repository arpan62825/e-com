import { Link } from "react-router-dom";
import { Spa, Recycling, Brush, Groups } from "@mui/icons-material";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>WHERE ETHICS WEAVE WITH INNOVATION</h1>
          <p className="hero-sub">Crafting Tomorrow's Legacy Today</p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="content-block">
          <Spa className="section-icon" />
          <h2>Rooted in Responsibility</h2>
          <p className="emphasis-text">
            We believe luxury shouldn't cost the earth. Our designs marry
            timeless aesthetics with radical sustainability, proving
            conscientious fashion can captivate.
          </p>
        </div>
      </section>

      {/* Process Grid */}
      <section className="process-grid">
        <div className="process-item">
          <Recycling className="process-icon" />
          <h3>Circular Systems</h3>
          <p>94% recycled materials in our latest collection</p>
        </div>

        <div className="process-item">
          <Groups className="process-icon" />
          <h3>Ethical Partnerships</h3>
          <p>23 artisan collectives empowered worldwide</p>
        </div>

        <div className="process-item">
          <Brush className="process-icon" />
          <h3>Clean Design</h3>
          <p>Zero-waste pattern making since 2018</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="timeline-content">
          <h2>Our Evolution</h2>
          <div className="timeline-item">
            <div className="timeline-marker" />
            <h4>2017</h4>
            <p>First plant-dyed capsule collection</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker" />
            <h4>2020</h4>
            <p>Closed-loop production implemented</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker" />
            <h4>2023</h4>
            <p>Carbon-neutral certification achieved</p>
          </div>
        </div>
      </section>
    </div>
  );
}
