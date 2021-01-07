import React, {useState, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Down from '../../Down/Down';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import routes from '../../../constants/routes.json';
import './MainMenu.scss';
import MobileMenu from '../MobileMenu/MobileMenu';

const MainMenu = ({path}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  let grayMode = !(path === routes.COMMON.ROOT ||
      path === routes.COMMON.FOR_TALENTS ||
      path === routes.COMMON.FOR_EMPLOYERS || path === routes.COMMON.ABOUT ||
      path === routes.COMMON.BLOG);

  useEffect(() => {
    setDropdownVisible(false);
  }, [path]);

  return (
      <div className={`menuContainer ${grayMode ? 'gray' : ''}`}>
        {mobileMenuVisible && <MobileMenu
            closeMobileMenu={() => setMobileMenuVisible(false)}
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
          <div>
            <NavLink to={routes.COMMON.LOGIN}
                     className={`menuItem  ${grayMode &&
                     'gray'} authBlock left`}>Log in</NavLink>
          </div>
          <div className='sign-container' onClick={() => setDropdownVisible(!dropdownVisible)}>
              <span className={`menuItem  ${grayMode && 'gray'} authBlock`}>
                Sign up
                <ul className={`dropdownMenu ${!dropdownVisible &&
                'hidden'} ${grayMode && 'gray'}`}>
                    <NavLink to={routes.COMMON.SIGNUP_TALENT}
                             activeClassName={'menuItem active'}
                             className={`menuItem ${grayMode &&
                             'gray'}`}>Talents</NavLink>
                  <NavLink to={routes.COMMON.SIGNUP_EMPLOYER}
                           activeClassName={'menuItem active'}
                           className={`menuItem ${grayMode &&
                           'gray'}`}>Employers</NavLink>
                </ul>
              </span>
            <div >
              <Down active={dropdownVisible} grayMode={grayMode}/>
            </div>
          </div>
        </div>
        <BurgerMenu onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
                    grey={grayMode}/>
      </div>
  );
};

export default MainMenu;