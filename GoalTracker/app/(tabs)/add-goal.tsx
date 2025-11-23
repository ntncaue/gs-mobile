import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch, Alert } from 'react-native';
import { AppColors, AppFontSizes, AppSpacing, AppBorderRadius } from '../../constants/app-theme';

export default function AddGoalScreen() {
  const [goalName, setGoalName] = useState('');
  const [isProgressive, setIsProgressive] = useState(false);

  const handleAddGoal = () => {
    if (goalName.trim() === '') {
      Alert.alert('Error', 'Goal name cannot be empty.');
      return;
    }
    // Here you would typically save the goal to a database
    console.log('New Goal:', { goalName, isProgressive });
    Alert.alert('Success', `Goal "${goalName}" added as ${isProgressive ? 'progressive' : 'one-time'}.`);
    setGoalName('');
    setIsProgressive(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Goal</Text>
      <TextInput
        style={styles.input}
        placeholder="Goal Name"
        placeholderTextColor={AppColors.gray}
        value={goalName}
        onChangeText={setGoalName}
      />
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Progressive Goal?</Text>
        <Switch
          onValueChange={setIsProgressive}
          value={isProgressive}
          trackColor={{ false: AppColors.gray, true: AppColors.primaryLight }}
          thumbColor={isProgressive ? AppColors.primary : AppColors.white}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Add Goal" onPress={handleAddGoal} color={AppColors.primary} />
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
