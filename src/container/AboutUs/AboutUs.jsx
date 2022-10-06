import React from 'react';
import { images } from '../../constants';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
<img src={images.L} alt="Larose" />
    </div>

<div className='app__aboutus-content flex__center'>

<div className='app__aboutus-content_about'>
<h1 className='headtext__cormorant'><AnimationOnScroll  duration='3s' animateOnce='true'  animatePreScroll='false' 
animateIn="animate__fadeInLeft" initiallyVisible='false'>About Us</AnimationOnScroll></h1>
<AnimationOnScroll  duration='3s' animateOnce='true'  animatePreScroll='false' 
animateIn="animate__fadeInLeft" initiallyVisible='false'>
<img src={images.spoon} alt="about__spoon" className='spoon__img' />
</AnimationOnScroll>
<p className='p__opensans'>Our mission at Larose is to protect and preserve food heritage all over the world.<br /><br />Our menu
 celebrates the farmers and growers we work with. Ingredients are ethically sourced,
 seasonal and availability is often weather dependent. Our cheeses, olive oil, kaimoana, beef, bread, olives,
  fruit and vegetables are largely sourced from the Mahurangi region.

</p>
 <button type='button' className='custom__button'>Know More</button>
</div>

<div className='app__aboutus-content_knife flex__center'>
<img src={images.knife} alt="about__knife" className='knife__img' />
</div>

<div className='app__aboutus-content_history'>
<h1 className='headtext__cormorant'><AnimationOnScroll  duration='3s'  animateOnce='true' animateOut='animate__fadeOutRight'  animatePreScroll='false' 
animateIn="animate__fadeInRight" initiallyVisible='false'>Our History</AnimationOnScroll></h1>
<AnimationOnScroll  duration='3s'  animatePreScroll='false' 
animateIn="animate__fadeInRight"  animateOnce='true' initiallyVisible='false'>
<img src={images.spoon} alt="about__spoon" className='spoon__img' />
</AnimationOnScroll>

<p className='p__opensans'>Having moved from the original site in Rochester, Larose
 has been turning out amazing meals from premises just out of Brooklyn since April 2018. <br /><br /> The end of June
 2018 we opened the doors to visitors and locals to experience the kind of service 
we're all about -<br />great tastes and your satisfaction.</p>
<button type='button' className='custom__button'>Know More</button>

</div>
</div>

  </div>
);

export default AboutUs;
