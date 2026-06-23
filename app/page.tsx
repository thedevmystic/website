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
 * @file page.tsx
 * @description Root page component for the Next.js application, serving as the main entry point
 *              and rendering the primary content.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Page() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh',
        textAlign: 'center',
        padding: '0 1rem',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          background: 'linear-gradient(45deg, #00f382, #ff000d)',
          backgroundClip: 'text',
          fill: 'transparent',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: 'clamp(3rem, 8vw, 5rem)',
          fontWeight: 900,
          marginBottom: '1rem',
          letterSpacing: '-2px',
        }}
      >
        Hello, World!
      </div>

      <p
        style={{
          fontSize: '1.2rem',
          color: '#b19d9d',
          maxWidth: '600px',
          lineHeight: '1.5',
        }}
      >
        Cool!
      </p>

      <button
        style={{
          marginTop: '2rem',
          padding: '0.8rem 2rem',
          borderRadius: '50px',
          border: 'none',
          backgroundColor: '#171717',
          color: 'white',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
        }}
      >
        Explore Blogs
      </button>
    </section>
  );
}
