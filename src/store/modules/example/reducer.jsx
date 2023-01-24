import * as type from '../types';

const initialState = {
  botaoClicado: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case type.BOTAO_SUCCESS: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case type.BOTAO_FAILURE: {
      return state;
    }

    case type.BOTAO_REQUEST: {
      return state;
    }

    default: {
      return state;
    }
  }
}
