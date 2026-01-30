import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    prependData: `@use "@/shared/styles/helpers" as *;`,
  },
};

export default nextConfig;
