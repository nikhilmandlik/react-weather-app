import * as actions from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case actions.FETCH_CITIES:
            return action.payload.data.predictions || [];
    }

    return state;
}
