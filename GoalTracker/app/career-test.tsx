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
    return "Based on your responses, a career as a Software Engineer or Data Scientist might suit you well. These roles often involve deep analytical thinking and focused individual work.";
  } else if (introverted > 1) {
    return "You seem to be more introverted. Consider careers like Writer, Researcher, or Librarian, which often allow for independent work and quiet environments.";
  } else if (rational > 1) {
    return "Your rational tendencies suggest careers in fields like Finance, Engineering, or Consulting, where logical problem-solving is key.";
  } else {
    return "You have a balanced profile! Explore careers that offer variety and collaboration, such as Project Manager or Marketing Specialist.";
  }
};

export default function CareerTestScreen() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [careerSuggestion, setCareerSuggestion] = useState<string | null>(null);

  const questions = [
    {
      question: "When making decisions, are you more inclined to rely on logic and objective analysis, or on personal values and how it impacts others?",
      options: ["Logic and analysis (rational)", "Personal values and impact on others (empathetic)"]
    },
    {
      question: "Do you prefer working independently on tasks, or collaborating closely with a team?",
      options: ["Independently (introverted)", "Collaborating with a team (extroverted)"]
    },
    {
      question: "In social gatherings, do you typically feel energized by interacting with many people, or do you find it draining and prefer smaller, more intimate conversations?",
      options: ["Energized by many people (extroverted)", "Draining, prefer small groups (introverted)"]
    },
    {
      question: "When faced with a problem, do you tend to focus on the practical, immediate solutions, or on understanding the underlying theories and long-term implications?",
      options: ["Practical, immediate solutions (pragmatic)", "Underlying theories and long-term implications (theoretical)"]
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
      <Text style={styles.title}>Career Aptitude Test</Text>

      {careerSuggestion ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Your Career Suggestion:</Text>
          <Text style={styles.suggestionText}>{careerSuggestion}</Text>
          <View style={styles.buttonWrapper}>
            <Button title="Go to Home" onPress={() => router.replace('/(tabs)')} color={AppColors.primary} />
          </View>
        </View>
      ) : (
        <View style={styles.questionContainer}>
          <Text style={styles.question}>{currentQuestion.question}</Text>
          {currentQuestion.options.map((option, index) => (
            <View key={index} style={styles.buttonWrapper}>
              <Button title={option} onPress={() => handleAnswer(option.includes('rational') ? 'rational' : option.includes('introverted') ? 'introverted' : 'other')} color={AppColors.accent} />
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
