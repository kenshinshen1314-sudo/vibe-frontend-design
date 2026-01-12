/**
 * [INPUT]: 依赖 shadcn/ui 组件库，依赖设计系统 CSS 变量
 * [OUTPUT]: 对外提供 DesignSystem 展示页面
 * [POS]: pages/ 的设计系统展示页，被 react-router 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import {
  Button,
  Input,
  Label,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Alert,
  AlertTitle,
  AlertDescription,
  Badge,
  Skeleton,
  Progress,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui'

export function DesignSystem() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">设计系统</h1>
          <p className="text-lg text-muted-foreground">
            一切设计来自设计系统的颜色和组件。基于 shadcn/ui 构建。
          </p>
        </div>

        {/* 微拟物设计区块 */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-3">微拟物光影质感</h2>
            <p className="text-muted-foreground">
              渐变背景 + 立体阴影 + 微交互。所有颜色通过 CSS 变量 + color-mix 派生。
            </p>
          </div>

          {/* Button 变体 */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">按钮变体</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </div>

          {/* Card 变体 */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">卡片变体</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card variant="default">
                <CardHeader>
                  <CardTitle>Default</CardTitle>
                  <CardDescription>默认卡片样式</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">标准立体阴影效果</p>
                </CardContent>
              </Card>
              <Card variant="raised">
                <CardHeader>
                  <CardTitle>Raised</CardTitle>
                  <CardDescription>凸起卡片样式</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">强烈的投影，突出显示</p>
                </CardContent>
              </Card>
              <Card variant="inset">
                <CardHeader>
                  <CardTitle>Inset</CardTitle>
                  <CardDescription>内凹卡片样式</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">内阴影，凹陷效果</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Input + Badge */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">输入框 + 徽章</h3>
            <div className="space-y-4 max-w-md">
              <Input placeholder="内凹输入框效果..." />
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>
          </div>

          {/* Switch + Progress */}
          <div>
            <h3 className="text-xl font-semibold mb-4">开关 + 进度条</h3>
            <div className="space-y-6 max-w-md">
              <div className="flex items-center justify-between">
                <Label htmlFor="switch1">微拟物开关</Label>
                <Switch id="switch1" />
              </div>
              <div className="space-y-3">
                <Progress value={25} />
                <Progress value={50} />
                <Progress value={75} />
                <Progress value={100} />
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">色彩系统</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Primary', class: 'bg-primary text-primary-foreground' },
              { name: 'Secondary', class: 'bg-secondary text-secondary-foreground' },
              { name: 'Muted', class: 'bg-muted text-muted-foreground' },
              { name: 'Accent', class: 'bg-accent text-accent-foreground' },
              { name: 'Destructive', class: 'bg-destructive text-destructive-foreground' },
              { name: 'Background', class: 'bg-background text-foreground border' },
            ].map((color) => (
              <div key={color.name} className="space-y-2">
                <div className={`h-24 rounded-lg ${color.class} flex items-center justify-center font-medium`}>
                  {color.name}
                </div>
                <p className="text-sm text-muted-foreground text-center">{color.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">字体排版</h2>
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold">Heading 1 - 4xl Bold</h1>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Heading 2 - 3xl Bold</h2>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Heading 3 - 2xl Bold</h3>
            </div>
            <div>
              <p className="text-base">Body Text - Base. 正常文本样式，用于主要内容。</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Muted Text - Small. 辅助文本样式。</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">按钮</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">卡片</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>卡片标题</CardTitle>
                <CardDescription>卡片描述文本</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  卡片内容区域。使用设计系统的边框、阴影和圆角。
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle>高亮卡片</CardTitle>
                <CardDescription>带主色边框的卡片</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  使用 primary 颜色的边框强调重要内容。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">表单元素</h2>
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="input">输入框</Label>
              <Input id="input" placeholder="请输入内容..." />
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>
        </section>

        {/* Alerts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">提示框</h2>
          <div className="space-y-4 max-w-2xl">
            <Alert>
              <AlertTitle>默认提示</AlertTitle>
              <AlertDescription>这是一个默认样式的提示框。</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>错误提示</AlertTitle>
              <AlertDescription>这是一个错误样式的提示框。</AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Avatars */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">头像</h2>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">AB</AvatarFallback>
            </Avatar>
            <Avatar className="h-16 w-16">
              <AvatarFallback className="text-lg">大</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* Skeleton */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">骨架屏</h2>
          <div className="space-y-4 max-w-md">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </section>

        {/* Progress */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">进度条</h2>
          <div className="space-y-4 max-w-md">
            <Progress value={33} />
            <Progress value={66} />
            <Progress value={100} />
          </div>
        </section>

        {/* Tabs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">选项卡</h2>
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">选项 1</TabsTrigger>
              <TabsTrigger value="tab2">选项 2</TabsTrigger>
              <TabsTrigger value="tab3">选项 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <p>选项 1 的内容。使用设计系统的卡片和间距。</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab2" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <p>选项 2 的内容。</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tab3" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <p>选项 3 的内容。</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Tooltip */}
        <section>
          <h2 className="text-2xl font-bold mb-6">工具提示</h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">悬停查看提示</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>这是一个工具提示</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </section>
      </main>

      <Footer />
    </div>
  )
}
