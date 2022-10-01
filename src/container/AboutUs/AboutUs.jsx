import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
<img src={images.L} alt="Larose" />
    </div>

<div className='app__aboutus-content flex__center'>
<div className='app__aboutus-content_about'>
<h1 className='headtext__cormorant'>About Us</h1>
<img src={images.spoon} alt="about__spoon" className='spoon__img' />
<p className='p__opensans'>Our menu celebrates the farmers and growers we work with. Ingredients are ethically sourced,
 seasonal and availability is often weather dependent. Our cheeses, olive oil, kaimoana, beef, bread, olives,
  fruit and vegetables are largely sourced from the Mahurangi region.
<br /><br />
Our food is created to share amongst friends and family. Each dish is served as ready.
  We are a walk-in only venue between 12pm - 5.30pm.
 Just come on in at any time and we will accommodate you on your arrival.</p>
<button type='button' className='custom__button'>Know More</button>
</div>

<div className='app__aboutus-content_knife flex__center'>
<img src={images.knife} alt="about__knife" className='knife__img' />
</div>

<div className='app__aboutus-content_history'>
<h1 className='headtext__cormorant'>Our History</h1>
<img src={images.spoon} alt="about__spoon" className='spoon__img' />
<p className='p__opensans'>Having moved from the original site in Leigh, Larose
 has been turning out amazing meals from premises just out of Matakana since February 2016. The end of July 
 2016 we opened the doors to visitors and locals to experience the kind of hospitality 
we're all about - straight forward and generous.</p>
<button type='button' className='custom__button'>Know More</button>
</div>
</div>

  </div>
);

export default AboutUs;
