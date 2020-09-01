import { ADD_USER, SHOW_USER } from '../actions/types';

const INITIAL_STATE = {
  user: null,
  users: []
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.payload };
    case SHOW_USER:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
