import React from 'react';
import './Footer.scss';
import {Link, NavLink} from 'react-router-dom';
import routes from '../../../constants/routes.json';

const Footer = () => (
    <div className='footer'  ref={(el) => {window.footer = el;}} >
      <div className='footer__top-section'>
        <div className='logo-container'>
          <Link to={routes.COMMON.ROOT} className='logo'>Mangostart</Link>
        </div>
        <ul className='menuItemsContainer'>
          <li>
            <NavLink to={routes.COMMON.FOR_TALENTS}
                     activeClassName={'menuItem active'}
                     className={'menuItem'}>
              Talents
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.COMMON.FOR_EMPLOYERS}
                     activeClassName={'menuItem active'}
                     className={'menuItem'}>
              Employers
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.COMMON.FIND_JOB}
                     activeClassName={'menuItem active'}
                     className={'menuItem'}>
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.COMMON.BLOG}
                     activeClassName={'menuItem active'}
                     className={'menuItem'}>
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className='itemsGroup'>
        <li>
          <Link to={routes.COMMON.ABOUT} className='menuItem'>
            About us
          </Link>
        </li>
        <li>
          <Link to={routes.COMMON.SUPPORT} className='menuItem'>
            Support center
          </Link></li>
        <li>
          <Link to={routes.COMMON.PRIVACY} className='menuItem'>
            Privacy policy
          </Link>
        </li>
        <li>
          <Link to={routes.COMMON.TERMS} className='menuItem'>
            Terms of Service
          </Link>
        </li>
      </ul>
      <p className='copyright'>&copy; 2019-2020 Mangostart. All Rights Reserved.</p>
    </div>
);

export default Footer;