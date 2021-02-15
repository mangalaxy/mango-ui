import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import routes from '../../../../constants/routes.json';
import './EmployerMobileMenu.scss';
import {logout} from '../../../../actions/userActions';
import {connect} from 'react-redux';
import {close} from "../../../../assets/icons";
import SvgIcon from '../../../../components/SvgIcon/SvgIcon';

const EmployerMobileMneu = ({user,logoutUser, closeMobile}) => {

    return (
        <div className='employerMibileMenu'>
            <div className='employerMenu'>
            </div>
            <div className='employerMenuContainer'>
                <div className='employerLogoContainer'>
                    <Link to={routes.EMPLOYER.HOME} className='logo'>
                        mangostart
                    </Link>
                    <div className='mobile-close' onClick={() => closeMobile(false)}>
                        <SvgIcon type={close()}/>
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
                    <span className='logoutItem authBlock left'>
                      {user && user.fullName}
                    </span>
                    </div>
                    <div>
                        <span className='logoutItem authBlock' onClick={() => logoutUser()}>Sign out</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    logoutUser: ()=>dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(EmployerMobileMneu);
