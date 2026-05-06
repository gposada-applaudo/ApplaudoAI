const root = document.documentElement;
const hero = document.querySelector("[data-hero]");
const menuButton = document.querySelector(".menu-button");
const navItems = document.querySelectorAll(".nav-item.has-mega");
const interactiveItems = document.querySelectorAll(
  ".button, .icon-button, .glass-card, .stats-row div, .case-card, .industry-stage, .industry-tile, .note-card, .note-feature, .note-row, .reason-visual"
);
const desktopQuery = window.matchMedia("(min-width: 981px)");
let closeTimer;

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

if (hero) {
  hero.addEventListener("pointermove", (event) => setPointerVars(event, root));
}

interactiveItems.forEach((item) => {
  item.addEventListener("pointermove", (event) => setPointerVars(event, item));
});

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
    event.preventDefault();
    const shouldOpen = !item.classList.contains("is-open");
    navItems.forEach((otherItem) => {
      otherItem.classList.remove("is-open", "is-hovered");
      otherItem.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
    });
    item.classList.toggle("is-open", shouldOpen);
    trigger.setAttribute("aria-expanded", String(shouldOpen));
  });
});

addEventListener("scroll", updateScrollProgress, { passive: true });
addEventListener("resize", updateScrollProgress);
updateScrollProgress();

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

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
