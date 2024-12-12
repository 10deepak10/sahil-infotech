import { useEffect } from 'react';
import './Footer.scss';
import AOS from 'aos';
import { Link } from 'react-router-dom';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <footer data-aos="fade-up">
      <div className='footer'>
        <div className='footer-item'>
          <img src="../../../../media/logo-white.png" alt="sahil-logo" />
          <p>Lorem ipsum odor amet, consectetuer<br />
            adipiscing elit. Arcu sed vestibulum sit sit<br />
            hendrerit cras in potenti.
          </p>
        </div>
        <div className='footer-item'> 
          <h4>Company</h4>
          <Link to="/">Home</Link>
          {/* <Link to="/portfolio">Portfolio</Link> */}
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className='footer-item'>
          <h4>Contact us at</h4>
          <a href="https://www.instagram.com/sahil_infotech/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Upwork</a>
          <a href="https://www.facebook.com/sahilinfotech06/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
        <div className='footer-item'>
          <h4>Contact Info</h4>
          <a href="tel:+919016738858" target="_blank" rel="noopener noreferrer">+91 90167-38858</a>
          <a href="mailto:sahilinfotech@yahoo.com" target="_blank" rel="noopener noreferrer">sahilinfotech@yahoo.com</a>
        </div>
      </div>
      <div className='copyRight'>
        <p>Copyright @ Sahil Infotech 2024. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
