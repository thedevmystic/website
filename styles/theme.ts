/**
 * Copyright 2026-present Suryansh Singh
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * ------------------------------------------------------------------------------------------------
 *
 * @file theme.ts
 * @description Configuration file for MUI theme settings.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import type { Shadows } from '@mui/material/styles';

const baseTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: '[data-theme="%s"]',
    nativeColor: true,
  },

  // MUI Typography
  typography: {
    fontFamily: 'var(--font-body)',

    // Headings
    h1: {
      fontFamily: 'var(--font-head)',
      fontSize: '2.5rem',
      lineHeight: 1.1,
      letterSpacing: '-0.025em',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'var(--font-head)',
      fontSize: '2rem',
      lineHeight: 1.15,
      letterSpacing: '-0.025em',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'var(--font-head)',
      fontSize: '1.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'var(--font-head)',
      fontSize: '1.5rem',
      lineHeight: 1.25,
      letterSpacing: '0em',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'var(--font-head)',
      fontSize: '1.25rem',
      lineHeight: 1.3,
      letterSpacing: '0em',
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'var(--font-head)',
      fontSize: '1rem',
      lineHeight: 1.35,
      letterSpacing: '0em',
      fontWeight: 500,
    },

    // Subtitles
    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: 1.4,
      fontWeight: 450,
      color: 'var(--color-text-primary)',
    },
    subtitle2: {
      fontSize: '1rem',
      lineHeight: 1.4,
      fontWeight: 500,
      letterSpacing: '0.01em',
      color: 'var(--color-text-secondary)',
    },

    // Body text
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: 400,
      color: 'var(--color-text-primary)',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.42,
      fontWeight: 400,
      color: 'var(--color-text-secondary)',
    },

    // Captions
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.35,
      color: 'var(--color-text-secondary)',
    },

    // Overline
    overline: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--color-accent)',
    },
  },

  // Color Schemes for light and dark palettes.
  colorSchemes: {
    light: {
      palette: {
        primary: { main: 'var(--color-accent)' },
        secondary: { main: 'var(--color-text-secondary)' },
        background: {
          default: 'var(--color-bg-surface)',
          paper: 'var(--color-bg-feature)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          disabled: 'var(--color-text-disabled)',
        },
        divider: 'var(--color-divider)',
        action: {
          hover: 'var(--color-action-hover)',
          selected: 'var(--color-action-selected)',
          disabled: 'var(--color-action-disabled)',
          disabledBackground: 'var(--color-action-disabled-bg)',
        },
      },
    },
    dark: {
      palette: {
        primary: { main: 'var(--color-accent)' },
        secondary: { main: 'var(--color-text-secondary)' },
        background: {
          default: 'var(--color-bg-surface)',
          paper: 'var(--color-bg-feature)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          disabled: 'var(--color-text-disabled)',
        },
        divider: 'var(--color-divider)',
        action: {
          hover: 'var(--color-action-hover)',
          selected: 'var(--color-action-selected)',
          disabled: 'var(--color-action-disabled)',
          disabledBackground: 'var(--color-action-disabled-bg)',
        },
      },
    },
  },
  shadows: [
    'none',
    'var(--shadow-sm)',
    'var(--shadow-md)',
    'var(--shadow-lg)',
    'var(--shadow-xl)',
    ...Array(20).fill('var(--shadow-xl)'),
  ] as Shadows,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontVariantNumeric:
            'oldstyle-nums proportional-nums slashed-zero ordinal stacked-fractions',
          fontVariantCaps: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantPosition: 'normal',
          fontKerning: 'normal',
          fontSynthesis: 'none',

          overflowWrap: 'break-word',
          hyphens: 'auto',

          overscrollBehaviorY: 'none',
          touchAction: 'auto',
          scrollBehavior: 'smooth',
          WebkitTapHighlightColor: 'transparent',

          minHeight: '100dvh',

          scrollbarWidth: 'thin',
          scrollbarColor: 'color-mix(in srgb, var(--color-accent) 50%, transparent) transparent',
          scrollbarGutter: 'stable',
        },

        // Scrollbar Styles for WebKit Browsers
        '::-webkit-scrollbar': {
          width: '0.75rem',
          height: '0.75rem',
        },
        '::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: 'color-mix(in srgb, var(--color-accent) 50%, transparent)',
          borderRadius: '0.375rem',
          border: '0.1875rem solid transparent',
          backgroundClip: 'content-box',
        },

        // Body
        body: {
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          lineHeight: 1.5,
          fontWeight: 400,
          color: 'var(--color-text-primary)',
          backgroundColor: 'var(--color-bg-surface)',
        },

        // Headings
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: 'var(--font-head)',
          fontStyle: 'normal',
          fontVariantNumeric:
            'lining-nums proportional-nums slashed-zero ordinal stacked-fractions',
          color: 'var(--color-text-head)',
        },

        // Links
        a: {
          color: 'var(--color-accent)',
          textDecoration: 'underline',
          textUnderlineOffset: '0.125em',
          textDecorationColor: 'var(--color-accent)',
          textDecorationStyle: 'solid',
          textDecorationThickness: '1px',
          transition: 'text-decoration-thickness 150ms ease-in-out',
          '&:hover': {
            textDecorationThickness: '2px',
          },
        },
        'a[target="_blank"]::after, a[target="_external"]::after': {
          display: 'inline-block',
          content: '"\\2197"',
          fontSize: '0.75em',
          textDecoration: 'none',
          transform: 'translateY(-0.125em)',
          marginLeft: '0.25em',
        },

        // Horizontal Rules
        hr: {
          border: 'none',
          borderTop: '1px solid var(--color-divider)',
          margin: '1.5rem 0',
        },

        // Blockquotes
        blockquote: {
          margin: '1.5rem 0',
          paddingLeft: '1.25rem',
          borderLeft: '4px solid var(--color-accent)',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
          lineHeight: 1.5,
          fontSize: '1rem',

          '& p': {
            margin: 0,
          },

          '& cite': {
            display: 'block',
            marginTop: '0.5rem',
            fontSize: '0.875rem',
            fontStyle: 'normal',
            fontWeight: 500,
            color: 'var(--color-text-primary)',
            '&::before': {
              content: '"\\2014\\00A0"',
            },
          },
        },

        // Focus and Focus Visible Styles
        '*:focus, *:focus-visible': {
          outline: 'none',
          boxShadow: '0 0 0 2px var(--color-bg-surface), 0 0 0 4px var(--color-focus-outline)',
        },
        '@supports selector(:focus-visible)': {
          '*:focus': { boxShadow: 'none' },
        },

        // Accessibility
        '@media (prefers-reduced-motion: reduce)': {
          html: { scrollBehavior: 'auto !important' },
          '*, *::before, *::after': {
            transition: 'none !important',
            animation: 'none !important',
          },
        },
        '@media (forced-colors: active)': {
          '*:focus, *:focus-visible': {
            forcedColorAdjust: 'none',
            outline: '2px solid Highlight !important',
            backgroundColor: 'transparent !important',
            borderColor: 'transparent !important',
          },
          a: { color: 'LinkText' },
        },
        '@media (max-width: 48rem)': {
          html: { touchAction: 'manipulation' },
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme);
