import { takeEvery, call, put } from "redux-saga/effects";
import {
    TODO_ADD_ITEM, 
    TODO_DELETE_ITEM,
    addItemToStore, 
    deleteItemToStore, 
    getItems, 
    error
} from '../actions/todo';
import Api from '../../api';

function *addItem(action){
    try{
        const item = yield call(Api.addItem, {name: action.item});
        yield put(addItemToStore(item.data));
    }
    catch(e){
        yield put(error(e.message));
    }
}

function *deleteItem(action){
    try{
        const item = yield call(Api.deleteItem, action.id);
        yield put(deleteItemToStore(item.data.id));
    }
    catch(e){
        yield put(error(e.message));
    }
}

function *loadItems(){
    try{
        const items = yield call(Api.getItems);
        yield put(getItems(items.data));
    }
    catch(e){
        yield put(error(e.message));
    }
}

export default function *todo() {
    yield takeEvery(TODO_ADD_ITEM, addItem);
    yield takeEvery(TODO_DELETE_ITEM, deleteItem);
    yield loadItems();
}