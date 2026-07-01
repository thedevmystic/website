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
 * @file batch-script.tsx
 * @description Batch script for setting up providers state.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

import { BatchedTokenScript } from 'next-tokens';
import type { TokenScriptConfig } from 'next-tokens';

interface BatchScriptProps {
  nonce: string;
}

const INSTANCES: TokenScriptConfig[] = [
  {
    storageKey: 'theme',
    attribute: 'data-theme',
    defaultToken: 'system',
    enableSystem: true,
    enableColorScheme: true,
    tokens: ['light', 'dark', 'high-contrast-light', 'high-contrast-dark', 'sepia', 'system'],
  },
  {
    storageKey: 'accent',
    attribute: 'data-accent',
    defaultToken: 'blue',
    enableSystem: false,
    enableColorScheme: false,
    tokens: ['blue', 'red', 'green', 'yellow', 'pink'],
  },
  {
    storageKey: 'content-density',
    attribute: 'data-density',
    defaultToken: 'comfortable',
    enableSystem: false,
    enableColorScheme: false,
    tokens: ['compact', 'comfortable', 'spacious'],
  },
  {
    storageKey: 'content-width',
    attribute: 'data-width',
    defaultToken: 'standard',
    enableSystem: false,
    enableColorScheme: false,
    tokens: ['narrow', 'standard', 'wide'],
  },
];

export function BatchScript({ nonce }: BatchScriptProps) {
  return <BatchedTokenScript nonce={nonce} instances={INSTANCES} />;
}
