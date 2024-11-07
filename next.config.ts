import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'images.pokemontcg.io'}],
  },
};

export default nextConfig;
