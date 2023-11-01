const { createSecureHeaders } = require("next-secure-headers");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
};

module.exports = nextConfig;
