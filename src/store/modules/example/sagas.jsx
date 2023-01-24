import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as Action from './actions';
import * as Type from '../types';

const requisition = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

function* exampleRequest() {
  try {
    yield call(requisition);
    yield put(Action.SuccessAction());
    toast.success('Deu certo');
  } catch {
    yield put(Action.FailureAction());
    toast.error('Deu erro');
  }
}

export default all([takeLatest(Type.BOTAO_REQUEST, exampleRequest)]);
