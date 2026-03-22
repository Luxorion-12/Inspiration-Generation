import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
const DEEPSEEK_API_URL = 'https://api.deepseek.com/chat/completions';

if (!DEEPSEEK_API_KEY) {
  console.error('错误：未设置 DEEPSEEK_API_KEY。请在 .env 文件中配置。');
  process.exit(1);
}

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

/**
 * 生成关键词接口
 */
app.post('/api/keywords', async (req, res) => {
  try {
    const { term, isLeft } = req.body;

    if (!term) {
      return res.status(400).json({ error: '缺少 term 参数' });
    }

    const prompt = isLeft
      ? `根据行业或产品名称"${term}"，生成8个相关的中文关键词或概念，这些关键词应该代表这个行业的核心特性、技术或市场特点。关键词应该是2-4个字的中文词汇。\n\n用中文逗号分隔，只返回关键词，不要其他说明。例如：人工智能,大数据,云计算,物联网,5G,区块链,边缘计算,隐私保护`
      : `根据客户对象或人群类型"${term}"，生成8个相关的中文关键词或特性，描述这个群体的需求、特点或偏好。关键词应该是2-4个字的中文词汇。\n\n用中文逗号分隔，只返回关键词，不要其他说明。例如：品质追求,时间紧张,社交需求,健康关注,便利至上,性价比,个性化,可持续`;

    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: '你是一个创意思维专家，能够快速生成相关的关键词和概念。生成的关键词必须是中文。'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 200
      })
    });

    if (!response.ok) {
      console.error('DeepSeek API Error:', response.status, response.statusText);
      return res.status(500).json({ error: 'API 调用失败' });
    }

    const data = await response.json();
    const content = data.choices[0].message.content.trim();
    const keywords = content.split(/[,，]/).map(k => k.trim()).filter(k => k.length > 0).slice(0, 8);

    res.json({ keywords });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: '服务器错误' });
  }
});

/**
 * 生成商业点子接口
 */
app.post('/api/ideas', async (req, res) => {
  try {
    const { leftTerm, leftKeywords, rightTerm, rightKeywords } = req.body;

    if (!leftTerm || !rightTerm || !leftKeywords || !rightKeywords) {
      return res.status(400).json({ error: '缺少必要参数' });
    }

    const prompt = `我有两个九宫格：

左边九宫格（行业/产品）：
- 核心：${leftTerm}
- 相关特性：${leftKeywords.join('、')}

右边九宫格（客户对象）：
- 核心：${rightTerm}
- 相关特性：${rightKeywords.join('、')}

请基于这两个九宫格的交集，生成10条极具商业潜力的创新点子。每条点子应该：
1. 创意新颖，结合两个维度的特点
2. 有实际的商业价值
3. 可行性强
4. 明确指出这条点子是由左边的哪个特性和右边的哪个特性组合产生的

请按以下JSON格式返回，每条点子一个对象。必须返回有效的JSON数组，不要其他文字：
[
  {
    "title": "点子标题",
    "description": "2-3句的详细描述",
    "leftKeyword": "左边关键词",
    "rightKeyword": "右边关键词"
  },
  ...
]`;

    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: '你是一个商业创新顾问，擅长找到不同领域和人群的交集点，生成具有商业价值的创新点子。你必须返回有效的JSON格式，不要包含任何其他文字。'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.8,
        max_tokens: 3000
      })
    });

    if (!response.ok) {
      console.error('DeepSeek API Error:', response.status, response.statusText);
      return res.status(500).json({ error: 'API 调用失败' });
    }

    const data = await response.json();
    const content = data.choices[0].message.content.trim();

    try {
      let ideas = JSON.parse(content);

      if (!Array.isArray(ideas)) {
        const arrayMatch = content.match(/\[[\s\S]*\]/);
        if (arrayMatch) {
          ideas = JSON.parse(arrayMatch[0]);
        } else {
          throw new Error('无效的 JSON 格式');
        }
      }

      if (!Array.isArray(ideas) || ideas.length === 0) {
        return res.status(500).json({ error: '生成的点子格式无效' });
      }

      res.json({ ideas });
    } catch (parseError) {
      console.error('JSON 解析错误:', content, parseError);
      res.status(500).json({ error: 'JSON 解析失败' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: '服务器错误' });
  }
});

app.listen(PORT, () => {
  console.log(`✨ 灵感融合器服务已启动: http://localhost:${PORT}`);
});
