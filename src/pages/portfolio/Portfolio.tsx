import React, { useState } from "react";
import "./Portfolio.scss";
import { useNavigate } from "react-router-dom";
import { portfolioItems } from "../../db/portfolioData";
import { Helmet } from "react-helmet-async";

const arrowIcon = "/media/icons/arrow-up-right.svg"; 

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const filteredPortfolioItems = portfolioItems.filter(item => {
    if (activeTab === "all") return true;
    return item.tags.some(tag => tag.toLowerCase() === activeTab.toLowerCase());
  });

  const tabs = ["all", "e-commerce", "web"];

  return (
    <div className="container grid-container text-center gap-20 py-40">
      <Helmet>
        <title>Portfolio | Sahil Infotech</title>
        <meta name="description" content="Explore our impactful projects delivered to clients across various domains including Web, Mobile, and E-commerce." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Portfolio | Sahil Infotech" />
        <meta property="og:description" content="Explore our impactful projects delivered to clients across various domains including Web, Mobile, and E-commerce." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={`${window.location.origin}/media/hero-bg.png?v=1`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={window.location.href} />
        <meta name="twitter:title" content="Portfolio | Sahil Infotech" />
        <meta name="twitter:description" content="Explore our impactful projects delivered to clients across various domains including Web, Mobile, and E-commerce." />
        <meta name="twitter:image" content={`${window.location.origin}/media/hero-bg.png?v=1`} />
      </Helmet>
      <div className="title flex-col gap-16">
        <h3 className="heading3 empty">Our Awesome Portfolio</h3>
        <p className="text empty">Explore our impactful projects delivered to clients across various domains.</p>
      </div>

      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab_item text f-20 ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>

      <div className="portfolio_wrapper">
        {filteredPortfolioItems.map((item) => (
          <div key={item.id} className="portfolio_card flex-col">
             {/* Banner Image - using placeholder if img is empty */}
             <div 
                className="card-img-container" 
                style={{width: '100%', overflow: 'hidden', borderRadius: '8px', cursor: 'pointer'}}
                onClick={() => navigate(`/portfolio/${item.slug}`)}
             > 
                 <img 
                    src={item.img || "https://dummyimage.com/600x400/e0e0e0/ffffff&text=Project+Banner"} 
                    alt={item.title} 
                    className="card-img" 
                    loading="lazy"
                    width="600"
                    height="400"
                 />
             </div>

            <h4 className="text f-18 bold text-left">{item.title}</h4>
            
            <p className="text text-left" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {item.description}
            </p>

             {/* Tags moved back here */}
             <div className="tags">
                {item.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="tag">
                        {tag}
                    </span>
                ))}
             </div>

            <button
                className="cta-btn"
                onClick={() => navigate(`/portfolio/${item.slug}`)}
              >
                Read More
                <img
                  src={arrowIcon}
                  alt="arrow-up"
                  width="18"
                  height="18"
                />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
