import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch, Alert, ScrollView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useGoalContext } from '../../contexts/GoalContext';
import { Goal } from '../../hooks/useGoals';
import { AppColors, AppFontSizes, AppSpacing, AppBorderRadius } from '../../constants/app-theme';

export default function EditGoalScreen() {
  const { id } = useLocalSearchParams();
  const { goals, updateGoal } = useGoalContext();
  const [goal, setGoal] = useState<Goal | null>(null);
  const [name, setName] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');

  useEffect(() => {
    const currentGoal = goals.find(g => g.id === id);
    if (currentGoal) {
      setGoal(currentGoal);
      setName(currentGoal.name);
      setIsCompleted(currentGoal.isCompleted);
      setProgress(currentGoal.progress?.toString() || '0');
      setQuantity(currentGoal.quantity?.toString() || '');
      setUnit(currentGoal.unit || '');
    }
  }, [id, goals]);

  const handleUpdate = () => {
    if (!goal) return;

    const updatedGoal: Partial<Goal> = {
      name,
      isCompleted,
      progress: goal.isProgressive ? parseInt(progress, 10) : undefined,
      quantity: goal.isProgressive ? parseInt(quantity, 10) : undefined,
      unit: goal.isProgressive ? unit : undefined,
    };

    updateGoal(goal.id, updatedGoal);
    Alert.alert('Sucesso', 'Meta atualizada.');
    router.back();
  };

  if (!goal) {
    return (
      <View style={styles.container}>
        <Text>Meta não encontrada.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Editar Meta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da Meta"
        value={name}
        onChangeText={setName}
      />

      {goal.isProgressive && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Progresso Atual"
            value={progress}
            onChangeText={setProgress}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Quantidade Total"
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Unidade de Medida"
            value={unit}
            onChangeText={setUnit}
          />
        </>
      )}

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Meta Concluída?</Text>
        <Switch
          onValueChange={setIsCompleted}
          value={isCompleted}
          trackColor={{ false: AppColors.gray, true: AppColors.primaryLight }}
          thumbColor={isCompleted ? AppColors.primary : AppColors.white}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button title="Salvar Alterações" onPress={handleUpdate} color={AppColors.primary} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  input: {
    width: '100%',
    padding: AppSpacing.medium,
    borderWidth: 1,
    borderColor: AppColors.border,
    borderRadius: AppBorderRadius.medium,
    marginBottom: AppSpacing.medium,
    backgroundColor: AppColors.white,
    color: AppColors.textLight,
    fontSize: AppFontSizes.medium,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: AppSpacing.large,
  },
  switchLabel: {
    marginRight: AppSpacing.medium,
    fontSize: AppFontSizes.large,
    color: AppColors.textLight,
  },
  buttonWrapper: {
    width: '100%',
    marginTop: AppSpacing.medium,
  },
});
