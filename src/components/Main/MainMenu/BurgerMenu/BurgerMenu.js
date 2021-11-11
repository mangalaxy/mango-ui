import React from 'react';
import './BurgerMenu.scss';

const BurgerMenu = ({onClick, grey, purple}) => (

    <div className='burger-container' onClick={onClick}>
      <div className='menu-button'>
        <div className={`menu-button__line ${grey && 'menu-button__line--grey'} ${purple && 'menu-button__line--purple'}`}/>
        <div className={`menu-button__line ${grey && 'menu-button__line--grey'} ${purple && 'menu-button__line--purple'}`}/>
        <div className={`menu-button__line ${grey && 'menu-button__line--grey'} ${purple && 'menu-button__line--purple'}`}/>
      </div>
    </div>
);

export default BurgerMenu;