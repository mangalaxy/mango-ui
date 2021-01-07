import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import routes from '../../../constants/routes.json';
import './EmloyerMenu.scss';
import loginService from '../../../services/loginService'
import {useHistory} from 'react-router';
import {logout} from '../../../actions/userActions';
import {connect} from 'react-redux';

const EmployerMenu = ({ user,logoutUser, theme = null }) => {
  const history = useHistory();
  const goMain=()=>{
    logoutUser();
    history.replace(routes.COMMON.ROOT)
  }

  return (
      <div className={`employerMenuContainer ${theme}`}>
        <div>
          <Link to={routes.EMPLOYER.HOME} className='logo'>
            mangostart
          </Link>
        </div>
        <ul className='menuItemsContainer'>
          <li>
            <NavLink to={routes.EMPLOYER.POSITIONS}
                     className='menuItem'
                     activeClassName={'menuItem active'}>
              My positions
            </NavLink>
          </li>

          <li>
            <NavLink to={routes.EMPLOYER.BOOKMARKED}
                     className='menuItem'
                     activeClassName={'menuItem active'}>
              Bookmarked
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.EMPLOYER.INTERVIEWS}
                     className='menuItem'
                     activeClassName={'menuItem active'}>
              Interviews
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.EMPLOYER.COMPANY}
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
            <span className='menuItem authBlock' onClick={()=>loginService.logout(goMain)}>Sign out</span>
          </div>
        </div>
      </div>
  )
}

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
  logoutUser: ()=>dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployerMenu);
