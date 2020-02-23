/* Simple Function :- it takes in a token (if the token is present in localStorage) and then its going to add it to the headers, if not, its going to delete it from the headers*/
import axios from 'axios'; //<-- we are not making a req. with axios, we are adding a global header

const setAuthToken = token => {
  if (token) {
    console.log(token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
export default setAuthToken;
