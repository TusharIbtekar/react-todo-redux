import Input from "../components/input.component";
import TodoItem from "../components/TodoItem.component";
import { useSelector } from 'react-redux'
import { fetchTodoList } from '../features/todos/todoSlice'
import TodoItemDone from "../components/TodoItemDone.component";

function App() {
  const todoList = useSelector(fetchTodoList)

  return (
    <div className="container mt-4">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-1 my-4">ToDo</h1>
        <Input />
        {
          todoList.map(item => (
            <TodoItem
              name={item.item}
              done={item.done}
              id={item.id}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
