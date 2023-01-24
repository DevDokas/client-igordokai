import * as type from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case type.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;
      return newState;
    }

    case type.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    case type.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case type.USER_EDIT_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case type.USER_EDIT_SUCCESS: {
      const newState = { ...state };
      newState.user.nome = action.payload.nome;
      newState.user.sobrenome = action.payload.sobrenome;
      newState.user.email = action.payload.email;
      newState.user.password = action.payload.password;
      newState.isLoading = false;
      return newState;
    }

    case type.USER_EDIT_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    default: {
      return state;
    }
  }
}
