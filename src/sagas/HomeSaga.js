import { takeEvery, delay, END } from 'redux-saga';
import { put, call, take, fork, cancel, cancelled } from 'redux-saga/effects';
import {GET_HOME_DATA} from "../constants/ActionTypes"
import Immutable from 'immutable'

function * watchGetBannerData(){
    // while (true){
    //     try {
    //         yield take(GET_HOME_DATA.DOING);
    //         console.log('saga检测到有人要获取banner data');
    //         let res = yield fetch("http://localhost:8081/resources/banner_data.json");
    //         let data =yield res.json();
    //         yield put({type:GET_HOME_DATA.DONE, payload:data?Immutable.fromJS(data):[]})
    //     }catch (e) {
    //         console.log(e)
    //     }
    // }
}


export default function * watchHome(){
    yield fork(watchGetBannerData);
}