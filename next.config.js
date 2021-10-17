// @ts-check
/*eslint @typescript-eslint/no-var-requires: "off"*/

/**
 * @type {import('next').NextConfig}
 **/
const path = require('path');
const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  reactStrictMode: true,
  env: {
    customKey: 'my-customKey',
    EXAMPLE_ENV: process.env.EXAMPLE_ENV,
  },
  pwa: {
    dest: 'public',
    // runtimeCaching,
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },

  // This is not required to make it into a PWA, but is a nice way to clean up your imports
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
});
