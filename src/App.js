import React from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './constants/routes.json';
import MainPage from './containers/Main/MainPage';
import EmployerPage from './containers/Employer/EmployerPage';
import TalentPage from "./containers/Talent/TalentPage";
import {ScrollToTop} from "./helpers/helpers";

import './styles/reset.scss';
import './styles/index.scss';

const App = () => {
  return (
      <Router>
        <Route component={ScrollToTop}/>
        <Switch>
          <Route path={routes.EMPLOYER.HOME} component={EmployerPage}/>
          <Route path={routes.TALENT.HOME} component={TalentPage}/>
          <Route path={routes.COMMON.ROOT} component={MainPage}/>
        </Switch>
      </Router>
  )
}

export default App
