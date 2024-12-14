import React from "react";
import "./BookAService.scss";
import { useNavigate } from "react-router-dom";

const BookAService = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <div className="container strech-content text-center gap-50 py-40 book-session-container" data-aos="fade-up">
      <div className="title flex-col align-center gap-16" >
        <h3 className="heading3">Have A Project In-mind?</h3>
        <p className="text">
        Book a 20-minute call to understand how Sahil Infotech works and get ready to accelerate your company.
        </p>
        <button className="cta-btn" onClick={()=>handleNavigate('/contact')}>Contact us
        <img src="../../../../media/icons/arrow-up-right.svg" alt="arrow-up" width="18"  height="18" />
        </button>
      </div>
    </div>
  );
};

export default BookAService;
