const withSass = require('@zeit/next-sass')
const { TEST } = require('config');

module.exports = withSass({
  publicRuntimeConfig: {
    TEST,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
})
