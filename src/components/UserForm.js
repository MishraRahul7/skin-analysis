import React, { useState } from 'react';
import { ButtonGroup, ToggleButton, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Formik, FieldArray } from 'formik';
import { addUser } from '../actions';
import { Icon } from '@iconify/react';
import infoCircleFill from '@iconify/icons-bi/info-circle-fill';
import questionCircleFill from '@iconify/icons-bi/question-circle-fill';
import {
  ages,
  problem,
  skinConcern,
  skinFeels,
  allergicIng,
  UserSchema,
  ErrorMessage
} from '../containers/FormData';
import '../stylesheets/user-form.css';

const UserForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
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
          onSubmit={async values => {
            try {
              setLoading(true);
              await dispatch(addUser(values));
              setLoading(false);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {({
            handleSubmit,
            handleChange,
            errors,
            touched,
            handleBlur,
            values
          }) => (
            <Form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col about-div div-size d-flex flex-column align-items-center justify-content-center'>
                  <div className='py-2 '>
                    <span className='heading '>What's your Name?</span>
                  </div>
                  <div className='pt-2 pb-4'>
                    <input
                      id='name'
                      type='text'
                      onBlur={handleBlur}
                      className={' input-name '}
                      placeholder='Name'
                      onChange={handleChange}
                    />
                  </div>
                  <ErrorMessage name='name' />
                  <div className='py-3'>
                    <span className='heading '>What is your Age?</span>
                  </div>
                  <div className='py-2'>
                    <ButtonGroup className=' btn-status' toggle>
                      {ages.map((val, key) => (
                        <ToggleButton
                          key={key}
                          type='radio'
                          className={'btn age-btn rounded'}
                          name='age'
                          value={val}
                          onChange={handleChange}
                        >
                          {val}
                        </ToggleButton>
                      ))}
                    </ButtonGroup>
                  </div>
                  <ErrorMessage name='age' />
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
                      {skinFeels.map((skin, key) => {
                        return (
                          <div className='col-sm-3' key={key}>
                            <input
                              className={
                                (touched.age && errors.age ? 'error' : null,
                                'mr-3 mt-3 radiobtn')
                              }
                              type='radio'
                              name='cheeks'
                              value={skin.value}
                              onChange={handleChange}
                            />
                          </div>
                        );
                      })}
                      <ErrorMessage name='cheeks' />
                    </div>

                    <div className='row '>
                      <div className='col-sm-3  pt-4 fontsize2'>
                        T zone
                        <Icon className='pl-1' icon={questionCircleFill} />
                        <br />
                        <span className='subtext'>(Forhead, nose & chin)</span>
                      </div>
                      {skinFeels.map((skin, key) => {
                        return (
                          <div className='col-sm-3' key={key}>
                            <input
                              className='mr-3 mt-3 radiobtn'
                              type='radio'
                              name='t_zone'
                              value={skin.value}
                              onChange={handleChange}
                            />
                          </div>
                        );
                      })}
                      <ErrorMessage name='t_zone' />
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
                    <div className='row '>
                      <FieldArray
                        name='skin_concerns'
                        render={arrayHelpers => (
                          <div className='row'>
                            {skinConcern.map(skin => (
                              <label
                                key={skin.value}
                                className='btn  concern-btn col-sm-'
                              >
                                <input
                                  name='skin_concerns'
                                  type='checkbox'
                                  value={skin}
                                  checked={values.skin_concerns.includes(
                                    skin.value
                                  )}
                                  onChange={e => {
                                    if (e.target.checked) {
                                      arrayHelpers.push(skin.value);
                                    } else {
                                      const idx = values.skin_concerns.indexOf(
                                        skin.value
                                      );
                                      arrayHelpers.remove(idx);
                                    }
                                  }}
                                />
                                <span>{skin.name}</span>
                              </label>
                            ))}
                            <div className='col-sm-3 pl-1 '>
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
                        )}
                      />
                    </div>
                    <ErrorMessage name='skin_concerns' />
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
                              onChange={handleChange}
                            />
                            {val}
                          </label>
                        </div>
                      ))}
                      <div className='col-sm-12 py-3 ml-4'>
                        <ErrorMessage name='allergic_ingredients' /><br/>
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
                  <ErrorMessage name='problems' />
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
                  <ErrorMessage name='email' />
                  <div className='pt-2 pb-4'>
                    <button
                      type='submit'
                      className='btn routine-btn'
                      disabled={loading}
                    >
                      {loading ? (
                        <span>Please Wait...</span>
                      ) : (
                        <span>SEE YOUR ROUTINE</span>
                      )}
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
