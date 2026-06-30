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
 * @file accent-provider.tsx
 * @description Provider for wrapping the application with the accent switcher.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { createTokenProvider } from 'next-tokens';

export type Accent = 'blue' | 'red' | 'green' | 'yellow' | 'pink';

const {
  Provider: AccentProvider,
  useToken: useAccent,
  context: accentContext,
} = createTokenProvider<Accent>({
  storageKey: 'accent',
  attribute: 'data-accent',
  defaultToken: 'blue',
  enableSystem: false,
  enableColorScheme: false,
  tokens: ['blue', 'red', 'green', 'yellow', 'pink'],
  disableTransitionOnChange: false,
  skipScript: true,
});

export { AccentProvider, useAccent, accentContext };
