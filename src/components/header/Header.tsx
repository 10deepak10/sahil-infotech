import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import "./Header.scss";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <header className="flex-row d-flex m-0">
      <div className="container flex-row j-between">
        <NavLink to="/">
          <img
            className="logo"
            src="../../../../media/logo.png"
            alt="logo"
            width="172"
            height="54"
          />
        </NavLink>
        <div className="action-container">
          <ul className="gap-20 for_desktop">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Services
            </NavLink>
            <NavLink
              to="/career"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Career
            </NavLink>
            {/* <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink> */}
             <button className="cta-btn" onClick={() => handleNavigate('Contact')}>
              Book Free Consultation
            </button>
             <button className="cta-btn btn-border" onClick={() => handleNavigate('apply-for-job')}>
              Apply for Job
            </button>
          </ul>
          {/* <ul className="gap-12 for_desktop">
            <li className="call menu_btns">
              <a
                href="tel:+919016738858"
                target="_blank"
                rel="noopener noreferrer"
                className="flex j-center"
              >
                <img
                  src="../../../../media/icons/call.svg"
                  alt="call"
                  width="24"
                  height="24"
                />
              </a>
            </li>
            <li className="sms menu_btns">
              <a
                href="mailto:info@sahilinfotech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex j-center"
              >
                <img
                  src="../../../../media/icons/sms.svg"
                  alt="sms"
                  width="24"
                  height="24"
                />
              </a>
            </li>
          </ul> */}
          <span className="for_mobile" onClick={toggleModal}>
            <img
              src="../../../../media/icons/hamburger.svg"
              alt="menu"
              width="20"
              height="20"
            />
          </span>
        </div>

        {isModalOpen && (
          <div className="modal-overlay" onClick={toggleModal}>
            <div
              className="modal"
              onClick={(e) => e.stopPropagation()} // Prevent closing on modal content click
            >
              <div className="modal-header">
                <h2>Menu</h2>
                <span className="close-btn" onClick={toggleModal}>
                  &times;
                </span>
              </div>
              <div className="modal-content">
                <ul>
                  <NavLink to="/" onClick={toggleModal}>
                    <img
                      src="../../../../media/icons/home.svg"
                      alt="home"
                      width="18"
                      height="18"
                    />
                    Home
                  </NavLink>
                  <NavLink to="/service" onClick={toggleModal}>
                    <img
                      src="../../../../media/icons/puzzle.svg"
                      alt="Services"
                      width="18"
                      height="18"
                    />
                    Services
                  </NavLink>
                  <NavLink to="/career" onClick={toggleModal}>
                    <img
                      src="../../../../media/icons/education.svg"
                      alt="career"
                      width="18"
                      height="18"
                    />
                    Career
                  </NavLink>
                  <NavLink to="/contact" onClick={toggleModal}>
                    <img
                      src="../../../../media/icons/call.svg"
                      alt="contact"
                      width="18"
                      height="18"
                    />
                    Contact
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
