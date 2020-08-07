import {searchproducts} from '../../constants';

export const searchReducer = (state = {}, action) => {
    switch(action.type) {
        case searchproducts:
            return{data: action.payload}
    }

    return state;
}