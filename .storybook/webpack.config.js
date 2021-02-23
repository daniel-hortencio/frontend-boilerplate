const path = require('path');

module.exports = ({ config }) => {
  const nextConfig = require('../next.config.js');

  // Add absolute path.resolve so storybook can handle absolute import (eg. @src/resources/...)
  config.resolve.alias = {
    ...(config.resolve.modules || []),
    components: path.resolve(__dirname, '../src/components'),
    pages: path.resolve(__dirname, '../src/pages'),
    templates: path.resolve(__dirname, '../src/templates'),
  };
  return { ...nextConfig.webpack, ...config };
};
