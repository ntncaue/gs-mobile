# GoalTracker App

## Descrição
O GoalTracker é um aplicativo móvel desenvolvido para ajudar os usuários a definir, acompanhar e gerenciar suas metas pessoais e profissionais. Com uma interface intuitiva, o aplicativo permite adicionar novas metas, monitorar o progresso das metas em andamento e visualizar as metas já concluídas, proporcionando uma experiência organizada e motivadora.

## Integrantes
*   **Felipe Gomes Costa Orikasa** - RM557435
*   **Marcelo Siqueira Bonfim** - RM558254
*   **Antonio Cauê Araujo da Silva** - RM558891

## Como Rodar o Projeto

### Pré-requisitos
Certifique-se de ter o Node.js, npm (ou yarn) e o Expo CLI instalados em sua máquina.

*   **Node.js**: [https://nodejs.org/](https://nodejs.org/)
*   **Expo CLI**: Instale globalmente com `npm install -g expo-cli` ou `yarn global add expo-cli`.

### Instalação
1.  Clone este repositório:
    ```bash
    git clone [URL_DO_REPOSITORIO]
    cd GoalTracker
    ```
2.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

### Executando o Aplicativo
Para iniciar o projeto em modo de desenvolvimento:
```bash
npm start
# ou
yarn start
```
Isso abrirá uma nova aba no navegador com o Expo Dev Tools. Você pode escanear o QR code com o aplicativo Expo Go (disponível para Android e iOS) no seu celular, ou escolher rodar em um emulador/simulador.

### Construindo o APK (Android)
Para gerar um arquivo APK para Android, você precisará usar o EAS CLI (Expo Application Services).

1.  **Instale o EAS CLI** (se ainda não o fez):
    ```bash
    npm install -g eas-cli
    ```
2.  **Faça login na sua conta Expo**:
    ```bash
    eas login
    ```
    Isso abrirá uma página no navegador para você autenticar sua conta Expo.

3.  **Configure o projeto para EAS** (se ainda não o fez):
    ```bash
    eas build:configure
    ```
    Siga as instruções, selecionando `Android` quando perguntado sobre as plataformas.

4.  **Inicie a build do APK**:
    ```bash
    eas build -p android --profile preview
    ```
    O processo de build será iniciado nos servidores da Expo. Você receberá um link para acompanhar o progresso e baixar o APK quando estiver pronto.
    Se o build falhar devido a erros de permissão, certifique-se de estar logado com a conta Expo correta que tem acesso ao projeto. Use `eas whoami` para verificar e `eas login` para mudar de conta.

## Estrutura do Projeto
O projeto segue a estrutura padrão de um aplicativo Expo/React Native, com as seguintes pastas principais:
*   `app/`: Contém as telas e a navegação do aplicativo (usando `expo-router`).
*   `components/`: Componentes React reutilizáveis.
*   `constants/`: Constantes e configurações globais (temas, cores, etc.).
*   `contexts/`: Contextos para gerenciamento de estado global.
*   `hooks/`: Hooks personalizados.
*   `config/`: Configurações de serviços (ex: Firebase).

---
Desenvolvido com ❤️ e Expo.