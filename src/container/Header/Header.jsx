import React from 'react'
import './Header.css';
import {SubHeading} from '../../components';
import {images} from '../../constants';
const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id='home'>
       <div className='app__wrapper_info'>
        <SubHeading title="Chase the new flavor"/>
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={{margin:'2rem 0'}}>sit tellus lobortis sed ivamus moleste.condimentum volutpat morbi facilisis quam sceleisque sapien.Et,penatibus aliquam amet tellus</p>
        <button type='button' className='custom__button' >Explore Menu</button>
       </div>
       <div className='app__wrapper_img'>
        <img src={images.welcome} alt="welcome img" />

       </div>
    </div>
  )
}

export default Header