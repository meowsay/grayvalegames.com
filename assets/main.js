const i18n = {
  zh: {
    htmlLang: "zh-CN",
    title: "GrayVale Games | 灰谷游戏",
    description: "GrayVale Games（灰谷游戏）致力于打造具备系统深度、策略表达与叙事沉浸的放置 RPG 作品。",
    companyClaim: "探索放置挂机游戏的边界",
    kicker: "GLOBAL IDLE RPG STUDIO",
    heroTitle: "构建下一代放置 RPG 体验",
    heroText:
      "GrayVale Games（灰谷游戏）面向全球玩家打造系统驱动与叙事沉浸并重的作品，以长期成长和持续演化作为核心体验。",
    featuredHeading: "精选产品",
    featuredHint: "主推作品",
    featuredBadge: "FEATURED GAME",
    studioHeading: "公司愿景",
    features: [
      {
        title: "打造长期可投入的游戏世界",
        desc: "我们希望每一款产品都具备持续扩展的系统深度与长期成长价值。",
      },
      {
        title: "连接全球玩家",
        desc: "通过统一的品牌体验和多语言表达，让不同地区玩家都能理解并融入作品世界。",
      },
      {
        title: "长期内容更新",
        desc: "围绕剧情章节、活动事件与系统扩展，持续提供新目标与新挑战。",
      },
      {
        title: "与社区共同进化",
        desc: "重视玩家反馈与社区文化，推动产品与玩家关系同步成长。",
      },
    ],
    gamesHeading: "产品展示",
    gamesHint: "GrayVale Games 全部产品矩阵",
    statusLabel: "筛选状态",
    all: "全部",
    empty: "当前筛选下暂无项目。",
    loadErrorPrefix: "项目数据加载失败：",
    status: {
      planning: "筹备中",
      development: "开发中",
      live: "已上线",
    },
    platform: "平台",
    timeline: "开发周期",
    phase: "阶段",
    download: "下载",
    noLink: "链接待公布",
    contactHeading: "联系方式",
    contactText: "欢迎商务合作、媒体沟通与发行合作咨询：",
    footerText: "GrayVale Games · 灰谷游戏",
  },
  en: {
    htmlLang: "en",
    title: "GrayVale Games",
    description:
      "GrayVale Games delivers globally focused idle RPG products with strategic depth, immersive worlds, and long-term progression design.",
    companyClaim: "Exploring the Boundaries of Idle Games",
    kicker: "GLOBAL IDLE RPG STUDIO",
    heroTitle: "Crafting the Next Generation of Idle RPGs",
    heroText:
      "GrayVale Games builds globally focused RPG experiences where strategic systems and narrative immersion evolve through long-term progression.",
    featuredHeading: "Featured",
    featuredHint: "Flagship Title",
    featuredBadge: "FEATURED GAME",
    studioHeading: "Company Vision",
    features: [
      {
        title: "Build Worlds Worth Committing To",
        desc: "Every title should offer expandable depth, meaningful progression, and long-term player value.",
      },
      {
        title: "Connect Players Globally",
        desc: "A unified brand voice and bilingual presentation help players across regions engage with the same world.",
      },
      {
        title: "Deliver Ongoing Content Evolution",
        desc: "Story chapters, events, and system updates continuously create new goals and strategic depth.",
      },
      {
        title: "Grow With the Community",
        desc: "Player feedback and community culture are treated as core inputs in how each product evolves.",
      },
    ],
    gamesHeading: "Portfolio",
    gamesHint: "Explore the complete GrayVale Games portfolio.",
    statusLabel: "Filter by status",
    all: "All",
    empty: "No projects under the current filter.",
    loadErrorPrefix: "Failed to load game data: ",
    status: {
      planning: "Planning",
      development: "In Development",
      live: "Live",
    },
    platform: "Platforms",
    timeline: "Timeline",
    phase: "Stage",
    download: "Download",
    noLink: "Links coming soon",
    contactHeading: "Contact",
    contactText: "For business inquiries, media, and publishing partnerships:",
    footerText: "GrayVale Games · HuiGu Games",
  },
};

const statusClassMap = {
  planning: "status-planning",
  development: "status-development",
  live: "status-live",
};

