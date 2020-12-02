import React from 'react';
import '../Auth.scss';
import LoginFormContainer from './LoginFormContainer';
import ImageBanner from "../ImageBanner";
import rocket from "../../../assets/icons/rocket.svg";

const bannerProps = {
  headline: "Sign in",
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi hic iste pariatur perspiciatis!
         Accusamus cum deleniti dolor doloribus eligendi enim hic laboriosam maiores modi nostrum, odio quae
          ratione repudiandae sit!`,
  imageSrc: rocket
}

const LoginFrame = ({handleForgotPassword, handleSignUpTalent, handleSingUpEmployer}) => {
  return (
        <div className="authContainer">
          <ImageBanner {...bannerProps} />
          <div className='formContainer'>
            <div className="content">
              <LoginFormContainer handleForgotPassword={handleForgotPassword}/>
              <p>Don’t have an account? Sign up <span onClick={handleSignUpTalent}>as talent</span> or <span
                    onClick={handleSingUpEmployer}>as employer</span></p>
            </div>
          </div>
        </div>
  );

};

export default LoginFrame;
