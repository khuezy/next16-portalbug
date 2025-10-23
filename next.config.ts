import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Bug: cacheComponent: true causes portals not to replace */
  cacheComponents: true
};

export default nextConfig;
