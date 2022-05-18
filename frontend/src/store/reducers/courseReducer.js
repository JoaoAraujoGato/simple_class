import { ADD_NEW_COURSE } from "../actions/actionsTypes";

const initialState = [
    {
        name: "Curso de Redux",
        category: "Desenvolvimento Web",
        ownerName: "Joao Araujo",
        createdAt: "01/05/2020",
        price: 125,
        duration: 15
    },
    {
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
        case ADD_NEW_COURSE:
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}