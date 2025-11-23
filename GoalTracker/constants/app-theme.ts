import { Platform } from 'react-native';

export const AppColors = {
  primary: '#4CAF50', // Green
  primaryDark: '#388E3C',
  primaryLight: '#81C784',
  accent: '#FFC107', // Amber
  backgroundLight: '#f5f5f5',
  backgroundDark: '#121212',
  textLight: '#212121',
  textDark: '#e0e0e0',
  border: '#bdbdbd',
  error: '#D32F2F',
  white: '#ffffff',
  black: '#000000',
  gray: '#ccc',
  lightGray: '#f0f0f0',
};

export const AppFontSizes = {
  small: 14,
  medium: 16,
  large: 20,
  xl: 24,
  xxl: 28,
};

export const AppSpacing = {
  small: 8,
  medium: 16,
  large: 24,
};

export const AppBorderRadius = {
  small: 4,
  medium: 8,
  large: 12,
};

export const AppFonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

// This can be used to create a global stylesheet if needed
export const globalStyles = {
  container: {
    flex: 1,
    backgroundColor: AppColors.backgroundLight,
    padding: AppSpacing.medium,
  },
  text: {
    color: AppColors.textLight,
    fontSize: AppFontSizes.medium,
  },
  // Add more global styles as needed
};
