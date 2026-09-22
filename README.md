# 海明居民宿网站

按照 `prompt.docx` 搭建的“霞浦·海明居民宿 / wiseadom”中英文官方网站。项目采用 React、TypeScript 与 Vite，使用真实房型和民宿图片，支持响应式页面、双语路由、房型详情、日期人数查询和携程预订跳转。

## 启动

```bash
npm install
npm run dev
```

`npm run dev` 会先生成最新生产构建，再在本机启动稳定预览。若本地环境支持 Vite 依赖扫描并需要热更新，可使用：

```bash
npm run dev:source
```

其他命令：

```bash
npm run build
npm run lint
npm audit
```

## 页面与功能

- `/zh`、`/en`：中英文首页。
- `/zh/rooms`：六种房型列表；每种房型有独立中英文详情页。
- 体验、周边、关于、联系、预订、影集、商店占位、隐私、条款与 404 页面。
- 语言切换会保留当前页面，并映射房型的中英文 slug。
- 日期和住客控件只用于发起查询；最终打开携程酒店 `114398984`，不伪造价格或库存。
- 自建 History API 路由支持站内无刷新跳转、浏览器返回/前进和深层链接。
- SEO 包含动态标题、描述、canonical、hreflang、Open Graph 和 `LodgingBusiness` JSON-LD。

## 内容维护

- 民宿名称、地址、电话、携程链接：[src/data/site.ts](./src/data/site.ts)
- 六种房型、参数和图片：[src/data/rooms.ts](./src/data/rooms.ts)
- 周边交通与景点：[src/data/guide.ts](./src/data/guide.ts)
- 中英文文案：[src/i18n/translations.ts](./src/i18n/translations.ts)
- 全局视觉与响应式样式：[src/styles/global.css](./src/styles/global.css)
- 页面路由：[src/App.tsx](./src/App.tsx)；轻量路由实现：[src/router.tsx](./src/router.tsx)

站点域名和预订链接可复制 `.env.example` 为 `.env.local` 后修改：

```env
VITE_SITE_URL=https://your-domain.example
VITE_BOOKING_URL=https://hotels.ctrip.com/hotels/114398984.html
```

## 部署

执行 `npm run build` 后部署 `dist/`。托管平台需将未知路径重写到 `/index.html`；项目已在 `public/_redirects` 提供 Netlify 兼容规则。上线前请将 `VITE_SITE_URL`、`public/robots.txt` 与 `public/sitemap.xml` 中的示例域名换成正式域名。

## 仍待业主补充

- 首屏品牌影片，目前以真实海景照片和明确提示占位。
- 品牌主张、建筑理念、主理人故事、在地体验与可持续内容。
- 实时价格、库存、支付和订单能力；当前只跳转携程。
- 官方邮箱、地图坐标、完整取消/早餐/活动政策。
- 商店商品与体验项目；页面不会编造未确认服务。

更多视觉规则见 [DESIGN.md](./DESIGN.md)，产品边界见 [PRODUCT.md](./PRODUCT.md)。
