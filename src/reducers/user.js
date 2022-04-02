// Esse reducer será responsável por tratar as informações da pessoa usuária
const USER_INITIAL_STATE = {
  email: '',
};

const user = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SAVE_USER':
    return { email: action.state };
  default:
    return state;
  }
};

export default user;
