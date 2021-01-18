const withSass = require('@zeit/next-sass')
const { API_URL, SITE_URL } = require('config');

module.exports = withSass({
  publicRuntimeConfig: {
    API_URL,
    SITE_URL,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
})
