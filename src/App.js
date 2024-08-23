
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Time from './components/Time/Time';
import TodoModal from './components/TodoModal/TodoModal';
import { useTodos } from './context/todo-context';

function App() {

  const {isTodoModalOpen,todoDispatch} = useTodos()

  const handleModalOpen = () =>{
    todoDispatch({
      type:"OPEN_TODO_MODAL"
    })
  }
  return (
    <>
    <Navbar/>
    {isTodoModalOpen ? <TodoModal/> : <button  className="todo-button"onClick={handleModalOpen}><h1 >Your Todo's</h1></button>}
    <div className="App">
     
     <Time/>
   </div>
    </>

  );
}

export default App;
