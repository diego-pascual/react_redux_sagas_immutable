import {
    TODO_ADD_ITEM_STORE, 
    TODO_DELETE_ITEM_STORE,
    TODO_GET_ITEMS, 
    TODO_SELECT_ITEM,
    TODO_ERROR
} from '../actions/todo';
import {Map} from 'immutable';

const initialState = Map({
    lastItem: '',
    items: [],
    selectedItem : null
});

export default (state=initialState, action)=>{
    switch (action.type){
        case TODO_GET_ITEMS:
            return state.update('items', list => action.items);
        case TODO_ADD_ITEM_STORE : 
            return state.update('lastItem', value => action.item.name).update('items',list => [...state.get('items'), action.item]); 
        case TODO_DELETE_ITEM_STORE:
            return state.update('items', list => state.get('items').filter(item => item.id !== action.id));
        case TODO_SELECT_ITEM:
            return state.update('selectedItem', value => action.item);
        case TODO_ERROR :
            return state.update('error', value => action.message);
        default :
            return state;
    }
}