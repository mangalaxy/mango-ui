import * as Yup from 'yup';

export const loginFormSchema = Yup.object().shape(
    {
      password: Yup.string().
          min(8, 'Minimum 8 symbols').
          max(64, 'Maximum 64 symbols').
          required('Required field'),
      email: Yup.string().
          email('Invalid email format').
          required('Required field'),
    },
);

export const signUpTalentSchema = Yup.object().shape({
  fullName: Yup.string().
      min(3, 'Minimum 3 symbols').
      max(60, 'Maximum 60 symbols').
      required('Required field'),
  email: Yup.string().
      email('Invalid email format').
      required('Required field'),
  password: Yup.string().
      min(8, 'Minimum 8 symbols').
      max(64, 'Maximum 64 symbols').
      required('Required field'),
  passwordConfirmation: Yup.string().
      oneOf([Yup.ref('password'), null], 'Passwords must match'),
  location: Yup.object().
      required('Required field'),
  agree: Yup.boolean().oneOf([true], 'You must agree '),
});

export const employerSignUpSchema = Yup.object().shape({
  fullName: Yup.string().
      min(3, 'Minimum 3 symbols').
      max(60, 'Maximum 60 symbols').
      required('Required field'),
  email: Yup.string().
      email('Invalid email format').
      required('Required field'),
  phone: Yup.string().
      max(18, 'Maximum 18 symbols').
      notRequired(),
  companyName:Yup.string().
      min(3, 'Minimum 3 symbols').
      max(45, 'Maximum 45 symbols').
      required('Required field'),
  jobTitle:Yup.string().
      max(45, 'Maximum 45 symbols').
      notRequired(),
  password: Yup.string().
      min(8, 'Minimum 8 symbols').
      max(64, 'Maximum 64 symbols').
      required('Required field'),
  passwordConfirmation: Yup.string().
      oneOf([Yup.ref('password'), null], 'Passwords must match'),
  location: Yup.object().
      required('Required field'),
  agree: Yup.boolean().oneOf([true], 'You must agree '),
});