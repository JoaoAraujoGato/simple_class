import { ADD_NEW_COURSE } from "./actionsTypes";
//Action Creator
export function adicionarNovoCurso(novoCurso){
    return {
        type: ADD_NEW_COURSE,
        payload: novoCurso
    }
}