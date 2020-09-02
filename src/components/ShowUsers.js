import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAllUsers } from '../actions';
import '../stylesheets/show-users.css';

const ShowUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.userData.users);

  useEffect(() => {
    dispatch(showAllUsers());
  }, [dispatch]);
  if(!data){
    return null;
  }
  return (
    <div className='container-fluid  main-div px-5'>
      <div className='py-5 d-flex flex-column align-items-center '>
        <span className='heading'>All users detail</span>
      </div>
      <div className='row font-weight-bold'>
        <div className='col'>SR NO</div>
        <div className='col'>Name</div>
        <div className='col'>Age</div>
        <div className='col'>Email</div>
        <div className='col'>Skin Feel</div>
        <div className='col'>Skin Concerns</div>
        <div className='col'>Allergic Ingredient</div>
        <div className='col'>Problems</div>
      </div>
      <hr></hr>

      {data.map((val, key) => (
        <div className='row py-2 fontsize' key={key}>
          <div className='col'>{key + 1}</div>
          <div className='col'>{val.name}</div>
          <div className='col'>{val.age}</div>
          <div className='col '>{val.email}</div>
          <div className='col'>
            Cheeks: {val.cheeks}
            <br />T zone: {val.t_zone}
          </div>
          <div className='col'>
            {val.skin_concerns[0]}
            <br />
            {val.skin_concerns[1]}
          </div>
          <div className='col'>{val.allergic_ingredients}</div>
          <div className='col'>
            {val.problems.map((pval, k) => (
              <span key={k}>
                {pval}
                <br />
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowUsers;
