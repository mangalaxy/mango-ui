import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import routes from '../../../constants/routes.json';

import './EmloyerMenu.scss';

const EmployerMenu = ({ user, theme = null }) => {
  return (
      <div className={`employerMenuContainer ${theme}`}>
        <div>
          <Link to={routes.EMPLOYERS.HOME} className='logo'>
            mangostart
          </Link>
        </div>
        <ul className='menuItemsContainer'>
          <li>
            <NavLink to={routes.EMPLOYERS.POSITIONS}
                     className='menuItem'
                     activeClassName={'menuItem active'}>
              My positions
            </NavLink>
          </li>

          <li>
            <NavLink to={routes.EMPLOYERS.BOOKMARKED}
                     className='menuItem'
                     activeClassName={'menuItem active'}>
              Bookmarked
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.EMPLOYERS.INTERVIEWS}
                     className='menuItem'
                     activeClassName={'menuItem active'}>
              Interviews
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.EMPLOYERS.COMPANY}
                     className='menuItem'
                     activeClassName={'menuItem active'}>
              My company
            </NavLink>
          </li>
        </ul>
        <div className='menuItemsContainer'>
          <div>
            <span className='menuItem authBlock left'>
              {user && user.fullName ? user.fullName : 'USER'}
            </span>
          </div>
          <div>
            <Link className='menuItem authBlock' to='/sign-out'>Sign out</Link>
          </div>
        </div>
      </div>
  )
}

export default EmployerMenu;
