const path = require('path');

module.exports = {
  // Other Next.js configuration options...
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};
