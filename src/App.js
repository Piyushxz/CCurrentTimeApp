
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
    {isTodoModalOpen ? <TodoModal/> : <h1 onClick={handleModalOpen} className='todo-button'>Todos</h1>}
    <div className="App">
     
     <Time/>
   </div>
    </>

  );
}

export default App;
