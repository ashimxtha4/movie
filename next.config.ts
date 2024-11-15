import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
