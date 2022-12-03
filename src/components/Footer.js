import logo from '../logo.svg';
import './styles.css';

function Footer(prop) {

  return(
    <div>
      <div className='footer-wrapper'>
        <img src={logo} alt="logo" />
        <h1 className='footer-title' >Rosi's React</h1>
      </div>
    </div>
  );
}

export default Footer;