import { createSecureHeaders } from "next-secure-headers";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
};

export default nextConfig;
