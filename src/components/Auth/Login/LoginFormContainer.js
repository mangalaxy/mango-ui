import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import LoginForm from './LoginForm';
import loginService from '../../../services/loginService';
import {ROLES} from '../../../constants/roles';
import routes from '../../../constants/routes.json';

const loginFormSchema = Yup.object().shape(
    {
      password: Yup.string().
          min(2, 'Minimum 2 symbols').
          max(30, 'Maximum 30 symbols').
          required('Required field'),
      email: Yup.string().
          email('Invalid email format').
          required('Required field'),
    },
);

const LoginFormContainer = ({history, setRole}) => (
    <Formik onSubmit={(
        {email, password, rememberMe},
        {resetForm, setStatus, setSubmitting}) => {
      setStatus({});
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
            //TODO: set error
          }
        }).catch(e => {
          console.log(e);
        });
        resetForm();
      } catch (err) {
        setStatus({failed: true});
        setSubmitting(false);
      }
    }
    }
            component={LoginForm}
            validationSchema={loginFormSchema}
            initialValues={{}}
    />
);

export default LoginFormContainer;
