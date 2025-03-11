import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  ignoredRouteFiles: ["**/.*"],
  browserNodeBuiltinsPolyfill: {
    modules: { buffer: true, events: true, http: true },
}};

export default nextConfig;
