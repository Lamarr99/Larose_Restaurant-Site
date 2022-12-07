import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    

<div className='app__aboutus-content flex__center'>

<div className='app__aboutus-content_about'>
<h1 className='headtext__cormorant'>About Us</h1>
<img src={images.spoon} alt="about__spoon" className='spoon__img' loading='lazy' />

<p className='p__opensans'>Our mission at Larose is to protect and preserve food heritage all over the world.<br /><br />Our menu
 celebrates the farmers and growers we work with. Ingredients are ethically sourced,
 seasonal and availability is often weather dependent. Our cheeses, olive oil, kaimoana, beef, bread, olives,
  fruit and vegetables are largely sourced from the Mahurangi region.

</p>
 <button type='button' className='custom__button'>Know More</button>
</div>

<div className='app__aboutus-content_knife flex__center'>
{/* <img src={images.knife} alt="about__knife" className='knife__img' /> */}
<hr style={{ transform:'rotate(180deg)', width:'1px', height:'100vh',  }}  className='app__aboutus-content_knife'/>
</div>

<div className='app__aboutus-content_history'>
<h1 className='headtext__cormorant'>Our History</h1>

<img src={images.spoon} alt="about__spoon" className='spoon__img' loading='lazy' />

<p className='p__opensans'>Having moved from the original site in Rochester, Larose
 has been turning out amazing meals from premises just out of Brooklyn since April 2018. <br /><br /> The end of June
 2018 we opened the doors to visitors and locals to experience the kind of service 
we're all about ;<br />great tastes and your satisfaction.</p><br />
<button type='button' className='custom__button'>Know More</button>

</div>
</div>

  </div>
);

export default AboutUs;
