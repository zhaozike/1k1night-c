import type { Config } from 'tailwindcss';

const config: Config = {
  // 启用深色模式，支持 'class' 和 'dark' 策略
  darkMode: ['class', 'dark'],
  // 配置 Tailwind CSS 扫描文件的路径，以生成相应的 CSS 类
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // 扫描 pages 目录下的所有文件
    './components/**/*.{js,ts,jsx,tsx,mdx}', // 扫描 components 目录下的所有文件
    './app/**/*.{js,ts,jsx,tsx,mdx}', // 扫描 app 目录下的所有文件
    './src/**/*.{js,ts,jsx,tsx,mdx}', // 明确扫描 src 目录下的所有文件 (如果存在)
  ],
  theme: {
    // 容器配置，用于居中内容并添加内边距
    container: {
      center: true, // 居中
      padding: '2rem', // 默认内边距
      screens: {
        '2xl': '1400px', // 2xl 屏幕尺寸的容器最大宽度
      },
    },
    // 扩展 Tailwind 的默认主题
    extend: {
      // 自定义颜色调色板
      colors: {
        border: 'hsl(var(--border))', // 边框颜色
        input: 'hsl(var(--input))',   // 输入框颜色
        ring: 'hsl(var(--ring))',     // 焦点环颜色
        background: 'hsl(var(--background))', // 背景颜色
        foreground: 'hsl(var(--foreground))', // 前景颜色
        primary: {
          DEFAULT: 'hsl(var(--primary))', // 主色
          foreground: 'hsl(var(--primary-foreground))', // 主色前景
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))', // 次色
          foreground: 'hsl(var(--secondary-foreground))', // 次色前景
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))', // 破坏性操作颜色
          foreground: 'hsl(var(--destructive-foreground))', // 破坏性操作前景
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))', // 静音/次要文本颜色
          foreground: 'hsl(var(--muted-foreground))', // 静音/次要文本前景
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))', // 强调色
          foreground: 'hsl(var(--accent-foreground))', // 强调色前景
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))', // 弹出框颜色
          foreground: 'hsl(var(--popover-foreground))', // 弹出框前景
        },
        card: {
          DEFAULT: 'hsl(var(--card))', // 卡片背景色
          foreground: 'hsl(var(--card-foreground))', // 卡片前景
        },
        // 图表颜色定义
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      // 自定义边框圆角
      borderRadius: {
        lg: 'var(--radius)', // 大圆角
        md: 'calc(var(--radius) - 2px)', // 中等圆角
        sm: 'calc(var(--radius) - 4px)', // 小圆角
      },
      // 定义关键帧动画
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      // 应用动画
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  // 添加 Tailwind CSS 插件
  plugins: [require('tailwindcss-animate')],
};

export default config;
