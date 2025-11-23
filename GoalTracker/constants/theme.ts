/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { AppColors, AppFonts } from './app-theme';

const tintColorLight = AppColors.primary;
const tintColorDark = AppColors.white;

export const Colors = {
  light: {
    text: AppColors.textLight,
    background: AppColors.backgroundLight,
    tint: tintColorLight,
    icon: AppColors.gray,
    tabIconDefault: AppColors.gray,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: AppColors.textDark,
    background: AppColors.backgroundDark,
    tint: tintColorDark,
    icon: AppColors.gray,
    tabIconDefault: AppColors.gray,
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = AppFonts;
