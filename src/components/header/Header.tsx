import { NavLink } from 'react-router-dom';
import "aos/dist/aos.css";
import './Header.scss';

const Header = () => {

  return (
    <header className='d-flex'>
      <img className='logo' src="media/logo.png" alt="logo" width="172" height="54"/>
      <div className='action-container'>
        <ul className="gap-20">
        <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contact
            </NavLink>
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