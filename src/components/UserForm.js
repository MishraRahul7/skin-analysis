import React, { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import infoCircleFill from '@iconify/icons-bi/info-circle-fill';
import questionCircleFill from '@iconify/icons-bi/question-circle-fill';

import '../stylesheets/user-form.css';

const UserForm = () => {
  const [age, setAge] = useState('< 20');
  const ages = [
    { name: '< 20', value: '< 20' },
    { name: '21-30', value: '21-30' },
    { name: '31-40', value: '31-40' },
    { name: '41-50', value: '41-50' },
    { name: '50 +', value: '50 +' }
  ];
  const [cheeks, setCheeks] = useState('Oily');
  const [tzone, setTzone] = useState('Dry');
  const skinFeels = [
    { name: 'Dry', value: 'Dry' },
    { name: 'Normal', value: 'Normal' },
    { name: 'Oily', value: 'Oily' }
  ];

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col about-div div-size d-flex flex-column align-items-center justify-content-center'>
          <div className='py-2 '>
            <span className='heading '>What's your Name?</span>
          </div>
          <div className='pt-2 pb-4'>
            <input type='text' className='input-name ' placeholder='Name' />
          </div>
          <div className='py-3'>
            <span className='heading '>What is your Age?</span>
          </div>
          <div className='py-2'>
            <ButtonGroup className='btn-status' toggle>
              {ages.map((val, idx) => (
                <ToggleButton
                  key={idx}
                  type='radio'
                  className='btn age-btn'
                  name='age'
                  style={{
                    borderRadius: '10px'
                  }}
                  value={val.value}
                  checked={age === val.value}
                  onChange={e => setAge(e.currentTarget.value)}
                >
                  {val.name}
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
          <div className='py-2 '>
            <div className='row'>
              <div className='col-sm-3'></div>
              <div className='col-sm-3'>Dry</div>
              <div className='col-sm-3'>Normal</div>
              <div className='col-sm-3'>Oily</div>
            </div>
            <div className='row'>
              <div className='col mt-2' toggle='true'>
                Cheeks
              </div>
              {skinFeels.map((val, key) => {
                return (
                  <input
                    className='mr-4 mt-2 radiobtn'
                    key={key}
                    type='radio'
                    value={val.value}
                    checked={cheeks === val.value}
                    onChange={e => setCheeks(e.target.value)}
                  />
                );
              })}
            </div>
            <div className='row d-flex' >
              <div className='col mt-2 '>
                T zone
                <Icon icon={questionCircleFill} />
                <br />
                <span>
                  (Forhead,
                  <br /> nose & chin)
                </span>
              </div>
              {skinFeels.map((val, key) => {
                return (
                  <input
                    className='mr-4 mt-3 radiobtn'
                    key={key}
                    type='radio'
                    value={val.value}
                    checked={tzone === val.value}
                    onChange={e => setTzone(e.target.value)}
                  />
                );
              })}
            </div>
          </div>
          <div className='py-2 '>
            <Icon icon={infoCircleFill} />
            <u>How to check</u>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col skin-concern-div div-size d-flex flex-column align-items-center justify-content-center'>
          <div className='py-2 '>
            <span className='heading '>What are your top skin concerns?</span>
          </div>
          <div className='py-2 '>
            <span>Select upto 2</span>
          </div>
          <div className='py-2'>
            <div className='row'>
              <input
                className='col btn concern-btn'
                type='button'
                value='Acne'
              />

              <input
                className='col btn concern-btn'
                type='button'
                value='Redness'
              />
              <input
                className='col btn concern-btn'
                type='button'
                value='Pigmentation'
              />
            </div>
            <div className='row'>
              <input
                className='col btn concern-btn'
                type='button'
                value='Wrinkles/ Age Spots'
              />
              <input
                className='col btn concern-btn'
                type='button'
                value='Blackheads/ Whiteheads'
              />
              <input
                className='col btn concern-txt'
                type='text'
                placeholder='Others, Enter here'
                onChange={e => e.target.value}
              />
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
          <div className='py-2'>
            <div className='row'>
              <input
                className='col btn concern-btn'
                type='button'
                value='Vitamin C'
              />
              <input
                className='col btn concern-btn'
                type='button'
                value='Salicylic Acid'
              />
            </div>
            <div className='row'>
              <input
                className='col btn concern-btn'
                type='button'
                value='Retinnol'
              />
              <input
                className='col btn concern-btn'
                type='button'
                value='Not Sure'
              />
            </div>
          </div>
          <div className='py-2'>
            <span>Skip</span>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col problems-div div-size d-flex flex-column align-items-center justify-content-center'>
          <div className='py-2 '>
            <span className='heading '>Select all that apply to you</span>
          </div>
          <div className='row py-2' style={{width:"30%"}}>
            <div className='col d-flex'>
              <input type='checkbox' className='mr-2 ckb' />
              <span>Lack of sleep</span>
            </div>
            <div className='col d-flex'>
              <input type='checkbox' className='mr-2 ckb' />
              <span>Lack of water intake</span>
            </div>
          </div>
          <div className='row py-2' style={{width:"30%"}}>
            <div className='col d-flex'>
              <input type='checkbox' className='mr-2 ckb ' />
              <span>Stressed</span>
            </div>
            <div className='col d-flex'>
              <input type='checkbox' className='mr-2 ckb' />
              <span>Pregnant</span>
            </div>
          </div>
          <div className='row py-2' style={{width:"30%"}}>
            <div className='col d-flex'>
              <input type='checkbox' className='mr-2 ckb' />
              <span>High AC exposure</span>
            </div>
            <div className='col d-flex'>
              <input type='checkbox' className='mr-2 ckb' />
              <span>Senstitive skin</span>
            </div>
          </div>~
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
            <input type='email' className='input-name ' placeholder='Email' />
          </div>
          <div className='pt-2 pb-4'>
            <button type='submit' className='btn routine-btn'>SEE YOUR ROUTINE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
