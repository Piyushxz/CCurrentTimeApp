import {  createContext,useContext,useReducer } from "react";
import { todoReducer } from "../reducer/todo-reducer";

const initialValue = {
    isTodoModalOpen :false,
    todos:[]
}

const TodoContext = createContext(initialValue)


const TodoProvider = ({children}) =>{

    const [{isTodoModalOpen,todos},todoDispatch] = useReducer(todoReducer,initialValue)

    return(
        <TodoContext.Provider value={{isTodoModalOpen,todos,todoDispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

const useTodos = ()=> useContext(TodoContext)

export {useTodos,TodoProvider}