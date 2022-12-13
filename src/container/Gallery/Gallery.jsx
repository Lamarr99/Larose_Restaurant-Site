import React from 'react';
import { SubHeading } from '../../components';
import { images} from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import {motion} from 'framer-motion'
import { staggerContainer,fadeIn } from '../../constants/motion';

import './Gallery.css';

const galleryImages = [ images.gallery01, images.gallery02, images.gallery03, images.gallery04,
       images.gallery05, images.gallery06 ]

const Gallery = () => {

  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const {current} = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -= 300;
    }else{
      current.scrollLeft += 300;
    }
  }

  return(
  <motion.div 
      variants={staggerContainer}
      initial='hidden'
      whileInView="show"
      viewport = {{ once: false, amount: 0.25 }} className='app__gallery flex__center'>
    <motion.div
     className='app__gallery-content'>
  
  <SubHeading title='Instagram' />

<motion.h1 variants={fadeIn('up', 'tween', 0.2, 1)} className='headtext__cormorant'>Photo Gallery</motion.h1>
<motion.p variants={fadeIn('up', 'tween', 0.3, 1)} className='p__opensans' style={{color: '#AAA', marginTop:'2rem'}}>Too good to pass up, right? </motion.p>
 <motion.button variants={fadeIn('up', 'tween', 0.4, 1)} type='button' className='custom__button'>View More</motion.button>
 
  </motion.div>

<motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className='app__gallery-images'>
<div className='app__gallery-images_container' ref={scrollRef}>

{galleryImages.map((image, index) => (
  <div className='app__gallery-images_card flex__center'
  key={`gallery_image-${index + 1}`} >

<img src={image} alt="gallery" loading='lazy' />
<a className='gallery__image-icon' href="instagram.com"><BsInstagram/></a>
  </div>
))}


</div>
<div className='app__gallery-images_arrows'>
<BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
<BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />

</div>

</motion.div>


  </motion.div>
);
  }
export default Gallery;
