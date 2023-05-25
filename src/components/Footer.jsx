import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin} from 'react-icons/bs'
import { MdMarkEmailUnread, MdPhone, MdLocationPin} from 'react-icons/md';
import "../styles/All.css";

function Footer() {
  return (
    <section id="footer">
      <div>
        <span id="footer-logo">
          <h2 id="footer-logo-1">Kode</h2>
          <h2 id="footer-logo-2">Vana</h2>
        </span>
      </div>

      <div>
        <h2>Links</h2>
        <ul>
          <li><Link to="/" className="links-1">Home</Link></li>
          <li><Link to="/About" className="links-1">About Us</Link></li>
          <li><Link to="/Services" className="links-1">Services</Link></li>
          <li><Link to="/Projects" className="links-1">Projects</Link></li>
          <li><Link to="/ContactUs" className="links-1">Contact Us</Link></li>
        </ul>
        
      </div>

      <div>
        <h2>Services</h2>
        <ul>
          <li>Wev Development</li>
          <li>App Development</li>
          <li>UI/UX Design</li>
          <li>Logo Design</li>
          <li>Custom Software</li>
        </ul>
      </div>

      <div>
        <h2>Contact Us</h2>
        <ul>
          
          <li><MdMarkEmailUnread/>kodevana@gmail.com</li>
          <li><MdPhone/>99999999999</li>
          <li><MdLocationPin/>Rangia, Asssam, India</li>
        </ul>
      </div>

      <div className="social-icon">
        <ul>
          <li>
            <Link to="instagram.com"><BsInstagram color="#FFD523" size={40}/></Link>
            <Link to="facebook.com"><BsFacebook color="#FFD523" size={40}/></Link>
            <Link to="twitter.com"><BsTwitter color="#FFD523" size={40}/></Link>
            <Link to="linkedin.com"><BsLinkedin color="#FFD523" size={40}/></Link>
          </li>

          <li>
            <Link className="links-1">Privacy Policy</Link>
            <Link className="links-1">Terms of Use</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
