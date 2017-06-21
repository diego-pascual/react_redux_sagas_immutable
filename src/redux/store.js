import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from "redux-saga";
import reducers from './reducers';
import sagas from "./sagas";

function initStore(){
    const sagaMiddleware = createSagaMiddleware();  
    const initialState = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    let store = compose(applyMiddleware(sagaMiddleware))(createStore)(reducers, initialState);
    sagaMiddleware.run(sagas);
    return store;
}

export default initStore();