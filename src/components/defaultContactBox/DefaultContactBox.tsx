import React from "react";
import "./DefaultContactBox.scss";

const DefaultContactBox = () => {
  return (
    <div className="flex-col gap-30 full-height flex-1">
      <a
        href="mailto:info@sahilinfotech.com"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card flex"
        data-aos="fade-right"
      >
        <div className="icon-circle">
          <img src="media/icons/sms.svg" alt="call" width="24" height="24" />
        </div>
        <div className="flex-col info">
          <h6 className="heading6">Email Us</h6>
          <p className="description">info@sahilinfotech.com</p>
        </div>
      </a>

      <a
        href="tel:+919016738858"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card flex"
        data-aos="fade-right"
      >
        <div className="icon-circle">
          <img src="media/icons/call.svg" alt="call" width="24" height="24" />
        </div>
        <div className="flex-col info">
          <h6 className="heading6">Our hotline number</h6>
          <p className="description">+91 90167-38858</p>
        </div>
      </a>

      <a
        href="https://maps.app.goo.gl/Nm1UxaMKeAPGe7oW9"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card flex"
        data-aos="fade-right"
      >
        <div className="icon-circle">
          <img
            src="media/icons/location.svg"
            alt="call"
            width="24"
            height="24"
          />
        </div>
        <div className="flex-col info">
          <h6 className="heading6">Found Us</h6>
          <p className="description">207 The Galleria, Kiran Chowk, To, Yogi Chowk Rd, Surat, Gujarat 395011</p>
        </div>
      </a>
    </div>
  );
};

export default DefaultContactBox;
