// All page copy lives here so it's easy to edit without touching layout.

export const intro = {
  name: "liubin",
  initial: "L", // used for the corner script monogram
  lines: [
    "我是 liubin，一个计算机爱好者。",
    "不写代码，但喜欢探索各种好玩的软件。",
    "业余在用 Claude Code 折腾自己的小项目。",
  ],
  // Shown as the blue marginalia note.
  status:
    "目前不上班，专职家庭煮男，偶尔折腾自己的网站和 NAS，学习使用 AI。",
  github: "https://github.com/laaacf",
  message: "mailto:3868088@gmail.com",
} as const;

// A dated row: the label on the left, the date on the right.
export type Entry = {
  label: string;
  date: string;
  href?: string;
};

export const experience: Entry[] = [
  { label: "赋闲在家，折腾计算机、AI、偶尔摄影", date: "2019 至今" },
  { label: "事业单位技术岗", date: "1989–2019" },
];

// A project. `date` shows on the row's hand-cut sticky tag. `href` is optional
// — omit it for closed-source / unlinked projects. `site` is an optional live /
// official site shown next to the repo link. `blurb` and `stack` fill the detail
// revealed when the row is clicked. `stamp` is the short word scrawled in the
// hand-drawn marker stamp on that detail, and `color` picks the marker accent
// it's inked in.
export type Project = {
  label: string;
  date: string;
  color: "red" | "green" | "blue";
  stamp: string;
  href?: string;
  site?: string;
  blurb?: string;
  stack?: string[];
};

export const projects: Project[] = [
  {
    label: "edit-hosts — 远程 hosts 管理器",
    href: "https://github.com/laaacf/edit-hosts",
    date: "2025",
    color: "blue",
    stamp: "tool",
    blurb:
      "基于 Flask 的 Web 应用，用来管理远程 SSH 主机的 hosts 文件。",
    stack: ["Python", "Flask"],
  },
  {
    label: "mp3-labeler — AI 音乐标签助手",
    href: "https://github.com/laaacf/mp3-labeler",
    date: "2026",
    color: "red",
    stamp: "AI",
    blurb:
      "智能 MP3 ID3 标签编辑器，用 AI 自动补全音乐库的元数据、歌词和专辑封面。",
    stack: ["Python", "AI"],
  },
  {
    label: "puter-unlocked — unlocked 个人云系统",
    href: "https://github.com/laaacf/puter-unlocked",
    date: "2026",
    color: "red",
    stamp: "AI",
    blurb:
      "隐私优先的个人云系统，支持反向代理和灵活的域名访问。",
    stack: ["Python", "AI"],
  },
  {
    label: "Self-Host Hub — 自部署应用合集",
    site: "https://home.laaa.site/",
    date: "ongoing",
    color: "green",
    stamp: "live",
    blurb:
      "自家服务器上部署的一堆好东西：Emby（影视）、puter（云桌面）、PicShare（图床）、Bitwarden（密码）、Calibre-web（电子书）等。",
    stack: ["Docker"],
  },
];

export const artifacts: Entry[] = [
  {
    label: "最近计算机相关知识学习情况记录",
    date: "2026-02",
    href: "https://laaa.site/archives/zui-jin-ji-suan-ji-xiang-guan-zhi-shi-xue-xi-qing-kuang-ji-lu",
  },
  {
    label: "2025年度总结",
    date: "2025-12",
    href: "https://laaa.site/archives/2025nian-du-zong-jie",
  },
  {
    label: "滑雪之初体验",
    date: "2024-04",
    href: "https://laaa.site/archives/hua-xue-zhi-chu-ti-yan",
  },
  {
    label: "听歌的变迁",
    date: "2024-02",
    href: "https://laaa.site/archives/ting-ge-de-bian-qian",
  },
  {
    label: "观《逐梦大海》有感",
    date: "2023-04",
    href: "https://laaa.site/archives/guan--zhu-meng-da-hai--you-gan",
  },
  {
    label: "年度回顾｜盘点我的2022",
    date: "2022-12",
    href: "https://laaa.site/archives/nian-du-hui-gu-2022",
  },
  {
    label: "年度回顾｜盘点我的2021",
    date: "2022-01",
    href: "https://laaa.site/archives/nian-du-hui-gu--pan-dian-wo-de-2021",
  },
];

// `heart: true` marks a "support me" link (rendered with a hand-drawn heart) so
// it reads as a CTA rather than just another profile link.
export type Link = { label: string; href: string; heart?: boolean };

export const links: Link[] = [
  { label: "GitHub", href: "https://github.com/laaacf" },
  { label: "Blog", href: "https://laaa.site/" },
  { label: "Echo", href: "https://echo.3868088.xyz/" },
];
