import {filterproducts} from '../../constants';

export const productFilterReducer = (state={}, action) =>{
    switch(action.type){
        case filterproducts:
            return {data:action.payload}
    }

    return state;
}