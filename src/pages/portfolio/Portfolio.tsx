import React, { useState } from "react";
import "./Portfolio.scss";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  // Portfolio cards data
  const portfolioItems = [
    { id: 1, title: "Project 1", img:'', tags: ["Vue.js", "UI/UX Design", "Web"] },
    { id: 2, title: "Project 2", img:'', tags: ["React", "Mobile", "UI/UX Design"] },
    { id: 3, title: "Project 3", img:'', tags: ["Vue.js", "Web"] },
    { id: 4, title: "Project 4", img:'', tags: ["Mobile", "UI/UX Design"] },
    // Add more projects as needed
  ];

  // Function to handle tab click
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Function to filter portfolio items based on active tab
  const filteredPortfolioItems = portfolioItems.filter(item => {
    if (activeTab === "all") {
      return true;
    }
    return item.tags.some(tag => tag.toLowerCase() === activeTab.toLowerCase());
  });

  // Define tabs dynamically
  const tabs = ["all", "web", "mobile", "ui/ux design"];

  return (
    <div className="container text-center gap-50">
      <div className="title flex-col gap-16">
        <h3 className="heading3">Our Expertise in Technologies</h3>
        <p className="text">
          ipsum odor amet, consectetuer adipiscing elit. Arcu sed vestibulum sit
          sit hendrerit cras in potent
        </p>
      </div>

      {/* Tabs */}
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

      {/* Portfolio Cards */}
      <div className="portfolio_wrapper">
        {filteredPortfolioItems.map((item) => (
          <div key={item.id} className="portfolio_card flex-col gap-16">
            <img src={item.img} alt={item.title} height={100} width={100} />
            <h4 className="text f-18 bold">{item.title}</h4>
            <div className="flex-col gap-12">
              <div className="tags flex gap-16">
                {item.tags.map((tag, index) => (
                  <div key={index} className="tag text f-14">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
