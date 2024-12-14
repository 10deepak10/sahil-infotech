import { useEffect } from "react";
import "./Aboutus.scss";
import AOS from "aos";

export default function Aboutus() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
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
          <img
            src="../../../../media/experties_images/cta-bg.png"
            alt="website-logo"
            width="300"
            height="300"
          />
        </div>
      </div>
      <div className="right-side">
        <h2>Who We Are</h2>
        <p>
          {" "}
          Empowering businesses with innovative digital solutions that build
          meaningful connections and drive success.
        </p>
        <ul>
          <li>
            At Sahil Infotech, we specialize in delivering bespoke applications
            and websites designed to meet the evolving needs of modern
            businesses. Our expertise spans UI/UX design, web development,
            full-stack solutions, artificial intelligence, and DevOps, ensuring
            a comprehensive approach to every project.
          </li>
          <li>
            With a skilled team of professionals and extensive experience across
            diverse industries, we are committed to transforming your ideas into
            impactful digital experiences. At Sahil Infotech, we don’t just
            build solutions—we create value, foster innovation, and help
            businesses thrive in the digital era.
          </li>
        </ul>
        <button className="quote-btn">Contact Us</button>
      </div>
    </div>
  );
}
