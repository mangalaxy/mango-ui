import React from 'react';
import {Field} from 'formik';
import FKAuthTextInput from '../../Fields/FKAuthTextInput/FKAuthTextInput';
import FKCheckbox from '../../Fields/FKCheckbox/FKCheckbox';

import './styles.scss';

const LoginForm = (props) => {
  const {handleSubmit, isSubmitting, isValid} = props;
  return (
      <div className='loginForm'>
        <div className="fieldContainer">
          <Field
              component={FKAuthTextInput}
              disabled={isSubmitting}
              name="email"
              placeholder='Email'
              containerClassName='field'
          />
          <Field
              component={FKAuthTextInput}
              disabled={isSubmitting}
              name="password"
              placeholder='Password'
              containerClassName='field'
              secure
          />
        </div>
        <div className='buttonsContainer'>
          <Field
              component={FKCheckbox}
              disabled={isSubmitting}
              name='remember'
              label='Remember me'
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
