import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  sassOptions: {
    prependData: `@use "@/shared/styles/helpers" as *;`,
  },
};

export default nextConfig;
