import { useEffect } from "react";
import "./Footer.scss";
import AOS from "aos";
import { NavLink } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <footer data-aos="fade-up">
      <div className="footer">
        <div className="footer-item cutoff-width">
          <img src="../../../../media/logo-white.png" alt="sahil-logo" />
          <p>
            We are a team of innovative developers at Sahil Infotech,
            building cutting-edge websites with the latest technologies
            to elevate your business.
          </p>
        </div>
        <div className="footer-item">
          <h4>Company</h4>
          <NavLink to="/">Home</NavLink>
          {/* <Link to="/portfolio">Portfolio</Link> */}
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact Us
          </NavLink>
        </div>
        <div className="footer-item">
          <h4>Contact us at</h4>
          <a
            className="social-links"
            href="https://www.instagram.com/sahil_infotech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../../../../media/icons/instagram.svg" alt="facebook" />
            Instagram
          </a>
          {/* <a href="#" target="_blank" rel="noopener noreferrer">
            Upwork
          </a> */}
          <a
            className="social-links"
            href="https://www.facebook.com/sahilinfotech06/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../../../../media/icons/facebook.svg" alt="facebook" />
            Facebook
          </a>
          <a
            className="social-links"
            href="https://www.linkedin.com/company/sahil-infotech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../../../../media/icons/linkedin.svg" alt="facebook" />
            linkedin
          </a>
        </div>
        <div className="footer-item">
          <h4>Contact Info</h4>
          {/* <a href="tel:+919016738858" target="_blank" rel="noopener noreferrer"> */}
            <span>
            +91 90167-38858
            </span>
          {/* </a> */}
          {/* <a
            href="mailto:sahilinfotech@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
          > */}
            <span>
            sahilinfotech@yahoo.com
            </span>
          {/* </a> */}
        </div>
      </div>
      <div className="copyRight">
        <p>Copyright @ Sahil Infotech 2024. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
