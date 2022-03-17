import Input from "../components/input.component";
import TodoItem from "../components/TodoItem.component";
import { useSelector } from 'react-redux'
import { fetchTodoList } from '../features/todos/todoSlice'

function App() {
  const todoList = useSelector(fetchTodoList)

  return (
    <div className="app">
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
  );
}

export default App;
