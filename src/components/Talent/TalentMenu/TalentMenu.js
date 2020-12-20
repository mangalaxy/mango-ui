import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import routes from '../../../constants/routes.json';
import './TalentMenu.scss';
import loginService from '../../../services/loginService'
import {useHistory} from 'react-router';

const TalentMenu = ({ setRole, theme = null }) => {
  const history = useHistory();
  const goMain=()=>{
    setRole(null);
    history.replace(routes.COMMON.ROOT)
  }

  return (
      <div className={`talentMenuContainer ${theme}`}>
        <div>
          <Link to={routes.TALENT.VIEW_PROFILE} className='logo'>
            mangostart
          </Link>
        </div>
        <ul className='menuItemsContainer'>
          <li>
            <NavLink to={routes.TALENT.VIEW_PROFILE}
                     className='menuItem'
                     activeClassName={'menuItem active'}>
              Profile
            </NavLink>
          </li>

          <li>
            <NavLink to={routes.TALENT.INTERVIEWS}
                     className='menuItem'
                     activeClassName={'menuItem active'}>
              Interviews
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.TALENT.SETTINGS}
                     className='menuItem'
                     activeClassName={'menuItem active'}>
              Settings
            </NavLink>
          </li>
        </ul>
        <div className='menuItemsContainer'>
          <div>
            <span className='menuItem authBlock' onClick={()=>loginService.logout(goMain)}>Sign out</span>
          </div>
        </div>
      </div>
  )
}

export default TalentMenu;
