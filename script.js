const root = document.documentElement;
const hero = document.querySelector("[data-hero]");
const aiStackSection = document.querySelector(".ai-stack-section");
const aiStackVideo = document.querySelector(".ai-stack-video");
const servicePillarGroups = document.querySelectorAll("[data-service-pillars]");
const interactiveItems = document.querySelectorAll(
  ".button, .icon-button, .glass-card, .stats-row div, .case-card, .industry-stage, .industry-tile, .note-card, .note-feature, .note-row, .reason-visual, .service-pillar, .partner-status-item, .partner-stack-row, .partner-proof-card, .partner-lead-card"
);
const desktopQuery = window.matchMedia("(min-width: 981px)");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let aiStackVideoFrame;

const aiStackVideoState = {
  isReady: false,
  isHovering: false,
  isSeeking: false,
  duration: 0,
  targetTime: 0,
  smoothTime: 0
};

function updateMenuAnchor(item) {
  const trigger = item.querySelector(".nav-trigger");
  const menu = item.querySelector(".compact-menu, .services-list-menu");
  const header = item.closest(".site-header");

  if (!trigger || !menu || !header) return;

  const triggerRect = trigger.getBoundingClientRect();
  const headerRect = header.getBoundingClientRect();
  const menuWidth = menu.offsetWidth || 300;
  const padding = 16;
  const center = triggerRect.left - headerRect.left + triggerRect.width / 2;
  const min = menuWidth / 2 + padding;
  const max = headerRect.width - menuWidth / 2 - padding;
  const anchoredCenter = Math.max(min, Math.min(center, max));

  item.style.setProperty("--menu-x", `${anchoredCenter}px`);
}

function setPointerVars(event, target = root) {
  const rect = target === root ? { left: 0, top: 0, width: innerWidth, height: innerHeight } : target.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  target.style.setProperty("--mx", `${x}%`);
  target.style.setProperty("--my", `${y}%`);
  target.style.setProperty("--shine-x", `${x}%`);
  target.style.setProperty("--shine-y", `${y}%`);
  if (target === root) {
    target.style.setProperty("--tilt-x", ((x - 50) / 50).toFixed(3));
    target.style.setProperty("--tilt-y", ((y - 50) / 50).toFixed(3));
  }
}

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - innerHeight;
  const progress = scrollable > 0 ? (scrollY / scrollable) * 100 : 0;
  root.style.setProperty("--scroll", `${progress}%`);
}

function playAiStackVideoForward() {
  if (!aiStackVideo || !aiStackVideo.paused) return;

  aiStackVideo.loop = true;
  aiStackVideo.playbackRate = 1;
  aiStackVideo.play().catch(() => {});
}

function driveAiStackVideo() {
  if (!aiStackVideo || !aiStackVideoState.isReady || aiStackVideoState.duration <= 0) {
    aiStackVideoFrame = requestAnimationFrame(driveAiStackVideo);
    return;
  }

  if (aiStackVideoState.isHovering) {
    if (!aiStackVideo.paused) aiStackVideo.pause();
    aiStackVideoState.smoothTime += (aiStackVideoState.targetTime - aiStackVideoState.smoothTime) * 0.09;
    aiStackVideoState.smoothTime = Math.min(Math.max(aiStackVideoState.smoothTime, 0), aiStackVideoState.duration);

    if (!aiStackVideoState.isSeeking) {
      aiStackVideo.currentTime = aiStackVideoState.smoothTime;
    }
  } else {
    aiStackVideoState.smoothTime = aiStackVideo.currentTime;
    playAiStackVideoForward();
  }

  aiStackVideoFrame = requestAnimationFrame(driveAiStackVideo);
}

function setAiStackVideoTarget(event) {
  if (!aiStackSection || !aiStackVideo || !aiStackVideoState.isReady || aiStackVideoState.duration <= 0) return;

  const progress = Math.min(Math.max(event.clientX / window.innerWidth, 0), 1);

  aiStackVideoState.targetTime = progress * aiStackVideoState.duration;
  aiStackVideoState.isHovering = true;
}

