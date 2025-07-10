
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 确保输出目录为 'out'，用于静态导出
  output: 'export',
  // 指定构建输出目录
  distDir: 'out',
  eslint: {
    // 在构建期间忽略 ESLint 警告，以防止构建失败
    ignoreDuringBuilds: true,
  },
  images: {
    // 禁用 Next.js 的图片优化，适用于静态导出
    unoptimized: true,
    // 允许从 pexels.com 加载图片，如果需要的话
    // domains: ['images.pexels.com'], // 如果不使用 Pexels 图片，可以移除此行
  },
  // 确保静态资源路径正确，适用于 Vercel 部署
  assetPrefix: '',
  basePath: '',
  // 移除所有 experimental 配置，避免潜在冲突
  // experimental: {
  //   optimizeCss: false,
  //   esmExternals: false,
  // },
  // 简化 webpack 配置，仅保留 fallback
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // 在客户端构建时，为 Node.js 核心模块添加 fallback，避免浏览器端报错
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // 禁用对 Node.js 'fs' 模块的引用
      };
    }
    return config;
  },
  // 添加安全头部，增强网站安全性
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
