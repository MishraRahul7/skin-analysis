import * as Yup from 'yup';
export const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is Too short!')
    .max(30, 'Name is Too Long!'),
  age: Yup.string().required('Please Select Age'),
  cheeks: Yup.string().required('Required'),
  t_zone: Yup.string().required('Required'),
  skin_concerns: Yup.string().required('Required'),
  allergic_ingredients: Yup.string().required('Required'),
  problems: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

export const ages = ['< 20', '21-30', '31-40', '41-50', '50 +'];
export const skinFeels = [
  { name: 'Dry', value: 'Dry' },
  { name: 'Normal', value: 'Normal' },
  { name: 'Oily', value: 'Oily' }
];
export const skinConcern = [
  'Acne',
  'Redness',
  'Pigmentation',
  'Wrinkles/ Age Spots',
  'Blackheads/ Whiteheads'
];

export const problem = [
  'Lack of sleep',
  'Lack of water intake',
  'Stressed',
  'Pregnant',
  'High AC exposure',
  'Senstitive skin'
];
export const allergicIng = [
  'Vitamin C',
  'Salicylic Acid',
  'Retinnol',
  'Not Sure'
];
