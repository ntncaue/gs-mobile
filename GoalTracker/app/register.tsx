import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import { AppColors, AppFontSizes, AppSpacing, AppBorderRadius } from '../constants/app-theme';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Registration Successful", "You can now log in.");
      router.replace('/login'); // Navigate to login screen after successful registration
    } catch (error: any) {
      Alert.alert("Registration Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={AppColors.gray}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={AppColors.gray}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={handleRegister} color={AppColors.primary} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Already have an account? Login" onPress={() => router.push('/login')} color={AppColors.accent} />
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
  buttonContainer: {
    width: '100%',
    marginBottom: AppSpacing.small,
  },
});
