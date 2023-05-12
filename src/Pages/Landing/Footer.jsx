import React from 'react';
import './landing.css';
import {FaFacebook,FaTwitter,FaDiscord,FaGithub,FaMobile,FaEnvelope,FaAddressCard} from 'react-icons/fa';


const Footer = ()=> {


    return ( 

      <div className='main-footer'>

        <div className='container'>

          <div className='social-iconslist'>

            <ul className='list-unstyled'>
            <a href=""><li><FaFacebook/></li></a>
            <a href=""><li><FaTwitter/></li></a>
            <a href=""><li><FaDiscord/></li></a>
            <a href=""><li><FaGithub/></li></a>
            </ul>

          </div>

          <div id="bottomtext">
            <div className='bottomtextcontent'><span className='bottom-icons'><FaMobile mr-1/></span>Telephone: +2349022003298</div>
            <div className='bottomtextcontent'><span className='bottom-icons'><FaEnvelope mr-1/></span>Email: SaveLara@gmail.com</div>
            <div className='bottomtextcontent'><span className='bottom-icons'><FaAddressCard mr-1/></span>Address: Save Foundation 25, Sapele Road, Benin City, Edo State.</div>
          </div>

          <div className="Footer-bottom">
              <p className="text-xs-center">
                &copy;{new Date().getFullYear()} Save Lara. All rights reserved
              </p>
          </div>


        </div>

      </div>

  );
};    




export default Footer;
