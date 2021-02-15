import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from '../../constants/routes.json';
import EmployerMenu from '../../components/Employer/EmployerMenu/EmployerMenu';
import WelcomePage from '../../components/Employer/EmployerWelcome/WelcomePage';
import EmployersPositions
  from '../../components/Employer/EmployersPositions/EmployersPositions';
import BookmarkedTalents
  from '../../components/Employer/BookmarkedTalents/BookmarkedTalents';
import InterviewDashboard
  from '../../components/Employer/InterviewDashboard/InterviewDashboard';
import CompanyPage from '../../components/Employer/Company/CompanyPage';
import CompanyEditPage from '../../components/Employer/Company/CompanyEditPage';
import './EmployerPage.scss';
import {useLocation} from 'react-router';
import employerService from '../../services/employerService';
import CreatePosition
  from '../../components/Employer/CreatePosition/CreatePosition';
import Preloader from '../../components/Preloader/Preloader';

const EmployerPage = () => {
  const [user, setUser] = useState();
  const [lightTheme, setLightTheme] = useState(false)
  const location = useLocation();

  useEffect(()=>{
    setLightTheme(location.pathname.startsWith(routes.EMPLOYER.COMPANY))
  }, [location])

  useEffect(() => {
    employerService.getMyInfo().then(res => {
      setUser(res.data)
    }).catch(err => {
      console.log(err);
    });
  }, []);

  if (!user) return <Preloader/>

  return (
      <div className={lightTheme?"employer-bg employer-bg__white":"employer-bg"}>
        <EmployerMenu user={user}/>
        <div id='dialog-container'/>
        <Switch>
          <Route exact path={routes.EMPLOYER.POSITIONS}
                 component={EmployersPositions}/>
          <Route exact path={routes.EMPLOYER.COMPANY} component={()=><CompanyPage user={user}/>}/>
          <Route exact path={routes.EMPLOYER.COMPANY_EDIT}
                 component={CompanyEditPage}/>
          <Route exact path={routes.EMPLOYER.BOOKMARKED}
                 component={BookmarkedTalents}/>
          <Route exact path={routes.EMPLOYER.INTERVIEWS}
                 component={InterviewDashboard}/>
          <Route path={routes.EMPLOYER.CREATE_POSITION} component={CreatePosition}/>
          <Route path={routes.EMPLOYER.HOME}
                 component={()=><WelcomePage name={user?.fullName}/>}
          />
        </Switch>
      </div>
  );
};

export default EmployerPage;
