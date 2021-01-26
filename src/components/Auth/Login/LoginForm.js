import React from 'react';
import {Field} from 'formik';
import FKAuthTextInput from '../../Fields/FKAuthTextInput/FKAuthTextInput';
import FKCheckbox from '../../Fields/FKCheckbox/FKCheckbox';

import './styles.scss';
import {ProgressSpinner} from 'primereact/progressspinner';

const LoginForm = ({handleSubmit, isSubmitting, isValid}) => {
  return (
      <div className='loginForm'>
        {isSubmitting &&
        <div className="preloaderContainer">
          <ProgressSpinner style={{width: '100px', height: '100px'}}
                           strokeWidth="2" animationDuration="2s"/>
        </div>}
        <div className="fieldContainer">
          <Field
              component={FKAuthTextInput}
              disabled={isSubmitting}
              name="email"
              placeholder='myemail@example.com'
              label='Email'
              containerClassName='field'
              focused
          />
          <Field
              component={FKAuthTextInput}
              disabled={isSubmitting}
              name="password"
              placeholder=''
              label='Password'
              containerClassName='field'
              secure
          />
        </div>
        <div className='buttonsContainer'>
          <Field
              component={FKCheckbox}
              disabled={isSubmitting}
              name='rememberMe'
              label='Keep me signed in'
          />
          <a className='link' href='#'>Forgot password?</a>
        </div>
        <div className='buttonsContainer'>
          <button type='button' className='accent-btn'
                  disabled={!isValid || isSubmitting}
                  onClick={handleSubmit}>
            Get started
          </button>
        </div>
      </div>
  );
};

export default LoginForm;
