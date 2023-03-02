import InputField from './components/InputField';
import './App.css';
import { useState } from 'react';
import { Todo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const App: React.FC = () => {
  const [completed, setCompleted] = useState<Todo[]>([])
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo('')
    }
  }

  const onDragEnd = (result:DropResult) => {

  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setCompleted={setCompleted}
        completed={completed}
      />
      </div>
      </DragDropContext>
  );
}

export default App;