const dom = {
  kicker: document.getElementById("kicker"),
  companyClaim: document.getElementById("companyClaim"),
  heroTitle: document.getElementById("heroTitle"),
  heroText: document.getElementById("heroText"),
  featuredHeading: document.getElementById("featuredHeading"),
  featuredHint: document.getElementById("featuredHint"),
  featuredCard: document.getElementById("featuredCard"),
  studioHeading: document.getElementById("studioHeading"),
  featureGrid: document.getElementById("featureGrid"),
  contactHeading: document.getElementById("contactHeading"),
  contactText: document.getElementById("contactText"),
  gamesHeading: document.getElementById("gamesHeading"),
  gamesHint: document.getElementById("gamesHint"),
  statusLabel: document.getElementById("statusLabel"),
  statusFilter: document.getElementById("statusFilter"),
  gamesGrid: document.getElementById("gamesGrid"),
  footerText: document.getElementById("footerText"),
  year: document.getElementById("year"),
  langZh: document.getElementById("langZh"),
  langEn: document.getElementById("langEn"),
  gameCardTemplate: document.getElementById("gameCardTemplate"),
  featureTemplate: document.getElementById("featureTemplate"),
};

const state = {
  games: [],
  locale: "en",
  filter: "all",
  localeSource: "fallback",
};

function applyLanguageToggleUI() {
  dom.langZh.classList.toggle("active", state.locale === "zh");
  dom.langEn.classList.toggle("active", state.locale === "en");
}

function renderFeatures() {
  const t = i18n[state.locale];
  dom.featureGrid.innerHTML = "";
  const frag = document.createDocumentFragment();

  t.features.forEach((item, index) => {
    const node = dom.featureTemplate.content.cloneNode(true);
    node.querySelector(".feature-index").textContent = String(index + 1).padStart(2, "0");
    node.querySelector(".feature-title").textContent = item.title;
    node.querySelector(".feature-desc").textContent = item.desc;
    frag.appendChild(node);
  });

  dom.featureGrid.appendChild(frag);
}

function renderStatusOptions() {
  const t = i18n[state.locale];
  const statuses = [...new Set(state.games.map((game) => game.status))];

  dom.statusFilter.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = t.all;
  dom.statusFilter.appendChild(allOption);

  statuses.forEach((status) => {
    const option = document.createElement("option");
    option.value = status;
    option.textContent = t.status[status] || status;
    dom.statusFilter.appendChild(option);
  });

  if (!statuses.includes(state.filter)) {
    state.filter = "all";
  }

  dom.statusFilter.value = state.filter;
}

function buildLinkRow(parent, game, t) {
  parent.innerHTML = "";

  if (!Array.isArray(game.links) || game.links.length === 0) {
    const fallback = document.createElement("span");
    fallback.textContent = t.noLink;
    parent.appendChild(fallback);
    return;
  }

  game.links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.textContent = state.locale === "zh" ? link.labelZh : link.labelEn;
    parent.appendChild(a);
  });
}

function renderFeatured() {
  const t = i18n[state.locale];
  const featured = state.games.find((g) => g.featured) || state.games[0];

  if (!featured) {
    dom.featuredCard.innerHTML = `<p class="game-summary">${t.empty}</p>`;
    return;
  }

  const copy = featured[state.locale] || featured.en;
  const statusText = t.status[featured.status] || featured.status;
  document.documentElement.style.setProperty("--hero-cover", `url(${featured.coverImage})`);

  dom.featuredCard.innerHTML = `
    <img class="featured-image" src="${featured.coverImage}" alt="${copy.title}" loading="eager" />
    <div class="featured-content">
      <p class="featured-label">${t.featuredBadge}</p>
      <div class="card-top">
        <p class="game-type">${copy.genre}</p>
        <span class="game-status ${statusClassMap[featured.status] || ""}">${statusText}</span>
      </div>
      <h3 class="game-title">${copy.title}</h3>
      <p class="game-summary">${copy.summary}</p>
      <ul class="chip-list">${copy.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul>
      <div class="meta-row">
        <span>${t.platform}: ${featured.platform.join(" / ")}</span>
        <span>${t.timeline}: ${copy.timeline}</span>
        <span>${t.phase}: ${statusText}</span>
      </div>
      <div class="link-row" id="featuredLinks"></div>
    </div>
  `;

  const linkRow = dom.featuredCard.querySelector("#featuredLinks");
  buildLinkRow(linkRow, featured, t);
}

