import { ADD_USER, SHOW_USER } from './types';
import api from '../api/api';
import history from "../history";
export const addUser = values => async dispatch => {
  let response;
  try {
    response = await api.post('/user/add', values);
    dispatch({
      type: ADD_USER,
      payload: response.data
    });
    alert("User Added Successfully!");
    history.push("/view");
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
