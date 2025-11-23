import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AppColors, AppFontSizes, AppSpacing, AppBorderRadius } from '../../constants/app-theme';
import { useGoalContext } from '../../contexts/GoalContext';
import { Goal } from '../../hooks/useGoals';

export default function CompletedGoalsScreen() {
  const { completedGoals } = useGoalContext();

  const renderItem = ({ item }: { item: Goal }) => (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metas Concluídas</Text>
      {completedGoals.length > 0 ? (
        <FlatList
          data={completedGoals}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <Text style={styles.noGoalsText}>Nenhuma meta concluída ainda!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: AppSpacing.large,
    backgroundColor: AppColors.backgroundLight,
  },
  title: {
    fontSize: AppFontSizes.xxl,
    fontWeight: 'bold',
    marginBottom: AppSpacing.large,
    color: AppColors.textLight,
  },
  list: {
    width: '100%',
  },
  listContent: {
    paddingBottom: AppSpacing.large, // Add some padding to the bottom of the list
  },
  goalItem: {
    backgroundColor: AppColors.primaryLight,
    padding: AppSpacing.medium,
    borderRadius: AppBorderRadius.medium,
    marginBottom: AppSpacing.medium,
    width: '100%',
    alignItems: 'center',
    shadowColor: AppColors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  goalText: {
    fontSize: AppFontSizes.large,
    color: AppColors.textLight,
  },
  noGoalsText: {
    fontSize: AppFontSizes.medium,
    color: AppColors.gray,
  },
});
