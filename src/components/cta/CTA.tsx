import { useNavigate } from "react-router-dom";
import "./CTA.scss";

const CTA = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <div className="container-cta" data-aos="fade-up">
      <div className="container align-start">
        <h2>Have a project in mind? Let’s get to work?</h2>
        <button
          className="cta-btn btn-white"
          onClick={() => handleNavigate("/contact")}
        >
          Contact Us
          <img
            src="../../../../media/icons/arrow-up-right.svg"
            alt="arrow-up"
            width="18"
            height="18"
          />
        </button>
      </div>
    </div>
  );
};

export default CTA;
