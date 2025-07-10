import type { Metadata } from 'next';
// 移除 Next.js 的 Inter 字体导入，因为我们将在 HTML head 中直接导入
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '绘本 AI - AI 驱动的儿童绘本创作平台',
  description: '用 AI 的魔力，将您的创意瞬间变成专业的儿童绘本。精美插画、专业配音、多语言支持。',
  keywords: '儿童绘本,AI创作,故事生成,插画,配音',
  authors: [{ name: '绘本 AI' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* 直接在 HTML head 中添加 Google Fonts 链接 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* 内联关键CSS以避免代理问题，确保核心样式始终可用 */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* 内联关键CSS以避免代理问题 */
            * {
              box-sizing: border-box;
            }

            html, body {
              margin: 0;
              padding: 0;
              font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              line-height: 1.6;
            }

            /* 确保渐变背景正确显示 */
            .gradient-bg-main {
              background: linear-gradient(135deg, #fdf2f8 0%, #fff7ed 50%, #eff6ff 100%);
              min-height: 100vh;
            }

            .gradient-text {
              background: linear-gradient(135deg, #ec4899 0%, #f97316 100%);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              color: transparent;
            }

            .gradient-btn {
              background: linear-gradient(135deg, #ec4899 0%, #f97316 100%);
              border: none;
              color: white;
              transition: all 0.3s ease;
            }

            .gradient-btn:hover {
              background: linear-gradient(135deg, #db2777 0%, #ea580c 100%);
              transform: translateY(-2px);
              box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            }

            .gradient-cta {
              background: linear-gradient(135deg, #ec4899 0%, #f97316 50%, #3b82f6 100%);
            }

            /* 卡片样式 */
            .card {
              background: rgba(255, 255, 255, 0.8);
              backdrop-filter: blur(10px);
              border-radius: 16px;
              border: 1px solid rgba(255, 255, 255, 0.2);
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
              transition: all 0.3s ease;
            }

            .card:hover {
              transform: translateY(-8px);
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            }

            /* 导航栏样式 */
            .nav-blur {
              background: rgba(255, 255, 255, 0.8);
              backdrop-filter: blur(12px);
              border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }

            /* 响应式设计 */
            @media (max-width: 768px) {
              .container {
                padding-left: 1rem;
                padding-right: 1rem;
              }
            }
          `
        }} />
      </head>
      <body>
        {/* 确保主背景类名应用在最外层 div */}
        <div className="gradient-bg-main">
          {children}
        </div>
      </body>
    </html>
  );
}
