import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import axios from '../../../services/axios';

import history from '../../../services/history';
import * as Action from './actions';
import * as Type from '../types';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens/user', payload);
    yield put(Action.SuccessLogin({ ...response.data }));

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push('/user/');
    document.location.reload(true);
  } catch (e) {
    toast.error('Usuário ou senha inválidos.');

    yield put(Action.FailureLogin());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

function* userEditRequest({ payload }) {
  const { id, nome, sobrenome, email, password } = payload;

  try {
    if (id) {
      yield call(axios.put, '/user/', {
        email,
        nome,
        sobrenome,
        password: password || undefined,
      });
      toast.success('Informações alteradas com sucesso');

      yield put(Action.SuccessEditUser({ nome, sobrenome, email, password }));
    }
  } catch (e) {
    const errors = get(e, 'response.data.error', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.info('Faça o login novamente para prosseguir');
      yield put(Action.FailureLogin());
      history.push('/login');
      document.location.reload(true);
    }

    if (status.length > 0) {
      errors.map((error) => toast.error(error));
    }

    yield put(Action.FailureEditUser());
  }
}

export default all([
  takeLatest(Type.LOGIN_REQUEST, loginRequest),
  takeLatest(Type.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(Type.USER_EDIT_REQUEST, userEditRequest),
]);
