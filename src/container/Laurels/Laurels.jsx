import React from 'react';
import { SubHeading} from '../../components';
import { images, data } from '../../constants';
import { AnimationOnScroll } from 'react-animation-on-scroll'

import './Laurels.css';

const AwardCard = ( {award: { imgUrl, title, subtitle } } ) => (
  
<div className='app__laurels_awards-card'>
<img src={imgUrl} alt="award" loading='lazy' />
<AnimationOnScroll  animateIn='animate__fadeIn'>

<div className='app__laurels_awards-card_content'>
<p className='p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
<p className='p__cormorant'>{subtitle}</p>

</div>
</AnimationOnScroll>
</div>

)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
 <div className='app__wrapper_info'>
<SubHeading title='Awards & Acknowledgement' />
<h1 className='headtext__cormorant'>Our Accolades</h1>

<div className='app__laurels_awards'>

{data.awards.map((award) => <AwardCard award={award} key={award.title} /> )}
</div>
 </div>

 <div className='app__wrapper_img'>
<img src={images.laurels} alt="laurels" loading='lazy'/>
 </div>
  </div>
);

export default Laurels;
