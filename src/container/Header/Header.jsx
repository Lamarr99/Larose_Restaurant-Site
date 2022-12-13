import React from 'react';
import { SubHeading } from '../../components';
import{ images } from '../../constants'
import {motion} from 'framer-motion'
import { staggerContainer, fadeIn } from '../../constants/motion';


import './Header.css';

const Header = () => (
 <motion.div
      variants={staggerContainer}
      initial = 'hidden'
      whileInView='show'
      viewport={{once: false, amount: 0.25}} 
      className='app__header app__wrapper section__padding' id='home'>

        <motion.div className='app__wrapper_info'>
        <SubHeading className='app__header-text' title='Double your pleasure, double your fun.'/>

        
           <motion.h1 variants={fadeIn('up', 'tween', 0.1, 1)} className='app__header-h1'>Grande cuisine,<br /> just for you.</motion.h1>
           <motion.p variants={fadeIn('up', 'tween', 0.3, 1)} className='p__opensans' style={{ margin: '2rem 0', lineClamp:3  }}
           >The place to be 
           when you want a great time with <br /> the people you love.<br />
           Now, Let’s begin the adventure.
           </motion.p>
           <motion.a variants={fadeIn('up', 'tween', 0.3, 0.3)} type='button' href='#menu' className='custom__button '>Explore Menu</motion.a>
      
        </motion.div>

        <div className='app__header-img'>
            
            <img src={ images.welcome } alt="Welcome"  />
           
        </div>

  </motion.div>
);

export default Header;
