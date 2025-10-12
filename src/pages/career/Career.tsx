import "./Career.scss";
import Experience from "../home/experience/Experience";
import { useNavigate } from "react-router-dom";
import Perk from "./perk/Perk";
import Joblist from "./joblist/Joblist";
import { useScrollTo } from "../../hooks/useScrollTo";

const Career = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  const { ref: joblistRef, scroll: scrollToJoblist } = useScrollTo<HTMLDivElement>(74);


  return (
    <>
      <div className="career_container">
        <div className="container min-h-60 j-center text-center gap-50 py-40">
          <div
            className="title align-center flex-col gap-16"
            data-aos="fade-up"
          >
            <h3 className="heading3">
              Fuel Your Ambition with a Team That Inspires
            </h3>
            <p className="sub-title">
              We are always on the lookout for curious minds, creative thinkers,
              tech enthusiasts, and IT professionals. If you want to work in a
              close-knit team environment and are passionate about technology
              and learning new things, we are the company for you.
            </p>
            <button
              className="cta-btn fit-width"
              onClick={scrollToJoblist}
            >
              Check Current Openings
              <img
                src="../../../../media/icons/chevron-right.svg"
                alt="arrow-up"
                width="18"
                height="18"
              />
            </button>
          </div>
        </div>
      </div>
      <Experience />

      <div ref={joblistRef}>
        <Joblist />
      </div>

      <div className="container container-about" data-aos="fade-up">
        <div className="left-side">
          <div className="item">
            <img
              src="../../../../media/experties_images/laptop.png"
              alt="laptop"
              width="300"
              height="300"
            />
            <div className="card">
              {" "}
              Highest quality Open
              <br /> Source solutions
            </div>
          </div>
          <div className="item">
            <div className="card">
              <img
                className="team"
                src="../../../../media/icons/teamwork.svg"
                alt="team"
                width="40"
                height="40"
              />
              Dedicated & Hardworking
              <br /> Professionals
            </div>
            <div className="img-container">
              <img
                src="../../../../media/experties_images/cta-bg.png"
                alt="website-logo"
                width="300"
                height="300"
              />
            </div>
          </div>
        </div>
        <div className="right-side">
          <h2>Innovate. Grow. Succeed – Be Part of Our Story</h2>
          <p className="text">
            At Sahil Infotech, we embrace diversity and celebrate differences.
            Our team is more than just colleagues – we’re a community that
            supports, encourages, and uplifts one another.
          </p>
          <ul>
            <li>
              We believe in the continuous growth of our team. Our workplace is
              a hub for mentorship, skill-building, and the best career
              opportunities. Your success is our success!
            </li>
            <li>
              You'll be surrounded by talented IT professionals who inspire and
              uplift each other, creating an environment where great ideas
              flourish.
            </li>
            <li>
              Bring your passion, creativity, and skills, and let's create
              something amazing together. Apply now and be a part of the Sahil
              Infotech family!
            </li>
          </ul>
          <button
            className="cta-btn"
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

      <Perk />
    </>
  );
};

export default Career;
