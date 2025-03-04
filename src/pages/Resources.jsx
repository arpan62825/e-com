import { useState } from "react";
import {
  MenuBook,
  LocalLibrary,
  Download,
  Checkroom,
} from "@mui/icons-material";

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("all");

  const resources = [
    {
      title: "2024 Sustainability Report",
      category: "reports",
      description:
        "Comprehensive analysis of our environmental impact and ethical initiatives",
      icon: <MenuBook className="resource-icon" />,
      downloadLink: "#",
    },
    {
      title: "Fabric Care Guide",
      category: "guides",
      description: "Expert tips for maintaining your sustainable garments",
      icon: <LocalLibrary className="resource-icon" />,
      downloadLink: "#",
    },
    {
      title: "Material Innovation Whitepaper",
      category: "research",
      description: "Latest developments in eco-friendly textile technology",
      icon: <Checkroom className="resource-icon" />,
      downloadLink: "#",
    },
  ];

  const filteredResources =
    activeCategory === "all"
      ? resources
      : resources.filter((resource) => resource.category === activeCategory);

  return (
    <div className="resources-page">
      <section className="resources-hero">
        <h1>KNOWLEDGE CENTER</h1>
        <p className="hero-sub">
          Empowering Conscious Choices Through Education
        </p>
      </section>

      <section className="resources-filter">
        <button
          className={`filter-btn ${activeCategory === "all" ? "active" : ""}`}
          onClick={() => setActiveCategory("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${
            activeCategory === "reports" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("reports")}
        >
          Reports
        </button>
        <button
          className={`filter-btn ${
            activeCategory === "guides" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("guides")}
        >
          Guides
        </button>
        <button
          className={`filter-btn ${
            activeCategory === "research" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("research")}
        >
          Research
        </button>
      </section>

      <section className="resources-grid">
        {filteredResources.map((resource, index) => (
          <div className="resource-card" key={index}>
            <div className="resource-content">
              {resource.icon}
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </div>
            <a href={resource.downloadLink} className="download-btn">
              <Download /> Download
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

