import * as Yup from 'yup';

export const createPositionSchema = Yup.object().shape({
  title: Yup.string().
      min(3, 'Minimum 3 symbols').
      max(60, 'Maximum 60 symbols').
      required('Required field'),
  jobRole: Yup.string().
      required('Required field'),
  description: Yup.string().
      required('Required field'),
  city: Yup.string().
      required('Required field'),

});

export const createPositionInitialValues = {
  'title': 'Middle frontend developer',
  'jobRole': '002',
  'jobSpecialities': ['002', '003'],
  'industry': '2',
  'jobType': 'Remote',
  'remote': true,
  'country': 'USA',
  'city': 5,
  'relocation': false,
  'visaSponsorship': false,
  'experienceRequired': '2',
  'skills': ['002', '003'],
  'additionalSkills': ['AWS', 'Mobile development'],
  'languages': [
    {language: 'English', level: 'fluent'},
    {language: 'French', level: 'elementary'},
  ],
  'description': 'Компания MakeUp сейчас расширяет отдел IT разработки в городе Киев. В поисках специалиста опытом на React для работы над новым проектом полностью написанным на React.\n' +
      '\n' +
      'MAKEUP - beauty retail уже завоевал сердца клиентов 14 европейских стран, включая Италию, Германию, Австрию, Украину и 7,5 миллиона ежемесячных пользователей.\n' +
      'Детальнее можно ознакомиться на сайте: https://makeup.com.ua/\n' +
      'О текущей команде: 8 разработчиков, из них 1 front-end разработчик. Работа напрямую с СТО. На период карантина удалённо.\n' +
      '\n' +
      'Требования: опыт работы с React\n' +
      'Будет плюсом: опыт покрытия проекта юнит-тестами, знания стандартов ES6/ES7.',
};