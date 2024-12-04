import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import './Header.scss';
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <header className='d-flex' data-aos="fade-down">
      <img className='logo' src="media/logo.png" alt="logo" width="172" height="54"/>
      <div className='action-container'>
        <ul className="gap-20">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </ul>
          <ul className="gap-12">
          <li className='call'> 
            <img src="media/icons/call.svg" alt="call" width="24" height="24" />
            </li>
          <li className='sms'>
            <img src="media/icons/sms.svg" alt="sms"  width="24" height="24" />
          </li>
          <li className='quote-btn'>
            <button>Get Quote</button>
          </li>
          </ul>
      </div>
      </header>
  )
}

export default Header