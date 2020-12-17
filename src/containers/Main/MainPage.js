import React from 'react';
import MainMenu from '../../components/Main/MainMenu/MainMenu';
import Footer from '../../components/Main/Footer/Footer';
import AppRouter from "./AppRouter";
import {openLoginForm, openSignUpEmployer, openSignUpTalent} from "./handlers";

import './Main.scss';

const MainPage = ({location, history}) => {
  return (
        <div className='main'>
          <MainMenu
                path={location.pathname}
                openLoginForm={()=>openLoginForm(history)}
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
