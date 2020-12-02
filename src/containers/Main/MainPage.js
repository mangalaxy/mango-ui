import React from 'react';
import MainMenu from '../../components/Main/MainMenu/MainMenu';
import Footer from '../../components/Main/Footer/Footer';
import About from '../../components/Main/About/About';
import JobsRoleSelect from '../../components/Main/Jobs/JobsRolesSelect/JobsRoleSelect';
import JobsByRole from '../../components/Main/Jobs/JobsByRole/JobsByRole';
import JobWithDetails from '../../components/Main/Jobs/JobWithDetails/JobWithDetails';
import PrivacyPolicy from '../../components/Main/PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from '../../components/Main/TermsOfService/TermsOfUse';
import Support from '../../components/Main/Support/Support';
import Blog from '../../components/Main/Blog/Blog';
import {renderModal} from '../../services/renderModal';
import Login from '../../components/Auth/Login/Login';
import SignUpTalent from '../../components/Auth/SignUpTalent/SignUpTalent';
import SignUpEmployer from '../../components/Auth/SignUpEmployer/SignUpEmployer';
import Post from '../../components/Main/Post/Post';
import AppRouter from "./AppRouter";
import {openLoginForm, openSignUpEmployer, openSignUpTalent} from "./handlers";

import './Main.scss';

const MainPage = ({location}) => {
  return (
        <div className='main'>
          <MainMenu
                path={location.pathname}
                openLoginForm={openLoginForm}
                openSignUpTalent={openSignUpTalent}
                openSignUpEmployer={openSignUpEmployer}
          />
          <div id='dialog-container'/>
          <div className="mainPageContent">
            <AppRouter />
          </div>
          <Footer/>
        </div>
  )
}

export default MainPage;
