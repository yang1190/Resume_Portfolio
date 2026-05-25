(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ──────────────────────────────────────────────────────────────────────────
  // i18n dictionary
  //
  // Static markup is tagged with `data-i18n="path.to.key"` (textContent) or
  // `data-i18n-html="path.to.key"` (innerHTML, used for headings containing
  // <em>). The active language is persisted in localStorage as "site-lang".
  // Defaults to English on first visit per the brief.
  // ──────────────────────────────────────────────────────────────────────────
  const I18N = {
    en: {
      meta: {
        title: "HAOLIANG YANG — Senior Level Artist & AI Creative Explorer",
        description:
          "HAOLIANG YANG — Senior Level Artist, Art Director, and AI Creative Explorer specializing in AAA game art, level art, AI painting, vibe coding, and AI filmmaking.",
      },
      header: { brand: "HAOLIANG YANG" },
      nav: {
        about: "About",
        expertise: "Expertise",
        aiLab: "AI Lab",
        aiLabFull: "AI Creative Lab",
        gallery: "Gallery",
        experience: "Experience",
        contact: "Contact",
        menuToggle: "Open navigation menu",
        langSwitch: "中文",
        langSwitchAria: "Switch to Chinese",
      },
      hero: {
        eyebrow: "Senior Level Artist · AI Creative Explorer",
        title: "Builds <em>worlds you can step into</em> — for games, AI, and film.",
        lede:
          "Senior Level Artist at Digital Extremes, with credits at Ubisoft and CCP Games — AAA-honed environment and level art, now pushed further by AI-driven creative workflows.",
        ctaGallery: "View Gallery",
        ctaContact: "Get in Touch",
        panelTopline: "Current Role",
        panelTitle: "Senior Level Artist",
        panelLocation: "Digital Extremes · London, Canada Area",
        stat1Label: "Years in games",
        stat2Label: "Production background",
        stat3Label: "Creative workflow",
        quick1: "Level Art · Environment Art · Lighting",
        quick2: "Art Direction · Team Leadership · Pipeline",
        quick3: "Vibe Coding · AI Painting · AI Filmmaking",
      },
      about: {
        kicker: "Profile",
        title: "AAA game art experience, expanded by <em>AI-native creativity</em>.",
        p1:
          "Haoliang Yang is a Canada-based senior game artist with deep AAA production experience across Digital Extremes, Ubisoft, CCP Games, Garena Group, and The9 Limited. His expertise spans the full production craft — level art, environment creation, engine editor workflows, lighting, and performance optimization — and extends into art leadership, where he has driven art management, outsourcing strategy, and visual style development.",
        p2:
          "Beyond traditional game art production, he is deliberately building an AI-native creative practice — harnessing vibe coding to rapidly prototype tools and web experiences, AI painting to accelerate visual ideation, and AI filmmaking to craft mood, sequencing, and cinematic storytelling.",
      },
      expertise: {
        kicker: "Expertise",
        title: "A balanced practice across <em>production, leadership, and AI</em>.",
        card1Title: "Game Art & Production",
        card1Tags: ["Level Art", "Environment Art", "Video Games", "Unreal Engine 3", "Lighting", "Optimization"],
        card2Title: "Art Direction & Leadership",
        card2Tags: ["Art Direction", "Team Leadership", "Production Planning", "Outsourcing", "Visual Style", "Documentation"],
        card3Title: "AI Creative Skills",
        card3Tags: ["Vibe Coding", "AI Painting", "AI Image Generation", "AI Filmmaking", "AI Storytelling", "Creative Prototyping"],
      },
      software: {
        kicker: "Software Toolkit",
        title:
          "Production-grade tools across <em>3D, Game Engines, Modling, Texturing, and Coding</em>.",
        lede: "A daily-driver stack honed through two decades of AAA environment, level, and lighting work.",
      },
      aiLab: {
        kicker: "AI Creative Lab",
        title: "Exploring the next visual pipeline through <em>AI-assisted making</em>.",
        cards: [
          {
            title: "Vibe Coding",
            desc:
              "Rapidly prototyping websites, creative tools, interaction ideas, and presentation systems with AI-assisted coding workflows.",
          },
          {
            title: "AI Painting",
            desc:
              "Using AI image generation to explore atmosphere, composition, mood boards, concept directions, and high-speed visual iteration.",
          },
          {
            title: "AI Filmmaking",
            desc:
              "Experimenting with AI video and cinematic generation for mood, sequence blocking, story beats, and visual narrative tests.",
          },
          {
            title: "AI Pipeline",
            desc:
              "Investigating AI-enhanced visual development workflows for game art, cinematic content, and production communication.",
          },
        ],
      },
      gallerySection: {
        kicker: "Gallery",
        title: "Selected work across <em>shipped titles, AI exploration, and immersive worlds</em>.",
        intro:
          "A curated mix of production frames from shipped titles, recent AI-driven studies, and links to the wider portfolio archive. Filter by discipline to browse the work.",
      },
      experience: {
        kicker: "Experience",
        title: "A career built across <em>AAA production and art leadership</em>.",
        presentLabel: "Present",
        items: [
          {
            role: "Senior Level Artist · London, Canada Area",
            desc:
              "Drive the visual quality of level and environment art for a live-service AAA title, setting the standard for polish, spatial readability, and production consistency across the art team.",
          },
          {
            role: "Art Director · Shanghai City, China",
            desc:
              "Owned the creative vision across multiple projects end-to-end — defining visual direction, leading campaign presentations to stakeholders, and reviewing design and art output to enforce a high quality bar.",
          },
          {
            role: "Art Manager · Lead Environment Artist · Senior Level Artist",
            desc:
              "Headed art department operations for DUST 514 — owning planning and scheduling while leading environment modeling, level implementation, cross-team coordination, and quality assurance across the production.",
          },
          {
            role: "Art Manager",
            desc:
              "Built and led a 40-artist department — establishing the project's art style and production pipeline, setting quality standards, and managing outsourcing partners to deliver at scale.",
          },
          {
            role: "Level Artist",
            desc:
              "Shaped game environments across multiple AAA titles — owning modeling, texturing, editor integration, lighting, and final performance optimization to shipping-quality standards.",
          },
        ],
      },
      education: {
        kicker: "Education & Languages",
        title: "Design foundation with <em>global production experience</em>.",
        school: "Soochow University (CN)",
        degree: "Bachelor’s degree, Design Art · 2000 — 2004",
        langTitle: "Languages",
        lang1: "Chinese — Native or Bilingual",
        lang2: "English — Professional Working",
      },
      contact: {
        kicker: "Contact",
        title: "Let’s discuss games, worlds, and <em>AI-driven visual ideas</em>.",
      },
      footer: {
        text: "Haoliang Yang. Built with HTML5, liquid glass CSS, and AI-assisted creative direction.",
      },
      gallery: {
        filterAll: "All",
        typeMotion: "Motion",
        typeLink: "Link",
        typeImage: "Image",
        actionVideo: "Watch motion",
        actionLink: "Open destination",
        actionImage: "Preview study",
        defaultTitle: "Untitled Gallery Item",
        defaultCategory: "Gallery",
        defaultPreviewTitle: "Preview",
        relatedLink: "Open related link",
        placeholder: "Gallery item",
        preview: "Gallery preview",
        multiCount: (n) => `${n} images · scroll to browse`,
        empty: "No gallery items found for this category.",
        loadError:
          "Gallery data could not be loaded. Please run the site through a local static server.",
        altSuffix: "Gallery artwork",
        openLabel: (t) => `Open ${t || "gallery item"}`,
        closeAria: "Close gallery preview",
      },
      categories: {
        WarFrame: "WarFrame",
        AIGC: "AIGC",
        Material: "Material",
        ShowCase: "ShowCase",
        "DUST 514": "DUST 514",
        Render: "Render",
        Metaverse: "Metaverse",
        GameDev: "GameDev",
        "Vibe Coding": "Vibe Coding",
      },
    },
    zh: {
      meta: {
        title: "杨浩亮 — 高级关卡美术师 & AI创意探索者",
        description:
          "杨浩亮 — 高级关卡美术师、艺术总监、AI创意探索者，专注于3A游戏美术、关卡美术、AI绘画、AI编程与AI影视制作。",
      },
      header: { brand: "杨浩亮" },
      nav: {
        about: "关于",
        expertise: "专业领域",
        aiLab: "AI实验室",
        aiLabFull: "AI创意实验室",
        gallery: "作品集",
        experience: "工作经历",
        contact: "联系方式",
        menuToggle: "打开导航菜单",
        langSwitch: "EN",
        langSwitchAria: "Switch to English",
      },
      hero: {
        eyebrow: "高级关卡美术师 · AI创意探索者",
        title: "构筑<em>可置身其中的世界</em> —— 服务于游戏、AI与影视。",
        lede:
          "Digital Extremes 高级关卡美术师，曾任职于 Ubisoft 与 CCP Games —— 经3A大作锤炼的场景与关卡美术功底，正借助AI驱动的创意工作流持续突破边界。",
        ctaGallery: "浏览作品",
        ctaContact: "联系我",
        panelTopline: "当前职位",
        panelTitle: "高级关卡美术师",
        panelLocation: "Digital Extremes · 加拿大 London",
        stat1Label: "游戏行业从业",
        stat2Label: "3A制作背景",
        stat3Label: "创意工作流",
        quick1: "关卡美术 · 场景美术 · 灯光",
        quick2: "艺术指导 · 团队管理 · 制作流程",
        quick3: "AI编程 · AI绘画 · AI影视制作",
      },
      about: {
        kicker: "简介",
        title: "深厚的3A游戏美术经验，融合<em>AI原生创造力</em>。",
        p1:
          "杨浩亮是一位常驻加拿大的高级游戏美术师，任职于 Digital Extremes、Ubisoft、CCP Games、Garena 集团以及第九城市（The9 Limited），积累了深厚的3A大作制作经验。他的专长覆盖游戏制作全流程 —— 关卡美术、场景搭建、引擎编辑器工作流、灯光与性能优化，并延伸至艺术管理领域，主导过艺术管理、外包策略与视觉风格开发等工作。",
        p2:
          "在传统游戏美术制作之外，他正在着力构建一套AI原生的创作实践 —— 通过AI编程快速原型化工具与网页体验，借助AI绘画加速视觉构思，并运用AI影视制作打磨氛围、节奏与电影化叙事。",
      },
      expertise: {
        kicker: "专业领域",
        title: "在<em>制作、领导力与AI</em>之间均衡发展。",
        card1Title: "游戏美术与制作",
        card1Tags: ["关卡美术", "场景美术", "电子游戏", "Unreal Engine 5", "灯光", "性能优化"],
        card2Title: "艺术指导与领导力",
        card2Tags: ["艺术指导", "团队领导", "制作规划", "外包管理", "视觉风格", "文档管理"],
        card3Title: "AI 创意技能",
        card3Tags: ["AI编程", "AI绘画", "AI图像生成", "AI影视制作", "AI叙事", "创意原型"],
      },
      software: {
        kicker: "软件工具栈",
        title: "覆盖<em>3D 建模、游戏引擎、模型、贴图与编程</em>的专业级工具栈。",
        lede: "在二十年3A场景、关卡与灯光制作中持续打磨的日常工具组合。",
      },
      aiLab: {
        kicker: "AI 创意实验室",
        title: "通过<em>AI辅助创作</em>探索新一代视觉制作流程。",
        cards: [
          {
            title: "AI 编程",
            desc:
              "运用AI辅助编程工作流，快速原型化网站、创意工具、交互方案与演示系统。",
          },
          {
            title: "AI 绘画",
            desc:
              "使用AI图像生成探索氛围、构图、情绪板与概念方向，实现高速视觉迭代。",
          },
          {
            title: "AI 影视制作",
            desc:
              "试验AI视频与电影化生成，用于氛围营造、镜头编排、故事节奏与视觉叙事测试。",
          },
          {
            title: "AI 工作流",
            desc:
              "研究AI增强的视觉开发工作流，服务于游戏美术、影视内容与制作沟通。",
          },
        ],
      },
      gallerySection: {
        kicker: "作品集",
        title: "精选作品涵盖<em>已发行游戏、AI 探索与沉浸式世界</em>。",
        intro:
          "精心编排的作品组合 —— 包含已发行游戏的制作画面、近期的AI驱动研究，以及通向更完整作品库的链接。可按类别筛选浏览。",
      },
      experience: {
        kicker: "工作经历",
        title: "横跨<em>3A 制作与艺术管理</em>的职业生涯。",
        presentLabel: "至今",
        items: [
          {
            role: "高级关卡美术师 · 加拿大 London",
            desc:
              "为一款长线服务型3A大作驱动关卡与场景美术的视觉品质，为整个美术团队树立打磨度、空间可读性与制作一致性的标准。",
          },
          {
            role: "美术总监 · 中国上海",
            desc:
              "端到端负责多个项目的创意愿景 —— 定义视觉方向、向利益相关方主导战役提案、审查设计与美术产出以坚守高品质标准。",
          },
          {
            role: "美术经理 · 主场景美术师 · 高级关卡美术师",
            desc:
              "主管 DUST 514 美术部门运营 —— 负责规划与排期，同时主导场景建模、关卡实现、跨团队协作及全制作流程的质量保障。",
          },
          {
            role: "美术经理",
            desc:
              "搭建并领导一支40人美术部门 —— 确立项目的美术风格与制作流程，制定质量标准，管理外包伙伴以实现规模化交付。",
          },
          {
            role: "关卡美术师",
            desc:
              "为多款3A游戏打造游戏环境 —— 负责建模、贴图、编辑器集成、灯光与最终性能优化，达到出货级品质标准。",
          },
        ],
      },
      education: {
        kicker: "教育背景与语言",
        title: "设计基础叠加<em>全球制作经验</em>。",
        school: "苏州大学（中国）",
        degree: "设计艺术学士 · 2000 — 2004",
        langTitle: "语言",
        lang1: "中文 —— 母语 / 双语水平",
        lang2: "英文 —— 专业工作水平",
      },
      contact: {
        kicker: "联系方式",
        title: "欢迎一同探讨游戏、世界，以及<em>AI 驱动的视觉创意</em>。",
      },
      footer: {
        text: "杨浩亮 · 由 HTML5、Liquid Glass CSS 与 AI 辅助创意指导构建。",
      },
      gallery: {
        filterAll: "全部",
        typeMotion: "动态",
        typeLink: "链接",
        typeImage: "图片",
        actionVideo: "观看动态",
        actionLink: "打开链接",
        actionImage: "查看详情",
        defaultTitle: "未命名作品",
        defaultCategory: "作品",
        defaultPreviewTitle: "预览",
        relatedLink: "打开相关链接",
        placeholder: "作品项",
        preview: "作品预览",
        multiCount: (n) => `${n} 张图片 · 滚动浏览`,
        empty: "该类别下暂无作品。",
        loadError: "无法加载作品数据，请通过本地静态服务器运行此站点。",
        altSuffix: "作品图",
        openLabel: (t) => `打开 ${t || "作品"}`,
        closeAria: "关闭预览",
      },
      categories: {
        WarFrame: "星际战甲",
        AIGC: "AIGC",
        Material: "材质",
        ShowCase: "作品展示",
        "DUST 514": "DUST 514",
        Render: "渲染",
        Metaverse: "元宇宙",
        GameDev: "游戏开发",
        "Vibe Coding": "AI 编程",
      },
    },
  };

  const STORAGE_KEY = "site-lang";
  const SUPPORTED = ["en", "zh"];
  let currentLang = (() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch (_) {
      /* localStorage may be blocked */
    }
    return "en"; // brief: default English
  })();

  // Walk dot-paths like "experience.items.0.role" through the dictionary.
  const lookup = (lang, path) => {
    const dict = I18N[lang] || I18N.en;
    return path.split(".").reduce((acc, key) => {
      if (acc == null) return undefined;
      return acc[key];
    }, dict);
  };

  const t = (path, fallback) => {
    const value = lookup(currentLang, path);
    if (value == null) return fallback ?? lookup("en", path) ?? path;
    return value;
  };

  // Apply translations to every static element tagged with data-i18n attrs.
  // Called once on boot and again whenever the language toggles.
  const applyTranslations = () => {
    document.documentElement.lang = currentLang === "zh" ? "zh" : "en";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = lookup(currentLang, el.dataset.i18n);
      if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const value = lookup(currentLang, el.dataset.i18nHtml);
      if (typeof value === "string") el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      // Format: "attr1:key.path,attr2:other.key"
      el.dataset.i18nAttr.split(",").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (!attr || !key) return;
        const value = lookup(currentLang, key);
        if (typeof value === "string") el.setAttribute(attr, value);
      });
    });

    document.querySelectorAll("[data-i18n-meta]").forEach((el) => {
      const value = lookup(currentLang, el.dataset.i18nMeta);
      if (typeof value === "string") el.setAttribute("content", value);
    });

    const titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) document.title = titleEl.textContent;
  };

  // ──────────────────────────────────────────────────────────────────────────
  // Boot: year, mobile menu, language toggle, reveal observer
  // ──────────────────────────────────────────────────────────────────────────

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector("#mobile-nav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Notify gallery (and any future consumer) when the language changes so it
  // can re-render dynamic content without a full page reload.
  const langListeners = new Set();
  const onLangChange = (fn) => langListeners.add(fn);

  const setLanguage = (lang) => {
    if (!SUPPORTED.includes(lang)) return;
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      /* ignore */
    }
    applyTranslations();
    langListeners.forEach((fn) => fn(lang));
  };

  const langToggle = document.querySelector("[data-lang-toggle]");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      setLanguage(currentLang === "en" ? "zh" : "en");
    });
  }

  // Apply translations immediately so the page is correctly localized before
  // the reveal observer captures element transitions.
  applyTranslations();

  const revealObserver =
    "IntersectionObserver" in window && !prefersReducedMotion
      ? new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
        )
      : null;

  const observeReveal = (element) => {
    if (!element) return;
    if (revealObserver) {
      revealObserver.observe(element);
    } else {
      element.classList.add("is-visible");
    }
  };

  document.querySelectorAll(".reveal").forEach(observeReveal);

  const setupTiltCard = (card) => {
    if (!card || prefersReducedMotion || card.dataset.tiltReady === "true") return;
    card.dataset.tiltReady = "true";

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = (x / rect.width - 0.5) * 8;
      const rotateX = (0.5 - y / rect.height) * 8;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.01)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  };

  const cursorGlow = document.querySelector(".cursor-glow");
  if (cursorGlow && !prefersReducedMotion) {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    window.addEventListener("pointermove", (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    });

    const animateGlow = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      cursorGlow.style.transform = `translate3d(${currentX - 144}px, ${currentY - 144}px, 0)`;
      requestAnimationFrame(animateGlow);
    };

    animateGlow();
  }

  document.querySelectorAll(".tilt-card").forEach(setupTiltCard);

  const iconMarkup = (id) => `<svg class="icon" aria-hidden="true"><use href="#${id}"></use></svg>`;

  const getMediaSource = (item) => {
    if (Array.isArray(item.images) && item.images.length > 0) return item.images[0];
    return item.src || item.thumbnail || "";
  };

  const isMultiImage = (item) =>
    item.type === "image" && Array.isArray(item.images) && item.images.length > 1;

  // Localized accessors for gallery item fields. Falls back to the English
  // field when a Chinese override isn't provided in gallery.json.
  const getLocalizedTitle = (item) =>
    (currentLang === "zh" && item.title_zh) || item.title || t("gallery.defaultTitle");

  const getLocalizedDescription = (item) =>
    (currentLang === "zh" && item.description_zh) || item.description || "";

  const getLocalizedCategory = (item) => {
    const original = item.category || t("gallery.defaultCategory");
    const map = lookup(currentLang, "categories") || {};
    return map[original] || original;
  };

  const getTypeLabel = (type) => {
    if (type === "video") return t("gallery.typeMotion");
    if (type === "link") return t("gallery.typeLink");
    return t("gallery.typeImage");
  };

  const getActionLabel = (type) => {
    if (type === "video") return t("gallery.actionVideo");
    if (type === "link") return t("gallery.actionLink");
    return t("gallery.actionImage");
  };

  const getTypeIcon = (type) => {
    if (type === "video") return "icon-play";
    if (type === "link") return "icon-external";
    return "icon-image";
  };

  const createMediaElement = (item, { lightbox = false } = {}) => {
    if (item.type === "video") {
      const video = document.createElement("video");
      video.className = lightbox ? "" : "gallery-media";
      video.muted = !lightbox;
      video.loop = !lightbox;
      video.playsInline = true;
      // Always autoplay. Muted-autoplay is allowed by every modern browser, so
      // gallery cards start playing on page load instead of waiting for hover
      // or scroll. preload="auto" ensures enough data is fetched up-front so
      // there's no stall before the first frame.
      video.preload = "auto";
      video.controls = lightbox;
      video.autoplay = true;
      if (item.poster) video.poster = item.poster;

      const source = document.createElement("source");
      source.src = item.src;
      source.type = "video/mp4";
      video.append(source);
      return video;
    }

    const imageSrc = getMediaSource(item);
    if (imageSrc) {
      const image = document.createElement("img");
      image.className = lightbox ? "" : "gallery-media";
      image.src = imageSrc;
      image.alt = getLocalizedTitle(item) || t("gallery.altSuffix");
      image.loading = lightbox ? "eager" : "lazy";
      image.decoding = "async";
      return image;
    }

    const placeholder = document.createElement("div");
    placeholder.className = lightbox ? "gallery-empty" : "gallery-media gallery-empty";
    placeholder.textContent = getLocalizedTitle(item) || t("gallery.placeholder");
    return placeholder;
  };

  const initGallery = async () => {
    const grid = document.querySelector("#gallery-grid");
    const filters = document.querySelector("#gallery-filters");
    if (!grid || !filters) return;

    const lightbox = document.querySelector("#gallery-lightbox");
    const lightboxPanel = lightbox?.querySelector(".gallery-lightbox-panel");
    const lightboxMedia = lightbox?.querySelector(".gallery-lightbox-media");
    const lightboxTitle = document.querySelector("#gallery-lightbox-title");
    const lightboxCategory = document.querySelector("#gallery-lightbox-category");
    const lightboxDescription = document.querySelector("#gallery-lightbox-description");
    const lightboxLink = document.querySelector("#gallery-lightbox-link");
    const lightboxClose = lightbox?.querySelector(".gallery-lightbox-close");
    let activeFilter = "All"; // canonical key — never localized
    let galleryItems = [];
    let lastFocusedElement = null;
    let activeLightboxItem = null;

    // Auto-play gallery videos as soon as they scroll into view, pause when out.
    const videoViewportObserver =
      "IntersectionObserver" in window && !prefersReducedMotion
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                const video = entry.target.querySelector("video.gallery-media");
                if (!video) return;

                if (entry.isIntersecting) {
                  video.play().catch(() => undefined);
                } else {
                  video.pause();
                }
              });
            },
            { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
          )
        : null;

    const sizePanelToMedia = () => {
      if (!lightboxPanel || !lightboxMedia) return;
      const media = lightboxMedia.firstElementChild;
      lightboxPanel.style.width = "";
      if (!media) return;
      const width = media.offsetWidth;
      if (width) lightboxPanel.style.width = `${width}px`;
    };

    const mediaResizeObserver =
      "ResizeObserver" in window ? new ResizeObserver(() => sizePanelToMedia()) : null;

    const openLightbox = (item) => {
      if (!lightbox || !lightboxMedia || !lightboxTitle || !lightboxCategory || !lightboxDescription || !lightboxLink) return;

      lastFocusedElement = document.activeElement;
      activeLightboxItem = item;
      mediaResizeObserver?.disconnect();
      if (lightboxPanel) lightboxPanel.style.width = "";

      const multi = isMultiImage(item);
      lightbox.classList.toggle("is-lightbox-multi", multi);

      if (multi) {
        const stack = document.createElement("div");
        stack.className = "gallery-lightbox-stack";
        const title = getLocalizedTitle(item);
        item.images.forEach((src, i) => {
          const img = document.createElement("img");
          img.src = src;
          img.alt = `${title || "Gallery"} – ${i + 1}`;
          img.loading = i === 0 ? "eager" : "lazy";
          img.decoding = "async";
          stack.append(img);
        });

        const counter = document.createElement("span");
        counter.className = "gallery-lightbox-count";
        counter.textContent = t("gallery.multiCount")(item.images.length);

        lightboxMedia.replaceChildren(stack, counter);
        stack.scrollTop = 0;
      } else {
        const media = createMediaElement(item, { lightbox: true });
        lightboxMedia.replaceChildren(media);
        mediaResizeObserver?.observe(media);
      }

      lightboxTitle.textContent = getLocalizedTitle(item) || t("gallery.preview");
      lightboxCategory.textContent = getLocalizedCategory(item);
      lightboxDescription.textContent = getLocalizedDescription(item);

      if (item.type === "link" && item.href) {
        lightboxLink.hidden = false;
        lightboxLink.href = item.href;
      } else {
        lightboxLink.hidden = true;
        lightboxLink.removeAttribute("href");
      }

      lightbox.classList.toggle("is-lightbox-video", item.type === "video");
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("has-lightbox");
      lightboxClose?.focus({ preventScroll: true });
      if (!multi) requestAnimationFrame(sizePanelToMedia);
    };

    const closeLightbox = () => {
      if (!lightbox || !lightboxMedia) return;

      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("has-lightbox");
      mediaResizeObserver?.disconnect();
      lightboxMedia.querySelectorAll("video").forEach((video) => video.pause());
      lightboxMedia.replaceChildren();
      if (lightboxPanel) lightboxPanel.style.width = "";
      activeLightboxItem = null;

      if (lastFocusedElement instanceof HTMLElement) {
        lastFocusedElement.focus({ preventScroll: true });
      }
    };

    lightbox?.querySelectorAll("[data-gallery-close]").forEach((control) => {
      control.addEventListener("click", closeLightbox);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && lightbox?.classList.contains("is-open")) {
        closeLightbox();
      }
    });

    const createGalleryCard = (item, index) => {
      const card = document.createElement("article");
      card.className = "gallery-card tilt-card reveal";
      card.dataset.category = item.category || "Gallery"; // canonical, untranslated
      card.dataset.layout = item.layout || "standard";
      card.style.setProperty("--stagger", `${Math.min(index * 90, 540)}ms`);
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      const localTitle = getLocalizedTitle(item);
      card.setAttribute("aria-label", t("gallery.openLabel")(localTitle));

      const media = createMediaElement(item);
      card.append(media);

      const frame = document.createElement("span");
      frame.className = "gallery-card-frame";
      frame.setAttribute("aria-hidden", "true");
      card.append(frame);

      const copy = document.createElement("div");
      copy.className = "gallery-card-copy";
      copy.innerHTML = `
        <div class="gallery-meta-row">
          <span class="gallery-category">${getLocalizedCategory(item)}</span>
          <span class="gallery-type">${iconMarkup(getTypeIcon(item.type))}${getTypeLabel(item.type)}</span>
        </div>
        <h3>${localTitle}</h3>
        <p>${getLocalizedDescription(item)}</p>
        <span class="gallery-card-action">
          ${getActionLabel(item.type)}
          ${iconMarkup(item.type === "link" ? "icon-external" : "icon-arrow-right")}
        </span>
      `;
      card.append(copy);

      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--gallery-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
        card.style.setProperty("--gallery-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
      });

      card.addEventListener("click", () => openLightbox(item));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openLightbox(item);
        }
      });

      observeReveal(card);
      setupTiltCard(card);
      if (item.type === "video") videoViewportObserver?.observe(card);

      return card;
    };

    const renderGallery = () => {
      videoViewportObserver?.disconnect();
      grid.replaceChildren();

      const visibleItems =
        activeFilter === "All"
          ? galleryItems
          : galleryItems.filter((item) => item.category === activeFilter);

      if (!visibleItems.length) {
        const empty = document.createElement("p");
        empty.className = "gallery-empty liquid-glass text-white-80";
        empty.textContent = t("gallery.empty");
        grid.append(empty);
        return;
      }

      const fragment = document.createDocumentFragment();
      visibleItems.forEach((item, index) => fragment.append(createGalleryCard(item, index)));
      grid.append(fragment);
    };

    const renderFilters = () => {
      // categories array stores canonical (English) keys; the label shown to
      // the user is looked up against the categories map for the active lang.
      const categories = ["All", ...new Set(galleryItems.map((item) => item.category).filter(Boolean))];
      filters.replaceChildren();

      const labelFor = (cat) => {
        if (cat === "All") return t("gallery.filterAll");
        const map = lookup(currentLang, "categories") || {};
        return map[cat] || cat;
      };

      categories.forEach((category) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `gallery-filter${category === activeFilter ? " is-active" : ""}`;
        button.textContent = labelFor(category);
        button.dataset.category = category;
        button.setAttribute("aria-pressed", String(category === activeFilter));
        button.addEventListener("click", () => {
          activeFilter = category;
          filters.querySelectorAll(".gallery-filter").forEach((filter) => {
            const isActive = filter.dataset.category === category;
            filter.classList.toggle("is-active", isActive);
            filter.setAttribute("aria-pressed", String(isActive));
          });
          renderGallery();
        });
        filters.append(button);
      });
    };

    // Re-render gallery filters/cards in the new language while preserving the
    // active filter. If the lightbox is open, refresh its localized copy too.
    onLangChange(() => {
      if (!galleryItems.length) return;
      renderFilters();
      renderGallery();

      if (activeLightboxItem && lightbox?.classList.contains("is-open")) {
        lightboxTitle.textContent = getLocalizedTitle(activeLightboxItem) || t("gallery.preview");
        lightboxCategory.textContent = getLocalizedCategory(activeLightboxItem);
        lightboxDescription.textContent = getLocalizedDescription(activeLightboxItem);
      }
    });

    try {
      const response = await fetch("assets/data/gallery.json", { cache: "no-store" });
      if (!response.ok) throw new Error(`Gallery data request failed: ${response.status}`);
      galleryItems = await response.json();
      if (!Array.isArray(galleryItems)) throw new Error("Gallery data must be an array.");

      renderFilters();
      renderGallery();
    } catch (error) {
      console.error(error);
      const message = document.createElement("p");
      message.className = "gallery-empty liquid-glass text-white-80";
      message.textContent = t("gallery.loadError");
      grid.replaceChildren(message);
    }
  };

  initGallery();

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    });
  });
})();
