import React, {useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'
import { staggerContainer, navVariants } from '../../constants/motion';
import {motion} from 'framer-motion';

import './Navbar.css';

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);

return  (

  <motion.nav 
  className='app__navbar'
  variants={staggerContainer}
  initial='hidden'
  whileInView="show"
  viewport={{once: false, amount: 0.25}}>
    <motion.div variants={navVariants} className='app__navbar-logo'>
      <img src={ images.larose } alt="Larose" width={40} height={40}/>
      <h1 className='app__footer-headtext1'> Larose</h1>
    </motion.div>

    <motion.ul 
      className='app__navbar-links'
      variants={navVariants}>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Today's Special</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
    </motion.ul>

    <motion.div variants={navVariants} className='app__navbar-login'>
        <a href="#menu" className='p__opensans'>Menu</a><div />
        <a href="#contact" className='p__opensans'>Reservations</a>
    </motion.div>
    <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu className='nav__button' fontSize={27} onClick={ () => setToggleMenu(true)} />
        {toggleMenu && (

        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom' onClick={()=> setToggleMenu(false)} >
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' />
            <ul className='app__navbar-smallscreen_links'>
                <li className='p__opensans'><a href="#home" >Home</a></li>
                <li className='p__opensans'><a href="#about">About</a></li>
                <li className='p__opensans'><a href="#menu">Today's Special</a></li>
                <li className='p__opensans'><a href="#awards">Awards</a></li>
                <li className='p__opensans'><a href="#contact">Contact</a></li>

            </ul>
        </div>
)}



</div>
  </motion.nav>
)
}

export default Navbar;
