import { productMenuClick } from '../../constants';

export const shopMenuClickReducer = (state = {}, action) => {
   
    switch (action.type) {
        
        case productMenuClick:
            return {
                data: action.payload
            }
    }

    return state;
}