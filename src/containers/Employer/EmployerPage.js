import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from '../../constants/routes.json';
import EmployerMenu from '../../components/Employer/EmployerMenu/EmployerMenu';
import WelcomePage from '../../components/Employer/EmployerWelcome/WelcomePage';
import EmployersPositions
  from '../../components/Employer/EmployersPositions/EmployersPositions';
import {connect} from 'react-redux';
import BookmarkedTalents
  from '../../components/Employer/BookmarkedTalents/BookmarkedTalents';
import InterviewDashboard
  from '../../components/Employer/InterviewDashboard/InterviewDashboard';
import CompanyPage from '../../components/Employer/Company/CompanyPage';
import CompanyEditPage from '../../components/Employer/Company/CompanyEditPage';

import './EmployerPage.scss';
import {useLocation} from 'react-router';

const EmployerPage = ({user, setRole}) => {
  const location = useLocation();
  const getMenuTheme = () => {
    const path = location.pathname;
    if (path.startsWith(routes.EMPLOYER.COMPANY)) {
      return 'white';
    }
    return 'gray';
  };

  return (
      <div className="employer-bg">
        <EmployerMenu user={user} theme={getMenuTheme()} setRole={setRole}/>
        <div id='dialog-container'/>
        <Switch>
          <Route exact path={routes.EMPLOYER.POSITIONS}
                 component={EmployersPositions}/>
          <Route exact path={routes.EMPLOYER.COMPANY} component={CompanyPage}/>
          <Route exact path={routes.EMPLOYER.COMPANY_EDIT}
                 component={CompanyEditPage}/>
          <Route exact path={routes.EMPLOYER.BOOKMARKED}
                 component={BookmarkedTalents}/>
          <Route exact path={routes.EMPLOYER.INTERVIEWS}
                 component={InterviewDashboard}/>
          <Route path={routes.EMPLOYER.HOME}
                 component={WelcomePage}
          />
        </Switch>
      </div>
  );
};

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EmployerPage);
