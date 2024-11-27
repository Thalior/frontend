import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// NB: A unique `key` is important for it to work!
const options = {
  rtl: { key: 'css-ar' },
  ltr: { key: 'css-en' },
};

export function RtlProvider({ children }) {
  const dir = document.documentElement.dir === 'ar' ? 'rtl' : 'ltr';
  const cache = createCache(options[dir]);

  // Optionally, you can add CSS for RTL or LTR directly in your global styles
  if (dir === 'rtl') {
    document.body.style.direction = 'rtl';
  } else {
    document.body.style.direction = 'ltr';
  }

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
