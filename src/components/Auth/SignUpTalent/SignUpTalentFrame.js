import React, {useState} from 'react';
import '../Auth.scss';
import rocket from '../../../assets/icons/rocket.svg';
import SighUpTalentFormContainer from './SignUpTalentFormContainer';
import routes from '../../../constants/routes.json';
import {Link} from 'react-router-dom';

const SignUpTalentFrame = () => {
  const [success, setSuccess] = useState(false);
  return (
      <div className="authPage">
          <div className="authContainer">
              <div className='infoContainer talentSignUp'>
                  <div className="content">
                      <img src={rocket} alt=""/>
                      <h2>Sign Up</h2>
                      <div>
              <span className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi hic iste pariatur perspiciatis! Accusamus cum deleniti dolor doloribus eligendi
                enim hic laboriosam maiores modi nostrum, odio quae ratione repudiandae sit!</span>
                      </div>
                  </div>

              </div>
              <div className='formContainer'>
                  <div className="content">
                      <SighUpTalentFormContainer success={success}
                                                 setSuccess={setSuccess}/>
                      {!success &&
                      <p>Have an account? <Link to={routes.COMMON.LOGIN} >Sign in</Link></p>}
                  </div>
              </div>
          </div>
      </div>
  );
};

export default SignUpTalentFrame;