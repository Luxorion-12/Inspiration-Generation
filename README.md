# 灵感融合器 (Inspiration Fusion Generator)

一个 AI 驱动的创新点子生成工具，融合行业属性与目标客群，通过 DeepSeek API 生成极具商业潜力的创新点子。

## ✨ 功能特性

- 🎨 **现代化设计** - 使用 Tailwind CSS 实现优雅的界面
- 🤖 **AI 驱动** - 集成 DeepSeek API 生成关键词和商业点子
- 💫 **流畅动画** - 粒子效果和平滑滚动动画
- 🔐 **安全架构** - API Key 存储在服务器端，不暴露在前端
- 📱 **响应式设计** - 完美适配桌面和移动设备
- ⚡ **渐进加载** - 创意点子逐步出现，提升用户体验

## 🚀 快速开始

### 前置要求

- Node.js 16+ 
- npm 或 yarn
- DeepSeek API Key ([获取 API Key](https://platform.deepseek.com))

### 安装步骤

1. **克隆仓库**
```bash
git clone <repository-url>
cd Inspiration-Generation
```

2. **安装依赖**
```bash
npm install
```

3. **配置环境变量**

复制 `.env.example` 为 `.env`：
```bash
cp .env.example .env
```

编辑 `.env` 文件，替换你的 DeepSeek API Key：
```env
DEEPSEEK_API_KEY=your_api_key_here
PORT=3000
```

4. **启动服务**

```bash
# 生产环境
npm start

# 开发环境（自动重启）
npm run dev
```

5. **访问应用**

打开浏览器访问 `http://localhost:3000`

## 📁 项目结构

```
.
├── .env                 # 环境变量（API Key）- 不要上传到 Git
├── .env.example         # 环境变量示例
├── package.json         # 项目配置
├── server.js            # Express 后端服务
├── public/
│   └── index.html       # 前端应用
└── README.md            # 本文件
```

## 🔌 API 端点

### POST /api/keywords
生成相关关键词

**请求体：**
```json
{
  "term": "人工智能",
  "isLeft": true
}
```

**响应：**
```json
{
  "keywords": ["大数据", "机器学习", "深度学习", ...]
}
```

### POST /api/ideas
生成商业创意点子

**请求体：**
```json
{
  "leftTerm": "人工智能",
  "leftKeywords": ["大数据", "机器学习", ...],
  "rightTerm": "学生",
  "rightKeywords": ["社交", "时间紧张", ...]
}
```

**响应：**
```json
{
  "ideas": [
    {
      "title": "点子标题",
      "description": "详细描述",
      "leftKeyword": "大数据",
      "rightKeyword": "社交"
    },
    ...
  ]
}
```

## 🔐 安全性

- ✅ API Key 存储在 `.env` 文件中（不上传到版本控制）
- ✅ API 调用在服务器端执行
- ✅ 前端永远不会接触敏感密钥
- ✅ 支持 CORS 配置

## 🎯 使用流程

1. **输入行业/产品** - 点击左侧中心的"核心行业"框输入
2. **输入客户对象** - 点击右侧中心的"核心受众"框输入
3. **自动生成关键词** - AI 自动为周围8个格子填充相关关键词
4. **点击融合按钮** - 中间的大圆形按钮触发生成
5. **查看创意点子** - 10条创新点子逐步显示

## 🎨 技术栈

**前端：**
- HTML5
- CSS3 (Tailwind CSS)
- Vanilla JavaScript

**后端：**
- Node.js
- Express.js
- dotenv (环境变量管理)
- CORS (跨域资源共享)

**API：**
- DeepSeek Chat API

## 📝 环境变量说明

| 变量 | 说明 | 示例 |
|-----|------|------|
| `DEEPSEEK_API_KEY` | DeepSeek API Key | `sk-xxxxx` |
| `PORT` | 服务端口 | `3000` |

## 🐛 故障排除

**问题：API Key 错误**
- 确保 `.env` 文件存在且包含正确的 API Key
- 重启服务器

**问题：CORS 错误**
- 检查后端是否正确启动
- 确保访问的 URL 是 `http://localhost:3000`

**问题：超时错误**
- DeepSeek API 可能较慢，请耐心等待
- 检查网络连接

