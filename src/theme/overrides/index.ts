import { Theme } from '@mui/material/styles';

import { button } from './button';

// ----------------------------------------------------------------------

export function componentsOverrides(theme: Theme) {
  const components = { ...button(theme) };

  return components;
}
