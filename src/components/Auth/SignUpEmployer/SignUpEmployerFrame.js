import React, {useState} from 'react';
import rocket from '../../../assets/icons/rocket.svg';
import SignUpEmployerFormContainer from './SignUpEmployerFormContainer';
import routes from '../../../constants/routes.json';

import '../Auth.scss';
import ImageBanner from '../ImageBanner';
import {Link} from 'react-router-dom';

const bannerProps = {
  headline: 'Sign Up',
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Excepturi hic iste pariatur perspiciatis! Accusamus cum 
         deleniti dolor doloribus eligendi enim hic laboriosam 
         maiores modi nostrum, odio quae ratione repudiandae sit!`,
  imageSrc: rocket,
};

const SignUpEmployerFrame = () => {
  const [success, setSuccess] = useState(false);
  return (
      <div className="authPage">
          <div className="authContainer">
              <ImageBanner {...bannerProps} />
              <div className='formContainer'>
                  <div className="content">
                      <SignUpEmployerFormContainer
                          success={success}
                          setSuccess={setSuccess}/>
                      {!success &&
                      <p>Have an account? <Link to={routes.COMMON.LOGIN}>Sign in</Link></p>}
                  </div>
              </div>
          </div>
      </div>
  );
};

export default SignUpEmployerFrame;