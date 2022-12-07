import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
   <div className='app__wrapper_img app__wrapper_img-reverse'>
   <img src={images.chef} alt="chef" loading='lazy'/>

   </div>
   <div className='app__wrapper_info'>
     
<SubHeading title="Meet the Chef" />
<h3 className='headtext__cormorant'>i always wanted to make something</h3>

<div className='app__chef-content'>
<div className='app__chef-content_quote'>
<img  src={ images.quote } alt="quote" loading='lazy' />

<p className='p__opensans'>Something you could hold in your hand. Each dish is a plate of goodness! <br />
Rather than looking at what anyone else was doing, we made our own decisions, and the more you do that the more confident you become doing it.
</p>
</div><br />
<p className='p__opensans'>Over the years our goals have broadened. We always want to make the best possible meals and have our customers
 enjoy it in the best condition. It needs to be fresh
 and really well made with excellent ingredients and a lot of attention.We are here to build a strong business that’s good for 
 our team, our community and our environment. <br /><br />
  There is a bigger picture that drives us now".</p>

</div>

<div className='app__chef-sign'>
<p className=''>Roseline Osijo</p>
<p className='p__opensans'>Chef & Founder</p>
<img src={images.sign} alt="signature" loading='lazy' />
</div>

   </div>
  </div>
);

export default Chef;
