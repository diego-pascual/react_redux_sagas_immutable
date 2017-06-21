import { fork } from "redux-saga/effects";
import todo from "./todo";

export default function *rootSaga() {
    yield [
        fork(todo),
    ];
}