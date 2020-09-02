import React, { useState } from 'react';
import { ButtonGroup, ToggleButton, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { addUser } from '../actions';
import { Icon } from '@iconify/react';
import infoCircleFill from '@iconify/icons-bi/info-circle-fill';
import questionCircleFill from '@iconify/icons-bi/question-circle-fill';

import '../stylesheets/user-form.css';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short!')
    .max(30, 'Too Long'),
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
const UserForm = () => {
  const dispatch = useDispatch();
  const [userAge, setUserAge] = useState('');
  const ages = ['< 20', '21-30', '31-40', '41-50', '50 +'];

  const [cheeks, setCheeks] = useState('');
  const [tzone, setTzone] = useState('');
  const skinFeels = [
    { name: 'Dry', value: 'Dry' },
    { name: 'Normal', value: 'Normal' },
    { name: 'Oily', value: 'Oily' }
  ];

  const skinConcern = [
    'Acne',
    'Redness',
    'Pigmentation',
    'Wrinkles/ Age Spots',
    'Blackheads/ Whiteheads'
  ];

  const problem = [
    'Lack of sleep',
    'Lack of water intake',
    'Stressed',
    'Pregnant',
    'High AC exposure',
    'Senstitive skin'
  ];

  const [allergy, setAllergy] = useState('');
  const allergicIng = ['Vitamin C', 'Salicylic Acid', 'Retinnol', 'Not Sure'];

  return (
    <>
      <div className='container-fluid'>
        <Formik
          initialValues={{
            name: '',
            age: '',
            cheeks: '',
            t_zone: '',
            skin_concerns: [],
            allergic_ingredients: '',
            problems: [],
            email: ''
          }}
          validationSchema={UserSchema}
          onSubmit={async (values,e) => {
            e.preventDefault();
            await dispatch(addUser(values));
            console.log(values)
          }}
        >
          {({ values, handleChange }) => (
            <Form>
              {console.log(values)}
              <div className='row'>
                <div className='col about-div div-size d-flex flex-column align-items-center justify-content-center'>
                  <div className='py-2 '>
                    <span className='heading '>What's your Name?</span>
                  </div>
                  <div className='pt-2 pb-4'>
                    <input
                      required
                      id='name'
                      type='text'
                      className=' input-name '
                      placeholder='Name'
                      onChange={handleChange}
                    />
                  </div>
                  <div className='py-3'>
                    <span className='heading '>What is your Age?</span>
                  </div>
                  <div className='py-2'>
                    <ButtonGroup className=' btn-status' toggle>
                      {ages.map((val, idx) => (
                        <ToggleButton
                          key={idx}
                          type='radio'
                          className='btn age-btn'
                          name='age'
                          style={{
                            borderRadius: '10px'
                          }}
                          value={val}
                          checked={userAge === val}
                          onChange={handleChange}
                        >
                          {val}
                        </ToggleButton>
                      ))}
                    </ButtonGroup>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col skin-feel-div div-size d-flex flex-column align-items-center justify-content-center'>
                  <div className='py-2 '>
                    <span className='heading '>
                      How does your skin feel in the morning?
                    </span>
                  </div>
                  <div className='py-3 '>
                    <div className='row fontsize'>
                      <div className='col-sm-3'></div>
                      <div className='col-sm-3'>Dry</div>
                      <div className='col-sm-3'>Normal</div>
                      <div className='col-sm-3'>Oily</div>
                    </div>
                    <div className='row'>
                      <div className='col-sm-3  pt-4 fontsize2' toggle='true'>
                        Cheeks
                      </div>
                      {skinFeels.map((val, key) => {
                        return (
                          <div className='col-sm-3' key={key}>
                            <input
                              className='mr-3 mt-3 radiobtn'
                              type='radio'
                              name='cheeks'
                              value={val.value}
                              checked={cheeks === val.value}
                              onChange={handleChange}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className='row '>
                      <div className='col-sm-3  pt-4 fontsize2'>
                        T zone
                        <Icon className='pl-1' icon={questionCircleFill} />
                        <br />
                        <span className='subtext'>(Forhead, nose & chin)</span>
                      </div>
                      {skinFeels.map((val, key) => {
                        return (
                          <div className='col-sm-3' key={key}>
                            <input
                              className='mr-3 mt-3 radiobtn'
                              type='radio'
                              name='t_zone'
                              value={val.value}
                              checked={tzone === val.value}
                              onChange={handleChange}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className='py-2 '>
                    <Icon className='pr-1' icon={infoCircleFill} />
                    <u>How to check</u>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col skin-concern-div div-size d-flex flex-column align-items-center justify-content-center'>
                  <div className='py-2 '>
                    <span className='heading '>
                      What are your top skin concerns?
                    </span>
                  </div>
                  <div className='py-2 '>
                    <span>Select upto 2</span>
                  </div>
                  <div className='py-2 skin-options'>
                    <div className='row ' data-toggle='buttons'>
                      {skinConcern.map((val, key) => (
                        <div className=' btn-group-toggle col-sm-4 ' key={key}>
                          <label className='btn concern-btn'>
                            <input
                              type='checkbox'
                              name='skin_concerns'
                              value={val}
                              onChange={handleChange}
                            />
                            {val}
                          </label>
                        </div>
                      ))}
                      <div className='col-sm-4'>
                        <input
                          className=' btn concern-txt'
                          type='text'
                          defaultValue=''
                          name='skin_concerns'
                          onChange={handleChange}
                          placeholder='Others, Enter here'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col skin-allergic-div div-size d-flex flex-column align-items-center justify-content-center'>
                  <div className='py-2 '>
                    <span className='heading'>
                      Are you allergic to any of these ingredients?
                    </span>
                  </div>
                  <div className='py-2 skin-allergy'>
                    <div className='row ' data-toggle='buttons'>
                      {allergicIng.map((val, key) => (
                        <div className='col-sm-6 btn-group-toggle' key={key}>
                          <label className='btn concern-btn'>
                            <input
                              type='radio'
                              name='allergic_ingredients'
                              value={val}
                              checked={allergy === val}
                              onChange={handleChange}
                            />
                            {val}
                          </label>
                        </div>
                      ))}
                      <div className='col-sm-12 py-3 ml-4'>
                        <span>Skip</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col problems-div div-size d-flex flex-column align-items-center justify-content-center'>
                  <div className='py-2 '>
                    <span className='heading '>
                      Select all that apply to you
                    </span>
                  </div>
                  <div className='row py-2' style={{ width: '35%' }}>
                    {problem.map((val, key) => (
                      <div className='col-sm-6 py-2 d-flex' key={key}>
                        <input
                          type='checkbox'
                          name='problems'
                          className='mr-2 ckb'
                          value={val}
                          onChange={handleChange}
                        />
                        <span>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col skin-analysis-dev div-size d-flex flex-column align-items-center justify-content-center'>
                  <div className='py-2 '>
                    <span className='heading2'>
                      Where can we email your detailed skin analysis?
                    </span>
                  </div>
                  <div className='py-2 '>
                    <span className='heading2_1'>(No spam, we feel you!)</span>
                  </div>
                  <div className='pt-2 pb-4'>
                    <input
                      type='email'
                      name='email'
                      className='input-name '
                      placeholder='Email'
                      onChange={handleChange}
                    />
                  </div>
                  <div className='pt-2 pb-4'>
                    <button type='submit' className='btn routine-btn'>
                      SEE YOUR ROUTINE
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default UserForm;
