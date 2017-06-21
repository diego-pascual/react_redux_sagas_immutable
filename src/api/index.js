import axios from 'axios';
import {Api} from '../config/properties';

export default {

    addItem : (item) => {
        return axios.post(Api.items,item);
    },
    deleteItem : (id) => {
        return axios.delete([Api.items,id].join('/'));
    },
    getItems : () => {
        return axios.get(Api.items);
    }

}