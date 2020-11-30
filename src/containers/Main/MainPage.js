import React from 'react';
import MainMenu from '../../components/Main/MainMenu/MainMenu';
import Footer from '../../components/Main/Footer/Footer';
import './Main.scss';
import AppRouter from "./AppRouter";
import {openLoginForm, openSignUpEmployer, openSignUpTalent} from "./handlers";


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
