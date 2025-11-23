import { Stack } from 'expo-router';

export default function EditGoalLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ title: 'Editar Meta' }} />
    </Stack>
  );
}
