import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';
import {motion} from 'framer-motion'
import { staggerContainer, fadeIn } from '../../constants/motion';

const SpecialMenu = () => (
  <motion.div 
  variants={staggerContainer}
initial='hidden'
whileInView="show"
viewport = {{ once: false, amount: 0.25 }}
className='app__specialMenu flex__center section__padding' id='menu'>
   <div className='app__specialMenu-title'>
<SubHeading title='But Wait… There’s More!' />
<motion.h1 variants={fadeIn('up', 'tween', 0.1, 1)} className='headtext__cormorant'>Today's Special</motion.h1>
   </div>
<div className='app__specialMenu-menu'>

<div className='app__specialMenu-menu_wine flex__center'>
<motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className='app__specialMenu-menu_heading'>Wines & Beer</motion.p>
<motion.div className='app__specialMenu_menu_items'>
{ data.wines.map ((wine,index) => (
  <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
)) }
</motion.div>

</div>
<div className='app__specialMenu-menu_img'>
<img src={images.menu} alt="Larose Special" loading='lazy' />
</div>

<div className='app__specialMenu-menu_cocktails flex__center'>
<motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className='app__specialMenu-menu_heading'>Cocktails</motion.p>
<motion.div  className='app__specialMenu_menu_items'>
{ data.cocktails.map ((cocktail,index) => (
   <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
)) };
</motion.div>
</div>

</div>
<div className='' style={{marginTop: '1rem'}}>
<button type='button' className='custom__button'>View More</button>
</div>

  </motion.div>
);

export default SpecialMenu;
