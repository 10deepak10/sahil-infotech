import { useEffect } from 'react';
import './Hero.scss'
import AOS from "aos";
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
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
    <div className="hero-container">
      <div className="container mbl flex-row j-between">
      <div className='left-side' data-aos="fade-right">
      
      <h1>Transform Your Digital Journey with<br/><span> Sahil Infotech</span></h1>
      <p className="sub-title">We are a team of innovative developers at Sahil Infotech, <br/>building cutting-edge websites with the latest technologies to 
      elevate your business.</p>
      <button className='cta-btn' onClick={()=>handleNavigate('/contact')}>Contact Us
      <img src="../../../../media/icons/arrow-up-right.svg" alt="arrow-up" width="18"  height="18" />
      </button>
      </div>
      <div className='right-side' style={
                  { "--card-bg": `url(../../../../media/hero.jpg)` } as React.CSSProperties
                } data-aos="fade-left">
        {/* <img className='hand' src="../../../../media/hand.png" alt="hand" width="58" height="58" />
        <p>You deserve the best.<br/>We specialize in delivering tailored<br/> software solutions and DevOps<br/> outsourcing services.</p>
        <div className='stats'>
          <div className='stat-item'>
            <div className='item'>
              <img src="../../../../media/icons/user.svg" alt="user" />
              2 +
            </div>
            <p>Year Experience</p>
          </div>
          <div className='line'></div>
          <div className='stat-item'>
          <div className='item'>
          <img src="../../../../media/icons/briefcase.svg" alt="briefcase" />
          5 +
          </div>
          <p>Project Complete</p>
          </div>
        </div> */}
      </div>
      </div>
    </div>
  )
}
