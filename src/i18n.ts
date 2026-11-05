export type Lang = "en" | "vi";
export const langs: Lang[] = ["en", "vi"];

/** Prefix a site path for a language. EN lives at the root, VI under /vi. */
export function localePath(lang: Lang, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === "en") return clean;
  return clean === "/" ? "/vi/" : `/vi${clean}`;
}

export const other = (lang: Lang): Lang => (lang === "en" ? "vi" : "en");

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === "en" ? "en-GB" : "vi-VN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/** Card number in the set, e.g. 2 -> "002". */
export const cardNo = (n: number) => String(n).padStart(3, "0");

export const links = {
  email: "nducquangg@gmail.com",
  github: "https://github.com/ducquang2",
  linkedin: "https://www.linkedin.com/in/duc-quang/",
  repos: "https://github.com/ducquang2?tab=repositories",
  avatar: "https://avatars.githubusercontent.com/u/70498757",
};

/** Seasons on the back of the card. Real roles only; never invented stats. */
export const seasons = [
  { yr: "2026", team: "NAB Innovation Centre VN", pos: { en: "SWE", vi: "SWE" }, current: true },
  { yr: "2025", team: "chatavocado", pos: { en: "SWE", vi: "SWE" } },
  { yr: "2023", team: "Nimbus", pos: { en: "JR SWE", vi: "JR SWE" } },
  { yr: "2022", team: "Nimbus", pos: { en: "FRESHER", vi: "FRESHER" } },
  { yr: "2020", team: "Kao Engine", pos: { en: "SWE · PT", vi: "SWE · PT" }, rookie: true },
];

export const projects = [
  {
    name: "NitFlex",
    stack: "React · TypeScript · Tailwind · Vite",
    live: "https://ducquang2.github.io/nitflex-web/",
    code: "https://github.com/ducquang2/nitflex-web",
    desc: {
      en: "Movie review web app with Google sign-in, trailers and reviews. Team project for the Advanced Web Programming course.",
      vi: "Web app review phim với đăng nhập Google, trailer và bài đánh giá. Dự án nhóm cho môn Lập trình Web nâng cao.",
    },
  },
  {
    name: "Tower Defense",
    stack: "Unity 6 · C#",
    code: "https://github.com/ducquang2/TowerDef",
    desc: {
      en: "2D tower-defense game across 5 levels with towers, spells and traps. Team project for the Game Development course.",
      vi: "Game thủ thành 2D gồm 5 màn với trụ, phép và bẫy. Dự án nhóm cho môn Phát triển Game.",
    },
  },
];

export const stack = {
  main: ["React", "React Native", "TypeScript", "JavaScript", "HTML / CSS"],
  also: [
    "Vite", "Tailwind CSS", "React Router", "React Hook Form + Zod", "GraphQL / Apollo",
    "Lerna monorepos", "Node.js", "C# / WinUI", "Unity", "Python", "Java", "Lua",
  ],
};

