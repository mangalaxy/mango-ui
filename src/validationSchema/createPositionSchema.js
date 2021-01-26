import * as Yup from 'yup';

export const createPositionSchema = Yup.object().shape({
  title: Yup.string().
      min(3, 'Minimum 3 symbols').
      max(60, 'Maximum 60 symbols').
      required('Required field'),
  jobRole: Yup.string().
      required('Required field'),
  jobRoleTitle: Yup.string().
      required('Required field'),
  city: Yup.string().
      required('Required field'),

});

export const createPositionInitialValues = {
  'title': '',
  'jobRole': '',
  'jobRoleTitle': '',
  'jobType': '',
  'remote': false,
  'country': '',
  'city': '',
  'relocation': false,
  'visaSponsorship': false,
  'experienceRequired': '',
  'description': '',
  'skills': [
    {
      'name': '',
    }],
};