import * as actions from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case actions.SELECTED_CITY:
            return action.payload || "";
    }

    return state;
}
