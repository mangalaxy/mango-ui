import React from 'react';
import {Formik} from 'formik';
import SignUpFormView from './SignUpForm';
import * as Yup from 'yup';

const employerSignUpSchema = Yup.object().shape({
  fullName: Yup.string()
        .min(3, 'Minimum 3 characters')
        .max(60, 'Maximum 60 characters')
        .required('Required field'),
  email: Yup.string()
        .email('Invalid email format')
        .required('Required field'),
  phone: Yup.string()
        .required('Phone required'),
  company: Yup.string()
        .required('Required field'),
});

const handleSubmit = (onSuccess, onError) => (
      {fullName, email, phone, company, jobTitle, location},
      {resetForm, setStatus, setSubmitting}
) => {
  setStatus({});
  try {
    let employer = {}
    employer.fullName = fullName
    employer.email = email
    employer.phone = phone
    employer.company = company
    employer.jobTitle = jobTitle
    employer.location = location;
    //TODO: do query to API
    const response = new Promise()
    onSuccess(response);
    resetForm();
  } catch (err) {
    setStatus({failed: true});
    setSubmitting(false);
    onError(err);
  }

}

const SignUpEmployerFormContainer = ({onSuccess, onError}) => {
  return (
        <Formik onSubmit={handleSubmit(onSuccess, onError)}
                component={SignUpFormView}
                validationSchema={employerSignUpSchema}
                initialValues={
                  {
                    locations: [
                      {name: 'New York', code: 'NY'},
                      {name: 'Rome', code: 'RM'},
                      {name: 'London', code: 'LDN'},
                      {name: 'Istanbul', code: 'IST'},
                      {name: 'Paris', code: 'PRS'},
                    ],
                    role: 'employer',
                  }
                }
        />
  )
}

export default SignUpEmployerFormContainer;
