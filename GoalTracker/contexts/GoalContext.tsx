import React, { createContext, useContext, ReactNode } from 'react';
import { useGoals, Goal } from '../hooks/useGoals';

interface GoalContextType {
  inProgressGoals: Goal[];
  completedGoals: Goal[];
  addGoal: (goal: Omit<Goal, 'id' | 'isCompleted'>) => void;
  updateGoal: (id: string, updates: Partial<Goal>) => void;
}

const GoalContext = createContext<GoalContextType | undefined>(undefined);

export function GoalProvider({ children }: { children: ReactNode }) {
  const goals = useGoals();
  return <GoalContext.Provider value={goals}>{children}</GoalContext.Provider>;
}

export function useGoalContext() {
  const context = useContext(GoalContext);
  if (!context) {
    throw new Error('useGoalContext must be used within a GoalProvider');
  }
  return context;
}
