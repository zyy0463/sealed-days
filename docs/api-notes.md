# 记忆后台接口备忘（可选实现）

页面只依赖下面三个**只读**接口即可完整浏览；写接口用于在页面上直接封存/解封。

## 只读

### GET /api/memories/overview
```json
{ "days": [ { "day": "2026-08-24", "count": 13, "chars": 3215 } ] }
```

### GET /api/memories/day?date=2026-08-24
```json
{ "records": [ {
  "time": "09:12", "sub": "悄悄话", "text": "……",
  "chars": 125, "milestone": false, "milestone_title": ""
} ] }
```

### GET /api/memories/sealed
```json
{ "trees": [ { "days": ["2026-08-24"] }, { "days": [] }, { "days": [] } ],
  "labels": { "2026-08-24": "牌名" } }
```

约定：默认 3 棵树；一棵树最多 31 天，按日期先后顺序挂第 1~31 槽；
同一天全库只挂一处（换树 = 挪）。

## 写（可选）

| 接口 | 方法 | body | 说明 |
|---|---|---|---|
| `/api/memories/seal` | POST | `{ "day": "YYYY-MM-DD", "tree": 0 }` | 封存到指定树（换树即挪动，返回最新 trees） |
| `/api/memories/unseal` | POST | `{ "day": "YYYY-MM-DD" }` | 取消封存 |
| `/api/memories/trees/add` | POST | `{}` | 种一棵新树 |
| `/api/memories/label` | POST | `{ "day": "YYYY-MM-DD", "name": "牌名" }` | 给那一天的记忆牌命名；空名 = 清除 |

所有写接口返回 `{ ok: true, trees: [...], labels: {...} }`，页面拿到后整树重建。
