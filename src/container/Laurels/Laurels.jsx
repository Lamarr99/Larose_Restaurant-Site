import React from 'react';
import { SubHeading} from '../../components';
import { images, data } from '../../constants';

import './Laurels.css';

const AwardCard = ( {award: { imgUrl, title, subtitle } } ) => (
  
<div className='app__laurels_awards-card'>
<img src={imgUrl} alt="award" />


<div className='app__laurels_awards-card_content'>
<h6 className='p__award' 
   style={{color:'var(--color-grey)',
   fontFamily: `var(--font-alt)`, fontSize:'1.3rem',
   fontWeight:'400', marginBottom:'.5rem'}}>
    {title}
    </h6>
<p className='p__cormorant' 
    style={{color: `var(--color-golden)`,
    fontFamily: `var(--font-top)`, 
    fontSize:'1rem',fontWeight:'400'}}>
  {subtitle}
  </p>

</div>
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

 <div className='app__wrapper_img image__laurel'>
<img src={images.laurels} alt="laurels" loading='lazy'/>
 </div>
  </div>
);

export default Laurels;
