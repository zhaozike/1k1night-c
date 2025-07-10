import type { Config } from 'tailwindcss';

const config: Config = {
  // 启用深色模式
  darkMode: ['class', 'dark'],
  // 配置 Tailwind CSS 扫描文件的路径
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {}, // 暂时移除所有扩展主题配置
  },
  plugins: [], // 暂时移除所有插件
};

export default config;
