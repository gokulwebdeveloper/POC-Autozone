import {addtocart, emptycart, removefromcart} from '../../constants';

export const cartReducer = (state=[], action) =>{
    switch(action.type){
        case addtocart:
            return [...state, action.payload]
        case removefromcart:
        {
            return state;
        }
        case emptycart: return []
    }
    return state;
}