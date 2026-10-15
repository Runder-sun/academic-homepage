# 赵阳 · Yang Zhao

学术个人主页，使用原生 HTML、CSS 和 JavaScript，无需安装依赖或构建。

线上地址：https://runder-sun.github.io/academic-homepage/

## 本地预览

在仓库目录运行 `python3 -m http.server 4173 --directory site`，打开 http://localhost:4173 。

## 更新内容

- `site/index.html`：个人介绍、经历、研究条目与外部链接。带有 `data-zh` 和 `data-en` 的元素包含中英文内容，请同步修改初始显示文本。
- `site/styles.css`：颜色、排版和移动端适配。
- `site/script.js`：语言切换、论文引用与导航交互。
- `site/spatial-scene.js`：首屏空间示意的旋转与路径动画，支持暂停和减少动态效果偏好。
- `site/theme-preview.html`：纸墨、铜棕、雾紫三套配色的切换预览，`site/theme.js` 读取对应页面链接的主题参数。
- `site/assets/`：论文首页缩略图、研究概念示意图和网站图标。

推送到 `main` 后，GitHub Actions 自动发布 `site/` 目录到 GitHub Pages。

## 内容来源

姓名、博士年级、学校、学院、导师及教育和实习时间由本人提供：本科为北京航空航天大学沈元学院（2019—2023）；现就读于上海交通大学计算机学院（2023—2028，预计），导师杨旭波；微软亚洲研究院实习时间为 2025.08—2026.02，智元机器人实习时间为 2026.08 至今。页面将教育与实习分组，教育先列本科、再列博士。研究简介根据三篇论文概括。

数字艺术实验室（Digital ART Laboratory，DALAB）名称来自实验室官方中英文介绍，成员页列有 Zhao Yang。导师链接使用当前计算机学院官方主页。本科院校的英文名称采用北航官网的 Shen Yuan Honors College, Beihang University。

- 导师官方主页：https://www.cs.sjtu.edu.cn/en/jiaoshiml/yangxubo.html
- 实验室官网：http://dalab.se.sjtu.edu.cn/www/home/
- 实验室中文介绍：http://dalab.se.sjtu.edu.cn/www/home/?page_id=33
- 实验室成员：http://dalab.se.sjtu.edu.cn/www/home/?page_id=17
- 沈元学院英文介绍：https://ev.buaa.edu.cn/Schools___Colleges/Shen_Yuan_Honors_College.htm

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

三篇论文的预览图统一使用完整首页缩略图，尺寸均为 900 × 1165 像素：EgoPathBench 来自官方 arXiv PDF，SceneReVis 与 IKMo 来自本人提供的会议定稿。图片保留页面原始比例与完整内容，点击可查看首页大图。首屏的房间、人体姿态与行动路径为原创可交互研究概念示意图，并非实验结果。

页面采用书刊式排版，默认是暖米白、炭黑与暖灰的纸墨配色，仅在小标记、当前导航细线、录用标签边框与浅底、互动路径和节点处点缀少量赭金色。另提供铜棕和雾紫两个预览方案。通过 `theme-preview.html` 切换，或在主页链接中添加 `?theme=paper`、`?theme=copper`、`?theme=lilac`；不保存浏览者的配色选择。不依赖外部字体或组件库。手机端省去首屏概念图，优先显示个人介绍与论文。
