# 🚀 快速启动指南

## 5分钟快速开始

### 1️⃣ 安装依赖
```bash
npm install
```

### 2️⃣ 配置 API Key
```bash
# 复制示例文件
cp .env.example .env

# 编辑 .env，替换你的 API Key
# DEEPSEEK_API_KEY=sk-your_real_key_here
```

### 3️⃣ 启动服务
```bash
npm start
```

### 4️⃣ 打开浏览器
访问 `http://localhost:3000`

---

## 📂 项目文件说明

| 文件 | 说明 |
|-----|------|
| `server.js` | Node.js 后端服务（Express） |
| `public/index.html` | 前端应用（纯 HTML/CSS/JS） |
| `package.json` | 项目依赖配置 |
| `.env` | 环境变量（含 API Key）- 不上传 Git |
| `.env.example` | 环境变量示例（可分享） |
| `.gitignore` | Git 忽略规则（保护敏感文件） |
| `README.md` | 项目文档 |
| `ARCHITECTURE.md` | 架构详细说明 |

---

## 🔑 重要提示

### ⚠️ API Key 安全
- ✅ 已配置在 `.env` 文件中
- ✅ `.gitignore` 防止上传 Git
- ✅ 前端代码中不包含任何密钥
- ✅ 分享时只分享 `.env.example`

### 📝 分享项目时
```bash
# 检查是否包含敏感文件
git status

# 确保 .env 不在暂存区
# 如果误上传，需要从 Git 历史删除
```

---

## 🛠️ 常用命令

```bash
# 启动服务（生产环境）
npm start

# 启动服务（开发环境，自动重启）
npm run dev

# 检查 Node 版本
node --version

# 检查 npm 版本
npm --version
```

---

## ✅ 验证安装

访问以下 URL 验证：

1. **前端应用**
   - URL: `http://localhost:3000`
   - 应看到"灵感融合器"界面

2. **后端服务**
   - 终端应显示：`✨ 灵感融合器服务已启动: http://localhost:3000`

3. **API 状态**
   - 打开浏览器开发者工具（F12）
   - Network 标签
   - 输入行业名称，查看 `/api/keywords` 请求
   - 应返回 200 状态码和关键词数据

---

## 🐛 遇到问题？

### 问题 1：`npm: command not found`
- 解决：安装 [Node.js](https://nodejs.org)

### 问题 2：`PORT 3000 already in use`
- 解决 A：改用其他端口（编辑 `.env` 中的 PORT）
- 解决 B：杀死占用进程
  ```bash
  # macOS/Linux
  lsof -i :3000
  kill -9 <PID>
  
  # Windows
  netstat -ano | findstr :3000
  taskkill /PID <PID> /F
  ```

### 问题 3：`DEEPSEEK_API_KEY is not set`
- 解决：检查 `.env` 文件是否存在且包含有效的 API Key

### 问题 4：网页无法加载
- 检查服务是否运行（终端是否显示启动消息）
- 清除浏览器缓存（Ctrl+Shift+Delete）
- 重启服务器

---

## 📚 文档导航

- 📖 详细说明：[README.md](README.md)
- 🏗️ 架构详解：[ARCHITECTURE.md](ARCHITECTURE.md)
- 🎨 设计说明：[DESIGN.md](DESIGN.md)

---

## 🎉 成功标志

当你看到以下界面时，说明安装成功：
1. ✅ 页面标题显示"灵感融合器"
2. ✅ 能输入行业和客户对象
3. ✅ 点击融合按钮后有粒子动画
4. ✅ 能生成 10 条创意点子
5. ✅ 能复制点子内容

---

**祝你使用愉快！如有问题，查阅相关文档或联系项目维护者。**
