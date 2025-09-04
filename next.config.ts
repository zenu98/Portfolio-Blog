import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 빌드 시 ESLint 완전히 무시
  },
};

export default nextConfig;
