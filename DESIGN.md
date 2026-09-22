---
name: 霞浦·海明居民宿 / wiseadom
description: 以真实沿海影像和海平线式排版构成的克制双语住宿体验
colors:
  mineral-shell: "#e8e5dd"
  mineral-paper: "#f5f3ee"
  deep-ink: "#171a17"
  muted-ink: "#62675f"
  tide-blue: "#667675"
  sea-glass-green: "#687055"
  clay-accent: "#966554"
  rule: "rgba(23, 26, 23, 0.2)"
  rule-on-dark: "rgba(255, 255, 255, 0.35)"
  on-dark: "#ffffff"
  error: "#8a2f27"
typography:
  hero-display:
    fontFamily: "Noto Serif SC, serif"
    fontSize: "clamp(4.5rem, 12vw, 10rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.045em"
  page-display:
    fontFamily: "Noto Serif SC, serif"
    fontSize: "clamp(3.8rem, 9vw, 9rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  section-heading:
    fontFamily: "Noto Serif SC, serif"
    fontSize: "clamp(2.3rem, 4.5vw, 4.8rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Aptos, Segoe UI, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Aptos, Segoe UI, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.08em"
rounded:
  square: "0"
  circle: "50%"
spacing:
  gutter: "clamp(1.25rem, 4vw, 4.5rem)"
  gutter-mobile: "1.1rem"
  section-block: "clamp(5rem, 9vw, 9rem)"
  page-top: "clamp(8rem, 13vw, 12rem)"
components:
  button-dark:
    backgroundColor: "{colors.deep-ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "0.85rem 1.4rem"
    height: "50px"
  button-dark-hover:
    backgroundColor: "{colors.clay-accent}"
    textColor: "{colors.on-dark}"
  button-light:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "0.85rem 1.4rem"
    height: "50px"
  booking-submit:
    backgroundColor: "{colors.deep-ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "1rem 1.25rem"
    height: "74px"
---

# Design System: 海明居

## Overview

**Creative North Star: “海平线编辑室”**

海明居以“海平线组织页面”：安静、自然、克制、有建筑感。水平细线、宽幅真实影像、错落的双栏比例和大留白形成连续的潮汐节奏；界面服务于空间核实与预订决策，不模仿居中、厚重、泛奢华的酒店模板。

首屏是这一系统最明确的表达：真实海景占据视口，品牌落在左下，预订栏咬住首屏下缘。后续页面继续让图片先说话，以编辑式标题和信息表格补充可核实事实。视觉表达不能牺牲房型参数、交通、政策、语言切换与外部预订路径的可用性。

**Key Characteristics:**

- 海平线般的细分隔线与横向节奏。
- 真实空间影像优先，保留自然色调与可辨识的空间关系。
- 正式圆形“明”字标志是全站唯一图形 Logo，用于页头、移动菜单、首页品牌印记、页脚和浏览器图标；`海明居` 与 `wiseadom` 文字保留为名称、标题和 SEO 文本，不再自行充当图形标志。
- 矿物白、深墨、海玻璃绿与潮蓝构成低饱和底盘，陶土色仅用于交互强调。
- 中文衬线大标题配合清醒的系统无衬线正文。
- 桌面非对称、移动单列；装饰克制，功能状态明确。

## Colors

色彩来自石灰墙、海雾、植被与潮水；frontmatter 中的颜色 token 是规范值，新增界面必须复用，不得另造近似色。

### Primary

- **深墨（`deep-ink`）：** 正文、深色带与主要按钮，提供稳定的建筑轮廓。
- **潮蓝绿（`tide-blue`）：** “向海而居”、首页影集、预订行动区、页脚等大面积内容带，以及滚动条与环境性背景；统一搭配白色主文字和半透明白色辅助文字。

### Secondary

- **海玻璃绿（`sea-glass-green`）：** 设施信息带、选择态与正向状态，使用面积应小于矿物白和深墨。
- **陶土点色（`clay-accent`）：** hover、键盘焦点和关键反馈；稀少使用，以自然暖色打破冷静底盘。

### Neutral

- **矿物壳白（`mineral-shell`）：** 页面主背景。
- **矿物纸白（`mineral-paper`）：** 预订栏、弹层、地图说明卡等可交互或被托起的表面。
- **柔墨（`muted-ink`）：** 描述、标签、辅助信息和免责声明；不可用于必须高对比阅读的核心操作。
- **水平线（`rule` / `rule-on-dark`）：** 在浅色与深色表面分隔信息，不承担装饰性框盒。
- **错误色（`error`）：** 表单错误边线、错误文本与警示状态，不能改作品牌强调色。

**The Quiet Coast Rule.** 单屏以矿物白或真实影像为主，潮蓝与海玻璃绿承担结构，陶土色只响应交互；禁止用高饱和渐变制造“海边感”。

## Typography

