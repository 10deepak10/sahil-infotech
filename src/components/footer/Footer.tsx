import { useEffect } from 'react';
import  './Footer.scss'
import AOS from "aos";


const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <footer  data-aos="fade-up">
      <div className='footer'>
      <div className='footer-item'>
        <img src="../../../../media/logo-white.png" alt="sahil-logo" />
        <p>Lorem ipsum odor amet, consectetuer<br/> adipiscing elit. Arcu sed vestibulum sit sit<br/> hendrerit cras in potenti.</p>
      </div>
      <div className='footer-item'> 
        <h4>Company</h4>
        <a href="#">Home</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact Us</a>
      </div>
      <div className='footer-item'>
        <h4>Contact us at</h4>
        <a href="#">Instagram</a>
        <a href="#">Upwork</a>
        <a href="#">Facebook</a>
      </div>
      <div className='footer-item'>
        <h4>Contact Info</h4>
        <a href="#">+ 9876325410</a>
        <a href="#">info@demo.com</a>
      </div>
      </div>
      <div className='copyRight'>
          <p>Copyright @ Sahil Infotech 2024. All Right Reserved</p>
      </div>
     
    </footer>
  )
}

export default Footer