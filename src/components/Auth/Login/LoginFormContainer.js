import React from 'react';
import {Formik} from 'formik';
import LoginForm from './LoginForm';
import loginService from '../../../services/loginService';
import {ROLES} from '../../../constants/roles';
import routes from '../../../constants/routes.json';
import {loginFormSchema} from '../../../validationSchema/authSchema';
import {setUserRole} from '../../../actions/userActions';
import {connect} from 'react-redux';

const LoginFormContainer = ({setRole, history}) => (
    <Formik onSubmit={(
        {email, password, rememberMe},
        {setSubmitting, setFieldError}) => {
      try {
        let data = {};
        data.email = email;
        data.password = password;
        loginService.login(email, password).then(res => {
          if (res.data.accessToken) {
            let token = res.data.accessToken;
            loginService.setToken(token);
            sessionStorage.setItem('usr', token);
            if (rememberMe) {
              localStorage.setItem('usr', token);
            } else localStorage.removeItem('usr');
            let role = loginService.getRole(token);
            if (role === ROLES.EMPLOYER) {
              setRole(ROLES.EMPLOYER);
              history.replace(routes.EMPLOYER.HOME);
            } else if (role === ROLES.TALENT) {
              setRole(ROLES.TALENT);
              history.replace(routes.TALENT.HOME);
            }
          } else {
            setSubmitting(false);
            setFieldError('password', 'Incorrect email or password');
          }
        }, err => {
          console.log(err);
          setSubmitting(false);
          setFieldError('password', 'Incorrect email or password');
        });
      } catch (err) {
        setSubmitting(false);
      }
    }
    }
            component={LoginForm}
            validationSchema={loginFormSchema}
            initialValues={{}}
    />
);

const mapDispatchToProps = dispatch => ({
  setRole: role => dispatch(setUserRole(role)),
});

export default connect(null, mapDispatchToProps)(LoginFormContainer);
