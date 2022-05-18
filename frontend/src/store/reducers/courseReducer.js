import { GET_ALL_COURSE_SUCCESS } from "../actions/actionsTypes";
import { ADD_NEW_COURSE_SUCCESS, REMOVE_COURSE_SUCCESS} from "../actions/actionsTypes";

const initialState = [
    {
        id: 1,
        name: "Curso de Redux",
        category: "Desenvolvimento Web",
        ownerName: "Joao Araujo",
        createdAt: "01/05/2020",
        price: 125,
        duration: 15
    },
    {
        id: 2,
        name: "Curso de Front",
        category: "Desenvolvimento Web",
        ownerName: "Augusto Cesar",
        createdAt: "23/03/2020",
        price: 239,
        duration: 35
    }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    // console.log("Reducer cursos...")
    // console.log(state, " <<>> ", action);
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