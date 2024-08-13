import "./TodoModal.css"
import { useTodos } from "../../context/todo-context"
const TodoModal = ( ) =>{
    const {todoDispatch} = useTodos()
    const handleTodoClose = () =>{
        todoDispatch({
            type :"OPEN_TODO_MODAL"
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
                    <input className="inp" type="text"/>
                    <button className="btn">Add</button>
                </div>
            </div>


        

        </div>
        </>
    )
}

export default TodoModal