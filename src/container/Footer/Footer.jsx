import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import {FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
   <FooterOverlay />
   < Newsletter  />

<div className='app__footer-links'>
<div className='app__footer-links_contact'>
<h1 className='app__footer-headtext'>Contact us</h1>
<p className='p__opensans'>address</p>
<p className='p__opensans'>phone number 1</p>
<p className='p__opensans'>phone number 2</p>


</div>

<div className='app__footer-links_logo'>
<img src={images.larose} alt="footer logo" />
<p className='p__opensans'>The best way to find yourself is to lose ypurself in the service of others</p>
<img src={images.spoon} alt="sppon" className='spoon__image' style={{marginTop: '15px'}}  />

<div className='app__footer-links_icons'>
<FiFacebook   />
<FiTwitter  />
<FiInstagram  />
</div>

</div>

<div className='app__footer-links_work'>
<h1 className='app__footer-headtext'>Working hours</h1>
<p className='p__opensans'>Monday-Friday:</p>
<p className='p__opensans'>08:00 am-12:00am</p>
<p className='p__opensans'>Saturday-Sunday:</p>
<p className='p__opensans'>07:00am-11:00pm</p>
</div>

</div>
<div className='footer__copyright'>
<p style={{fontSize: '1.2rem'}} className='p__cormorant'>2022 LARÓSE. All rights reserved.</p><br />

<small className='p__cormorant flex__center'>Built by Tony Osijo</small>
            
</div>
  </div>
);

export default Footer;
