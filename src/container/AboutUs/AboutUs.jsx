import React from 'react';
import { images } from '../../constants';
import {motion} from 'framer-motion'
import { staggerContainer, fadeIn } from '../../constants/motion';


import './AboutUs.css';

const AboutUs = () => (
  <motion.div 
    className='app__aboutus app__bg flex__center section__padding' 
    id='about'
    variants={staggerContainer}
    initial = 'hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}
    >
    

      <div className='app__aboutus-content flex__center'>

        <div className='app__aboutus-content_about'>
          <motion.h1 variants={fadeIn('up', 'tween', 0.1, 1)} className='headtext__cormorant'>About Us</motion.h1>
          <motion.img variants={fadeIn('up', 'tween', 0.1, 1)} src={images.spoon} alt="about__spoon" className='spoon__img' loading='lazy' />

          <motion.p variants={fadeIn('up', 'tween', 0.3, 1)} className='p__opensans'>Our mission at Larose is to protect and preserve food heritage all over the world.<br /><br />Our menu
          celebrates the farmers and growers we work with. Ingredients are ethically sourced,
          seasonal and availability is often weather dependent. Our cheeses, olive oil, kaimoana, beef, bread, olives,
          fruit and vegetables are largely sourced from the Mahurangi region.
          </motion.p>
         <motion.button variants={fadeIn('up', 'tween', 0.4, 1)} type='button' className='custom__button'>Know More</motion.button>
       </div>

<div className='app__aboutus-content_knife flex__center'>
<hr style={{ transform:'rotate(180deg)', width:'1px', height:'100vh',  }}  className='app__aboutus-content_knife'/>
</div>

<div className='app__aboutus-content_history'>
<motion.h1 variants={fadeIn('up', 'tween', 0.1, 1)} className='headtext__cormorant'>Our History</motion.h1>

<motion.img variants={fadeIn('up', 'tween', 0.1, 1)} src={images.spoon} alt="about__spoon" className='spoon__img' loading='lazy' />

<motion.p variants={fadeIn('up', 'tween', 0.3, 1)} className='p__opensans'>Having moved from the original site in Rochester, Larose
 has been turning out amazing meals from premises just out of Brooklyn since April 2018. <br /><br /> The end of June
 2018 we opened the doors to visitors and locals to experience the kind of service 
  we're all about ;<br />great tastes and your satisfaction.</motion.p><br />
<motion.button variants={fadeIn('up', 'tween', 0.4, 1)} type='button' className='custom__button'>Know More</motion.button>

</div>
</div>

  </motion.div>
);

export default AboutUs;
