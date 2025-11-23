import { useState, useCallback } from 'react';

export interface Goal {
  id: string;
  name: string;
  isProgressive: boolean;
  isCompleted: boolean;
  progress?: number; // for progressive goals
}

const initialGoals: Goal[] = [
  { id: '1', name: 'Aprender React Native', isProgressive: true, isCompleted: false, progress: 70 },
  { id: '2', name: 'Ler um livro', isProgressive: false, isCompleted: true },
  { id: '3', name: 'Correr 5km', isProgressive: false, isCompleted: true },
  { id: '4', name: 'Criar um site pessoal', isProgressive: true, isCompleted: false, progress: 30 },
];

export function useGoals() {
  const [goals, setGoals] = useState<Goal[]>(initialGoals);

  const addGoal = useCallback((goal: Omit<Goal, 'id' | 'isCompleted'>) => {
    setGoals(prevGoals => [
      ...prevGoals,
      {
        ...goal,
        id: Math.random().toString(),
        isCompleted: false,
      },
    ]);
  }, []);

  const updateGoal = useCallback((id: string, updates: Partial<Goal>) => {
    setGoals(prevGoals =>
      prevGoals.map(goal =>
        goal.id === id ? { ...goal, ...updates } : goal
      )
    );
  }, []);

  const inProgressGoals = goals.filter(goal => !goal.isCompleted);
  const completedGoals = goals.filter(goal => goal.isCompleted);

  return {
    inProgressGoals,
    completedGoals,
    addGoal,
    updateGoal,
  };
}
