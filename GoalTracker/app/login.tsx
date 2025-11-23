import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import { AppColors, AppFontSizes, AppSpacing, AppBorderRadius } from '../constants/app-theme';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/(tabs)'); // Navigate to home screen after successful login
    } catch (error: any) {
      Alert.alert("Erro de Login", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
        placeholder="Senha"
        placeholderTextColor={AppColors.gray}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} color={AppColors.primary} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Não tem uma conta? Cadastre-se" onPress={() => router.push('/register')} color={AppColors.accent} />
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
