import React from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './constants/routes.json';
import MainPage from './containers/Main/MainPage';
import TalentHome from './containers/Talent/TalentHome';
import EmployerPage from './containers/Employer/EmployerPage';
import {ScrollToTop} from "./helpers/helpers";

import './styles/reset.scss';
import './styles/index.scss';

const App = () => {
  return (
      <Router>
        <Route component={ScrollToTop}/>
        <Switch>
          <Route path={routes.EMPLOYERS.HOME} component={EmployerPage}/>
          <Route path={routes.TALENT_HOME} component={TalentHome}/>
          <Route path={routes.COMMON.HOME} component={MainPage}/>

          {/*<Route path={routes.TALENT_HOME + '/:id/interviews'}*/}
          {/*       component={ProfileInterview}/>*/}
          {/*<Route path={routes.PROFILE_CREATE} component={CreateProfile}/>*/}
          {/*<Route path={routes.TALENT_PROFILE} component={TalentProfile}/>*/}
        </Switch>
      </Router>
  )
}

export default App
