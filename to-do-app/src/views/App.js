import './App.scss';
import Example from './Example/Example';
import ListTodo from './Example/Todos/ListTodo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Example /> */}
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
