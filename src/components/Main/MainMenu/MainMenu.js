import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Down from '../../Down/Down';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import routes from '../../../constants/routes.json';
import './MainMenu.scss';
import MobileMenu from '../MobileMenu/MobileMenu';

const MainMenu = ({path, dark, openLoginForm, openSignUpTalent, openSignUpEmployer}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  let grayMode = !(path === routes.COMMON.ROOT ||
      path === routes.COMMON.FOR_TALENTS ||
      path === routes.COMMON.FOR_EMPLOYERS || path === routes.COMMON.ABOUT ||
      path === routes.COMMON.BLOG);

  return (
      <div className={`menuContainer ${grayMode ? 'gray' : ''}`}>
        {mobileMenuVisible && <MobileMenu
            openLoginForm={openLoginForm}
            openSignUpTalent={openSignUpTalent}
            openSignUpEmployer={openSignUpEmployer}
            closeMobileMenu={()=>setMobileMenuVisible(false)}
        />}
        <div className='logoContainer'>
          <Link to={routes.COMMON.ROOT} className='logo'>
            Mangostart
          </Link>
        </div>
        <ul className='menuItemsContainer'>
          <li>
            <NavLink to={routes.COMMON.FOR_TALENTS}
                     activeClassName={'menuItem active'}
                     className={`menuItem ${grayMode && 'gray'}`}>
              Talents
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.COMMON.FOR_EMPLOYERS}
                     activeClassName={'menuItem active'}
                     className={`menuItem ${grayMode && 'gray'}`}>
              Employers
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.COMMON.FIND_JOB}
                     activeClassName={'menuItem active'}
                     className={`menuItem ${grayMode && 'gray'}`}>
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.COMMON.BLOG}
                     activeClassName={'menuItem active'}
                     className={`menuItem ${grayMode && 'gray'}`}>
              Blog
            </NavLink>
          </li>
        </ul>
        <div className='menuItemsContainer'>
          <div onClick={openLoginForm}>
            <span className={`menuItem  ${grayMode &&
            'gray'} authBlock left`}>Log in</span>
          </div>
          <div className='sign-container'>
              <span className={`menuItem  ${grayMode &&
              'gray'} authBlock`}>
                Sign up
                <ul className={`dropdownMenu ${!dropdownVisible &&
                'hidden'} ${grayMode && 'gray'}`}
                >
                    <li onClick={openSignUpTalent}>Talents</li>
                    <li onClick={openSignUpEmployer}>Employers</li>
                </ul>
              </span>
              <div onClick={() => setDropdownVisible(!dropdownVisible)}>
                  <Down active={dropdownVisible} grayMode={grayMode}/>
              </div>
          </div>
        </div>
        <BurgerMenu onClick={() => setMobileMenuVisible(!mobileMenuVisible)} grey={grayMode}/>
      </div>
  );
};

export default MainMenu;