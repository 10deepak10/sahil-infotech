import { useEffect, useState } from "react";
import "./Experties.scss";
import AOS from "aos";

const Experties = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const [activeTab, setActiveTab] = useState("UI/UX");

  const content: { [key: string]: string[] } = {
    
    'UI/UX': [
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
      'typeScript.png',
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
      "java.jpg"
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


      // "sql lite.png",
      // "Scikit-learn.png",
      // "Phpmyadmin.png",
      // "maria db.png",
      // "amazon dynamodb.png",
    ],
  };

  return (
    <div
      className="flex container experties-container strech-content"
      data-aos="fade-up"
    >
      <h2>
        Our Expertise In Various Technologies
        <span>
        Explore the industries we serve through tailored solutions specifically designed to address their unique challenges and requirements.
        </span>
      </h2>

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
      <div className="tab-content">
        {Array(content[activeTab]) ? (
          <div className="card-container">
            {(content[activeTab]).map(
              (image, index) => (
                <div className="card" key={index}>
                  <img
                    src={`../../../../media/experties_images/${image}`}
                    alt={image}
                  />
                </div>
              )
            )}
          </div>
        ) : (
          <div className="card">
            <p>{content[activeTab]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experties;
