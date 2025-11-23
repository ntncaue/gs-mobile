import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch, Alert } from 'react-native';
import { AppColors, AppFontSizes, AppSpacing, AppBorderRadius } from '../../constants/app-theme';
import { useGoalContext } from '../../contexts/GoalContext';

export default function AddGoalScreen() {
  const [goalName, setGoalName] = useState('');
  const [isProgressive, setIsProgressive] = useState(false);
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const { addGoal } = useGoalContext();

  const handleAddGoal = () => {
    if (goalName.trim() === '') {
      Alert.alert('Erro', 'O nome da meta não pode estar vazio.');
      return;
    }
    if (isProgressive && (quantity.trim() === '' || unit.trim() === '')) {
      Alert.alert('Erro', 'Para metas progressivas, a quantidade e a unidade são obrigatórias.');
      return;
    }

    addGoal({
      name: goalName,
      isProgressive,
      quantity: isProgressive ? parseInt(quantity, 10) : undefined,
      unit: isProgressive ? unit : undefined,
    });

    Alert.alert('Sucesso', `Meta "${goalName}" adicionada.`);
    setGoalName('');
    setIsProgressive(false);
    setQuantity('');
    setUnit('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Nova Meta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da Meta"
        placeholderTextColor={AppColors.gray}
        value={goalName}
        onChangeText={setGoalName}
      />
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Meta Progressiva?</Text>
        <Switch
          onValueChange={setIsProgressive}
          value={isProgressive}
          trackColor={{ false: AppColors.gray, true: AppColors.primaryLight }}
          thumbColor={isProgressive ? AppColors.primary : AppColors.white}
        />
      </View>

      {isProgressive && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Quantidade Total"
            placeholderTextColor={AppColors.gray}
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Unidade de Medida (ex: vídeos, dias, metros)"
            placeholderTextColor={AppColors.gray}
            value={unit}
            onChangeText={setUnit}
          />
        </>
      )}

      <View style={styles.buttonWrapper}>
        <Button title="Adicionar Meta" onPress={handleAddGoal} color={AppColors.primary} />
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
