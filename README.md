# 赵阳 · Yang Zhao

学术个人主页，使用原生 HTML、CSS 和 JavaScript，无需安装依赖或构建。

线上地址：https://runder-sun.github.io/academic-homepage/

## 本地预览

在仓库目录运行 `python3 -m http.server 4173 --directory site`，打开 http://localhost:4173 。

## 更新内容

- `site/index.html`：个人介绍、经历、研究条目与外部链接。带有 `data-zh` 和 `data-en` 的元素包含中英文内容，请同步修改初始显示文本。
- `site/styles.css`：颜色、排版和移动端适配。
- `site/script.js`：语言切换、论文引用与导航交互。
- `site/assets/`：论文项目图片、空间曲面示意图和网站图标。

推送到 `main` 后，GitHub Actions 自动发布 `site/` 目录到 GitHub Pages。

## 内容来源

姓名、博士年级、学校及实习机构由本人提供。研究简介根据两篇论文概括；不补充未经确认的导师、实习日期、录用会议或奖项。

SceneReVis 的 ACM MM 2026 Oral 录用信息由本人确认。

IKMo 的标题、七位作者及预览图来自本人提供的最新论文 PDF。ICME 2026 Spotlight 录用信息由本人确认；引用使用 2026 年会议条目，未补充未经确认的 DOI 或页码。

两篇会议定稿 PDF 保存于 `site/papers/`，均为本人提供的原始文件。SceneReVis 的 DOI `10.1145/3767308.3835940` 及会议引用信息来自其定稿首页。

- SceneReVis 项目：https://scenerevis.github.io/
- SceneReVis 论文：https://arxiv.org/abs/2602.09432
- SceneReVis 代码：https://github.com/Runder-sun/SceneReVis
- EgoPathBench 项目：https://egopathbench.github.io/EgoPathBench/
- EgoPathBench 论文：https://arxiv.org/abs/2609.16610
- EgoPathBench 代码：https://github.com/EgoPathBench/EgoPathBench
- IKMo 论文：https://arxiv.org/abs/2505.21146
- IKMo PDF：https://arxiv.org/pdf/2505.21146
- 邮箱来自 EgoPathBench 官方项目页面。

三篇论文的预览图统一使用完整首页缩略图，尺寸均为 900 × 1165 像素：EgoPathBench 来自官方 arXiv PDF，SceneReVis 与 IKMo 来自本人提供的会议定稿。图片保留页面原始比例与完整内容，点击可查看首页大图。首页蓝色曲面为原创数学图形，仅作装饰示意，并非实验结果。
