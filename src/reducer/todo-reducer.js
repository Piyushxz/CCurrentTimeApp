
export const todoReducer = (state ,{type,payload}) =>{
    switch(type){
        case "OPEN_TODO_MODAL":
            return{
                ...state,
                isTodoModalOpen : !state.isTodoModalOpen
            }
    }
}