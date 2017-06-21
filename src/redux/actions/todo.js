export const TODO_ADD_ITEM = 'TODO_ADD_ITEM';
export const TODO_ADD_ITEM_STORE = 'TODO_ADD_ITEM_STORE';
export const TODO_DELETE_ITEM = 'TODO_DELETE_ITEM';
export const TODO_DELETE_ITEM_STORE = 'TODO_DELETE_ITEM_STORE';
export const TODO_SELECT_ITEM = 'TODO_SELECT_ITEM';
export const TODO_GET_ITEMS = 'TODO_GET_ITEMS';
export const TODO_ERROR = 'TODO_ERROR';


export const getItems = (items) => ({
    type: TODO_GET_ITEMS,
    items
});

export const addItem = (item) => ({
    type : TODO_ADD_ITEM, 
    item
});

export const addItemToStore = (item) => ({
    type : TODO_ADD_ITEM_STORE, 
    item
});

export const deleteItem = (id) => ({
    type : TODO_DELETE_ITEM, 
    id
});

export const deleteItemToStore = (id) => ({
    type : TODO_DELETE_ITEM_STORE, 
    id
});

export const selectItem = (item) => ({
    type : TODO_SELECT_ITEM, 
    item
});

export const error = (message) => ({
    type : TODO_ERROR, 
    message
});