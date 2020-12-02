import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from '../../constants/routes.json';
import EmployerMenu from '../../components/Employer/EmployerMenu/EmployerMenu';
import WelcomePage from '../../components/Employer/EmployerWelcome/WelcomePage';
import EmployersPositions from '../../components/Employer/EmployersPositions/EmployersPositions';
import {connect} from 'react-redux';
import BookmarkedTalents from '../../components/Employer/BookmarkedTalents/BookmarkedTalents';
import InterviewDashboard from '../../components/Employer/InterviewDashboard/InterviewDashboard';
import CompanyPage from "../../components/Employer/Company/CompanyPage";
import CompanyEditPage from "../../components/Employer/Company/CompanyEditPage";

import './EmployerPage.scss';

const EmployerPage = ({user, location, history}) => {

  const getMenuTheme = () => {
    const path = location.pathname;
    if (path.startsWith(routes.EMPLOYER.COMPANY)) {
      return 'white';
    }
    return 'gray';
  }

  return (
        <div className="employer-bg">
          <EmployerMenu user={user} theme={getMenuTheme()}/>
          <Switch>
            <Route exact path={routes.EMPLOYER.HOME}
                   component={() => <WelcomePage name="Mike Will" advocateName="Alice Newman"/>}
            />
            <Route exact path={routes.EMPLOYER.POSITIONS} component={EmployersPositions}/>
            <Route exact path={routes.EMPLOYER.COMPANY} component={CompanyPage}/>
            <Route exact path={routes.EMPLOYER.COMPANY_EDIT} component={CompanyEditPage}/>
            <Route exact path={routes.EMPLOYER.BOOKMARKED} component={BookmarkedTalents}/>
            <Route exact path={routes.EMPLOYER.INTERVIEWS} component={InterviewDashboard}/>
          </Switch>
        </div>
  )
}

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EmployerPage);