if (hero) {
  hero.addEventListener("pointermove", (event) => setPointerVars(event, root));
}

if (aiStackVideo && aiStackSection) {
  const startAiStackVideo = () => {
    aiStackVideoState.isReady = true;
    aiStackVideoState.duration = aiStackVideo.duration;
    aiStackVideoState.smoothTime = aiStackVideo.currentTime;
    playAiStackVideoForward();
    if (!aiStackVideoFrame) {
      aiStackVideoFrame = requestAnimationFrame(driveAiStackVideo);
    }
  };

  aiStackVideo.addEventListener("loadedmetadata", () => {
    aiStackVideoState.duration = aiStackVideo.duration;
  });

  aiStackVideo.addEventListener("seeking", () => {
    aiStackVideoState.isSeeking = true;
  });

  aiStackVideo.addEventListener("seeked", () => {
    aiStackVideoState.isSeeking = false;
  });

  ["canplaythrough", "canplay"].forEach((eventName) => {
    aiStackVideo.addEventListener(eventName, () => {
      if (!aiStackVideoState.isReady) {
        startAiStackVideo();
      }
    });
  });

  if (aiStackVideo.readyState >= 3) {
    startAiStackVideo();
  }

  aiStackSection.addEventListener("pointermove", setAiStackVideoTarget);
  aiStackSection.addEventListener("pointerleave", () => {
    aiStackVideoState.isHovering = false;
  });
}

interactiveItems.forEach((item) => {
  item.addEventListener("pointermove", (event) => setPointerVars(event, item));
});

servicePillarGroups.forEach((group) => {
  const pillars = group.querySelectorAll(".service-pillar");

  const setActivePillar = (activePillar) => {
    group.classList.add("has-active");
    pillars.forEach((pillar) => {
      pillar.classList.toggle("is-active", pillar === activePillar);
    });
  };

  pillars.forEach((pillar) => {
    pillar.addEventListener("pointerenter", () => setActivePillar(pillar));
    pillar.addEventListener("focusin", () => setActivePillar(pillar));
  });

  group.addEventListener("pointerleave", () => {
    const buildPillar = group.querySelector('[data-pillar="build"]');
    if (buildPillar) setActivePillar(buildPillar);
  });

  const buildPillar = group.querySelector('[data-pillar="build"]');
  if (buildPillar) setActivePillar(buildPillar);
});

addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

function initNav() {
  const menuButton = document.querySelector(".menu-button");
  const navItems = document.querySelectorAll(".nav-item.has-mega");
  let closeTimer;

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("menu-open");
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      menuButton.innerHTML = `<i class="${isOpen ? "ri-close-line" : "ri-menu-line"}" aria-hidden="true"></i>`;
      if (!isOpen) {
        navItems.forEach((item) => {
          item.classList.remove("is-open", "is-hovered");
          item.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
        });
      }
    });
  }

  navItems.forEach((item) => {
    const trigger = item.querySelector(".nav-trigger");

    item.addEventListener("pointerenter", () => {
      if (!desktopQuery.matches) return;
      clearTimeout(closeTimer);
      updateMenuAnchor(item);
      navItems.forEach((otherItem) => {
        if (otherItem === item) return;
        otherItem.classList.remove("is-hovered", "is-open");
        otherItem.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
      });
      item.classList.add("is-hovered");
      trigger?.setAttribute("aria-expanded", "true");
    });

    item.addEventListener("pointerleave", () => {
      if (!desktopQuery.matches) return;
      closeTimer = setTimeout(() => {
        item.classList.remove("is-hovered", "is-open");
        trigger?.setAttribute("aria-expanded", "false");
      }, 140);
    });

    trigger?.addEventListener("click", (event) => {
      if (desktopQuery.matches && trigger.matches("a[href]")) return;
      event.preventDefault();
      updateMenuAnchor(item);
      const shouldOpen = !item.classList.contains("is-open");
      navItems.forEach((otherItem) => {
        otherItem.classList.remove("is-open", "is-hovered");
        otherItem.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
      });
      item.classList.toggle("is-open", shouldOpen);
      trigger.setAttribute("aria-expanded", String(shouldOpen));
    });
  });

  addEventListener("resize", () => {
    updateScrollProgress();
    navItems.forEach(updateMenuAnchor);
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".site-header")) return;
    navItems.forEach((item) => {
      item.classList.remove("is-open", "is-hovered");
      item.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    document.body.classList.remove("menu-open");
    menuButton?.setAttribute("aria-label", "Open navigation");
    if (menuButton) menuButton.innerHTML = '<i class="ri-menu-line" aria-hidden="true"></i>';
    navItems.forEach((item) => {
      item.classList.remove("is-open", "is-hovered");
      item.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
    });
  });

  navItems.forEach(updateMenuAnchor);
}

