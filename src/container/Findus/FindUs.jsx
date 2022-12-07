import React from 'react';
import { SubHeading} from '../../components';
import { images } from '../../constants';


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
<SubHeading title='contact' />

<h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>Find Us</h1>
<div className='app__wrapper-content'>
<p className='p__opensans'>475 Fifth Ave. Brooklyn, NY 11228.</p>
<a href='tel:+1-617-555-0118' className='p__opensans' style={{margin:'2rem auto' }}>+1-617-555-0118</a>
<p className='p__cormorant' style={{color:'#DCCA87',margin:'2rem 0' }}>Opening Hours</p>
<p className='p__opensans'> Mon - Fri: 10:00am - 02:00 Am </p>
<p classNAme='p__opensans'> Sat - sun: 10:00am - 04:00 am </p>

</div>
<button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
    </div>

    <div className='app__wrapper_img app__findus-img'>
<img src={images.findus} alt="Find Us" loading='lazy' />
    </div>
  </div>
);

export default FindUs;
