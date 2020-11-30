import React from 'react';
import {Field} from 'formik';
import FKAuthTextInput from '../../Fields/FKAuthTextInput/FKAuthTextInput';
import FKCheckbox from '../../Fields/FKCheckbox/FKCheckbox';
import {Link} from "react-router-dom";

import './styles.scss';

const LoginForm = (props) => {
  const {handleSubmit, handleReset, isSubmitting, isValid} = props
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
            <Link className='link' to="/recover-password">Forgot password?</Link>
          </div>
          <div className='buttonsContainer'>
            <button className='accent-btn'
                    disabled={!isValid || isSubmitting}
                    onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
  )
}

export default LoginForm;