async function loadNav() {
  const placeholder = document.getElementById("site-nav");
  if (!placeholder) {
    initNav();
    return;
  }
  try {
    const res = await fetch("components/nav.html");
    const html = await res.text();
    placeholder.outerHTML = html;
  } catch (e) {
    console.warn("Could not load nav component:", e);
  }
  initNav();
}

loadNav();

function setStatFinalValue(stat) {
  stat.textContent = `${stat.dataset.statValue}${stat.dataset.statSuffix || ""}`;
}

function animateStat(stat, index) {
  const target = Number(stat.dataset.statValue);
  const suffix = stat.dataset.statSuffix || "";

  if (!Number.isFinite(target) || reducedMotionQuery.matches) {
    setStatFinalValue(stat);
    return;
  }

  const duration = 980 + index * 120;
  const start = performance.now();

  function tick(now) {
    const elapsed = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - elapsed, 4);
    const value = Math.round(target * eased);
    stat.textContent = `${value}${suffix}`;

    if (elapsed < 1) {
      requestAnimationFrame(tick);
    } else {
      setStatFinalValue(stat);
    }
  }

  stat.textContent = `0${suffix}`;
  requestAnimationFrame(tick);
}

function animateStats(section) {
  if (section.dataset.statsAnimated === "true") return;
  const stats = section.querySelectorAll("[data-stat-value]");
  stats.forEach((stat, index) => animateStat(stat, index));
  section.dataset.statsAnimated = "true";
}

const industryLab = document.querySelector("[data-industry-lab]");

if (industryLab) {
  const tabs = industryLab.querySelectorAll(".industry-tab");
  const photo = industryLab.querySelector("[data-industry-photo]");
  const title = industryLab.querySelector("[data-industry-title]");
  const copy = industryLab.querySelector("[data-industry-copy]");
  const meta = industryLab.querySelector("[data-industry-meta]");
  const link = industryLab.querySelector("[data-industry-link]");

  function activateIndustry(tab) {
    tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
    if (photo) photo.className = `industry-stage-photo ${tab.dataset.visual}`;
    if (title) title.textContent = tab.dataset.title;
    if (copy) copy.textContent = tab.dataset.copy;
    if (meta) meta.textContent = tab.dataset.meta;
    if (link) link.setAttribute("href", tab.dataset.href);
  }

  tabs.forEach((tab) => {
    tab.addEventListener("mouseenter", () => activateIndustry(tab));
    tab.addEventListener("focus", () => activateIndustry(tab));
    tab.addEventListener("click", () => activateIndustry(tab));
  });
}


const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        if (entry.target.classList.contains("focus-section")) {
          animateStats(entry.target);
        }
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".stats-row div").forEach((item, index) => {
  item.style.setProperty("--stat-index", index);
});

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
