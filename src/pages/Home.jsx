import heroModelMin from "../assets/images/hero-model-min.png";
import line from "../assets/svg/line.svg";

export default function Home() {
  return (
    <main className="landing-page">
      <div className="hero">
        <section className="hero-text">
          <h1 className="hero-headline">
            <span>Where Conscious Design Meets Timeless Style.</span>
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
          <img className="line-svg" src={line} alt="line-svg" />
        </section>
      </div>
      <section className="model-showcase"></section>
    </main>
  );
}
