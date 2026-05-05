const pages = Array.from(document.querySelectorAll(".page"));
const menuPanel = document.querySelector(".menu-panel");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const menuLinks = Array.from(document.querySelectorAll(".menu-panel a[href^='#']"));
const lazyBgs = Array.from(document.querySelectorAll("[data-lazy-bg]"));

function applyLazyBackgrounds(group) {
  lazyBgs.forEach((el) => {
    if (group && el.getAttribute("data-lazy-group") !== group) return;
    const source = el.getAttribute("data-lazy-bg");
    if (!source || el.dataset.bgLoaded === "true") return;
    el.style.setProperty("--lazy-bg", `url("${source}")`);
    el.dataset.bgLoaded = "true";
  });
}

function setPage(hash) {
  const pageName = hash.replace("#", "") || "home";
  const target = pages.some((page) => page.dataset.page === pageName) ? pageName : "home";

  pages.forEach((page) => {
    page.classList.toggle("is-active", page.dataset.page === target);
  });

  document.body.dataset.page = target;
  applyLazyBackgrounds(target);
}

function openMenu() {
  menuPanel.classList.add("is-open");
  menuPanel.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
  applyLazyBackgrounds("menu");
}

function closeMenu() {
  menuPanel.classList.remove("is-open");
  menuPanel.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

window.addEventListener("hashchange", () => setPage(window.location.hash));
setPage(window.location.hash);

const projectFan = document.getElementById("project-fan");
const fanStage = document.getElementById("project-fan-stage");
const currentProjectTitle = document.getElementById("project-current-title");
const projectModal = document.getElementById("project-modal");
const projectModalBackdrop = document.getElementById("project-modal-backdrop");
const projectModalClose = document.getElementById("project-modal-close");
const projectModalMedia = document.getElementById("project-modal-media");
const projectModalLabel = document.getElementById("project-modal-label");
const projectModalTitle = document.getElementById("project-modal-title");
const projectModalDescription = document.getElementById("project-modal-description");
const projectModalResult = document.getElementById("project-modal-result");
const projectModalThumbs = document.getElementById("project-modal-thumbs");

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function assetPath(path) {
  return path
    .split("/")
    .map((part, index) => (index === 0 && part === "." ? "." : encodeURIComponent(part)))
    .join("/");
}

const PROJECTS = [
  {
    slug: "legasea",
    number: "02",
    title: "Legasea",
    category: "Branding, UI/UX",
    result: "Participation: Art and creative direction, graphic design, brand management",
    cover: "./assets/images/projects/legasea/cover.jpg",
    images: [
      "./assets/images/projects/legasea/01.jpg",
      "./assets/images/projects/legasea/02.jpg",
      "./assets/images/projects/legasea/03.jpg",
      "./assets/images/projects/legasea/04.jpg",
      "./assets/images/projects/legasea/05.jpg",
    ],
    description:
      "Legasea Bulk required a global brand positioning that bridged traditional maritime heritage with modern, technology-driven logistics. With headquarters in Singapore and strategic hubs in Dubai and Miami, the goal was to establish a unified corporate identity that communicates scale, reliability, and operational excellence to the international B2B market. We developed a comprehensive brand strategy and visual identity system. The global rollout included a custom brand identity, digital platform design, and extensive marketing collateral. This unified marketing approach successfully positioned Legasea as a trusted leader in the dry bulk sector.",
  },
  {
    slug: "gulftainer",
    number: "01",
    title: "Gulftainer",
    category: "UI/UX",
    result: "Participation: Art and creative direction, graphic design, UI/UX project management",
    cover: "./assets/images/projects/gulftainer/cover.jpg",
    images: [
      "./assets/images/projects/gulftainer/01.jpg",
      "./assets/images/projects/gulftainer/02.jpg",
      "./assets/images/projects/gulftainer/03.jpg",
      "./assets/images/projects/gulftainer/04.jpg",
      "./assets/images/projects/gulftainer/05.jpg",
    ],
    description:
      "The Gulftainer website was a global digital transformation project designed to streamline the intersection of maritime operations and user-centric design. For the international logistics market, we developed a unified digital platform deployed across the GCC and the USA to serve a diverse global stakeholder base. We created an intuitive, high-trust interface where users can navigate complex shipping data with total autonomy, ensuring brand consistency and operational clarity throughout the journey.",
  },
  {
    slug: "bogota-reverdece",
    number: "04",
    title: "Bogota Reverdece",
    category: "Branding",
    result: "Participation: Art and creative direction, graphic design",
    cover: "./assets/images/projects/bogota-reverdece/cover.jpg",
    images: [
      "./assets/images/projects/bogota-reverdece/01.jpg",
      "./assets/images/projects/bogota-reverdece/02.jpg",
      "./assets/images/projects/bogota-reverdece/03.jpg",
      "./assets/images/projects/bogota-reverdece/04.jpg",
      "./assets/images/projects/bogota-reverdece/05.jpg",
    ],
    description:
      '"Bogota Reverdece" is a way to live and experience the city, rethinking public space. It focuses on having a clean and organised city, connected by various eco-friendly public transportation modes to keep the air clean, and providing friendly routes for pedestrians and cyclists. "Bogota Reverdece" encourages citizens to give back to the city that provides for them. It was the main concept communicated by the Environmental Secretariat of Bogota over the past four years and was executed through 360 campaigns, including evergreen social media, BTL and ATL.',
  },
  {
    slug: "pianonautas",
    number: "03",
    title: "Pianonautas",
    category: "Branding",
    result: "Participation: Art and creative direction, graphic design",
    cover: "./assets/images/projects/pianonautas/cover.jpg",
    images: [
      "./assets/images/projects/pianonautas/01.jpg",
      "./assets/images/projects/pianonautas/02.jpg",
      "./assets/images/projects/pianonautas/03.jpg",
      "./assets/images/projects/pianonautas/04.jpg",
      "./assets/images/projects/pianonautas/05.jpg",
    ],
    description:
      "Pianonautas is an online piano learning platform developed by a musician who has crafted a practical and simple method for everyone to learn piano. It is a vibrant and modern brand that breaks away from the traditional piano style. Pianonautas aims to communicate movement in a dynamic and cool way. The brand's visual identity features bold, colorful graphics that evoke a sense of excitement and energy, standing out as a fresh and engaging alternative in music education.",
  },
  {
    slug: "pg-olympic-games",
    number: "05",
    title: "P&G Olympic Games",
    category: "Shopper Marketing Events",
    result: "Participation: Art and creative direction, graphic design",
    cover: "./assets/images/projects/pg-olympic-games/cover.jpg",
    images: [
      "./assets/images/projects/pg-olympic-games/01.jpg",
      "./assets/images/projects/pg-olympic-games/02.jpg",
      "./assets/images/projects/pg-olympic-games/03.jpg",
      "./assets/images/projects/pg-olympic-games/04.jpg",
      "./assets/images/projects/pg-olympic-games/05.jpg",
    ],
    description:
      "The Olympic Games was a global campaign crafted and designed by P&G. For the Gulf market, we developed the activation, visuals, and POSM materials deployed in major retailers across Bahrain, Qatar, Oman, Kuwait, and the UAE. We created an engaging in-store and in-mall experience featuring a P&G Olympic Villa where shoppers could celebrate, take pictures with gold medals, and experience the thrill of the Olympics through VR games while creating brand awareness. The campaign was live on the UAE's biggest e-commerce platforms, including Amazon, Talabat, and Instashop, with 2,921 displays deployed across 15 retailers.",
  },
  {
    slug: "united-for-sustainability",
    number: "06",
    title: "United for Sustainability",
    category: "Shopper Marketing Events",
    result: "Participation: Art and creative direction, graphic design",
    cover: "./assets/images/projects/united-for-sustainability/cover.jpg",
    images: [
      "./assets/images/projects/united-for-sustainability/01.jpg",
      "./assets/images/projects/united-for-sustainability/02.jpg",
      "./assets/images/projects/united-for-sustainability/03.jpg",
      "./assets/images/projects/united-for-sustainability/04.jpg",
      "./assets/images/projects/united-for-sustainability/05.jpg",
    ],
    description:
      "United for Sustainability was a success in inspiring and mobilizing people to take responsibility for preserving our planet. Through participation in the Guinness World Records attempt, we collected an impressive 1,500 videos from three principal Carrefour stores in the UAE. Our goal was to inspire others to commit to the environment and change the small habits that can create a big impact toward a sustainable future.",
  },
  {
    slug: "samsung",
    number: "07",
    title: "Samsung",
    category: "Retail Experience",
    result: "Participation: Art and creative direction, graphic design",
    cover: "./assets/images/projects/samsung/cover.jpg",
    images: [
      "./assets/images/projects/samsung/01.jpg",
      "./assets/images/projects/samsung/02.jpg",
      "./assets/images/projects/samsung/03.jpg",
      "./assets/images/projects/samsung/04.jpg",
      "./assets/images/projects/samsung/05.jpg",
    ],
    description:
      "Faced with the challenge of proposing and enhancing the Galaxy Watch retail experience, we developed the 'Time to Move' concept. The concept helped shoppers understand the Samsung Galaxy Watch by associating it with sports and highlighting its features. Collaborating with the team, we created colorful graphics with different textures and silhouettes of athletes engaged in various sports and running on different types of tracks. This visually communicated the watch's diverse features effectively.",
  },
];

function imageSlots(project) {
  return project.images.map((path, index) => ({
    label: `Image ${index + 1}`,
    path,
  }));
}

function createSlots(project, className) {
  return imageSlots(project)
    .map(
      (slot, index) =>
        `<div class="${className}">
          <img src="${assetPath(slot.path)}" alt="${escapeHtml(project.title)} ${index + 1}" loading="${index === 0 ? "eager" : "lazy"}" decoding="async" />
        </div>`
    )
    .join("");
}

if (projectFan && fanStage) {
  let angle = 0;
  let targetAngle = 0;
  let activeProject = 0;
  let activeModalSlide = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartAngle = 0;
  let moved = 0;
  const cardEls = [];

  function renderProjects() {
    projectFan.innerHTML = PROJECTS.map((project, index) => {
      return `
        <article class="fan-card" data-index="${index}" style="--slide: 0">
          <div class="fan-card__inner">
            <div class="fan-card__media">
              <img class="fan-card__cover" src="${assetPath(project.cover)}" alt="${escapeHtml(project.title)} cover" loading="${index < 3 ? "eager" : "lazy"}" decoding="async" />
            </div>
            <div class="fan-card__copy">
              <p class="fan-card__meta">${escapeHtml(project.category)}</p>
              <h3>${escapeHtml(project.title)}</h3>
            </div>
          </div>
        </article>
      `;
    }).join("");

    cardEls.splice(0, cardEls.length, ...Array.from(projectFan.querySelectorAll(".fan-card")));
    cardEls.forEach((card, index) => {
      card.addEventListener("click", (event) => {
        if (moved > 8) return;
        if (index !== activeProject) {
          targetAngle = index;
          return;
        }
        openProject(index);
      });
    });
  }

  function wrappedOffset(index) {
    const total = PROJECTS.length;
    let offset = index - angle;
    offset = ((offset % total) + total + total / 2) % total - total / 2;
    return offset;
  }

  function layoutCards() {
    angle += (targetAngle - angle) * 0.12;
    const total = PROJECTS.length;
    const nextActive = ((Math.round(angle) % total) + total) % total;
    if (nextActive !== activeProject) {
      activeProject = nextActive;
      currentProjectTitle.textContent = PROJECTS[activeProject].title;
    }

    cardEls.forEach((card, index) => {
      const offset = wrappedOffset(index);
      const abs = Math.abs(offset);
      const rotation = offset * 14;
      const scale = 1 - Math.min(abs, 1.9) * 0.08;
      card.style.transform = `rotate(${rotation}deg)`;
      card.style.zIndex = String(Math.round(30 - abs * 3));
      card.style.opacity = abs > 3.3 ? "0" : "1";
      card.style.pointerEvents = abs > 3.3 ? "none" : "auto";
      card.style.filter = `grayscale(${Math.min(abs, 1) * 100}%)`;
      card.querySelector(".fan-card__inner").style.transform = `scale(${scale})`;
      card.classList.toggle("is-center", abs < 0.45);
    });

    requestAnimationFrame(layoutCards);
  }

  function setModalSlide(index) {
    activeModalSlide = (index + 5) % 5;
    projectModalMedia.style.setProperty("--slide", activeModalSlide);
    Array.from(projectModalThumbs.children).forEach((thumb, i) => {
      thumb.classList.toggle("is-active", i === activeModalSlide);
    });
  }

  function openProject(index) {
    const project = PROJECTS[index];
    activeProject = index;
    activeModalSlide = 0;
    projectModalLabel.textContent = project.category;
    projectModalTitle.textContent = project.title;
    projectModalDescription.textContent = project.description;
    projectModalResult.textContent = project.result;
    projectModalMedia.innerHTML = `
      <div class="project-modal__nav">
        <button type="button" data-modal-dir="-1" aria-label="Previous image">‹</button>
        <button type="button" data-modal-dir="1" aria-label="Next image">›</button>
      </div>
      <div class="project-modal__slots">${createSlots(project, "project-modal__slot")}</div>
    `;
    projectModalThumbs.innerHTML = imageSlots(project)
      .map((slot, i) => `
        <button class="project-modal__thumb" type="button" data-thumb="${i}" aria-label="${escapeHtml(project.title)} image ${i + 1}">
          <img src="${assetPath(slot.path)}" alt="" loading="lazy" decoding="async" />
        </button>
      `)
      .join("");
    projectModal.classList.add("is-open");
    projectModal.setAttribute("aria-hidden", "false");
    setModalSlide(activeModalSlide);
    projectModalMedia.querySelectorAll("[data-modal-dir]").forEach((button) => {
      button.addEventListener("click", () => setModalSlide(activeModalSlide + Number(button.dataset.modalDir)));
    });
    projectModalThumbs.querySelectorAll("[data-thumb]").forEach((thumb) => {
      thumb.addEventListener("click", () => setModalSlide(Number(thumb.dataset.thumb)));
    });
  }

  function closeProject() {
    projectModal.classList.remove("is-open");
    projectModal.setAttribute("aria-hidden", "true");
  }

  fanStage.addEventListener("pointerdown", (event) => {
    if (projectModal.classList.contains("is-open")) return;
    isDragging = true;
    moved = 0;
    dragStartX = event.clientX;
    dragStartAngle = targetAngle;
    fanStage.classList.add("is-dragging");
  });

  window.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    const dx = event.clientX - dragStartX;
    moved = Math.max(moved, Math.abs(dx));
    targetAngle = dragStartAngle - dx * 0.008;
  });

  window.addEventListener("pointerup", () => {
    if (!isDragging) return;
    isDragging = false;
    fanStage.classList.remove("is-dragging");
    targetAngle = Math.round(targetAngle);
  });

  projectModalBackdrop.addEventListener("click", closeProject);
  projectModalClose.addEventListener("click", closeProject);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeProject();
    if (!projectModal.classList.contains("is-open")) return;
    if (event.key === "ArrowRight") setModalSlide(activeModalSlide + 1);
    if (event.key === "ArrowLeft") setModalSlide(activeModalSlide - 1);
  });

  renderProjects();
  requestAnimationFrame(layoutCards);
}
