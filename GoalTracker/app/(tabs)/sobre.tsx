import { StyleSheet, Button, View } from 'react-native';
import { router } from 'expo-router';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { AppColors, AppSpacing, AppFontSizes } from '@/constants/app-theme';

export default function SobreScreen() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace('/login');
    } catch (error: any) {
      console.error("Erro ao fazer logout:", error.message);
      alert("Erro ao fazer logout: " + error.message);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="info.circle.fill" // Using a generic info icon for "Sobre"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Sobre o App
        </ThemedText>
      </ThemedView>
      <ThemedText style={styles.descriptionText}>
        O GoalTracker é um aplicativo de rastreamento de metas intuitivo e fácil de usar, projetado para ajudá-lo a alcançar seus objetivos. Com ele, você pode:
      </ThemedText>
      <ThemedText style={styles.descriptionText}>
        • Cadastrar e fazer login de forma segura.
      </ThemedText>
      <ThemedText style={styles.descriptionText}>
        • Adicionar metas, sejam elas de conclusão única ou progressivas, com unidades de medida personalizadas.
      </ThemedText>
      <ThemedText style={styles.descriptionText}>
        • Acompanhar o progresso de suas metas em tempo real.
      </ThemedText>
      <ThemedText style={styles.descriptionText}>
        • Marcar metas como concluídas e editá-las conforme necessário.
      </ThemedText>
      <ThemedText style={styles.descriptionText}>
        • Visualizar estatísticas gerais de suas metas na tela inicial.
      </ThemedText>
      <ThemedText style={styles.descriptionText}>
        • Fazer um teste de aptidão de carreira para receber sugestões personalizadas.
      </ThemedText>
      <ThemedText style={styles.descriptionText}>
        Nosso objetivo é simplificar o gerenciamento de metas e motivá-lo em sua jornada de desenvolvimento pessoal e profissional.
      </ThemedText>

      <View style={styles.logoutContainer}>
        <Button title="Logout" onPress={handleLogout} color={AppColors.error} />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: AppSpacing.medium,
  },
  descriptionText: {
    fontSize: AppFontSizes.medium,
    marginBottom: AppSpacing.small,
    lineHeight: AppFontSizes.large,
    color: AppColors.textLight,
  },
  logoutContainer: {
    marginTop: AppSpacing.large * 2,
    paddingHorizontal: AppSpacing.large,
    width: '100%',
  }
});
