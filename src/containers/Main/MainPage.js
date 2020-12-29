import React from 'react';
import MainMenu from '../../components/Main/MainMenu/MainMenu';
import Footer from '../../components/Main/Footer/Footer';
import AppRouter from "./AppRouter";
import {openLoginForm, openSignUpEmployer, openSignUpTalent} from "./handlers";

import './Main.scss';
import {useHistory, useLocation} from 'react-router';

const MainPage = ({setRole}) => {
  const history=useHistory();
  const location=useLocation();
  return (
        <div className='main'>
          <MainMenu
                path={location && location.pathname}
                openLoginForm={()=>openLoginForm(history, setRole)}
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
