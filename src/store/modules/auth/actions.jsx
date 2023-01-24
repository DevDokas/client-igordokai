import * as types from '../types';

export function RequestLogin(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function SuccessLogin(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}

export function FailureLogin(payload) {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
}

export function RequestEditUser(payload) {
  return {
    type: types.USER_EDIT_REQUEST,
    payload,
  };
}

export function SuccessEditUser(payload) {
  return {
    type: types.USER_EDIT_SUCCESS,
    payload,
  };
}

export function FailureEditUser(payload) {
  return {
    type: types.USER_EDIT_FAILURE,
    payload,
  };
}

export function RequestRegister(payload) {
  return {
    type: types.REGISTER_REQUEST,
    payload,
  };
}

export function SuccessRegister(payload) {
  return {
    type: types.REGISTER_SUCCESS,
    payload,
  };
}

export function FailureRegister(payload) {
  return {
    type: types.REGISTER_FAILURE,
    payload,
  };
}
