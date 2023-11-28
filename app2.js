class GuideItem {
  constructor(item, onToggle, onActivate) {
    this.item = item;
    this.onToggle = onToggle;
    this.onActivate = onActivate;

    this.text = this.item.querySelector("p");
    this.leftContent = this.item.querySelector("#left-content");
    this.right = this.item.querySelector("#right");
    this.checker = this.item.querySelector("#dashed-circle");
    this.loader = this.item.querySelector("#loader");
    this.checkBox = this.item.querySelector("#check-box");
    this.loadBox = this.item.querySelector("#load-box");
    this.enclose = this.item.querySelector("#enclose");

    this.enclose.style.display = "none";
    this.addEventListeners();
    this.updateUI();
  }

  addEventListeners() {
    this.leftContent.addEventListener("click", () => {
      this.onActivate();
    });

    this.checkBox.addEventListener("click", () => {
      this.toggle();
    });

    this.checker.addEventListener("click", () => {
      this.loader.style.display = "block";
      this.checker.style.display = "none";

      const startLoading = setTimeout(() => {
        this.loader.style.display = "none";
        this.loadBox.style.display = "block";
        clearTimeout(startLoading);
      }, 400);

      const finishLoading = setTimeout(() => {
        this.loadBox.style.display = "none";
        this.item.setAttribute("aria-checked", "active");
        this.checkBox.style.display = "block";
        clearTimeout(finishLoading);
        this.onActivate();
      }, 600);
    });
  }

  toggle() {
    this.checkBox.style.display = "none";
    this.loader.style.display = "block";

    const beginLoading = setTimeout(() => {
      this.loader.style.display = "none";
      this.item.setAttribute("aria-checked", false);
      this.enclose.style.display = "none";
      this.checker.style.display = "block";
      clearTimeout(beginLoading);
      this.onToggle();
    }, 500);
  }

  updateUI() {
    if (this.item.getAttribute("aria-checked") === "active") {
      this.item.className = "guide-step-active";
      this.leftContent.style.display = "flex";
      this.text.style.display = "none";
      this.right.style.display = window.innerWidth < 768 ? "none" : "flex";
      this.checkBox.style.display = "none";
      this.enclose.style.display = "block";
    } else {
      this.item.className = "guide-step";
      this.checker.style.display = "block";
      this.text.style.display = "block";
      this.leftContent.style.display = "none";
      this.right.style.display = "none";
    }
  }
}

class Action {
  constructor() {
    this.BrandLogo = document.getElementById("brand-logo");
    this.Name = document.getElementById("nameCtn");
    this.NotificationBox = document.getElementById("notif-box");
    this.ProfileBox = document.getElementById("profile-box");
    this.Banner = document.getElementById("plan-banner");
    this.Completed = document.getElementById("completed");
    this.Cancel = document.getElementById("cancel");
    this.BrandMenu = document.getElementById("brand-menu");
    this.NotificationMenu = document.getElementById("notif-menu");
    this.Plan = document.getElementById("trial-plan");
    this.Guide = document.getElementById("guide");
    this.PersonalizedGuide = this.Guide.getElementsByTagName("li");
    this.Chevron = document.getElementById("chevron");
    this.Progress = 0;

    this.guideItems = Array.from(this.PersonalizedGuide).map(
      (item) =>
        new GuideItem(
          item,
          () => this.toggleGuide(),
          () => this.activateGuide(item)
        )
    );

    this.initializeUI();
    this.addEventListeners();
    this.loadProgress();
    this.imagePresence();
  }

  initializeUI() {
    if (window.innerWidth < 768) {
      this.Name.style.display = "none";
      this.BrandLogo.src =
        "https://crushingit.tech/hackathon-assets/shopify-icon.svg";
    } else {
      this.Name.style.display = "block";
      this.BrandLogo.src =
        "https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg";
    }
  }

  imagePresence() {
    this.guideItems.forEach((guideItem) => {
      if (window.innerWidth < 768) {
        guideItem.right.style.display = "none";
      }
    });
  }

