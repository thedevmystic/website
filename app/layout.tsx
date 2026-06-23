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

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TheDevMystic | Under Development',
  description: 'Under Development :)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav
          style={{
            padding: '1.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 2px 4px rgba(255, 255, 255, 0.1)',
          }}
        >
          <span
            style={{
              fontSize: '1.2rem',
              fontWeight: 800,
              letterSpacing: '-0.5px',
            }}
          >
            TheDevMystic
          </span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a
              href="#"
              style={{
                fontSize: '0.9rem',
                textDecoration: 'none',
                color: 'inherit',
                opacity: 0.6,
              }}
            >
              Home
            </a>
            <a
              href="#"
              style={{
                fontSize: '0.9rem',
                textDecoration: 'none',
                color: 'inherit',
                opacity: 0.6,
              }}
            >
              Blog
            </a>
            <a
              href="#"
              style={{
                fontSize: '0.9rem',
                textDecoration: 'none',
                color: 'inherit',
                opacity: 0.6,
              }}
            >
              About
            </a>
          </div>
        </nav>

        <main style={{ flex: 1 }}>{children}</main>

        <footer
          style={{
            padding: '2rem',
            textAlign: 'center',
            fontSize: '0.8rem',
            opacity: 0.5,
          }}
        >
          &copy; {new Date().getFullYear()} Suryansh Singh (thedevmystic). All
          rights reserved.
        </footer>
      </body>
    </html>
  );
}
