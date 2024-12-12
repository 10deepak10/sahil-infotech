import React from "react";
import "./BookAService.scss";

const BookAService = () => {
  return (
    <div className="container process-container text-center gap-50 py-40">
      <div className="title flex-col align-center gap-16" data-aos="fade-up">
        <h3 className="heading3">Have A Project In-mind?</h3>
        <p className="text">
        Book a 20-minute call to understand how Blackbugs works and get ready to accelerate your company.
        </p>
        <button className="cta-btn radius-full f-18 bold">Contact us</button>
      </div>
    </div>
  );
};

export default BookAService;
