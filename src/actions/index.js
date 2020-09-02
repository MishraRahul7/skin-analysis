import { ADD_USER, SHOW_USER } from './types';
import api from '../api/api';
export const addUser = values => async dispatch => {
  let response;
  try {
    response = await api.post('/user/add', values);
    dispatch({
      type: ADD_USER,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};
export const showAllUsers = () => async dispatch => {
  const response = await api.get('/user/view');
  dispatch({
    type: SHOW_USER,
    payload: response.data
  });
};
