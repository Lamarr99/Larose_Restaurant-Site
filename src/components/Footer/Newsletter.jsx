import React from 'react';
import {motion} from 'framer-motion'
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';
import { fadeIn, staggerContainer } from '../../constants/motion';

const Newsletter = () => (
  <motion.div 
  variants={staggerContainer}
  initial='hidden'
  whileInView="show"
  viewport = {{ once: false, amount: 0.25 }}>
     <motion.div variants={fadeIn('up', 'tween', 0.2, 1)}
    className='app__newsletter'>
    <motion.div  className='app__newsletter-heading'>
     <SubHeading title="Newsletter" />
     <h1 className='headtext__cormorant'>Subscribe to our newsletter</h1>
    <p className='p__opensans'>And never miss our latest updates</p>

    </motion.div>

   <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className='app__newsletter-input flex__center'>
    <input type="email" placeholder='Enter your email address' name="" id="" />
    <button type='button' className='custom__button'>Subscribe</button>
   </motion.div>

  </motion.div>
  </motion.div>
 
);

export default Newsletter;
