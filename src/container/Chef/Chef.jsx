import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import {motion} from 'framer-motion'

import './Chef.css';
import { fadeIn, staggerContainer } from '../../constants/motion';

const Chef = () => (
  <motion.div 
  variants={staggerContainer}
  initial='hidden'
  whileInView="show"
  viewport = {{ once: false, amount: 0.25 }}  
  className='app__bg app__wrapper section__padding'>
   <div className='app__wrapper_img app__wrapper_img-reverse'>
   <img src={images.chef} alt="chef" loading='lazy'/>

   </div>
   <div className='app__wrapper_info'>
     
<SubHeading title="Meet the Chef" />
<motion.h3 variants={fadeIn('up', 'tween', 0.2, 1)} className='headtext__cormorant'>i always wanted to make something</motion.h3>

<div className='app__chef-content'>
<div className='app__chef-content_quote'>
<img  src={ images.quote } alt="quote" loading='lazy' />

<motion.p variants={fadeIn('up', 'spring', 0.4, 1)} className='p__opensans'>Something you could hold in your hand. Each dish is a plate of goodness! <br />
Rather than looking at what anyone else was doing, we made our own decisions, and the more you do that the more confident you become doing it.
</motion.p>
</div><br />
<motion.p variants={fadeIn('up', 'spring', 0.6, 1)} className='p__opensans'>Over the years our goals have broadened. We always want to make the best possible meals and have our customers
 enjoy it in the best condition. It needs to be fresh
 and really well made with excellent ingredients and a lot of attention.We are here to build a strong business that’s good for 
 our team, our community and our environment. <br /><br />
  There is a bigger picture that drives us now".</motion.p>

</div>

<motion.div variants={fadeIn('up', 'tween', 0.6, 1)} className='app__chef-sign'>
<p className=''>Roseline Osijo</p>
<p className='p__opensans'>Chef & Founder</p>
<img src={images.sign} alt="signature" loading='lazy' />
</motion.div>

   </div>
  </motion.div>
);

export default Chef;
