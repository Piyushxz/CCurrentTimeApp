import {v4 as uuid} from "uuid"


export const todoReducer = (state ,{type,payload}) =>{

    switch(type){
        case "OPEN_TODO_MODAL":
            return{
                ...state,
                isTodoModalOpen : !state.isTodoModalOpen
            }

        case "ADD_TODO":
            return{
                ...state,
                todos :[...state.todos,{id:uuid(),todo:payload}]
            }
        
        case "DELETE_TODO":
            return{
                ...state,
                todos :state.todos.filter((todo)=>payload!==todo.id)
            }
        default:
            {
                return state;
            }
    }
}