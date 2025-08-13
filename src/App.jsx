import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Sword, Shield, Users, Trophy, MessageCircle, Star } from 'lucide-react'
import ProteaImage from './assets/Protea.png'
import XakuImage from './assets/Xaku.jpeg'
import ClanLogo from './assets/VK.jpg'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={ClanLogo} alt="VIKING COMMANDO Logo" className="w-8 h-8 rounded" />
            <div className="text-2xl font-bold text-gradient">VIKING COMMANDO</div>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-primary transition-colors">首页</a>
            <a href="#about" className="hover:text-primary transition-colors">关于</a>
            <a href="#members" className="hover:text-primary transition-colors">成员</a>
            <a href="#activities" className="hover:text-primary transition-colors">活动</a>
            <a href="#join" className="hover:text-primary transition-colors">加入我们</a>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
        <div className={`container mx-auto px-4 text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient animate-float">
            VIKING COMMANDO
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            精英战士的聚集地 · 征战星系的维京突击队
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gold-glow hover:scale-105 transition-transform">
              <Users className="mr-2 h-5 w-5" />
              立即加入
            </Button>
            <Button variant="outline" size="lg" className="card-glow hover:scale-105 transition-transform">
              <MessageCircle className="mr-2 h-5 w-5" />
              了解更多
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* 关于氏族 */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">关于我们</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">维京突击队的传奇</h3>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                VIKING COMMANDO 是一个由精英Tenno组成的强大氏族。我们秉承维京战士的勇猛精神，
                在Origin星系中征战四方，守护和平与正义。
              </p>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                无论你是刚踏入Warframe世界的新手，还是经验丰富的老兵，我们都欢迎你的加入。
                在这里，你将找到志同道合的战友，共同探索无尽的星际冒险。
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="card-glow">活跃氏族</Badge>
                <Badge variant="secondary" className="card-glow">友好环境</Badge>
                <Badge variant="secondary" className="card-glow">团队合作</Badge>
                <Badge variant="secondary" className="card-glow">共同成长</Badge>
              </div>
            </div>
            <div className="relative">
              <img 
                src={ProteaImage} 
                alt="Protea Warframe" 
                className="w-full h-auto rounded-lg card-glow animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 特色展示 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">氏族特色</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-glow hover:scale-105 transition-transform bg-card/80">
              <CardHeader className="text-center">
                <Sword className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-xl">强大实力</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  拥有完整的氏族科技树，提供所有氏族专属武器和装备，助你在战场上所向披靡。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-glow hover:scale-105 transition-transform bg-card/80">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-xl">活跃社区</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  每日都有成员在线，随时可以组队进行各种任务，从日常刷图到高难度挑战。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-glow hover:scale-105 transition-transform bg-card/80">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-xl">友好氛围</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  新手友好的环境，老玩家乐于分享经验和资源，共同成长，共同进步。
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 成就展示 */}
      <section id="activities" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">氏族成就</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center card-glow bg-card/80">
              <CardHeader>
                <Trophy className="h-8 w-8 mx-auto text-accent" />
                <CardTitle className="text-3xl font-bold text-accent">50+</CardTitle>
                <CardDescription>活跃成员</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center card-glow bg-card/80">
              <CardHeader>
                <Star className="h-8 w-8 mx-auto text-accent" />
                <CardTitle className="text-3xl font-bold text-accent">100%</CardTitle>
                <CardDescription>科技完成度</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center card-glow bg-card/80">
              <CardHeader>
                <Sword className="h-8 w-8 mx-auto text-accent" />
                <CardTitle className="text-3xl font-bold text-accent">1000+</CardTitle>
                <CardDescription>任务完成</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center card-glow bg-card/80">
              <CardHeader>
                <Users className="h-8 w-8 mx-auto text-accent" />
                <CardTitle className="text-3xl font-bold text-accent">24/7</CardTitle>
                <CardDescription>在线支持</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* 加入我们 */}
      <section id="join" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gradient">加入维京突击队</h2>
            <p className="text-xl mb-12 text-muted-foreground">
              准备好与我们一起征战星系了吗？加入VIKING COMMANDO，开启你的传奇之旅！
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="card-glow bg-card/80">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">加入要求</CardTitle>
                </CardHeader>
                <CardContent className="text-left">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 熟悉Warframe基本玩法</li>
                    <li>• 积极参与氏族活动</li>
                    <li>• 友好待人，团队合作</li>
                    <li>• 定期在线，保持活跃</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-glow bg-card/80">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">申请流程</CardTitle>
                </CardHeader>
                <CardContent className="text-left">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 加入QQ群：859061996</li>
                    <li>• 联系管理员进行面试</li>
                    <li>• 提供游戏内角色信息</li>
                    <li>• 等待审核通过</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/10 rounded-lg p-8 card-glow">
              <h3 className="text-2xl font-bold mb-4 text-primary">联系我们</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="text-lg">
                  <span className="text-muted-foreground">QQ群：</span>
                  <span className="text-accent font-bold text-2xl">859061996</span>
                </div>
                <Button className="gold-glow hover:scale-105 transition-transform">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  立即加入QQ群
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-card/80 border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <img 
              src={ClanLogo} 
              alt="VIKING COMMANDO Logo" 
              className="w-16 h-16 mx-auto rounded card-glow"
            />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gradient">VIKING COMMANDO</h3>
          <p className="text-muted-foreground mb-6">
            征战星系的维京突击队 · 精英Tenno的聚集地
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#home" className="hover:text-primary transition-colors">首页</a>
            <a href="#about" className="hover:text-primary transition-colors">关于</a>
            <a href="#join" className="hover:text-primary transition-colors">加入我们</a>
          </div>
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              © 2024 VIKING COMMANDO. 本网站为Warframe游戏氏族宣传页面。
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

