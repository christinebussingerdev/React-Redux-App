import actions from '../actions';

const initialState = {
  catFact: ["A cat has more bones than a human; humans have 206, and the cat - 230."]
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_RANDOM_FACT':
      console.log(action.payload)
      return({...state, catFact: action.payload.data[0]})
    default:
      return (state)
  }
}

export default reducer;