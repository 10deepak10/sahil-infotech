import React from "react";
import "./BookAService.scss";
import { useNavigate } from "react-router-dom";

const BookAService = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <div className="container process-container text-center gap-50 py-40">
      <div className="title flex-col align-center gap-16" data-aos="fade-up">
        <h3 className="heading3">Have A Project In-mind?</h3>
        <p className="text">
        Book a 20-minute call to understand how Blackbugs works and get ready to accelerate your company.
        </p>
        <button className="quote-btn" onClick={()=>handleNavigate('/contact')}>Contact us</button>
      </div>
    </div>
  );
};

export default BookAService;
