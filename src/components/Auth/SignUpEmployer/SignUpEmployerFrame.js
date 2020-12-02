import React from 'react';
import rocket from '../../../assets/icons/rocket.svg';
import SignUpEmployerFormContainer from './SignUpEmployerFormContainer';

import '../Auth.scss';
import ImageBanner from "../ImageBanner";

const bannerProps = {
  headline: "Sign Up",
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Excepturi hic iste pariatur perspiciatis! Accusamus cum 
         deleniti dolor doloribus eligendi enim hic laboriosam 
         maiores modi nostrum, odio quae ratione repudiandae sit!`,
  imageSrc: rocket
}

const SignUpEmployerFrame = ({handleSignIn}) => {
  return (
        <div className="authContainer">
          <ImageBanner {...bannerProps} />
          <div className='formContainer'>
            <div className="content">
              <SignUpEmployerFormContainer />
              <p>Have an account? <span onClick={handleSignIn}>Sign in</span></p>
            </div>
          </div>
        </div>
  )
}

export default SignUpEmployerFrame;