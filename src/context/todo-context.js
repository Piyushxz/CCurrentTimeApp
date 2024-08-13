import {  createContext,useContext,useReducer } from "react";
import { todoReducer } from "../reducer/todo-reducer";

const initialValue = {
    isTodoModalOpen :false
}

const TodoContext = createContext(initialValue)


const TodoProvider = ({children}) =>{

    const [{isTodoModalOpen},todoDispatch] = useReducer(todoReducer,initialValue)

    return(
        <TodoContext.Provider value={{isTodoModalOpen,todoDispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

const useTodos = ()=> useContext(TodoContext)

export {useTodos,TodoProvider}