import React from 'react';
import { SubHeading } from '../../components';
import{images} from '../../constants'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import './Header.css';

const Header = () => (

  <div className='app__header app__wrapper section__padding' id='home'>

<div className='app__wrapper_info'>
<SubHeading  title='Double your pleasure, double your fun.'/>

<AnimationOnScroll animateIn="animate__fadeIn" animateOut='animate__fadeOut'>
<h1 className='app__header-h1'>Grande cuisine. just for you</h1>
<p className='p__opensans' style={{ margin: '2rem 0'  }}>The place to be 
when you want a great time with the people you love.<br />Now, Let’s begin the adventure.</p>
<a type='button' href='#menu' className='custom__button '>Explore Menu</a>
</AnimationOnScroll>
</div>

<div className='app__wrapper_img'>
<AnimationOnScroll animateIn="animate__fadeIn">


<img src={ images.welcome } alt="welcome image" loading='lazy' />
</AnimationOnScroll>
</div>

  </div>
);

export default Header;
