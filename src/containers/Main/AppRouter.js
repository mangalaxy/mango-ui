import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from '../../constants/routes.json';
import Home from '../../components/Main/Home/Home';
import ForTalents from '../../components/Main/ForTalents/ForTalents';
import ForEmployers from '../../components/Main/ForEmployers/ForEmployers';
import JobsRoleSelect
  from '../../components/Main/Jobs/JobsRolesSelect/JobsRoleSelect';
import JobsByRole from '../../components/Main/Jobs/JobsByRole/JobsByRole';
import JobWithDetails
  from '../../components/Main/Jobs/JobWithDetails/JobWithDetails';
import About from '../../components/Main/About/About';
import PrivacyPolicy from '../../components/Main/Legal/PrivacyPolicy';
import TermsOfUse from '../../components/Main/Legal/TermsOfUse';
import Support from '../../components/Main/Support/Support';
import Blog from '../../components/Main/Blog/Blog';
import Post from '../../components/Main/Post/Post';
import LoginFrame from '../../components/Auth/Login/LoginFrame';
import SignUpTalentFrame
  from '../../components/Auth/SignUpTalent/SignUpTalentFrame';
import SignUpEmployerFrame
  from '../../components/Auth/SignUpEmployer/SignUpEmployerFrame';
import {openLoginForm, openSignUpEmployer, openSignUpTalent} from './handlers';

const AppRouter = () => (
    <Switch>
      <Route exact path={routes.COMMON.FOR_TALENTS} component={ForTalents}/>
      <Route exact path={routes.COMMON.FOR_EMPLOYERS} component={ForEmployers}/>
      <Route exact path={routes.COMMON.FIND_JOB} component={JobsRoleSelect}/>
      <Route exact path={routes.COMMON.FIND_JOB + '/:jobRole'}
             component={JobsByRole} url={routes.COMMON.FIND_JOB}/>
      <Route exact path={routes.COMMON.JOB_WITH_DETAILS + '/:job'}
             component={JobWithDetails}/>
      <Route exact path={routes.COMMON.ABOUT} component={About}/>
      <Route exact path={routes.COMMON.PRIVACY} component={PrivacyPolicy}/>
      <Route exact path={routes.COMMON.TERMS} component={TermsOfUse}/>
      <Route exact path={routes.COMMON.SUPPORT} component={Support}/>
      <Route exact path={routes.COMMON.BLOG} component={Blog}/>
      <Route exact path={routes.COMMON.POST + '/:id'} component={Post}/>
      <Route exact path={routes.COMMON.LOGIN}
             component={() => <LoginFrame handleSignUpTalent={openSignUpTalent}
                                          handleSingUpEmployer={openSignUpEmployer}/>
             }
      />
      <Route exact path={routes.COMMON.SIGNUP_EMPLOYER}
             component={() => <SignUpEmployerFrame
                 handleSignIn={openLoginForm}/>}
      />
      <Route exact path={routes.COMMON.SIGNUP_TALENT}
             component={() => <SignUpTalentFrame handleSignIn={openLoginForm}/>}
      />
      <Route path={routes.COMMON.ROOT} component={Home}/>
    </Switch>
);

export default AppRouter;