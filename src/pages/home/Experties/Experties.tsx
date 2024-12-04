import { useState } from 'react';
import './Experties.scss';

const Experties = () => {

  const [activeTab, setActiveTab] = useState("Frontend");

  const content: {
    Frontend: string[];
    Backend: string[];
    "CMS/E-commerce": string;
    "UI/UX": string;
    Mobile: string[];
  } = {
    Frontend: [
      "angular.jpg",
      "bootstrap.jpg",
      "css.jpg",
      "dart.jpg",
      "html.jpg",
      "java.jpg",
      "kotlin.jpg",
      "react.jpg",
      "swift.jpg",
    ],
    Backend: ["asp.jpg", "dotnet.jpg", "javascript.jpg", "nodejs.jpg","php.jpg", "laravel.jpg"],
    "CMS/E-commerce": "CMS/E-commerce",
    "UI/UX": "UI/UX",
    Mobile: ["android.jpg", "ios.jpg", "flutter.jpg"],
  };


  return (
    <div className="flex container">
      <h2>
        Our Expertise in Various Technologies
        <span>
          m ipsum odor amet, consectetuer adipiscing elit. Arcu sed vestibulum
          sit sit hendrerit cras in potent
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
        {Array.isArray(content[activeTab as keyof typeof content]) ? (
          <div className="card-container">
            {(content[activeTab as keyof typeof content] as string[]).map(
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
            <p>{content[activeTab as keyof typeof content]}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Experties