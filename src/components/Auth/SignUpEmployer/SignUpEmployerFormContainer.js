import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import SignUpFormView from './SignUpForm';
import {Button} from 'primereact/button';
import {destroyModal} from '../../../services/renderModal';
import {employerSignUpSchema} from '../../../validationSchema/authSchema';
import commonService from '../../../services/commonService';
import loginService from '../../../services/loginService';

const SignUpEmployerFormContainer = ({success, setSuccess}) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    commonService.getLocations().then(res => {
      setLocations(res.data);
    }).catch(err => {
      console.log('Can not get locations');
    });
  }, []);

  const handleSubmit = (
      {fullName, email, phone, companyName, jobTitle, location, password},
      {setFieldError, setSubmitting},
  ) => {
    try {
      let employer = {};
      employer.fullName = fullName;
      employer.email = email;
      employer.phone = phone;
      employer.companyName = companyName;
      employer.jobTitle = jobTitle;
      employer.location = locations.find(el => el.id === location.code);
      employer.password = password;
      loginService.signUpEmployer(employer).
          then(res => {
            if (res.data?.success) {
              setSubmitting(false);
              setSuccess(true);
            }
          }).catch(err => {
        setSubmitting(false);
        setFieldError('email', 'Email already registered');
      });
    } catch (err) {
      setSubmitting(false);
      setFieldError('email', 'Email already registered');
    }
  };

  useEffect(() => {
    commonService.getLocations().then(res => {
      setLocations(res.data);
    }).catch(err => {
      console.log('Can not get locations');
    });
  }, []);

  return (<>
        {success ?
            <div>
              <h3 className='successMessage header'>
                You are successfully registered! <br/>
              </h3>
              <h4 className='successMessage'>
                Please, check your email and
                confirm registration</h4>
              <div className="buttonContainer">
                <Button label='Close' onClick={destroyModal}/>
              </div>
            </div> :
            <Formik onSubmit={handleSubmit}
                    component={SignUpFormView}
                    validationSchema={employerSignUpSchema}
                    initialValues={{
                      locations: locations.map(
                          el => ({
                            name: `${el.city}/${el.country}`,
                            code: el.id,
                          })),
                      role: 'employer',
                    }}
                    enableReinitialize
            />}
      </>
  );
};

export default SignUpEmployerFormContainer;
