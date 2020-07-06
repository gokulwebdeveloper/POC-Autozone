import {setproductdetail} from '../../constants';

export const productDetailReducer = (state={}, action) =>{
    switch(action.type){
        case setproductdetail:
            return {data:action.payload}
    }

    return state;
}