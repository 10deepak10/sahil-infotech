import { useEffect } from 'react';
import './Hero.scss';
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify'; // Optional but good for future-proofing

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  buttonText?: string;
  buttonPath?: string;
  dataAosLeft?: string;
  dataAosRight?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  image,
  buttonText = 'Contact Us',
  buttonPath = '/contact',
  dataAosLeft = 'fade-right',
  dataAosRight = 'fade-left',
}) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <div className="hero-container">
      <div className="container mbl flex-row j-between">
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

          {buttonText && (
            <button className="cta-btn" onClick={() => handleNavigate(buttonPath)}>
              {buttonText}
              <img
                src="../../../../media/icons/arrow-up-right.svg"
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
          style={{ '--card-bg': `url(${image})` } as React.CSSProperties}
          data-aos={dataAosRight}
        ></div>
      </div>
    </div>
  );
};
