import React from 'react';
import { images } from '../../constants';
import { AnimationOnScroll } from 'react-animation-on-scroll'

const SubHeading = ({title}) => (
  <div style={{ marginBottom: '1rem' }}>
    <AnimationOnScroll animateOut='animate__fadeOut' animateIn='animate__flipInX'>
<p className='p__cormorant'>{title}</p>
<img src={ images.spoon } alt="spoon" className='spoon__img' loading='lazy' />
</AnimationOnScroll>
  </div>
);

export default SubHeading;
