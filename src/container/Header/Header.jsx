import React from 'react';
import { SubHeading } from '../../components';
import{images} from '../../constants'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import './Header.css';

const Header = () => (

  <div className='app__header app__wrapper section__padding' id='home'>


<div className='app__wrapper_info'>


<AnimationOnScroll animateIn="animate__flipInX">

<SubHeading title='Double your pleasure, double your fun.'/></AnimationOnScroll>

<AnimationOnScroll animateIn="animate__fadeInUp"  delay='5000ms' animateOut='animate__fadeOut'>
 


<h1 className='app__header-h1'>The Key to Fine Dining</h1>
<p className='p__opensans' style={{ margin: '2rem 0'  }}>The place to be 
when you want to have a great time with the people you love.</p>
<button type='button' className='custom__button '>Explore Menu</button>
</AnimationOnScroll>
</div>

<div className='app__wrapper_img'>
<AnimationOnScroll animateIn="animate__fadeIn">


<img src={ images.welcome } alt="welcome image" />
</AnimationOnScroll>
</div>

  </div>
);

export default Header;
