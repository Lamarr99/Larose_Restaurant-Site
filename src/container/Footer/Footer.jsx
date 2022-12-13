import React from 'react';
import {  Newsletter } from '../../components';
import {FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import { SubHeading } from '../../components';
import Dining from '../../assets/dining.png';
import {motion} from 'framer-motion';
import { fadeIn, footerVariants, staggerContainer } from '../../constants/motion';

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <motion.div
  variants={staggerContainer}
      initial='hidden'
      whileInView="show"
      viewport = {{ once: false, amount: 0.25 }} 
   className='app__footer section__padding'>
   < Newsletter variants={fadeIn('up', 'tween', 0.2, 1)} />
<motion.div variants={footerVariants}
    initial="hidden"
    whileInView="show" className='app__footer-links'>
<div className='app__footer-links_contact'>
<h1 className='app__footer-headtext'>The happiest of hours</h1>
<p className='p__opensans'>Every Tuesday and Thursday between 4.30pm - 6pm.</p><br />

<p className='p__opensans'>5% off any cocktail you buy during this period!</p>

</div>

<div className='app__footer-links_logo'>
  <div className='footer__flex'>
<img width={40} height={40} src={Dining} alt="footer logo" />{'  '}
<h1 className='app__footer-headtext1'> Larose</h1>
</div>
<SubHeading title='We are the competition' />
<div className='app__footer-links_icons'>
  <a href="https://facebook.com" target='_blank'><FiFacebook /></a>
  <a href="https://twitter.com" target='_blank'><FiTwitter /></a>
  <a href="https://instagram.com" target='_blank'><FiInstagram /></a>

</div>

</div>

<div className='app__footer-links_work'>
<h1 className='app__footer-headtext'>Live Music</h1>
<p className='p__opensans'>Live music by Monty Bevins every second Friday of the month!</p><br />
<p className='p__opensans'>Monty plays R&B tunes from 8.30pm till 10pm. </p>

</div>

</motion.div>
<div className='footer__copyright'>

<small className='p__cormorant small'>
  <a href="https://github.com/Lamarr99" target='_blank' rel='noreferrer'> Built by Tony Osijo</a>
</small>       
</div>
  </motion.div>
);

export default Footer;
