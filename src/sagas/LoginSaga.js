import { put, call, take, fork, cancel, cancelled } from 'redux-saga/effects';
import { takeEvery, delay, END } from 'redux-saga';
import { LOGIN } from "../constants/ActionTypes"

function * watchLoginRequest() {
    while (true) {
        const { payload } = yield take(LOGIN.DOING);
        yield delay(2000);
        const userName = payload.get('userName');
        const password = payload.get('password');
        if(userName === '123' && password === '456'){
            yield put({type:LOGIN.DONE})
        } else {
            const newPayload = payload.set('error', '用户名密码不正确');
            yield put({type:LOGIN.ERROR, payload: newPayload})
        }
    }
}

export default function * watchLogin(){
    yield fork(watchLoginRequest);
}