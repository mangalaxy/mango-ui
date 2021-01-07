import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './constants/routes.json';
import MainPage from './containers/Main/MainPage';
import EmployerPage from './containers/Employer/EmployerPage';
import TalentPage from './containers/Talent/TalentPage';
import {ScrollToTop} from './helpers/helpers';
import loginService from './services/loginService';
import {ROLES} from './constants/roles';
import './styles/reset.scss';
import './styles/index.scss';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {connect} from 'react-redux';
import {setUserRole} from './actions/userActions';

const App = ({role, setRole}) => {

  useEffect(() => {
    let role = loginService.getStoredUser();
    if (role) setRole(role);
  }, []);

  return (
      <Router>
        <Route component={ScrollToTop}/>
        {role === ROLES.EMPLOYER &&
        <Route path={routes.EMPLOYER.HOME} component={EmployerPage}/>}
        {role === ROLES.TALENT &&
        <Route path={routes.TALENT.HOME} component={TalentPage}/>}
        {!role && <Route path={routes.COMMON.ROOT} component={MainPage}/>}
      </Router>
  );
};

const mapStateToProps = ({user}) => ({role: user.role});
const mapDispatchToProps = dispatch => ({
  setRole: role => dispatch(setUserRole(role)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);