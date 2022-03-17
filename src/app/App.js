import Input from "../components/input.component";
import TodoItem from "../components/TodoItem.component";

const todoList = [
  {
    item: 'todo',
    done: false,
    id: 1234124
  },
  {
    item: 'todo2',
    done: true,
    id: 123414
  }
]

function App() {
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
