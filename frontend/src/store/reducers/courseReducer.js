import { GET_ALL_COURSE_SUCCESS } from "../actions/actionsTypes";
import { ADD_NEW_COURSE_SUCCESS, REMOVE_COURSE_SUCCESS} from "../actions/actionsTypes";

const initialState = [{}]

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    console.log(action.type, " >> ", state, action.payload);
    switch(action.type){
        case ADD_NEW_COURSE_SUCCESS:
            return [
                ...state,
                action.payload
            ];
        case REMOVE_COURSE_SUCCESS:
            let cursos = state.filter((curso)=>curso.id !== action.payload);
            return [
                ...cursos    
            ]
        case GET_ALL_COURSE_SUCCESS:
            return [
                ...action.payload    
            ]
        default:
            return state
    }
}