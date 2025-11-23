import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { router } from 'expo-router';
import { auth } from '../../config/firebaseConfig';
import { signOut } from 'firebase/auth';
import { AppColors, AppFontSizes, AppSpacing, AppBorderRadius } from '../../constants/app-theme';

export default function HomeScreen() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace('/login');
    } catch (error: any) {
      console.error("Logout Error:", error.message);
      alert("Error logging out: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to GoalTracker!</Text>
      <Text style={styles.subtitle}>Your progress at a glance.</Text>

      {/* Placeholder for general statistics */}
      <View style={styles.statsContainer}>
        <Text style={styles.statText}>Total Goals: 10</Text>
        <Text style={styles.statText}>Completed: 3</Text>
        <Text style={styles.statText}>In Progress: 7</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <Button title="Take Career Test" onPress={() => router.push('/career-test')} color={AppColors.accent} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Logout" onPress={handleLogout} color={AppColors.error} />
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
  },
  subtitle: {
    fontSize: AppFontSizes.large,
    color: AppColors.textLight,
    marginBottom: AppSpacing.large * 1.5,
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