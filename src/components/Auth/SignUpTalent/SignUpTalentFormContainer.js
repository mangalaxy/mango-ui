import {Formik} from 'formik';
import React, {useState, useEffect} from 'react';
import SignUpFormView from '../SignUpEmployer/SignUpForm';
import {signUpTalentSchema} from '../../../validationSchema/authSchema';
import commonService from '../../../services/commonService';
import loginService from '../../../services/loginService';
import {destroyModal} from '../../../services/renderModal';
import {Button} from 'primereact/button';

const SignUpTalentFormContainer = () => {
  const [locations, setLocations] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    commonService.getLocations().then(res => {
      setLocations(res.data);
    }).catch(err => {
      console.log('Can not get locations');
    });
  }, []);

  return (<>
        {success ?
            <div><span>
              Please, check your email and confirm registration
            </span>
              <Button label='Close' onClick={destroyModal}/>
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
};

export default SignUpTalentFormContainer;
