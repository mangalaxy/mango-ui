import React from 'react';
import {Field} from 'formik';
import './styles.scss';
import FKAuthTextInput from '../../Fields/FKAuthTextInput/FKAuthTextInput';
import FKCheckbox from '../../Fields/FKCheckbox/FKCheckbox';
import FKAuthDropdown from '../../Fields/FKAuthDropdown/FKAuthDropdown';

const SignUpForm = ({handleSubmit, isSubmitting, isValid, initialValues}) => (
    <div className='signUpTalentForm'>
      <div className="fieldContainer">
        <Field
            component={FKAuthTextInput}
            disabled={isSubmitting}
            name="fullName"
            placeholder='Full name'
            containerClassName='field'
        />
        <Field
            component={FKAuthTextInput}
            disabled={isSubmitting}
            name="email"
            placeholder={initialValues.role === 'employer' ?
                'CompanyLayout e-mail' :
                'E-mail'}
            containerClassName='field'
        />
        {initialValues.role === 'employer' &&
        <>
          <Field
              component={FKAuthTextInput}
              disabled={isSubmitting}
              name="phone"
              placeholder='Phone number'
              containerClassName='field'
          />
          <Field
              component={FKAuthTextInput}
              disabled={isSubmitting}
              name="company"
              placeholder='CompanyLayout name'
              containerClassName='field'
          />
          <Field
              component={FKAuthTextInput}
              disabled={isSubmitting}
              name="jobTitle"
              placeholder='Job title'
              containerClassName='field'
          />
        </>
        }
        <Field
            component={FKAuthDropdown}
            disabled={isSubmitting}
            name="location"
            placeholder='Location'
            containerClassName='field'
            options={initialValues.locations}
        />
        <Field
            component={FKAuthTextInput}
            disabled={isSubmitting}
            name="password"
            placeholder='Password'
            containerClassName='field'
            secure
        />
        <Field
            component={FKAuthTextInput}
            disabled={isSubmitting}
            name="passwordConfirmation"
            placeholder='Password confirmation'
            containerClassName='field'
            secure
        />
      </div>
      <div className='buttonsContainer'>
        <Field
            component={FKCheckbox}
            disabled={isSubmitting}
            name='agree'
            label='I agree to the'
        />
        <span className='link'>Terms & Privacy</span>
      </div>
      <div className='buttonsContainer'>
        <button className='accent-btn' type='button'
                disabled={!isValid || isSubmitting}
                onClick={handleSubmit}>
          Get started
        </button>
      </div>
    </div>
);

export default SignUpForm;
