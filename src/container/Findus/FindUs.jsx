import React from 'react';
import { SubHeading} from '../../components';
import { images } from '../../constants';
import { staggerContainer, fadeIn } from '../../constants/motion';
import {motion} from 'framer-motion'

const FindUs = () => (
  <motion.div
  variants={staggerContainer}
  initial='hidden'
  whileInView="show"
  viewport = {{ once: false, amount: 0.25 }} 
   className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title='contact' />

      <motion.h1 variants={fadeIn('up', 'tween', 0.2, 1)} className='headtext__cormorant' style={{marginBottom:'3rem'}}>Find Us</motion.h1>
      <motion.div variants={fadeIn('up', 'tween', 0.4, 1)} className='app__wrapper-content'>
      <motion.p className='p__opensans'>475 Fifth Ave. Brooklyn, NY 11228.</motion.p>
      <motion.a href='tel:+1-617-555-0118' className='p__opensans' style={{margin:'2rem auto' }}>+1-617-555-0118</motion.a>
      <motion.p className='p__cormorant' style={{color:'#DCCA87',margin:'2rem 0' }}>Opening Hours</motion.p>
      <motion.p className='p__opensans'> Mon - Fri: 10:00am - 02:00 Am </motion.p>
      <motion.p className='p__opensans'> Sat - sun: 10:00am - 04:00 am  </motion.p>

</motion.div>
<motion.button variants={fadeIn('up', 'tween', 0.6, 0.5)} className='custom__button' style={{marginTop: '2rem'}}>Visit Us</motion.button>
    </div>

    <div className='app__wrapper_img app__findus-img'>
<motion.img variants={fadeIn('up', 'tween', 0.2, 1)} src={images.findus} alt="Find Us" loading='lazy' />
    </div>
  </motion.div>
);

export default FindUs;
