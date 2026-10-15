const citations = {
  ego: `@misc{zhao2026egopathbench,
  title={EgoPathBench: Evaluating Zero-Shot Egocentric Waypoint Decision-Making in Vision-Language Models},
  author={Yang Zhao and Zhuo Chen and Xubo Yang},
  year={2026},
  eprint={2609.16610},
  archivePrefix={arXiv},
  primaryClass={cs.CV},
  url={https://arxiv.org/abs/2609.16610}
}`,
  scene: `@misc{zhao2026scenerevis,
  title={SceneReVis: A Self-Reflective Vision-Grounded Framework for 3D Indoor Scene Synthesis via Multi-turn RL},
  author={Yang Zhao and Shizhao Sun and Meisheng Zhang and Yingdong Shi and Xubo Yang and Jiang Bian},
  year={2026},
  eprint={2602.09432},
  archivePrefix={arXiv},
  primaryClass={cs.CV},
  url={https://arxiv.org/abs/2602.09432}
}`
};

let language = 'zh';
const languageButton = document.querySelector('.language-toggle');
const dialog = document.querySelector('#citation-dialog');
const citationText = document.querySelector('#citation-text');
const copyStatus = document.querySelector('#copy-status');

languageButton.addEventListener('click', () => {
  language = language === 'zh' ? 'en' : 'zh';
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-zh][data-en]').forEach(element => {
    element.textContent = element.dataset[language].replaceAll('\\n', '\n');
  });
  document.querySelectorAll('[data-label-zh][data-label-en]').forEach(element => {
    element.setAttribute(element.tagName === 'IMG' ? 'alt' : 'aria-label', element.dataset[language === 'zh' ? 'labelZh' : 'labelEn']);
  });
  languageButton.innerHTML = language === 'zh' ? 'EN <span aria-hidden="true">↗</span>' : '中文 <span aria-hidden="true">↗</span>';
  languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
  document.querySelector('nav').setAttribute('aria-label', language === 'zh' ? '主导航' : 'Main navigation');
  document.querySelector('.close-dialog').setAttribute('aria-label', language === 'zh' ? '关闭' : 'Close');
  document.title = language === 'zh' ? '赵阳 Yang Zhao · 学术主页' : 'Yang Zhao · Academic Homepage';
});

document.querySelectorAll('.citation-button').forEach(button => {
  button.addEventListener('click', () => {
    citationText.textContent = citations[button.dataset.paper];
    document.querySelector('#citation-title').textContent = button.dataset.paper === 'ego' ? 'EgoPathBench' : 'SceneReVis';
    copyStatus.textContent = '';
    dialog.showModal();
  });
});

document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) {
    dialog.close();
  }
});

document.querySelector('.copy-citation').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(citationText.textContent);
    copyStatus.textContent = language === 'zh' ? '已复制到剪贴板' : 'Copied to clipboard';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(citationText);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = language === 'zh' ? '请按 Ctrl+C / ⌘C 复制选中的引用' : 'Press Ctrl+C / ⌘C to copy the selected citation';
  }
});

const navLinks = [...document.querySelectorAll('nav a')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href')));
let scrollScheduled = false;
function updateActiveSection() {
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  const current = atBottom ? sections.at(-1) : sections.findLast(section => section.getBoundingClientRect().top <= 160) || sections[0];
  navLinks.forEach(link => {
    const active = link.hash === '#' + current.id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scrollScheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scrollScheduled) {
    window.requestAnimationFrame(updateActiveSection);
    scrollScheduled = true;
  }
}, { passive: true });
updateActiveSection();
document.querySelector('#year').textContent = new Date().getFullYear();