  addEventListeners() {
    window.addEventListener("resize", () => {
      this.initializeUI();
      this.imagePresence();
    });

    this.NotificationBox.addEventListener("click", () => {
      this.toggleNotificationMenu();
    });

    document.addEventListener("keydown", (e) => {
      this.removeFocus(e);
    });

    this.BrandMenu.addEventListener("keydown", (e) => {
      this.handleBrandMenuKeyDown(e);
    });

    this.Guide.addEventListener("keydown", (e) => {
      this.handleGuideKeyDown(e);
    });

    this.ProfileBox.addEventListener("click", () => {
      this.toggleBrandMenu();
    });

    this.Cancel.addEventListener("click", () => {
      this.hideBanner();
    });

    this.Plan.addEventListener("click", () => {
      this.openPlanLink();
    });

    this.Chevron.addEventListener("click", () => {
      this.toggleGuide();
    });
  }

  toggleNotificationMenu() {
    if (this.NotificationMenu.style.display === "none") {
      this.NotificationMenu.style.display = "flex";
    } else {
      this.NotificationMenu.style.display = "none";
    }
    if (
      this.BrandMenu.style.display === "flex" &&
      this.NotificationMenu.style.display === "flex"
    ) {
      this.BrandMenu.style.display = "none";
    }
  }

  removeFocus(e) {
    if (e.key === "Escape") {
      document.activeElement.blur();
    }
  }

  handleBrandMenuKeyDown(e) {
    const focusableItems = document.querySelectorAll(
      '.cnt a[tabindex="0"], li[tabindex="0"]'
    );
    this.handleArrowKeyNavigation(e, focusableItems);
  }

  handleGuideKeyDown(e) {
    const focusableItems = document.querySelectorAll('li[tabindex="0"]');
    this.handleArrowKeyNavigation(e, focusableItems);
  }

  handleArrowKeyNavigation(e, focusableItems) {
    let currentIndex = Array.from(focusableItems).indexOf(
      document.activeElement
    );

    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % focusableItems.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      currentIndex =
        (currentIndex - 1 + focusableItems.length) % focusableItems.length;
    }

    focusableItems[currentIndex].focus();
  }

  toggleBrandMenu() {
    if (this.BrandMenu.style.display === "none") {
      this.BrandMenu.style.display = "flex";
    } else {
      this.BrandMenu.style.display = "none";
    }
    if (
      this.NotificationMenu.style.display === "flex" &&
      this.BrandMenu.style.display === "flex"
    ) {
      this.NotificationMenu.style.display = "none";
    }
  }

  hideBanner() {
    this.Banner.style.display = "none";
  }

  openPlanLink() {
    window.open("https://www.shopify.com/pricing");
  }

  toggleGuide() {
    if (this.Guide.style.display === "none") {
      this.Guide.style.display = "flex";
      this.loadGuides(0);
      this.Chevron.style.transform = "rotate(-180deg)";
    } else {
      this.Guide.style.display = "none";
      this.Chevron.style.transform = "rotate(0deg)";
    }
  }

  loadProgress() {
    this.Progress = this.guideItems.reduce(
      (count, item) =>
        item.item.getAttribute("aria-checked") === "active" ? count + 1 : count,
      0
    );

    this.Completed.innerHTML = `${this.Progress} / ${this.guideItems.length} completed`;
    this.Bar.style.width = `${(this.Progress / this.guideItems.length) * 100}%`;
  }

  loadGuides(track) {
    this.guideItems.forEach((guideItem, i) => {
      guideItem.updateUI();
    });
    this.guideItems[track].item.focus();
  }

  activateGuide(item) {
    const guideItem = this.guideItems.find((guide) => guide.item === item);
    if (guideItem) {
      this.guideItems.forEach((item) => {
        item.item.blur();
      });
      this.guideItems.forEach((item) => {
        item.enclose.style.display = "none";
      });
      guideItem.toggle();
    }
  }
}

const Shopify = new Action();
