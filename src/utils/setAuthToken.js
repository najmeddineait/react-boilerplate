/*
  path: /utils/setAuthToken.js
  description:  this file have on function that set the token to the header
                of every request and remove it if not valid
*/

//---------- required packages ----------//
import axios from "axios";

//set the default header of axios request with jwtToken
const setAuthToken = (token) => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