function renderGames() {
  const t = i18n[state.locale];
  const list =
    state.filter === "all"
      ? state.games
      : state.games.filter((game) => game.status === state.filter);

  dom.gamesGrid.innerHTML = "";

  if (list.length === 0) {
    dom.gamesGrid.innerHTML = `<p class="game-summary">${t.empty}</p>`;
    return;
  }

  const frag = document.createDocumentFragment();

  list.forEach((game, index) => {
    const copy = game[state.locale] || game.en;
    const card = dom.gameCardTemplate.content.cloneNode(true);
    const root = card.querySelector(".game-card");
    const statusText = t.status[game.status] || game.status;

    root.style.animationDelay = `${index * 0.06}s`;

    const gameImage = card.querySelector(".game-image");
    gameImage.src = game.cardImage || game.coverImage;
    gameImage.alt = copy.title;

    card.querySelector(".game-type").textContent = copy.genre;
    card.querySelector(".game-status").textContent = statusText;
    card.querySelector(".game-status").classList.add(statusClassMap[game.status] || "");
    card.querySelector(".game-title").textContent = copy.title;
    card.querySelector(".game-summary").textContent = copy.summary;

    const chipList = card.querySelector(".chip-list");
    copy.tags.forEach((tag) => {
      const li = document.createElement("li");
      li.textContent = tag;
      chipList.appendChild(li);
    });

    const metaRow = card.querySelector(".meta-row");
    const metaItems = [
      `${t.platform}: ${game.platform.join(" / ")}`,
      `${t.timeline}: ${copy.timeline}`,
      `${t.phase}: ${statusText}`,
    ];

    metaItems.forEach((item) => {
      const span = document.createElement("span");
      span.textContent = item;
      metaRow.appendChild(span);
    });

    const linkRow = card.querySelector(".link-row");
    buildLinkRow(linkRow, game, t);

    frag.appendChild(card);
  });

  dom.gamesGrid.appendChild(frag);
}

function renderText() {
  const t = i18n[state.locale];

  document.documentElement.lang = t.htmlLang;
  document.title = t.title;
  document.querySelector('meta[name="description"]').setAttribute("content", t.description);

  dom.kicker.textContent = t.kicker;
  dom.companyClaim.textContent = t.companyClaim;
  dom.heroTitle.textContent = t.heroTitle;
  dom.heroText.textContent = t.heroText;

  dom.featuredHeading.textContent = t.featuredHeading;
  dom.featuredHint.textContent = t.featuredHint;
  dom.studioHeading.textContent = t.studioHeading;
  dom.contactHeading.textContent = t.contactHeading;
  dom.contactText.textContent = t.contactText;
  dom.gamesHeading.textContent = t.gamesHeading;
  dom.gamesHint.textContent = t.gamesHint;
  dom.statusLabel.textContent = t.statusLabel;
  dom.footerText.textContent = t.footerText;

  renderFeatures();
  renderStatusOptions();
  renderFeatured();
  renderGames();
  applyLanguageToggleUI();
}

function setLocale(locale, source) {
  state.locale = locale;
  state.localeSource = source;
  localStorage.setItem("gv_locale", locale);
  renderText();
}

async function detectLocale() {
  const saved = localStorage.getItem("gv_locale");
  if (saved === "zh" || saved === "en") {
    return { locale: saved, source: "manual" };
  }

  try {
    const response = await fetch("/api/locale");
    if (response.ok) {
      const data = await response.json();
      if (data.locale === "zh" || data.locale === "en") {
        return { locale: data.locale, source: data.source || "geo" };
      }
    }
  } catch {
    // Ignore and fallback to browser-based detection.
  }

  const browserLang = (navigator.language || "").toLowerCase();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  const isZhPreferred = browserLang.startsWith("zh") || timezone === "Asia/Shanghai";
  return { locale: isZhPreferred ? "zh" : "en", source: "fallback" };
}

function wireEvents() {
  dom.statusFilter.addEventListener("change", (event) => {
    state.filter = event.target.value;
    renderGames();
  });

  dom.langZh.addEventListener("click", () => setLocale("zh", "manual"));
  dom.langEn.addEventListener("click", () => setLocale("en", "manual"));
}

async function init() {
  dom.year.textContent = new Date().getFullYear();

  const response = await fetch("data/games.json");
  if (!response.ok) {
    throw new Error(String(response.status));
  }

  const data = await response.json();
  state.games = data.games || [];

  const detected = await detectLocale();
  state.locale = detected.locale;
  state.localeSource = detected.source;

  wireEvents();
  renderText();
}

init().catch((error) => {
  const t = i18n.zh;
  dom.gamesGrid.innerHTML = `<p class="game-summary">${t.loadErrorPrefix}${error.message}</p>`;
});
