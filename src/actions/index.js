import axios from 'axios';

const GET_RANDOM_FACT = 'GET_RANDOM_FACT';

export const getRandomFact = () => {
  return dispatch => {
    axios.get('https://meowfacts.herokuapp.com/')
    .then(res => {
      
      dispatch({type: GET_RANDOM_FACT, payload: res.data})
    })
    .catch(err => console.log(err))
  }
}