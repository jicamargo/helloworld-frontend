// reducers/greetingReducer.js
const initialState = {
  msg: 'loading your greeting',
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GREETING':
      return {
        ...state,
        msg: action.payload, // Updates the greeting in state
      };
    default:
      return state;
  }
};

export default greetingReducer;
