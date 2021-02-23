import '../src/styles/global.css';
import * as nextImage from 'next/image';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

// Substituir tag Image do next por uma tag <img> do HTML
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => {
    return <img {...props} />;
  },
});
