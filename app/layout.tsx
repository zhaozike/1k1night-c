    import type { Metadata } from 'next';
    import './globals.css'; // 确保这里正确导入了全局 CSS

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
            {/* 这里不再有内联 CSS 块 */}
          </head>
          {/* 将背景渐变类名直接应用到 body 标签 */}
          <body className="font-sans antialiased bg-gradient-to-br from-slate-900 to-slate-800 text-slate-200 min-h-screen flex flex-col overflow-x-hidden">
            {children}
          </body>
        </html>
      );
    }
    