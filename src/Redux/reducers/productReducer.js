import {setproducts} from '../../constants';

export const productReducer = (state={}, action) =>{
    switch(action.type){
        case setproducts:
            return {data:action.payload}
    }

    return state;
}