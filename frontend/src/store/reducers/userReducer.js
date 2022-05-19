import { ADD_NEW_USER_SUCCESS, GET_ALL_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS} from "../actions/actionsTypes";

const initialState = {
    userLogIn: null,
    allUsers: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                userLogIn: action.payload
            }
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                userLogIn: null,
                allUsers: null
            }
        case ADD_NEW_USER_SUCCESS:
            return [
                ...state,
            ];
        case GET_ALL_USER_SUCCESS:
            return {
                ...state,
                allUsers: action.payload
            }
        default:
            return state
    }
}