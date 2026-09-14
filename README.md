# Sealed Days · 封存树记忆库

把每一天的记忆挂成一棵树。纯静态、零依赖、离线可跑——三张手绘风格的网页：

| 页面 | 文件 | 是什么 |
|---|---|---|
| 月树 | `web/index.html` | 一月一棵树，每天的记忆是一块挂着的小牌，点牌进入这一天 |
| 单日 | `web/day.html` | 信笺式的一天：时间签横向滑，正文竖排信纸，右下角「封存这一天」 |
| 封存树 | `web/seal.html` | 被封存的日子按 1~31 顺序挂上树，横滑换树（默认 3 棵，可种新树），底部选树跳转 |
| 满树演示 | `web/demo-full.html` | 31 块牌挂满一棵树的压力演示 |

> 打开 `web/index.html` 就能看。所有数据都是**虚构示例**。

## 特性

- 树、挂牌、进场钟摆动画全部 CSS 变量驱动，逐牌独立摆动参数
- 挂牌位置由锚点脚本约束（双向最小间距 + 收尾断言），任何月份都不会出现文字贴脸
- 封存树支持给「那一天」自定义牌名（牌面名字替换日期，随时可改可清）
- 桌面鼠标拖拽横滑 + 滚轮横滚，松手自动吸附；移动端原生滑动
- 绿色主题只对「从封存树进来的详情页」生效（绿叶 + 树冠浅绿）
- 可选对接记忆后台：断线时静默回退内嵌快照，页面永不白屏

## 快速开始

```bash
# 直接打开（纯离线示例模式）
open web/index.html
```

想接自己的数据？实现这几个只读接口，然后在 `web/config.js` 里把 `api` 填上：

```
GET {api}/api/memories/overview        → { days: [{ day, count, chars }] }
GET {api}/api/memories/day?date=YYYY-MM-DD
                                       → { records: [{ time, sub, text, chars, milestone, milestone_title }] }
GET {api}/api/memories/sealed          → { trees: [{ days: ["YYYY-MM-DD"] }], labels: { day: name } }
```

写接口（封存 / 解封 / 种树 / 改牌名）参考 `docs/api-notes.md`，不接也能正常浏览。

## 配置（web/config.js）

| 字段 | 说明 |
|---|---|
| `owner` | 署名：标题、信笺头、封存档案页眉 |
| `api` | 记忆后台地址；留空 = 纯离线示例 |
| `title` | 浏览器标题 |

## 目录结构

```
sealed-days/
├── README.md
├── LICENSE
└── web/
    ├── config.js      ← 唯一需要改的文件
    ├── index.html     ← 月树（从这里开始）
    ├── day.html       ← 单日信笺
    ├── seal.html      ← 封存树
    └── demo-full.html ← 满树演示
```

## 隐私说明

仓库内所有示例数据（信笺正文、日期、牌名、统计数字）均为**虚构占位**，
不包含任何真实人物、真实对话与真实记录。拿去当模板，写你自己的故事。

## License

[MIT](./LICENSE)
