import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_ERROR } from './types';

// Get the current users profile
export const getCurrentProfile = () => async dispatch => {
  // GET api/profile/me route
  try {
    const res = await axios.get('/api/profile/me');
    dispatch({
      type: GET_PROFILE,
      payload: res.data //<--route returns all the profile data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
