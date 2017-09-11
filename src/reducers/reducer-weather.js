import * as actions from '../actions/index';

export default function (state=null, action) {
    switch (action.type) {
        case actions.FETCH_WEATHER:
            // console.log(action.payload);
            return action.payload;
    }

    return state;
}
