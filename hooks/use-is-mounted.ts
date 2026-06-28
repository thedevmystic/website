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
 * @file use-is-mounted.ts
 * @description Hook to determine if a component is mounted.
 * @author thedevmystic (Surya)
 * @copyright 2026-present Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2026-present Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

import { useSyncExternalStore } from 'react';

const emptyStore = () => () => {};

/**
 * Hook to determine if a component is mounted.
 * @returns {boolean} True if the component is mounted, false otherwise.
 */
export default function useIsMounted() {
  const isMounted = useSyncExternalStore(
    emptyStore,
    () => true,
    () => false,
  );
  return isMounted;
}
