import Input from "../components/input.component";
import TodoItem from "../components/TodoItem.component";

function App() {

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">

          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-1 mb-4">ToDo</h1>
            <Input />
            <TodoItem />
          </div>
        </div>

        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default App;
