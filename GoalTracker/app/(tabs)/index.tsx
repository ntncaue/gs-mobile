import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { router } from 'expo-router';
import { AppColors, AppFontSizes, AppSpacing, AppBorderRadius } from '../../constants/app-theme';
import { useGoalContext } from '../../contexts/GoalContext';

export default function HomeScreen() {
  const { completedGoals, inProgressGoals } = useGoalContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao GoalTracker!</Text>
      <Text style={styles.subtitle}>Seu progresso em um piscar de olhos.</Text>

      {/* Placeholder for general statistics */}
      <View style={styles.statsContainer}>
        <Text style={styles.statText}>Total de Metas: {completedGoals.length + inProgressGoals.length}</Text>
        <Text style={styles.statText}>Concluídas: {completedGoals.length}</Text>
        <Text style={styles.statText}>Em Progresso: {inProgressGoals.length}</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <Button title="Faça o Teste de Carreira" onPress={() => router.push('/career-test')} color={AppColors.accent} />
      </View>
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
    marginBottom: AppSpacing.small,
    color: AppColors.textLight,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: AppFontSizes.large,
    color: AppColors.textLight,
    marginBottom: AppSpacing.large * 1.5,
    textAlign: 'center',
  },
  statsContainer: {
    backgroundColor: AppColors.white,
    padding: AppSpacing.large,
    borderRadius: AppBorderRadius.large,
    width: '90%',
    alignItems: 'flex-start',
    marginBottom: AppSpacing.large * 1.5,
    shadowColor: AppColors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statText: {
    fontSize: AppFontSizes.medium,
    marginBottom: AppSpacing.small,
    color: AppColors.textLight,
  },
  buttonWrapper: {
    width: '80%',
    marginBottom: AppSpacing.medium,
  },
});