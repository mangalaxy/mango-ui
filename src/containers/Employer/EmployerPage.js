import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from '../../constants/routes.json';
import EmployerMenu from '../../components/Employer/EmployerMenu/EmployerMenu';
import WelcomePage from '../../components/Employer/EmployerWelcome/WelcomePage';
import EmployersPositions from '../../components/Employer/EmployersPositions/EmployersPositions';
import './EmployerPage.scss';
import {connect} from 'react-redux';
import CompanyEdit from '../../components/Employer/Company/CompanyEdit';
import Company from '../../components/Employer/Company/Company';
import {mockCompanyProfile} from '../../mocks/companyProfile';
import BookmarkedTalents from '../../components/Employer/BookmarkedTalents/BookmarkedTalents';
import InterviewDashboard from '../../components/Employer/InterviewDashboard/InterviewDashboard';

const EmployerPage = ({user, location, history}) => {

  const getMenuTheme = () => {
    const path = location.pathname;
    if (path.startsWith(routes.EMPLOYERS.COMPANY)) return 'white';
    return null;
  }

  return (
        <div className="employer-bg">
          <EmployerMenu user={user} theme={getMenuTheme()}/>
          <Switch>
            <Route exact path={routes.EMPLOYERS.HOME}
                   component={() => <WelcomePage name={user.name} advocateName={"Alice Newman"}/>}
            />
            <Route exact path={routes.EMPLOYERS.OPEN_POSITIONS}
                   component={EmployersPositions}/>
            <Route exact path={routes.EMPLOYERS.COMPANY}
                   component={() => <Company profile={mockCompanyProfile}/>}/>
            <Route exact path={routes.EMPLOYERS.COMPANY_EDIT}
                   component={() => <CompanyEdit
                         companyProfile={mockCompanyProfile} history={history}/>}/>
            <Route exact path={routes.EMPLOYERS.FIND_TALENT}
                   component={() => <div/>}/>
            <Route exact path={routes.EMPLOYERS.BOOKMARKED}
                   component={BookmarkedTalents}/>
            <Route exact path={routes.EMPLOYERS.INTERVIEWS}
                   component={InterviewDashboard}/>
          </Switch>
        </div>
  );
};

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EmployerPage);
