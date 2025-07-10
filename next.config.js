/** @type {import('next').NextConfig} */
const nextConfig = {
  // 确保输出目录为 'out'，用于静态导出
  output: 'export',
  // 启用 Next.js 的 trailing slash，有助于静态文件路径的稳定性
  trailingSlash: true,
  // 禁用 trailing slash 重定向，避免不必要的跳转
  skipTrailingSlashRedirect: true,
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
    domains: ['images.pexels.com'],
  },
  // 确保静态资源路径正确，适用于 Vercel 部署
  assetPrefix: '',
  basePath: '',
  // 禁用可能导致代理问题的实验性功能
  experimental: {
    optimizeCss: false, // 禁用 CSS 优化，避免潜在问题
    esmExternals: false, // 禁用 ESM 外部化，确保模块正确打包
  },
  // 优化 webpack 配置以避免代理问题
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      // 在客户端构建时，为 Node.js 核心模块添加 fallback，避免浏览器端报错
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // 禁用对 Node.js 'fs' 模块的引用
      };
    }

    // 确保 CSS 文件正确处理
    // 注意：Next.js 13+ 通常会自动处理 CSS，这里是额外的保障
    config.module.rules.push({
      test: /\.css$/,
      use: [
        // 'style-loader' 和 'css-loader' 通常用于 Webpack 配置，
        // Next.js 内部已集成，这里作为显式配置的示例或备用
        'style-loader',
        'css-loader',
        'postcss-loader'
      ],
    });

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
