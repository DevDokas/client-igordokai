import * as types from '../types';

export function RequestAction() {
  return {
    type: types.BOTAO_REQUEST,
  };
}

export function SuccessAction() {
  return {
    type: types.BOTAO_SUCCESS,
  };
}

export function FailureAction() {
  return {
    type: types.BOTAO_FAILURE,
  };
}
