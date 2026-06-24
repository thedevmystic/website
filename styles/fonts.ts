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
 * @file fonts.ts
 * @description Configuration file for font settings.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Here is list of what fonts are used for what purpose in the application.
 *
 * 1. Body Font
 *   - Inter (default sans-serif choice).
 *   - Source Serif 4 (alternative serif choice).
 *   - Comic Relief (alternative sans-serif choice).
 *   - Default sans-serif.
 *   - Default serif.
 *
 * 2. Heading Font
 *   - Source Serif 4 (default serif choice).
 *   - Inter (alternative sans-serif choice).
 *   - Comic Relief (alternative sans-serif choice).
 *   - Default sans-serif.
 *   - Default serif.
 *
 * 3. Monospace Font
 *   - JetBrains Mono (default monospace choice).
 *   - Fira Code (alternative monospace choice).
 *   - Source Code Pro (alternative monospace choice).
 *   - Ubuntu Mono (alternative monospace choice).
 *   - Default monospace.
 *
 * 4. Math Font
 *   - Libertinus Math (default math font choice).
 *   - Noto Sans Math (alternative math font choice).
 *   - Default math font.
 */

import {
  Inter,
  Source_Serif_4,
  Comic_Relief,
  JetBrains_Mono,
  Fira_Code,
  Source_Code_Pro,
  Ubuntu_Mono,
  Libertinus_Math,
  Noto_Sans_Math,
} from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-inter',
  preload: true,
  display: 'swap',
});

export const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-source-serif-4',
  preload: true,
  display: 'swap',
});

export const comicRelief = Comic_Relief({
  subsets: ['latin'],
  weight: ['400', '700'],
  adjustFontFallback: false /* It doesn't have override data */,
  variable: '--font-comic-relief',
  preload: false,
  display: 'swap',
});

export const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-jetbrains-mono',
  preload: true,
  display: 'swap',
});

export const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-fira-code',
  preload: false,
  display: 'swap',
});

export const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-source-code-pro',
  preload: false,
  display: 'swap',
});

export const ubuntuMono = Ubuntu_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ubuntu-mono',
  preload: false,
  display: 'swap',
});

export const libertinusMath = Libertinus_Math({
  /* Libertinus Math does not use subsets. */
  weight: ['400'],
  adjustFontFallback: false /* It doesn't have override data */,
  variable: '--font-libertinus-math',
  preload: false,
  display: 'swap',
});

export const notoMath = Noto_Sans_Math({
  /* Noto Math does not use subsets. */
  weight: ['400'],
  variable: '--font-noto-sans-math',
  preload: false,
  display: 'swap',
});

export const fonts = [
  inter.variable,
  sourceSerif4.variable,
  comicRelief.variable,
  jetBrainsMono.variable,
  firaCode.variable,
  sourceCodePro.variable,
  ubuntuMono.variable,
  libertinusMath.variable,
  notoMath.variable,
].join(' ');
