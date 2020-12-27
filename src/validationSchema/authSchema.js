import * as Yup from 'yup';

export const loginFormSchema = Yup.object().shape(
    {
      password: Yup.string().
          min(8, 'Minimum 2 symbols').
          max(64, 'Maximum 30 symbols').
          required('Required field'),
      email: Yup.string().
          email('Invalid email format').
          required('Required field'),
    },
);

export const signUpTalentSchema = Yup.object().shape(
    {
      fullName: Yup.string().
          min(3, 'Minimum 2 symbols').
          max(60, 'Maximum 30 symbols').
          required('Required field'),
      email: Yup.string().
          email('Invalid email format').
          required('Required field'),
      password: Yup.string().
          min(8, 'Minimum 8 symbols').
          max(64, 'Maximum 64 symbols').
          required('Required field'),
      passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
      location: Yup.object().
          required('Required field'),
      agree: Yup.boolean().oneOf([true],'You must agree ')
    },
);