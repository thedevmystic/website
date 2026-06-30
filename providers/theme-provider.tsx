/**
 * Copyright 2026-present Suryansh Singh
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * ------------------------------------------------------------------------------------------------
 *
 * @file theme-provider.tsx
 * @description Provider for wrapping the application with the theme switcher.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { createTokenProvider } from 'next-tokens';

export type Theme =
  | 'light'
  | 'dark'
  | 'high-contrast-light'
  | 'high-contrast-dark'
  | 'sepia'
  | 'system';

const {
  Provider: ThemeProvider,
  useToken: useTheme,
  context: themeContext,
} = createTokenProvider<Theme>({
  storageKey: 'theme',
  attribute: 'data-theme',
  defaultToken: 'system',
  enableSystem: true,
  enableColorScheme: true,
  tokens: ['light', 'dark', 'high-contrast-light', 'high-contrast-dark', 'sepia', 'system'],
  disableTransitionOnChange: false,
  skipScript: true,
});

export { ThemeProvider, useTheme, themeContext };
