# 项目架构说明

## 📋 分离详解

### 前端 (Frontend)
- **位置：** `public/index.html`
- **职责：** 用户界面、交互、动画、数据展示
- **技术：** HTML5 + CSS3 (Tailwind) + Vanilla JavaScript
- **特点：** 完全不包含 API Key，所有 API 调用都通过后端代理

### 后端 (Backend)
- **位置：** `server.js`
- **职责：** API 代理、密钥管理、请求转发、错误处理
- **框架：** Express.js
- **特点：** 安全地管理 DeepSeek API Key，隐藏敏感信息

## 🔄 数据流

```
用户输入（前端）
    ↓
前端发送请求到后端 API (/api/keywords 或 /api/ideas)
    ↓
后端接收请求，提取参数
    ↓
后端使用 API Key 调用 DeepSeek API
    ↓
DeepSeek 返回结果
    ↓
后端处理结果，返回给前端
    ↓
前端接收数据，更新 UI
    ↓
用户看到结果
```

## 🔐 安全性说明

### ✅ 为什么要分离？

1. **防止 API Key 泄露**
   - 原来：API Key 直接在前端代码中 ❌
   - 现在：API Key 只存在于服务器的 `.env` 文件 ✅

2. **保护私密信息**
   - 用户无法通过浏览器开发工具看到 API Key
   - API Key 在网络传输中也不暴露

3. **速率限制控制**
   - 后端可以实现请求限流
   - 防止滥用

## 📦 分享项目的方式

### 步骤 1：准备项目
```bash
# 删除旧的 code.html（已迁移到 public/index.html）
rm code.html

# 确保 .gitignore 存在
# 确保 .env 文件不在版本控制中
```

### 步骤 2：创建 Git 仓库（可选）
```bash
git init
git add .
git commit -m "Initial commit: Inspiration Fusion Generator"
```

### 步骤 3：分享给他人
分享时包含以下文件：
- ✅ `public/index.html` - 前端代码
- ✅ `server.js` - 后端代码
- ✅ `package.json` - 依赖配置
- ✅ `README.md` - 项目说明
- ✅ `.env.example` - 环境变量示例
- ✅ `.gitignore` - Git 忽略规则
- ❌ `.env` - 不要分享（包含你的 API Key）
- ❌ `node_modules/` - 自动忽略

## 🚀 部署指南

### 本地测试
```bash
npm install
cp .env.example .env
# 编辑 .env，填入你的 API Key
npm start
```

### 云端部署（以 Vercel 为例）
1. 在 Vercel 创建项目
2. 连接 GitHub 仓库
3. 在 Vercel 环境变量中设置 `DEEPSEEK_API_KEY`
4. 自动部署

### Docker 部署
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 项目对比

### 改造前 ❌
```
code.html (单文件)
├── 前端界面
├── API Key (暴露！)
├── API 调用逻辑
└── 全部在浏览器执行
```

### 改造后 ✅
```
项目目录
├── public/
│   └── index.html (纯前端，无密钥)
├── server.js (后端，管理密钥)
├── package.json
├── .env (安全存储，不上传)
├── .env.example (示例，可分享)
└── README.md
```

## 🎓 学习资源

- [Express.js 官方文档](https://expressjs.com)
- [Tailwind CSS 官方文档](https://tailwindcss.com)
- [DeepSeek API 文档](https://platform.deepseek.com)
- [REST API 最佳实践](https://restfulapi.net)

---

**项目已完成前后端分离！🎉**
