import React from 'react';
import '../Auth.scss';
import LoginFormContainer from './LoginFormContainer';
import ImageBanner from '../ImageBanner';
import rocket from '../../../assets/icons/rocket.svg';
import {Link} from 'react-router-dom';
import routes from '../../../constants/routes.json';

const bannerProps = {
  headline: 'Sign in',
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi hic iste pariatur perspiciatis!
         Accusamus cum deleniti dolor doloribus eligendi enim hic laboriosam maiores modi nostrum, odio quae
          ratione repudiandae sit!`,
  imageSrc: rocket,
};

const LoginFrame = ({
                      handleForgotPassword,
                      history
                    }) => {
  return (
      <div className="authPage">
        <div className="authContainer">
          <ImageBanner {...bannerProps} />
          <div className='formContainer'>
            <div className="content">
              <LoginFormContainer
                  handleForgotPassword={handleForgotPassword}
                  history={history}
              />
              <p>Don’t have an account? Sign up <Link
                  to={routes.COMMON.SIGNUP_TALENT}>as talent</Link> or <Link
                  to={routes.COMMON.SIGNUP_EMPLOYER}>as employer</Link></p>
            </div>
          </div>
        </div>
      </div>
  );

};

export default LoginFrame;
