import React from 'react';
import { Todo, FilterType } from '../types';
import { TodoItem } from './TodoItem';
import './TodoList.css';

interface TodoListProps {
  todos: Todo[];
  filter: FilterType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ 
  todos, 
  filter, 
  onToggle, 
  onDelete, 
  onEdit 
}) => {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  if (filteredTodos.length === 0) {
    return (
      <div className="empty-state">
        {filter === 'all' && todos.length === 0 && (
          <p>No todos yet. Add one above! 📝</p>
        )}
        {filter === 'active' && (
          <p>No active todos. Great job! 🎉</p>
        )}
        {filter === 'completed' && (
          <p>No completed todos yet. Keep going! 💪</p>
        )}
      </div>
    );
  }

  return (
    <div className="todo-list">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};