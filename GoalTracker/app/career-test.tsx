import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, ScrollView, Alert } from 'react-native';
import { router } from 'expo-router';
import { AppColors, AppFontSizes, AppSpacing, AppBorderRadius } from '../constants/app-theme';

// This is a placeholder for ChatGPT integration.
// In a real application, you would make an API call to OpenAI's ChatGPT.
const mockChatGPTResponse = (answers: string[]) => {
  const introverted = answers.filter(a => a === 'introverted').length;
  const rational = answers.filter(a => a === 'rational').length;

  if (introverted > 1 && rational > 1) {
    return "Com base em suas respostas, uma carreira como Engenheiro de Software ou Cientista de Dados pode ser uma boa opção para você. Essas funções geralmente envolvem pensamento analítico profundo e trabalho individual focado.";
  } else if (introverted > 1) {
    return "Você parece ser mais introvertido. Considere carreiras como Escritor, Pesquisador ou Bibliotecário, que geralmente permitem trabalho independente e ambientes silenciosos.";
  } else if (rational > 1) {
    return "Suas tendências racionais sugerem carreiras em áreas como Finanças, Engenharia ou Consultoria, onde a resolução lógica de problemas é fundamental.";
  } else {
    return "Você tem um perfil equilibrado! Explore carreiras que oferecem variedade e colaboração, como Gerente de Projetos ou Especialista em Marketing.";
  }
};

export default function CareerTestScreen() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [careerSuggestion, setCareerSuggestion] = useState<string | null>(null);

  const questions = [
    {
      question: "Ao tomar decisões, você se inclina mais a confiar na lógica e na análise objetiva, ou nos valores pessoais e em como isso afeta os outros?",
      options: ["Lógica e análise (racional)", "Valores pessoais e impacto nos outros (empático)"]
    },
    {
      question: "Você prefere trabalhar de forma independente em tarefas ou colaborar em equipe?",
      options: ["Independentemente (introvertido)", "Colaborando com uma equipe (extrovertido)"]
    },
    {
      question: "Em reuniões sociais, você normalmente se sente energizado ao interagir com muitas pessoas ou acha isso cansativo e prefere conversas menores e mais íntimas?",
      options: ["Energizado por muitas pessoas (extrovertido)", "Cansativo, prefiro grupos pequenos (introvertido)"]
    },
    {
      question: "Diante de um problema, você tende a se concentrar nas soluções práticas e imediatas ou em entender as teorias subjacentes e as implicações a longo prazo?",
      options: ["Soluções práticas e imediatas (pragmático)", "Teorias subjacentes e implicações a longo prazo (teórico)"]
    },
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // All questions answered, get career suggestion
      setLoading(true);
      setTimeout(() => { // Simulate API call
        const suggestion = mockChatGPTResponse(newAnswers);
        setCareerSuggestion(suggestion);
        setLoading(false);
      }, 2000);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Teste de Aptidão de Carreira</Text>

      {careerSuggestion ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Sua Sugestão de Carreira:</Text>
          <Text style={styles.suggestionText}>{careerSuggestion}</Text>
          <View style={styles.buttonWrapper}>
            <Button title="Ir para a Home" onPress={() => router.replace('/(tabs)')} color={AppColors.primary} />
          </View>
        </View>
      ) : (
        <View style={styles.questionContainer}>
          <Text style={styles.question}>{currentQuestion.question}</Text>
          {currentQuestion.options.map((option, index) => (
            <View key={index} style={styles.buttonWrapper}>
              <Button title={option} onPress={() => handleAnswer(option.includes('racional') ? 'rational' : option.includes('introvertido') ? 'introverted' : 'other')} color={AppColors.accent} />
            </View>
          ))}
          {loading && <ActivityIndicator size="large" color={AppColors.primary} style={{ marginTop: AppSpacing.large }} />}
        </View>
      )}
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
    marginBottom: AppSpacing.large * 1.5,
    textAlign: 'center',
    color: AppColors.textLight,
  },
  questionContainer: {
    width: '100%',
    alignItems: 'center',
  },
  question: {
    fontSize: AppFontSizes.large,
    marginBottom: AppSpacing.large,
    textAlign: 'center',
    color: AppColors.textLight,
  },
  buttonWrapper: {
    marginVertical: AppSpacing.small,
    width: '80%',
  },
  resultContainer: {
    marginTop: AppSpacing.large * 1.5,
    padding: AppSpacing.large,
    backgroundColor: AppColors.white,
    borderRadius: AppBorderRadius.large,
    alignItems: 'center',
    width: '90%',
    shadowColor: AppColors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resultTitle: {
    fontSize: AppFontSizes.xl,
    fontWeight: 'bold',
    marginBottom: AppSpacing.medium,
    color: AppColors.textLight,
  },
  suggestionText: {
    fontSize: AppFontSizes.medium,
    textAlign: 'center',
    marginBottom: AppSpacing.large,
    color: AppColors.textLight,
  },
});
