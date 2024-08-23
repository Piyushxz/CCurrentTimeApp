import "./TodoModal.css"
import { useTodos } from "../../context/todo-context"
import { useState } from "react"
const TodoModal = ( ) =>{
    const {todoDispatch,todos} = useTodos()
    const [todo,setTodo] = useState("")
    console.log(todos);
    const handleTodoClose = () =>{
        todoDispatch({
            type :"OPEN_TODO_MODAL"
        })
    }
    const onInputChange = (e) =>{
        setTodo(e.target.value);
        
    }

    const onAddTodo = () =>{
        todoDispatch({
            type:"ADD_TODO",
            payload:todo
        })
        setTodo("")
    }

    const handleDeleteTodo = (id) =>{
        todoDispatch({
            type:"DELETE_TODO",
            payload:id
        })
       
    }


    return(
        <>
        <div className="modal-container">
            <div className="modal-contents">
                <div className="modal-header">
                    <div>
                        <h1 className="head-1">Todo's</h1>
                     </div>

                    <div>
                        <span onClick={handleTodoClose}className="close material-symbols-outlined">    
                            close
                        </span>
                    </div>


                 </div>
                 <div className="inp-container">
                    <input value={todo}onChange={onInputChange}className="inp" type="text"/>
                    <button onClick={onAddTodo}className="btn">Add</button>
                </div>

                <div className="todo-container">
                    {
                        todos.map(({id,todo}) =>{
                            return(
                                <div className="todo" key={id}>
                                <h4 className="todo-txt"key={id}>{todo}</h4>
                                <span onClick={()=>handleDeleteTodo(id)} className="del material-symbols-outlined">
                                    delete
                                </span>
                                </div>
   
                            )
                        }

                    )
                    }
                </div>
            </div>


        

        </div>
        </>
    )
}

export default TodoModal