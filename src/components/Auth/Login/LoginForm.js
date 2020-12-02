import React from 'react';
import {Field} from 'formik';
import routes from "../../../constants/routes.json";
import FKAuthTextInput from '../../Fields/FKAuthTextInput/FKAuthTextInput';
import FKCheckbox from '../../Fields/FKCheckbox/FKCheckbox';
import {Link} from "react-router-dom";

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
            <Link className='link' to={routes.COMMON.PASSWORD_RECOVERY}>Forgot password?</Link>
          </div>
          <div className='buttonsContainer'>
            <button className='accent-btn'
                    disabled={!isValid || isSubmitting}
                    onClick={handleSubmit}>
              Get started
            </button>
          </div>
        </div>
  )
}

export default LoginForm;