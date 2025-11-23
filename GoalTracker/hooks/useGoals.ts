import { useState, useCallback } from 'react';

export interface Goal {
  id: string;
  name: string;
  isProgressive: boolean;
  isCompleted: boolean;
  progress?: number; // for progressive goals, this will be the current progress
  quantity?: number; // for progressive goals, this will be the total quantity
  unit?: string; // for progressive goals, e.g., 'videos', 'dias', 'metros'
}

const initialGoals: Goal[] = [
  { id: '1', name: 'Aprender React Native', isProgressive: true, isCompleted: false, progress: 7, quantity: 10, unit: 'vídeos' },
  { id: '2', name: 'Ler um livro', isProgressive: false, isCompleted: true },
  { id: '3', name: 'Correr 5km', isProgressive: false, isCompleted: true },
  { id: '4', name: 'Criar um site pessoal', isProgressive: true, isCompleted: false, progress: 3, quantity: 10, unit: 'dias' },
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
        progress: goal.isProgressive ? 0 : undefined,
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
    goals, // also return the full list of goals
    inProgressGoals,
    completedGoals,
    addGoal,
    updateGoal,
  };
}