export const t = {
  en: {
    langName: "English",
    switchTo: "Tiếng Việt",
    switchLabel: "Đọc bằng tiếng Việt",
    navBlog: "Blog",
    navNow: "Now",
    skip: "Skip to content",
    metaDesc: "Duc Quang (ducquang2), software engineer in Ho Chi Minh City working with React, React Native and TypeScript.",
    series: "Series 2026",
    position: "Software engineer",
    teamLine: "Ho Chi Minh City",
    flip: "Flip card",
    flipBack: "Flip back",
    cardFront: "Front of card: portrait",
    cardBack: "Back of card: seasons",
    bio: [
      ["Based", "Ho Chi Minh City"],
      ["School", "HCMUS, B.Sc. IT"],
      ["Award", "Bronze, HCMC Informatics 2019"],
      ["Editor", "Neovim"],
    ],
    th: { yr: "YR", team: "TEAM", pos: "POS" },
    rookie: "Rookie season",
    career: "Career",
    careerVal: "2020 – now · 4 teams",
    intro: "I build clean, efficient, user-friendly apps, mostly with React, React Native and TypeScript. This is my card: flip it for my seasons.",
    actionEmail: "Email me",
    aboutTitle: "About",
    about: [
      "I'm a software engineer at NAB Innovation Centre Vietnam, working on modern web technologies with a focus on React and React Native.",
      "I'm a curious computer geek who loves picking up new programming languages. Working in tech every day keeps me improving and keeps that passion fed.",
      "I studied at the University of Science, VNU-HCM, where I built everything from full-stack web apps and Windows desktop software to a Unity tower-defense game.",
    ],
    dailyDrivers: "Daily drivers",
    alsoUsed: "Also worked with",
    projectsTitle: "Projects",
    live: "Live",
    code: "Code",
    allRepos: "All repositories on GitHub",
    writingTitle: "Writing",
    allPosts: "Full checklist",
    nowTitle: "Now",
    nowMore: "What I'm up to",
    updated: "Updated",
    contactTitle: "Get in touch",
    contact: "Open to interesting projects and conversations. Let's connect and build something together.",
    blogTitle: "Blog",
    blogLede: "Notes on what I build and learn, written in English and Vietnamese. Every post is a card in the set, numbered in the order it was published.",
    emptyTitle: "No cards pulled yet",
    empty: "The first post will land here as card No. 001.",
    no: "No.",
    readIn: "Đọc bản tiếng Việt",
    missingTranslation: "This post isn't available in Vietnamese yet.",
    backToBlog: "All posts",
    footer: "Built with Astro",
  },
  vi: {
    langName: "Tiếng Việt",
    switchTo: "English",
    switchLabel: "Read in English",
    navBlog: "Blog",
    navNow: "Hiện tại",
    skip: "Chuyển đến nội dung",
    metaDesc: "Duc Quang (ducquang2), kỹ sư phần mềm tại TP. Hồ Chí Minh, làm việc với React, React Native và TypeScript.",
    series: "Series 2026",
    position: "Kỹ sư phần mềm",
    teamLine: "TP. Hồ Chí Minh",
    flip: "Lật thẻ",
    flipBack: "Lật lại",
    cardFront: "Mặt trước thẻ: ảnh chân dung",
    cardBack: "Mặt sau thẻ: các mùa giải",
    bio: [
      ["Sống tại", "TP. Hồ Chí Minh"],
      ["Trường", "ĐH KHTN, Cử nhân CNTT"],
      ["Giải", "HCĐ Tin học TP.HCM 2019"],
      ["Editor", "Neovim"],
    ],
    th: { yr: "NĂM", team: "ĐỘI", pos: "VỊ TRÍ" },
    rookie: "Mùa đầu tiên",
    career: "Sự nghiệp",
    careerVal: "2020 – nay · 4 đội",
    intro: "Mình xây dựng những ứng dụng gọn gàng, hiệu quả và dễ dùng, chủ yếu với React, React Native và TypeScript. Đây là thẻ của mình: lật lại để xem các mùa giải.",
    actionEmail: "Gửi email",
    aboutTitle: "Giới thiệu",
    about: [
      "Mình là kỹ sư phần mềm tại NAB Innovation Centre Vietnam, làm việc với các công nghệ web hiện đại, tập trung vào React và React Native.",
      "Mình là một người mê máy tính, tò mò và thích học ngôn ngữ lập trình mới. Làm việc trong ngành công nghệ mỗi ngày giúp mình không ngừng nâng cao kỹ năng và giữ lửa đam mê.",
      "Mình học tại Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM, nơi mình làm đủ thứ, từ web app full-stack, phần mềm desktop Windows đến một game thủ thành bằng Unity.",
    ],
    dailyDrivers: "Dùng hằng ngày",
    alsoUsed: "Đã từng dùng",
    projectsTitle: "Dự án",
    live: "Xem",
    code: "Mã nguồn",
    allRepos: "Tất cả repository trên GitHub",
    writingTitle: "Bài viết",
    allPosts: "Xem toàn bộ",
    nowTitle: "Hiện tại",
    nowMore: "Mình đang làm gì",
    updated: "Cập nhật",
    contactTitle: "Liên hệ",
    contact: "Luôn sẵn lòng với những dự án và cuộc trò chuyện thú vị. Cùng kết nối và xây dựng điều gì đó nhé.",
    blogTitle: "Blog",
    blogLede: "Ghi chép về những gì mình xây dựng và học được, viết bằng tiếng Anh và tiếng Việt. Mỗi bài là một thẻ trong bộ sưu tập, đánh số theo thứ tự đăng.",
    emptyTitle: "Chưa có thẻ nào",
    empty: "Bài viết đầu tiên sẽ xuất hiện ở đây với số 001.",
    no: "Số",
    readIn: "Read in English",
    missingTranslation: "Bài này chưa có bản tiếng Anh.",
    backToBlog: "Tất cả bài viết",
    footer: "Xây dựng với Astro",
  },
} as const;
