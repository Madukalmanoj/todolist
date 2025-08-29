import { useState } from 'react';
import { FilterType } from './types';
import { useTodos } from './hooks/useTodos';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import './App.css';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted } = useTodos();
  const [filter, setFilter] = useState<FilterType>('all');

  const activeTodosCount = todos.filter(todo => !todo.completed).length;
  const completedTodosCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1 className="app-title">Todo List</h1>
          <p className="app-subtitle">Stay organized and get things done! ✨</p>
        </header>
        
        <main className="app-main">
          <AddTodo onAdd={addTodo} />
          
          {todos.length > 0 && (
            <>
              <TodoList
                todos={todos}
                filter={filter}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
              
              <TodoFilter
                filter={filter}
                onFilterChange={setFilter}
                activeTodosCount={activeTodosCount}
                completedTodosCount={completedTodosCount}
                onClearCompleted={clearCompleted}
              />
            </>
          )}
        </main>
        
        <footer className="app-footer">
          <p>Double-click to edit a todo • Made with ❤️ and React</p>
        </footer>
      </div>
    </div>
  );
}

export default App
