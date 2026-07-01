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
 * @description Setting panel for general category.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

import { Typography, Divider } from '@mui/material';

import AccentToggle from './accent-toggle';
import ContentDensityToggle from './content-density-toggle';
import ContentWidthToggle from './content-width-toggle';
import FontSizeSlider from './font-size-slider';
import FontToggle from './font-toggle';
import ThemeToggle from './theme-toggle';

export default function GeneralSettingsPanel() {
  return (
    <>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
        Appearance
      </Typography>
      <ThemeToggle />
      <Divider />
      <AccentToggle />
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 2, mb: 1 }}>
        Reading
      </Typography>
      <FontToggle />
      <Divider />
      <FontSizeSlider />
      <Divider />
      <ContentDensityToggle />
      <Divider />
      <ContentWidthToggle />
    </>
  );
}
