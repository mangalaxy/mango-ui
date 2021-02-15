import React, {Fragment, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import routes from '../../../constants/routes.json';
import './EmloyerMenu.scss';
import loginService from '../../../services/loginService'
import {useHistory} from 'react-router';
import {logout} from '../../../actions/userActions';
import {connect} from 'react-redux';
import EmployerMobileMenu from './EmployerMobileMenu/EmployerMobileMenu'
import BurgerMenu from '../../../components/Main/MainMenu/BurgerMenu/BurgerMenu';

const EmployerMenu = ({user,logoutUser}) => {
  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);
  const history = useHistory();
  const goMain=()=>{
    logoutUser();
    history.replace(routes.COMMON.ROOT)
  };


  if (isMobileMenuOpen) {
      return <EmployerMobileMenu user={user} logoutUser={()=>loginService.logout(goMain)} closeMobile={(flag) => toggleMobileMenu(flag)} />
  }

  return (
      <Fragment>
          <div className='employerMenuContainer'>
              <div className='employerLogoContainer'>
                  <Link to={routes.EMPLOYER.HOME} className='logo'>
                      mangostart
                  </Link>
                  <div className='buregrMenuContainer'>
                      <BurgerMenu purple onClick={() => toggleMobileMenu(true)}/>
                  </div>
              </div>
              <ul className='menuItemsContainer'>
                  <li className='itemLink'>
                      <NavLink to={routes.EMPLOYER.POSITIONS}
                               className='menuItem'
                               activeClassName={'menuItem active'}>
                          My positions
                      </NavLink>
                  </li>

                  <li className='itemLink'>
                      <NavLink to={routes.EMPLOYER.BOOKMARKED}
                               className='menuItem'
                               activeClassName={'menuItem active'}>
                          Bookmarked
                      </NavLink>
                  </li>
                  <li className='itemLink'>
                      <NavLink to={routes.EMPLOYER.INTERVIEWS}
                               className='menuItem'
                               activeClassName={'menuItem active'}>
                          Interviews
                      </NavLink>
                  </li>
                  <li className='itemLink'>
                      <NavLink to={routes.EMPLOYER.COMPANY}
                               className='menuItem'
                               activeClassName={'menuItem active'}>
                          My company
                      </NavLink>
                  </li>
              </ul>
              <div className='looutContainer'>
                  <div>
                    <span className='menuItem authBlock left'>
                      {user && user.fullName}
                    </span>
                  </div>
                  <div>
                      <span className='menuItem authBlock' onClick={()=>loginService.logout(goMain)}>Sign out</span>
                  </div>
              </div>
          </div>
      </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  logoutUser: ()=>dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(EmployerMenu);
