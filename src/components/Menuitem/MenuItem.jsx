import React from 'react';
import {motion} from 'framer-motion';
import { staggerContainer, fadeIn } from '../../constants/motion';

import './MenuItem.css';

const MenuItem = ({title, price, tags }) => {
  return (

  <motion.div
  variants={staggerContainer}
  initial='hidden'
  whileInView="show"
  viewport = {{ once: false, amount: 0.25 }}
  className='app__menuitem'>
    <div className='app__menuitem-head'>

<div className='app__menuitem-name'>
<motion.p variants={fadeIn('up', 'spring', 0.1, 1)} className='p__cormorant' style={{color: '#DCCA87'}}>{title}</motion.p>
</div>

<motion.div variants={fadeIn('up', 'spring', 0.1, 1)} className='app__menuitem-dash' />

<div className='app__menuitem-price'>
<motion.p variants={fadeIn('up', 'spring', 0.1, 1)} className='p__cormorant'>{price}</motion.p>
</div>
    </div>
    <div className='app__menuitem-sub'>
<motion.p variants={fadeIn('up', 'spring', 0.3, 1)} className='p__opensans' style={{color:'#AAA'}}>{tags}</motion.p>
    </div>
  </motion.div>
)};

export default MenuItem;