**Display Font:** Noto Serif SC（fallback：serif）  
**Body Font:** Aptos、Segoe UI、PingFang SC、Microsoft YaHei（fallback：sans-serif）

**Character:** 标题轻而宽阔，依靠尺度、行距和留白建立层级；正文保持现代、直接和易扫读。`@fontsource/noto-serif-sc` 已随项目本地打包 400 与 600 字重，无需依赖外部字体服务。

### Hierarchy

- **Hero Display（`hero-display`）：** 仅用于首页首屏品牌主标题，最多约 8 个字符宽；移动端使用 `clamp(4.2rem, 24vw, 7rem)`。
- **Page Display（`page-display`）：** 内页唯一 `h1`，与右侧或下方导语组成页首。
- **Section Heading（`section-heading`）：** 内容段主标题；房型、图文段和 CTA 可在同一轻字重体系内按版面适配。
- **Body（`body`）：** 全站正文基线；长文阅读宽度不超过 720px，普通说明多控制在 40–60ch。
- **Label（`label`）：** 导航、字段名、英文副名与元信息；使用轻微字距，字段标签可大写，但正文不得全大写。

**The Scale Before Weight Rule.** 标题保持 400 字重，通过字号、位置和留白区分层级；不要用粗黑体或多档字重模拟层级。

## Layout

布局容器最大宽度为 1440px，左右 gutter 使用 `clamp(1.25rem, 4vw, 4.5rem)`；正文阅读边界为 720px。标准内容段上下间距使用 `section-block`，内页顶部使用 `page-top`。桌面以两栏、不对称比例和错层房卡建立编辑节奏，细横线在标题、事实表与导航状态之间延续“海平线”。

首页首屏桌面高度为 94svh，品牌内容固定在左下，预订栏以负外边距覆盖首屏下缘。图片使用真实尺寸属性和 `object-fit: cover`；首要图片 eager/high priority，其余图片 lazy load，避免布局偏移。图文段应保留图片原始语义，不裁成无法判断空间的纯纹理。

响应式按三档执行：

- **≤1180px：** 隐藏桌面导航和页头预订按钮，显示菜单按钮；页头仍保持完整语言切换。
- **≤900px：** 预订栏由四列变两列；页首、图文、房型详情、联系、政策和商店等双栏重排为单栏；错层图片节奏适度收敛。
- **≤680px：** gutter 固定为 1.1rem，页头由 78px 降至 66px，预订栏和房卡完全单列，房卡取消高低错位，主要 CTA 可铺满宽度；首屏为 84svh。系统最低支持 320px 视口，不得横向溢出。

触控目标至少 44×44px。动画使用 `cubic-bezier(0.22, 1, 0.36, 1)`，快速状态约 180ms、结构过渡约 560ms；图片呼吸和跑马灯属于环境动效。`prefers-reduced-motion: reduce` 时关闭平滑滚动并将动画、过渡压缩至近乎即时。

**The Horizon Rule.** 新区块优先通过横线、留白和比例建立秩序，不用卡片墙填满页面。

## Elevation & Depth

系统默认扁平。深度主要来自矿物白与深墨/潮蓝的色面切换、图像叠置和细线，而不是普遍阴影。阴影只允许出现在需要明确浮起关系的功能层：首屏预订栏（`0 22px 45px rgba(23,26,23,.18)`）、住客弹层（`0 18px 35px rgba(23,26,23,.2)`）和地图说明卡（`0 22px 44px rgba(23,26,23,.14)`）。固定页头使用轻透明背景与 16px blur；首页未滚动状态使用由深到浅的墨色渐层和克制文字阴影，确保浅色海景上的导航对比度。

**The Flat-by-Default Rule.** 房卡、图文段、信息表和按钮静止时不加阴影；只有真实浮层或跨背景悬浮的功能表面获得阴影。

## Shapes

主要组件保持直角：按钮、字段、预订栏、卡片和图像容器均以方正边界延续建筑感。边界优先使用 1px 水平线，避免完整圆角描边把内容切成大量胶囊或小卡片。圆形只用于视频状态点、社交标记等微型符号；地图占位中的不规则椭圆线是场景化地形隐喻，不能扩散成通用组件造型。

图片常用 4:3 房卡、宽幅沉浸画廊和自然比例拼贴。裁切必须保留主体和空间关系；画廊缩略图允许编辑式错位，移动端统一为 4:5 顺序流。

## Components

### Header / Navigation

- 固定页头桌面高 78px、移动高 66px；首页首屏未滚动时覆盖于影像，滚动后回到矿物背景。
- 当前页必须通过 `aria-current="page"` 和细下划线双重表达；hover 不能是唯一状态。
- 移动菜单为深墨全高抽屉。打开后把焦点移到关闭按钮，Tab/Shift+Tab 在抽屉可操作元素间循环，支持 Escape 关闭并把焦点返回触发按钮。
- 语言切换保持当前深层路径与房型中英文 slug 映射，不得把用户送回首页。

