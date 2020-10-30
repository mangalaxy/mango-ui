import React from 'react';
import './BurgerMenu.scss';

const BurgerMenu = ({onClick, grey}) => (

    <div className='burger-container' onClick={onClick}>
      <div className='menu-button'>
        <div className={`menu-button__line ${grey && 'menu-button__line--grey'}`}/>
        <div className={`menu-button__line ${grey && 'menu-button__line--grey'}`}/>
        <div className={`menu-button__line ${grey && 'menu-button__line--grey'}`}/>
      </div>
    </div>
);

export default BurgerMenu;