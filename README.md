# GrayVale Games Website

GrayVale Games（灰谷游戏）国际化官网，支持：

- 自动地区语言选择：中国大陆默认中文，其他地区默认英文
- 手动语言切换：`中文 / EN`
- Featured 主推产品大图展示
- 产品卡片包含：展示图、名称、描述、标签、状态、平台、下载链接
- 配置驱动：新增产品仅改 `data/games.json`

## 目录结构

- `index.html`: 页面结构
- `assets/styles.css`: 样式
- `assets/main.js`: 国际化与渲染逻辑
- `data/games.json`: 双语产品配置
- `assets/images/*`: 产品展示图
- `api/locale.js`: Vercel 地区检测接口（读取 `x-vercel-ip-country`）

## 产品配置字段

每个项目包含：

- `id`: 唯一标识
- `status`: `planning | development | live`
- `featured`: 是否主推
- `coverImage`: Featured 大图
- `cardImage`: 产品卡片图
- `platform`: 平台数组
- `links`: 下载/跳转链接数组
- `zh` / `en`: 双语内容

`links` 结构：

- `labelZh`: 中文按钮名
- `labelEn`: 英文按钮名
- `url`: 跳转地址

`zh` / `en` 字段：

- `title`
- `genre`
- `summary`
- `tags`
- `timeline`

## 本地预览

```bash
npx serve .
```

说明：本地静态预览时，`/api/locale` 无法模拟 Vercel 地理 Header，会自动回退到浏览器语言/时区判断。

## Vercel 发布

1. 推送到 GitHub
2. 在 Vercel 导入仓库
3. Framework Preset 选 `Other`
4. Build Command 和 Output Directory 留空

部署后，`/api/locale` 将根据访问地区自动选择默认语言。
