import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import '../src/app/globals.css';

initialize({ onUnhandledRequest: 'warn' });

const preview: Preview = {
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        small: { name: 'Small', styles: { width: '640px', height: '800px' } },
        large: { name: 'Large', styles: { width: '1024px', height: '1000px' } },
      },
    },
    chromatic: {
      modes: {
        mobile: { viewport: 'small' },
        desktop: { viewport: 'large' },
      },
    },
  },
};

export default preview;
