'use strict';

const { withBild } = require('next-prefresh')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = withBild(nextConfig);