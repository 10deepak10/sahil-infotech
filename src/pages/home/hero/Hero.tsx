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
      <div className='left-side' data-aos="fade-right">
      <h1>We Build Best, Advance<br/><span>IT Software Solution</span></h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      <button className='quote-btn' onClick={()=>handleNavigate('/contact')}>Contact Us</button>
      </div>
      <div className='right-side' data-aos="fade-left">
        <img src="../../../../media/hand.png" alt="hand" width="58" height="58" />
        <p>You deserve the best.<br/>We specialize in delivering tailored<br/> software solutions and DevOps<br/> outsourcing services.</p>
        <div className='stats'>
          <div className='stat-item'>
            <div className='item'>
              <img src="../../../../media/icons/user.svg" alt="user" />
              02
            </div>
            <p>Year Experience</p>
          </div>
          <div className='line'></div>
          <div className='stat-item'>
          <div className='item'>
          <img src="../../../../media/icons/briefcase.svg" alt="briefcase" />
          50 +
          </div>
          <p>Project Complete</p>
          </div>
        </div>
      </div>
    </div>
  )
}
