// actions/greetingActions.js
const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/api/random_greeting');
    if (!response.ok) {
      throw new Error('Cannot fetch the greeting');
    }
    const data = await response.json();
    dispatch({ type: 'SET_GREETING', payload: data.text });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching the greeting', error);
  }
};

export default fetchGreeting;
