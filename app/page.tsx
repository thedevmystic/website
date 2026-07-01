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

'use client';

import { useState, useEffect } from 'react';

import { Container, Box, Typography, Button, Stack, Divider, Paper } from '@mui/material';

export default function ThemeShowcasePage() {
  const [fontHead, setFontHead] = useState<'serif' | 'sans' | 'comic' | 'def-sans' | 'def-serif'>(
    'serif',
  );
  const [fontBody, setFontBody] = useState<'sans' | 'serif' | 'comic' | 'def-sans' | 'def-serif'>(
    'sans',
  );

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-font-head', fontHead);
    root.setAttribute('data-font-body', fontBody);
  }, [fontHead, fontBody]);

  return (
    <Container className="container" sx={{ py: 6 }}>
      <Box
        sx={{
          p: 3,
          mb: 6,
          borderRadius: 'var(--radius-lg)',
          backgroundColor: 'var(--color-bg-feature)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
          TheDevMystic
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }} color="text.secondary">
          Main Control Panel for adjusting theme and typography settings.
        </Typography>

        <Stack spacing={2.5}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  mb: 1,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Heading Font Family
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                {(['serif', 'sans', 'comic'] as const).map((f) => (
                  <Button
                    key={f}
                    size="small"
                    variant={fontHead === f ? 'contained' : 'outlined'}
                    onClick={() => setFontHead(f)}
                  >
                    {f}
                  </Button>
                ))}
              </Stack>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  mb: 1,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Body Font Family
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                {(['sans', 'serif', 'comic'] as const).map((f) => (
                  <Button
                    key={f}
                    size="small"
                    variant={fontBody === f ? 'contained' : 'outlined'}
                    onClick={() => setFontBody(f)}
                  >
                    {f}
                  </Button>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>

      <Stack spacing={6}>
        <Box>
          <Typography variant="overline" sx={{ fontWeight: 600 }}>
            Lorem Ipsum Dolor Sit Amet
          </Typography>
          <Divider sx={{ my: 1.5 }} />

          <Stack spacing={3}>
            {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const).map((variant, index) => {
              const sizes = [
                '2.5rem, LH: 1.1',
                '2rem, LH: 1.15',
                '1.75rem, LH: 1.2',
                '1.5rem, LH: 1.25',
                '1.25rem, LH: 1.3',
                '1rem, LH: 1.35',
              ];
              return (
                <Box key={variant}>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >{`${variant} (Base: ${sizes[index]})`}</Typography>
                  <Typography variant={variant}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                  </Typography>
                </Box>
              );
            })}
          </Stack>
        </Box>

        <Box>
          <Typography variant="overline" sx={{ fontWeight: 600 }}>
            Lorem Ipsum Consectetur
          </Typography>
          <Divider sx={{ my: 1.5 }} />

          <Stack spacing={4}>
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Proin id rhoncus arcu. Vivamus eleifend ex vitae vulputate tristique.
              </Typography>
            </Box>

            <Box sx={{ maxWidth: '65ch' }}>
              <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed felis interdum,
                accumsan magna vel, gravida eros. Vestibulum tristique nisl vitae{' '}
                <a href="https://material-ui.com" target="_blank" rel="noreferrer">
                  Lorem Ipsum Dolor
                </a>
                .
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nullam ac erat ut erat varius hendrerit. Etiam sit amet interdum arcu. Mauris
                sodales scelerisque elementum. Pellentesque ac diam in ex sodales euismod.
              </Typography>
            </Box>

            <Box>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed felis interdum,
                  accumsan magna vel, gravida eros. Vestibulum tristique nisl vitae varius
                  hendrerit.
                </p>
                <cite>Lorem Ipsum Dolor</cite>
              </blockquote>
            </Box>
          </Stack>
        </Box>

        <Box>
          <Typography variant="overline" sx={{ fontWeight: 600 }}>
            Lorem Ipsum Elevation
          </Typography>
          <Divider sx={{ my: 1.5 }} />

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mt: 2 }}>
            {[1, 2, 3].map((level) => (
              <Paper
                key={level}
                elevation={level}
                sx={{
                  p: 3,
                  flex: 1,
                  backgroundColor: 'var(--color-bg-surface)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: 'var(--color-accent)', mb: 1, fontWeight: 600 }}
                >
                  Elevation Level {level}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {level === 1 && 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                  {level === 2 && 'Cras sed felis interdum, accumsan magna vel, gravida eros.'}
                  {level === 3 &&
                    'Vestibulum tristique nisl vitae varius hendrerit etiam sit amet.'}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
