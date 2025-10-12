import { useEffect } from "react";
import "./SplitBlock.scss";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify"; // Optional but good for future-proofing

interface SplitProps {
  title: string;
  subtitle: string;
  image: string;
  list?: string[];
  buttonText?: string;
  buttonPath?: string;
  dataAosLeft?: string;
  dataAosRight?: string;
  reverse?: boolean;
}

export const SplitBlock: React.FC<SplitProps> = ({
  title,
  subtitle,
  image,
  list = [],
  buttonText = "",
  buttonPath = "",
  dataAosLeft = "fade-right",
  dataAosRight = "fade-left",
  reverse = false,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="split-container">
      <div
        className={`container mbl flex-row j-between ${
          reverse ? "reverse" : ""
        }`}
      >
        {/* LEFT SIDE */}
        <div className="left-side" data-aos={dataAosLeft}>
          <h1
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(title),
            }}
          />
          <p
            className="sub-title"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(subtitle),
            }}
          />
          {list.length > 0 && (
            <ul className="split-list">
              {list.map((item, index) => (
                <li
                  key={index}
                  className="split-list-item"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(item),
                  }}
                />
              ))}
            </ul>
          )}

          {buttonText && (
            <button
              className="cta-btn"
              onClick={() => handleNavigate(buttonPath)}
            >
              {buttonText}
              <img
                src="../../../media/icons/arrow-up-right.svg"
                alt="arrow-up"
                width="18"
                height="18"
              />
            </button>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div
          className="right-side"
          style={{ "--card-bg": `url(${image})` } as React.CSSProperties}
          data-aos={dataAosRight}
        ></div>
      </div>
    </div>
  );
};
