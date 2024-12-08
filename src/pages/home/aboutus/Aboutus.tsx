import { useEffect } from 'react';
import './Aboutus.scss'
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
    <div className='container-about' data-aos="fade-up">
      <div className='left-side'>
        <div className="item">
          <img src="../../../../media/experties_images/laptop.png" alt="laptop" width="300" height="300"/>
          <div className="card"> Highest quality Open<br/> Source solutions</div>
        </div>
        <div className="item">
          <div className="card">
            <img className='team' src="../../../../media/icons/teamwork.svg" alt="team" width="40" height="40" />
            Dedicated & Hardworking<br/> Professionals
            </div>
          <img src="../../../../media/experties_images/cta-bg.png" alt="website-logo"  width="300" height="300"/>
        </div>
      </div>
      <div className='right-side'>
          <h2>Who We Are</h2>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu sed vestibulum sit sit hendrerit cras in potenti. Urna massa aliquam efficitur lectus class ridiculus condimentum. </p>
          <ul>
            <li>Urna massa aliquam efficitur lectus class ridiculus condimentum. </li>
            <li>Aliquam efficitur lectus class ridiculus condimentum. </li>
            <li>Efficitur lectus class ridiculus condimentum. </li>
            <li>Massa aliquam efficitur lectus class ridiculus condimentum. </li>
          </ul>
          <button className='quote-btn'>Contact Us</button>
      </div>
    </div>
  )
}
