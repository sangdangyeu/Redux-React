import {
    INCREMENT, DECREMENT,
    User_Request, User_Success, User_Delete,
    Create_User_Request, Create_User_Success, Create_User_Delete,
    Delete_User_Success,
} from "./types";
import axios from "axios";
export const increaseCounter = () => {
    return {
        type: INCREMENT,
    };
};

export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};

export const fetchAllUser = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUserRequest());
        try {
            const res = await axios.get('http://localhost:8080/users/all');
            const data = res && res.data ? res.data : [];
            dispatch(fetchUserSuccess(data));
        } catch (error) {
            dispatch(fetchUserDelete());
        }

    };
};

export const fetchUserRequest = () => {
    return {
        type: User_Request,
    };
};

export const fetchUserSuccess = (data) => {
    return {
        type: User_Success,
        allData: data
    };
};

export const fetchUserDelete = () => {
    return {
        type: User_Delete,
    };
};



export const createUserRequest = () => {
    return {
        type: Create_User_Request,
    };
};

export const createUserSuccess = () => {
    return {
        type: Create_User_Success,
    };
};

export const createUserDelete = () => {
    return {
        type: Create_User_Delete,
    };
};

export const createNewUser = (email, password, username) => {
    return async (dispatch, getState) => {
        dispatch(createUserRequest());
        try {
            let res = await axios.post("http://localhost:8080/users/create", { email, password, username })
            if (res && res.data.errCode === 0) {
                dispatch(createUserSuccess());
                dispatch(fetchAllUser());
            }
        } catch (error) {
            console.log(error);
            dispatch(createUserDelete());
        }
    }
}



export const deleteUserSuccess = () => {
    return {
        type: Delete_User_Success,
    };
};



export const deleteUserRedux = (id) => {
    return async (dispatch, getState) => {
        try {
            let res = await axios.post(`http://localhost:8080/users/delete/${id}`);
            if (res && res.data.errCode === 0) {
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUser());
            }

        } catch (error) {
            console.log(error);

        }
    }
}




