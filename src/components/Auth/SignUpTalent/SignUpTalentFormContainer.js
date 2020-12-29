import {Formik} from 'formik';
import React, {useState, useEffect} from 'react';
import SignUpFormView from '../SignUpEmployer/SignUpForm';
import {signUpTalentSchema} from '../../../validationSchema/authSchema';
import commonService from '../../../services/commonService';
import loginService from '../../../services/loginService';
import {destroyModal} from '../../../services/renderModal';
import {Button} from 'primereact/button';

const SignUpTalentFormContainer = ({success, setSuccess}) => {
  const [locations, setLocations] = useState([]);

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
            <Formik
                onSubmit={(
                    values,
                    {resetForm, setStatus, setSubmitting}) => {
                  setStatus({});
                  try {
                    let data = {};
                    data.fullName = values.fullName;
                    data.email = values.email;
                    data.password = values.password;
                    data.location = locations.find(
                        el => el.id === values.location.code);
                    console.log(data);
                    loginService.signUpTalent(data).then(res => {
                      if (res.data?.success) {
                        setSubmitting(false);
                        resetForm();
                        setSuccess(true);
                      }
                    }).catch(err => {
                      setSubmitting(false);
                    });
                    setSubmitting(false);
                    resetForm();
                  } catch (err) {
                    setStatus({failed: true});
                    setSubmitting(false);
                  }
                }
                }
                component={SignUpFormView}
                validationSchema={signUpTalentSchema}
                enableReinitialize={true}
                initialValues={{
                  locations: locations.map(
                      el => ({name: `${el.city}/${el.country}`, code: el.id})),
                }}
            />}
      </>
  );
}
;

export default SignUpTalentFormContainer;