### Buttons and Text Links

- 主要深色按钮使用 `button-dark`，hover 切换为陶土色；深底反白按钮使用 `button-light`，hover 反转为纸白底、深墨字。
- 所有按钮保留至少 50px 高；页头图标按钮与画廊移动控件不得小于 44px。
- 文本链接用 1px 下划线和箭头，hover 通过间距与陶土色变化反馈；不要增加夸张位移或弹跳。
- 全局键盘焦点为 2px 陶土色轮廓、4px offset；禁止移除可见焦点。

### BookingBar

- 首页桌面为四列：入住、离店、住客/房间、提交；中屏两列，窄屏单列。首页版本贴首屏下缘，内页 compact 版本用 1px 边框且无阴影。
- 字段标签短小、带字距；提交按钮高 74px（移动 60px），使用深墨底并在 hover 变为陶土色。
- 住客弹层使用矿物纸白和克制阴影，计数按钮提供可读 `aria-label` 与 disabled 状态。
- 组件只收集查询条件并打开携程酒店 ID `114398984`；不得显示或暗示实时价格、房量、支付、立即确认、促销、早餐或取消政策。
- 日期缺失或先后关系错误时使用 `role="alert"`；错误文案必须就近出现且不只依赖颜色。

### RoomCard / Room Detail

- 房卡固定信息顺序为真实房图、中文房名、英文长名、面积、人数、楼层和详情入口；封面使用 4:3，桌面双栏错位、移动单列齐平。
- hover 仅做约 1.025 的轻微放大和极轻饱和度变化；不得使用改变房间材质、采光或尺度判断的滤镜。
- 房间详情用沉浸式画廊、事实定义列表和设施清单。只有数据源中已确认的字段可出现。

### Gallery / Lightbox

- 房型画廊支持前后按钮与触摸滑动，显示当前位置；独立影集使用原生 `dialog`、明确的打开/关闭/前后按钮标签，且不自动轮播。
- 用户可通过 Tab 与 Enter/Space 操作控件，原生 dialog 支持 Escape 关闭；若新增方向键导航，必须同时保留按钮和可读标签。
- 所有内容图片提供与当前语言等价的 alt；纯装饰首屏图在已有可访问名称覆盖场景时使用空 alt。

### Page Structure and States

- 每页只有一个主 `h1`；`PageIntro`、`SectionHeading` 与 `Breadcrumbs` 保持标题层级和跨页节奏。
- `PageMeta` 维护双语 title、description、canonical、hreflang、Open Graph 与 `LodgingBusiness` 数据；新增路由必须同步提供。
- loading、empty、error 状态使用简短文字和水平线；状态反馈分别使用 `role="status"` 或 `role="alert"`。
- 页面保留可见的 skip link。表单必须有显式 label，错误通过 `aria-invalid` 和 `aria-describedby` 关联；禁用态不能伪装成可操作控件。

## Do's and Don'ts

### Do:

- **Do** 先使用项目已有的真实民宿与房型图片，并保留宽高、双语 alt、合理 eager/lazy 优先级和自然色调。
- **Do** 把品牌保持在首页首屏左下，把查询型预订栏保持在首屏下缘；这是首页签名构图，不要机械复制到所有内页。
- **Do** 使用机器可读 token、1440px 内容边界、三档断点、细横线和克制的非对称比例扩展新页面。
- **Do** 让中英文页面信息等价，并维持 `/zh`、`/en`、深层链接、语言状态及现有 URL。
- **Do** 对已确认信息直接陈述；对未知视频、地图、体验、商店、政策或服务明确显示“待补充”或引导联系确认。
- **Do** 在接入 CMS、视频、地图、商店或官方预订接口时替换现有占位边界，继续让内容数据与表现组件分离，并回归检查键盘、焦点、双语和响应式行为。

### Don't:

- **Don't** 虚构价格、库存、优惠、评价、建筑师、主理人故事、服务承诺、地图坐标或订单成功状态。
- **Don't** 用高饱和蓝绿、厚重阴影、大圆角、玻璃卡片堆叠或装饰性渐变替代沿海编辑式克制。
- **Don't** 用 AI 生成空间图冒充真实客房或设施，也不要用强滤镜、美化裁切改变用户对空间的判断。
- **Don't** 把视觉风格置于可用性之上：不可降低文字对比、隐藏焦点、移除标签、自动轮播，或把移动点击区缩到 44px 以下。
- **Don't** 在没有真实数据接口时把 BookingBar 升级成站内交易流程；当前可信边界始终是收集查询条件并跳转携程。
- **Don't** 为新增页面另起一套颜色、圆角、卡片或字体系统；若未来品牌重塑，必须同时更新实现 token、本文档和所有双语核心路径，而不是局部漂移。
