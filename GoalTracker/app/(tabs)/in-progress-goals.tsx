import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AppColors, AppFontSizes, AppSpacing, AppBorderRadius } from '../../constants/app-theme';

const inProgressGoals = [
  { id: '1', name: 'Learn TypeScript', progress: '70%' },
  { id: '2', name: 'Build a personal website', progress: '30%' },
];

export default function InProgressGoalsScreen() {
  const renderItem = ({ item }: { item: { id: string; name: string; progress: string } }) => (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{item.name}</Text>
      <Text style={styles.progressText}>Progress: {item.progress}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>In Progress Goals</Text>
      {inProgressGoals.length > 0 ? (
        <FlatList
          data={inProgressGoals}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <Text style={styles.noGoalsText}>No goals in progress yet!</Text>
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
    paddingBottom: AppSpacing.large,
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
  progressText: {
    fontSize: AppFontSizes.medium,
    color: AppColors.textLight,
    marginTop: AppSpacing.small / 2,
  },
  noGoalsText: {
    fontSize: AppFontSizes.medium,
    color: AppColors.gray,
  },
});
