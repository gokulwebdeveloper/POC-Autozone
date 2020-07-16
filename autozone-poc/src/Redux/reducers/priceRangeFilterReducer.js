import { filterByRange } from '../../constants';
import { act } from 'react-test-renderer';

export const priceRangeFilterReducer = (state = {}, action) => {
    switch (action.type) {
        case filterByRange:
            return {
                data: action.payload.data,
                min : action.payload.min,
                max : action.payload.max
            }
    }

    return state;
}