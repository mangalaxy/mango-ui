import React, {useEffect, useState} from 'react';
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

const App = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    let role = loginService.getStoredUser();
    if (role) setRole(role);
  }, []);

  return (
      <Router>
        <Route component={ScrollToTop}/>
        {role === ROLES.EMPLOYER && <Route path={routes.EMPLOYER.HOME}>
          <EmployerPage setRole={setRole}/>
        </Route>
        }
        {role === ROLES.TALENT &&
        <Route path={routes.TALENT.HOME}>
          <TalentPage setRole={setRole}/>
        </Route>
        }
        {!role && <Route path={routes.COMMON.ROOT}>
          <MainPage setRole={setRole}/>
        </Route>}
      </Router>
  );
};

export default App;