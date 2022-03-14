import React from 'react';
import "./footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter , faFacebookF , faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
       <div className='parent-footer'>
         <div className='container'>
           <div className='grid-parent-footer'>
               <div>
               <img className="logo" src="img/logo.png" alt="" />
               <h3 className='subtext-footer'>Enter your email</h3>
               <hr className='hr-footer'/>
               <button className='sub-btn-footer'>➜ &#8291;&#8291; Subscribe</button>
               <p className='subtitle-footer'>The world without photography will <br/> be meaningless to us.</p>
               </div>
               <div>
                 <h3 className='title-leader-main'>Address</h3>
                 <h4 className='addres-footer'>Baker Street 223b London, CA 70413 <br/>
                     Open: 9:30 AM 5:30PM</h4>
                 <h4 className='addres-footer'>Phone: &#8291; +1 (800) 456 37 11</h4>
                 <h4 className='addres-footer'>Email: &#8291; support@promo-theme.com</h4>
                 <div>
                   <button className='btn-brends'>   
                  <FontAwesomeIcon
                    className="twitch-match-icon"
                    icon={faInstagram}>

                  </FontAwesomeIcon>
                  </button>
                  <button className='btn-brends'>   
                  <FontAwesomeIcon
                    className="twitch-match-icon"
                    icon={faFacebookF}>

                  </FontAwesomeIcon>
                  </button>
                  <button className='btn-brends'>   
                  <FontAwesomeIcon
                    className="twitch-match-icon"
                    icon={faTwitter}>

                  </FontAwesomeIcon>
                  </button>
                 </div>
               </div>
               <div className='footer-end-main__title'>
               <h3 className='title-leader-main btn-recent'>Recent Posts</h3>
               <button className='titles-btn-footer'>Kills you slowly</button>
               <h4 className='address-footer'>November 8, 2019</h4>
               <button className='titles-btn-footer'>Clout</button>
               <h4 className='address-footer'>April 22, 2019</h4>
               <button className='titles-btn-footer'>Jerome</button>
               <h4 className='address-footer'>April 22, 2019</h4>               
               </div>
               <div className='footer-end-main__title'>
               <h3 className='title-leader-main btn-recent'>Recent Comments</h3>
               <button className='titles-btn-footer'>Elena Sobcky</button>
               -<h4 className='address-footer'>Driving Engagement Online</h4>
               <button className='titles-btn-footer'>John Michael</button>
               -<h4 className='address-footer'>Designing for the Web in 2020</h4>
               <button className='titles-btn-footer'>Anton Stockman</button>
               <h4 className='address-footer'>Streamlining the Path Conversation</h4>
               </div>
           </div>
         </div>
       </div>
    </div>
  )
};

export default Footer;
