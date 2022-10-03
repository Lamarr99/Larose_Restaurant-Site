import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
   <div className='app__wrapper_img app__wrapper_img-reverse'>
   <img src={images.chef} alt="chef" />

   </div>
   <div className='app__wrapper_info'>
     
<SubHeading title="Chef's Word" />
<h1 className='headtext__cormorant'>i always wanted to make something</h1>

<div className='app__chef-content'>
<div className='app__chef-content_quote'>
<img  src={ images.quote } alt="quote" />

<p className='p__opensans'>Something you could hold in your hand. Each dish is a plate of goodness! <br />
Rather than looking at what anyone else was doing, we made our own decisions, and the more you do that the more confident you become doing it.
</p>
</div><br />
{/* <p className='p__opensans'>Celebrate European style beers + snacks, all weekend. Alongside our regular menu, enjoy a Hefeweizen, a Super Saison and the Quadrupel.</p> */}
<p className='p__opensans'>Over the years our goals have broadened. We always want to make the best possible meals and have our customers
 enjoy it in the best condition. It needs to be fresh
 and really well made with excellent ingredients and a lot of attention.We are here to build a strong business that’s good for 
 our team, our community and our environment. <br /><br />
  There is a bigger picture that drives us now".</p>

</div>

<div className='app__chef-sign'>
<p className=''>Roseline Osijo</p>
<p className='p__opensans'>Chef & Founder</p>
<img src={images.sign} alt="signature" />
</div>

   </div>
  </div>
);

export default Chef;
