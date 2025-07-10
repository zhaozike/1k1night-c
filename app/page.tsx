"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Mic, Palette, Globe, Users, ArrowRight, Play, Heart, Wand2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import StoryGenerator from '@/components/StoryGenerator';
import AuthModal from '@/components/AuthModal';

export default function Home() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [showStoryGenerator, setShowStoryGenerator] = useState(false);
  const [user, setUser] = useState<any>(null);

  const handleAuthSuccess = (userData: any) => {
    setUser(userData);
    setShowAuthModal(false);
  };

  const handleStartCreating = () => {
    if (user) {
      setShowStoryGenerator(true);
    } else {
      setAuthMode('register');
      setShowAuthModal(true);
    }
  };

  if (showStoryGenerator) {
    return <StoryGenerator user={user} onBack={() => setShowStoryGenerator(false)} />;
  }

  return (
    // 使用一个最外层的 div 包裹所有内容
    // min-h-screen 保持不变，背景由 layout.tsx 中的 body 标签控制
    <div className="min-h-screen">
      <Navigation
        user={user}
        onLogin={() => { setAuthMode('login'); setShowAuthModal(true); }}
        onRegister={() => { setAuthMode('register'); setShowAuthModal(true); }}
        onLogout={() => setUser(null)}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              {/* 使用自定义的 gradient-btn 类 */}
              <div className="gradient-btn text-white border-0 text-sm px-4 py-2 rounded-full inline-flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                AI 驱动的兒童繪本創作
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              讓想像力
              {/* 使用自定义的 gradient-text 类 */}
              <span className="gradient-text">
                無限繪本
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              用 AI 的魔力，將您的創意瞬間變成專業的兒童繪本。精美插畫、專業配音、多語言支持，讓每個故事都成為孩子們的珍藏。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleStartCreating}
                className="gradient-btn px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                開始創作故事
              </Button>

              <Button
                variant="outline"
                className="border-2 border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                觀看演示
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">為什麼選擇我們？</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              結合最新的 AI 技術，為您提供專業級別的兒童繪本創作體驗
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 使用自定义的 .card 类 */}
            <div className="card">
              <CardHeader className="text-center">
                {/* 使用自定义的 .gradient-btn 类 */}
                <div className="w-16 h-16 mx-auto mb-4 gradient-btn rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">AI 智能創作</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  強大的 AI 引擎，根據您的創意生成獨特的故事情節和人物設定
                </p>
              </CardContent>
            </div>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">精美插畫</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  專業級別的插畫生成，多種藝術風格可選，讓每個故事都栩栩如生
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">專業配音</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  多種語音角色可選，自然流暢的語音合成，讓故事更加生動有趣
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">多語言支持</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  支持多種語言創作，讓全世界的孩子都能享受到優質的故事內容
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">簡單四步，完成創作</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              從創意到成品，只需幾分鐘時間
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "輸入創意", desc: "描述你的故事主題和想法", icon: Wand2 },
              { step: "2", title: "選擇風格", desc: "選擇插畫風格和語音類型", icon: Palette },
              { step: "3", title: "AI 生成", desc: "AI 自動生成故事和插畫", icon: Sparkles },
              { step: "4", title: "完成作品", desc: "獲得專業的兒童繪本作品", icon: Heart }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {index < 3 && (
                  <ArrowRight className="w-6 h-6 text-orange-400 absolute top-8 -right-3 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">精彩案例展示</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              看看其他創作者都製作了什麼樣的精彩作品
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "小兔子的太空冒險",
                description: "一個關於勇敢小兔子探索太空的溫馨故事",
                image: "https://placehold.co/500x300/E0E0E0/000000?text=Placeholder+1"
              },
              {
                title: "魔法森林的秘密",
                description: "神奇的森林裡住著會說話的動物朋友們",
                image: "https://placehold.co/500x300/E0E0E0/000000?text=Placeholder+2"
              },
              {
                title: "彩虹橋上的小公主",
                description: "善良的小公主用愛心拯救了整個王國",
                image: "https://placehold.co/500x300/E0E0E0/000000?text=Placeholder+3"
              }
            ].map((example, index) => (
              // 使用自定义的 .card 类
              <div key={index} className="card overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-pink-200 to-orange-200 relative">
                  <img
                    src={example.image}
                    alt={example.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{example.title}</h3>
                  <p className="text-gray-600 mb-4">{example.description}</p>
                  <Button variant="outline" className="w-full">
                    <Play className="w-4 h-4 mr-2" />
                    查看故事
                  </Button>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-cta"> {/* 使用自定义的 .gradient-cta 类 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            準備好創作您的第一個故事了嗎？
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            加入我們，讓 AI 幫助您創作齣令人難忘的兒童繪本
          </p>
          <Button
            onClick={handleStartCreating}
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            立即開始創作
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                繪本 AI
              </h3>
              <p className="text-gray-400">
                讓每個孩子都能享受到專業級別的兒童繪本，用 AI 技術點亮想像力。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">產品</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">故事生成器</a></li>
                <li><a href="#" className="hover:text-white transition-colors">插畫創作</a></li>
                <li><a href="#" className="hover:text-white transition-colors">語音合成</a></li>
                <li><a href="#" className="hover:text-white transition-colors">多語言支持</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">支持</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">幫助中心</a></li>
                <li><a href="#" className="hover:text-white transition-colors">在線客服</a></li>
                <li><a href="#" className="hover:text-white transition-colors">聯繫我們</a></li>
                <li><a href="#" className="hover:text-white transition-colors">意見反饋</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">關於我們</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">公司介紹</a></li>
                <li><a href="#" className="hover:text-white transition-colors">隱私政策</a></li>
                <li><a href="#" className="hover:text-white transition-colors">服務條款</a></li>
                <li><a href="#" className="hover:text-white transition-colors">支付方式</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 繪本 AI. 保留所有權利。</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
}
