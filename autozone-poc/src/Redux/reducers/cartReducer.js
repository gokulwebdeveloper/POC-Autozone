import {addtocart, emptycart, removefromcart} from '../../constants';

export const cartReducer = (state=[], action) =>{
    switch(action.type){
        case addtocart:
            let quantityChanged = false;
            let newState = state.map((item=>{
                if(action.payload.id===item.id){
                    item.quantity = action.payload.quantity
                    quantityChanged = true;
                }
                return item;
            }));
            if(quantityChanged){
                return [...newState]
            }else{
                return [...state, action.payload]
            }
        case removefromcart:
        {
            return [...action.payload];
        }
        case emptycart: return []
    }
    return state;
}