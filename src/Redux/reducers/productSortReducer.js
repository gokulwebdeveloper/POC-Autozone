import {sortproducts} from '../../constants';

export const productSortReducer = (state={}, action) =>{
    switch(action.type){
        case sortproducts:
            return {
                sortType:action.payload.sortType,
                data:action.payload.sortedProductData
            }
    }

    return state;
}