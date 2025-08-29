import React from 'react';
import { FilterType } from '../types';
import './TodoFilter.css';

interface TodoFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeTodosCount: number;
  completedTodosCount: number;
  onClearCompleted: () => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({
  filter,
  onFilterChange,
  activeTodosCount,
  completedTodosCount,
  onClearCompleted
}) => {
  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' }
  ];

  return (
    <div className="todo-filter">
      <div className="filter-info">
        <span className="todo-count">
          {activeTodosCount} {activeTodosCount === 1 ? 'item' : 'items'} left
        </span>
      </div>
      
      <div className="filter-buttons">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`filter-btn ${filter === key ? 'active' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>
      
      {completedTodosCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="clear-completed-btn"
        >
          Clear completed
        </button>
      )}
    </div>
  );
};