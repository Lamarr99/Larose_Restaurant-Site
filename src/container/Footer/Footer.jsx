import React from 'react';
import {  Newsletter } from '../../components';
import {FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import { SubHeading } from '../../components';
import Dining from '../../../public/dining.png'

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
   < Newsletter  />
<div className='app__footer-links'>
<div className='app__footer-links_contact'>
<h1 className='app__footer-headtext'>The happiest of hours</h1>
<p className='p__opensans'>Every Tuesday and Thursday between 4.30pm - 6pm.</p><br />

<p className='p__opensans'>5% off any cocktail you buy during this period!</p>



</div>

<div className='app__footer-links_logo'>
  <div className='footer__flex'>
<img width={50} height={50} src={Dining} alt="footer logo" />{'  '}
<h1 className='app__footer-headtext1'> Larose</h1>
</div>
<SubHeading title='We are the competition' />
<div className='app__footer-links_icons'>
  <a href="https://facebook.com"><FiFacebook /></a>
  <a href="https://twitter.com"><FiTwitter /></a>
  <a href="https://instagram.com"><FiInstagram /></a>

</div>

</div>

<div className='app__footer-links_work'>
<h1 className='app__footer-headtext'>Live Music</h1>
<p className='p__opensans'>Live music by Monty Bevins every second Friday of the month!</p><br />
<p className='p__opensans'>Monty plays R&B tunes from 8.30pm till 10pm. </p>

</div>

</div>
<div className='footer__copyright'>

<small className='p__cormorant small'>
  <a href="https://github.com/Lamarr99" target='_blank' rel='noreferrer'> Built by Tony Osijo</a>
</small>       
</div>
  </div>
);

export default Footer;
