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
 * @file index.tsx
 * @description Master navigation bar component.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { useState, useEffect } from 'react';
import { IconButton, Dialog, Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsPanel from '@components/settings-panel';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSettings = () => setIsOpen((prev) => !prev);
  const closeSettings = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === ',') {
        event.preventDefault();
        toggleSettings();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', p: 1 }}>
        <IconButton
          onClick={toggleSettings}
          aria-label="open settings"
          title="Settings (Ctrl + ,)"
          edge="start"
        >
          <SettingsIcon color="secondary" />
        </IconButton>
      </Box>

      <Dialog
        open={isOpen}
        onClose={closeSettings}
        fullWidth
        maxWidth="md"
        slotProps={{
          paper: {
            sx: {
              height: { xs: '100%', sm: 600 },
              maxHeight: { xs: '100%', sm: '85vh' },
              borderRadius: { xs: 0, sm: 3 },
              m: { xs: 0, sm: 'auto' },
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            },
          },
        }}
      >
        <SettingsPanel onClose={closeSettings} />
      </Dialog>
    </>
  );
}
