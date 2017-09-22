import * as actions from '../actions/index';

export default function (state=[], action) {
    switch (action.type) {
        case actions.FETCH_WEATHER:
            return [action.payload, ...state] ;
    }

    return state;
}
