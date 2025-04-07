/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel 部署所需配置
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  // 不使用 export，而是使用 Vercel 兼容的輸出方式
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
