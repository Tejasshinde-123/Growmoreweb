import React from 'react'
import './Mainpage.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook,  faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FaWhatsapp } from 'react-icons/fa';
 
function Mainpage() {
  return (
    <>
    <div className="core">
      <h1>Our Core Values</h1>
      <div className="values">
        <div className="vision">
          
          <h2>Vision</h2>
          <p>We see beyond the horizon. Our team is united by a shared vision of innovation and progress. We're not just keeping pace with technological change; we're defining it.</p>
        </div>
        <div className="vision">
         
          <h2>Expertise</h2>
          <p>Our team comprises seasoned professionals who bring years of industry knowledge and technical proficiency to the table. We understand your unique challenges and are poised to find the right solutions.</p>
        </div>
        <div className="vision">
          
          <h2>Cost Savings</h2>
          <p>We understand that efficiency and profitability are paramount. Our solutions are designed to streamline processes, reduce costs, and enhance your financial well-being.</p>
        </div>
        <div className="vision">
          
          <h2>User-Centric BPA</h2>
          <p>Business Process Automation (BPA) is not just about efficiency for us; it's about creating seamless and attractive experiences for end users. We aim to make technology work for your team, not the other way around.</p>
        </div>
      </div>
    </div>

      <footer>
        <div className="main">
          <div className="logo">
            <h3 ><b>Growmore Technoline Pvt.Ltd</b></h3>
            <i style={{ paddingLeft: '130px' }} className="fa"><FontAwesomeIcon icon={faEnvelope} /></i>
            <FontAwesomeIcon icon={faFacebook} />
             <i><FontAwesomeIcon icon={faWhatsapp} /></i>
                <h3>  <FaWhatsapp /></h3>
            
          </div>
          <div className="links">
            <h3 style={{ fontSize: '20px' }}>Useful Links</h3><br />
            <li><a href="#">Home</a></li><br />
            <li><a href="#">About</a></li><br />
            <li><a href="#">Service</a></li><br />
            <li><a href="#">Terms Of Service</a></li><br />
            <li><a href="#">Privacy Policy</a></li>
          </div>
          <div className="services">
            <h3>Services</h3><br />
            <li><a href="#">Web Design</a></li><br />
            <li><a href="#">Web Devlopment</a></li><br />
            <li><a href="#">Ui\Ux Design</a></li><br />
            <li><a href="#">Mobile Application</a></li>
          </div>
          <div className="add"><br />
            <h3>GroMore Technoline Pvt. Ltd</h3>
            <p style={{ lineHeight: '1.5', paddingTop: '10px' }} >Survey no. 48/28,<br/>
              Near Pratik Hostel,<br />
              Manaji nagar, Narhe <br />
              Pune <br /><br />
              Phone: +91 9172 6523 32 <br /></p>
              <p style={{ color: 'blue' }}> Email: info@growmoretechnoline.com</p>
            
          </div>
        </div>
        <div className="last"  >
          <h5>&copy; Copyright GroMore Technoline Pvt. Ltd.. All Rights Reserved</h5>
        </div>
      </footer>
    </>
  )
}

export default Mainpage