
import { User_Request, User_Success, User_Delete } from '../action/types';
const INITIAL_STATE = {
    listUsers: [],
    isLoading: false,
    isError: false,
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case User_Request:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };

        case User_Success:
            console.log("acv", action);
            return {
                ...state, listUsers: action.allData,
                isLoading: false,
                isError: false,
            };

        case User_Delete:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };




        default: return state;
    }

};

export default userReducer;