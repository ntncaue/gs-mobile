import { Platform, StyleSheet, Button, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { AppColors, AppSpacing } from '@/constants/app-theme';

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
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Sobre
        </ThemedText>
      </ThemedView>
      <ThemedText>Este aplicativo inclui código de exemplo para ajudar você a começar.</ThemedText>
      <Collapsible title="Roteamento baseado em arquivos">
        <ThemedText>
          Este aplicativo tem duas telas:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> e{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/sobre.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          O arquivo de layout em <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          configura o navegador de abas.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Saiba mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Suporte para Android, iOS e web">
        <ThemedText>
          Você pode abrir este projeto no Android, iOS e na web. Para abrir a versão web, pressione{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> no terminal que está executando este projeto.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Ícones">
        <ThemedText>
          Este aplicativo usa ícones de{' '}
          <ThemedText type="defaultSemiBold">@expo/vector-icons</ThemedText>.
        </ThemedText>
        <Ionicons name="logo-react" size={100} color="black" style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://icons.expo.fyi/">
          <ThemedText type="link">Navegue por todos os ícones</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Componentes de modo claro e escuro">
        <ThemedText>
          Este modelo tem suporte para modo claro e escuro. O{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook permite inspecionar
          qual é o esquema de cores atual do usuário e, assim, você pode ajustar as cores da interface do usuário de acordo.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Saiba mais</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animações">
        <ThemedText>
          Este modelo inclui um exemplo de um componente animado. O{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> componente usa
          a poderosa{' '}
          <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts.mono }}>
            react-native-reanimated
          </ThemedText>{' '}
          biblioteca para criar uma animação de mão acenando.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              O <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              componente fornece um efeito de paralaxe para a imagem do cabeçalho.
            </ThemedText>
          ),
        })}
      </Collapsible>
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
  },
  logoutContainer: {
    marginTop: AppSpacing.large,
    paddingHorizontal: AppSpacing.large,
  }
});
