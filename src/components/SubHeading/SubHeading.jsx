import React from 'react';
import { images } from '../../constants';
import { zoomIn, textContainer, textVariant2  } from '../../constants/motion';
import {motion } from 'framer-motion'

const SubHeading = ({title}) => (
  <motion.div  style={{ marginBottom: '1rem' }}>
    <motion.p 
      variants={textContainer}
      className='p__cormorant'>
        <motion.span variants={textVariant2}>{title}</motion.span>
    </motion.p>

    <motion.img variants={zoomIn(0, 0.5)} src={ images.spoon } alt="spoon" className='spoon__img' />
  </motion.div>
);

export default SubHeading;
