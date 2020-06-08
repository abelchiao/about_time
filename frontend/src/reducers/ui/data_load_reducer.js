import { CONFIRM_DATA, RESET_DATA } from "../../actions/data_load_actions";

export default function dataLoadReducer(state = null, action) {
    switch (action.type) {
        case CONFIRM_DATA:
            return true;
        case RESET_DATA:
            return false;
        default:
            return state;
    };
};
