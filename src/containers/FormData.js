import React from 'react';
import * as Yup from 'yup';
import { Field, getIn } from 'formik';

export const ErrorMessage = ({ name }) => (
  <Field name={name}>
    {({ form }) => {
      const error = getIn(form.errors, name);
      const touch = getIn(form.touched, name);
      return (
        <span className='text-danger'>{touch && error ? error : null}</span>
      );
    }}
  </Field>
);

export const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is Too short!')
    .max(30, 'Name is Too Long!')
    .required('Please enter name'),

  age: Yup.string().required('Please Select Age'),

  cheeks: Yup.string().required('Please select cheeks feel'),

  t_zone: Yup.string().required('Please select T zone feel'),

  skin_concerns: Yup.array()
    .max(2, 'Select upto 2 Only')
    .required('Please select skin concern'),

  allergic_ingredients: Yup.string().required('Required'),

  problems: Yup.array()
    .min(1, 'Minimum 1 value required')
    .required('Please select skin problem'),

  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email')
});

export const ages = ['< 20', '21-30', '31-40', '41-50', '50 +'];
export const skinFeels = [
  { name: 'Dry', value: 'Dry' },
  { name: 'Normal', value: 'Normal' },
  { name: 'Oily', value: 'Oily' }
];
export const skinConcern = [
  { name: 'Acne', value: 'Acne' },
  { name: 'Redness', value: 'Redness' },
  { name: 'Pigmentation', value: 'Pigmentation' },
  { name: 'Wrinkles/ Age Spots', value: 'Wrinkles /Age Spots' },
  { name: 'Blackheads/ Whiteheads', value: 'Blackheads/Whiteheads' }
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
