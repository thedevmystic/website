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
 * @file layout.tsx
 * @description Root layout component for the Next.js application, defining the overall structure
 *              and metadata.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from 'react';

import type { Metadata } from 'next';

import { Providers } from '@providers';
import { fonts } from '@styles/fonts';
import '@styles/main.css';

export const metadata: Metadata = {
  title: 'TheDevMystic | Under Development',
  description: 'Under Development :)',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={fonts}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
