import { useEffect, useState } from "react";
import "./Experties.scss";
import AOS from "aos";

interface ExpertiesProps {
  selectedKey?: string; // optional prop to filter view
}

const Experties: React.FC<ExpertiesProps> = ({ selectedKey }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const [activeTab, setActiveTab] = useState(selectedKey || "UI/UX");

  const content: { [key: string]: string[] } = {
    "UI/UX": [
      "Figma.png",
      "Canva.png",
      "Photoshop.png",
      "Illustrator.png",
      "Balsamiq.png",
    ],
    "Frontend": [
      "css.jpg",
      "html.jpg",
      "react.jpg",
      "Vue.png",
      "angular.jpg",
      "javascript.jpg",
      "typeScript.png",
      "bootstrap.jpg",
      "Tailwind.png",
    ],
    "Backend": [
      "nodejs.jpg",
      "Express.png",
      "Django.png",
      "Flask.png",
      "Ruby.png",
      "SpringBoot.png",
      "laravel.jpg",
      "php.jpg",
      "java.jpg",
    ],
    "AI/ML": [
      "Python.png",
      "Machine Learning (ML).png",
      "Deep Learning (DL).png",
      "NLP.png",
      "TensorFlow.png",
      "Keras.png",
      "PyTorch.png",
      "Scikit-learn.png",
      "OpenCV.png",
      "NLTK.png",
      "spaCy.png",
      "Pandas.png",
      "NumPy.png",
      "Matplotlib.png",
      "XGBoost.png",
    ],
    "DevOps": [
      "Git.png",
      "GitHub.png",
      "GitLab.png",
      "Bitbucket.png",
      "Docker.png",
      "Linux OS.png",
      "VPS.png",
      "Hostinger.png",
      "Jenkins.png",
      "Grafana.png",
      "Prometheus.png",
      "Microsoft Azure.png",
    ],
    "Database": [
      "oracle.png",
      "my SQL.png",
      "Microsoft SQl Server.png",
      "postgreaql.png",
      "mongodb.png",
      "Redis.png",
      "Elasticsearch.png",
      "Apache Cassandra.png",
    ],
  };

  const activeContent = content[activeTab];

  // Custom headings & descriptions for each expertise area
  const headings: { [key: string]: { title: string; description: string } } = {
    "UI/UX": {
      title: "Mastering UI/UX Design",
      description:
        "Crafting visually appealing and user-centric interfaces that drive seamless digital experiences.",
    },
    "Frontend": {
      title: "Frontend Development Excellence",
      description:
        "Building interactive, responsive, and modern web interfaces with the latest technologies.",
    },
    "Backend": {
      title: "Robust Backend Architecture",
      description:
        "Developing scalable and efficient backend systems to power secure and fast web applications.",
    },
    "AI/ML": {
      title: "Artificial Intelligence & Machine Learning",
      description:
        "Leveraging data-driven intelligence to create smart, predictive, and automated systems.",
    },
    "DevOps": {
      title: "DevOps & Cloud Engineering",
      description:
        "Streamlining deployment pipelines, ensuring scalability, and maintaining efficient cloud infrastructure.",
    },
    "Database": {
      title: "Database Management & Optimization",
      description:
        "Designing and optimizing databases for high performance, security, and reliability.",
    },
  };

  const defaultHeading = {
    title: "Our Expertise In Various Technologies",
    description:
      "Explore the industries we serve through tailored solutions specifically designed to address their unique challenges and requirements.",
  };

  const currentHeading =
    selectedKey && headings[selectedKey]
      ? headings[selectedKey]
      : defaultHeading;

  return (
    <div
      className="flex container experties-container strech-content"
      data-aos="fade-up"
    >
      <h2>
        {currentHeading.title}
        <span>{currentHeading.description}</span>
      </h2>

      {/* Hide tab navigation if selectedKey prop is passed */}
      {!selectedKey && (
        <div className="tab-container">
          <div className="tabs">
            {Object.keys(content).map((tab) => (
              <div
                key={tab}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="tab-content">
        {Array.isArray(activeContent) ? (
          <div className="card-container">
            {activeContent.map((image, index) => (
              <div className="card" key={index}>
                <img
                  src={`../../../../media/experties_images/${image}`}
                  alt={image}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="card">
            <p>{activeContent}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experties;
