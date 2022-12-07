import React from 'react';
import { SubHeading } from '../../components';
import{ images } from '../../constants'


import './Header.css';

const Header = () => (
 <div className='app__header app__wrapper section__padding' id='home'>

        <div className='app__wrapper_info'>
        <SubHeading className='app__header-text' title='Double your pleasure, double your fun.'/>

        
           <h1 className='app__header-h1'>Grande cuisine,<br /> just for you.</h1>
           <p className='p__opensans' 
              style={{ margin: '2rem 0', lineClamp:3  }}>The place to be 
           when you want a great time with <br /> the people you love.<br />Now, Let’s begin the adventure.</p>
           <a type='button' href='#menu' className='custom__button '>Explore Menu</a>
      
        </div>

        <div className='app__header-img'>
            
            <img src={ images.welcome } alt="Welcome"  />
           
        </div>

  </div>
);

export default Header;
