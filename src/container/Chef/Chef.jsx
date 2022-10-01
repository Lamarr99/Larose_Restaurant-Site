import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
   <div className='app__wrapper_img app__wrapper_img-reverse'>
<img src={images.chef} alt="chef" />
   </div>
   <div className='app__wrapper_info'>
<SubHeading title="Chef's Word" />
<h1 className='headtext__cormorant'>what we believe in</h1>

<div className='app__chef-content'>
<div className='app__chef-content_quote'>
<img src={ images.quote } alt="quote" />
<p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas inventore, voluptate corrupti minima minus veniam consequuntur natus numquam officia, rerum, culpa obcaecati repellendus ducimus dolores labore aliquid. Quo, distinctio eos?</p>

</div>
<p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate voluptates consectetur laudantium nemo consequatur quisquam corporis, vel quas saepe doloribus debitis dolorem expedita magni ullam at quaerat obcaecati odio aliquid?</p>

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
