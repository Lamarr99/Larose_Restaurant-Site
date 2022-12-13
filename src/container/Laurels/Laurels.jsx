import React from 'react';
import { SubHeading} from '../../components';
import { images, data } from '../../constants';
import {motion} from 'framer-motion'
import { staggerContainer, fadeIn } from '../../constants/motion';

import './Laurels.css';

const AwardCard = ( {award: { imgUrl, title, subtitle } } ) => (
  
<motion.div
variants={staggerContainer}
initial='hidden'
whileInView="show"
viewport = {{ once: false, amount: 0.25 }} 
className='app__laurels_awards-card'>
<motion.img variants={fadeIn('up', 'tween', 0.2, 0.8)} src={imgUrl} alt="award" />


<div className='app__laurels_awards-card_content'>
<motion.h6 variants={fadeIn('up', 'tween', 0.3, 0.8)} className='p__award' 
   style={{color:'var(--color-grey)',
   fontFamily: `var(--font-alt)`, fontSize:'1.3rem',
   fontWeight:'400', marginBottom:'.5rem'}}>
    {title}
    </motion.h6>
<motion.p variants={fadeIn('up', 'tween', 0.4, 0.8)} className='p__cormorant' 
    style={{color: `var(--color-golden)`,
    fontFamily: `var(--font-top)`, 
    fontSize:'1rem',fontWeight:'400'}}>
  {subtitle}
  </motion.p>

</div>
</motion.div>

);

const Laurels = () => (
  <motion.div 
  variants={staggerContainer}
  initial='hidden'
  whileInView="show"
  viewport = {{ once: false, amount: 0.25 }}  className='app__bg app__wrapper section__padding' id='awards'>
 <div className='app__wrapper_info'>
<SubHeading title='Awards & Acknowledgement' />
<motion.h1 variants={fadeIn('up', 'tween', 0.1, 1)} className='headtext__cormorant'>Our Accolades</motion.h1 >

<div className='app__laurels_awards'>

{data.awards.map((award) => <AwardCard award={award} key={award.title} /> )}
</div>
 </div>

 <div className='app__wrapper_img image__laurel'>
<img src={images.laurels} alt="laurels" loading='lazy'/>
 </div>
  </motion.div>
);

export default Laurels;
