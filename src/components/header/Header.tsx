import './Header.scss'

const Header = () => {
  return (
    <header className='d-flex'>
      <img className='logo' src="logo.png" alt="logo" width="172" height="54"/>
      <div className='action-container'>
        <ul>
          <li>Home</li>
          <li>Our Portfolio</li>
          <li>contact</li>
        </ul>
          <ul>
          <li className='call'> 
            <img src="call.svg" alt="call" width="24" height="24" />
            </li>
          <li className='sms'>
            <img src="sms.svg" alt="sms"  width="24" height="24" />
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