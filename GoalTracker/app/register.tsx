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
      Alert.alert("Cadastro Realizado com Sucesso", "Você já pode fazer o login.");
      router.replace('/login'); // Navigate to login screen after successful registration
    } catch (error: any) {
      Alert.alert("Erro no Cadastro", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
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
        <Button title="Cadastrar" onPress={handleRegister} color={AppColors.primary} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Já tem uma conta? Faça o Login" onPress={() => router.push('/login')} color={AppColors.accent} />
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
