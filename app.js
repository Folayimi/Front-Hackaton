class Action {
  constructor() {
    this.BrandLogo = document.getElementById("brand-logo");
    this.Name = document.getElementById("nameCtn");
    this.NotificationBox = document.getElementById("notif-box");
    this.ProfileBox = document.getElementById("profile-box");
    this.Bar = document.getElementById("bar");
    this.Completed = document.getElementById("completed");
    this.Banner = document.getElementById("plan-banner");
    this.Cancel = document.getElementById("cancel");
    this.BrandMenu = document.getElementById("brand-menu");
    this.NotificationMenu = document.getElementById("notif-menu");
    this.Plan = document.getElementById("trial-plan");
    this.Guide = document.getElementById("guide");
    this.PersonalizedGuide = this.Guide.getElementsByTagName("li");
    this.Chevron = document.getElementById("chevron");
    this.ShowBrandMenu = false;
    this.ShowNotificationMenu = false;
    this.CheckerClicked = false;
    // this.CheckBoxClicked = false;
    this.Progress = 0;
    this.Track = 0;

    this.initializeUI();
    this.addEventListeners();
    this.loadProgress();
    this.imagePresence();
    // this.controlVisibility();
  }

  initializeUI() {
    // Initialize UI elements here
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
    // Image presence
    Array.from(this.PersonalizedGuide).forEach((item) => {
      const right = item.querySelector("#right");
      if (window.innerWidth < 768) {
        right.style.display = "none";
      }
    });
  }

  addEventListeners() {
    // Event listeners here
    window.addEventListener("resize", () => {
      this.initializeUI();
    });

    window.addEventListener("resize", () => {
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
    // Toggle notification menu visibility
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
    // Remove focus
    if (e.key === "Escape") {
      document.activeElement.blur();
    }
  }

  handleBrandMenuKeyDown(e) {
    // Handle keydown event for brand menu
    const focusableItems = document.querySelectorAll(
      '.cnt a[tabindex="0"], li[tabindex="0"]'
    );
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

  handleGuideKeyDown(e) {
    // Handle keydown event for guide
    const focusableItems = document.querySelectorAll('li[tabindex="0"]');
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
    // Toggle brand menu visibility
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
    // Hide banner
    this.Banner.style.display = "none";
  }

  openPlanLink() {
    // Open the plan link
    window.open("https://www.shopify.com/pricing");
  }

  toggleGuide() {
    // Toggle guide visibility
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
    // Load progress
    this.Progress = 0;
    Array.from(this.PersonalizedGuide).forEach((item) => {
      if (item.getAttribute("aria-checked") === "active") {
        this.Progress++;
      }
    });
    this.Completed.innerHTML = `${this.Progress} / 5 completed`;
    this.Bar.style.width = `${(this.Progress / 5) * 100}%`;
  }

  loadGuides(Track) {
    // Load guides
    console.log("loading guides");
    Array.from(this.PersonalizedGuide).forEach((listItem, i) => {
      const leftContent = listItem.querySelector("#left-content");
      const unActive = listItem.querySelector("p");
      leftContent.addEventListener("click", () => {
        this.Track = i;
        this.loadGuides(this.Track);
      });
      unActive.addEventListener("click", () => {
        this.Track = i;
        this.loadGuides(this.Track);
      });
      leftContent.removeEventListener("click", () => {
        this.Track = i;
        this.loadGuides(this.Track);
      });
      unActive.removeEventListener("click", () => {
        this.Track = i;
        this.loadGuides(this.Track);
      });
      this.showGuide(listItem, i, Track);
    });
  }

  controlVisibility(Track) {
    if (this.CheckerClicked) {
      this.loadGuides(Track);
      this.CheckerClicked = false;
    }
  }

  goToInActive () {
    // Go to inactive guide
    console.log("going to inactive");
    let inactive;
    Array.from(this.PersonalizedGuide).some((listItem) => {
      if (listItem.getAttribute("aria-checked") !== "active") {
        inactive = listItem;
        return true;
      }
      return false;
    });
    if (inactive !== undefined) {
      const number = inactive.getAttribute("step-tag");
      this.controlVisibility(parseInt(number));
    } else {
      this.controlVisibility(-1);
    }
  }

  showGuide(item, index, Track) {
    // Show guide

    const text = item.querySelector("p");
    const leftContent = item.querySelector("#left-content");
    const right = item.querySelector("#right");
    const checker = item.querySelector("#dashed-circle");
    const loader = item.querySelector("#loader");
    const checkBox = item.querySelector("#check-box");
    const loadBox = item.querySelector("#load-box");
    const enclose = item.querySelector("#enclose");
    enclose.style.display = "none";
    if (Track === index) {
      item.className = "guide-step-active";
      leftContent.style.display = "flex";
      text.style.display = "none";
      if (window.innerWidth < 768) {
        right.style.display = "none";
      } else {
        right.style.display = "flex";
      }
    } else {
      item.className = "guide-step";
      checker.style.display = "block";
      text.style.display = "block";
      leftContent.style.display = "none";
      right.style.display = "none";
    }

    if (item.getAttribute("aria-checked") !== "active") {
      checkBox.style.display = "none";
    } else if (item.getAttribute("aria-checked") === "active") {
      checker.style.display = "none";
      enclose.style.display = "block";
    }

    checkBox.addEventListener("click", () => {
      checkBox.style.display = "none";
      loader.style.display = "block";
      const beginLoading = setTimeout(() => {
        loader.style.display = "none";
        item.setAttribute("aria-checked", false);
        enclose.style.display = "none";
        checker.style.display = "block";
        clearTimeout(beginLoading);
        this.loadProgress();
        this.showGuide(item, index, Track);
      }, 500);
    });

    checker.addEventListener("click", () => {
      enclose.style.display = "flex";
      loader.style.display = "block";
      checker.style.display = "none";
      const startLoading = setTimeout(() => {
        loader.style.display = "none";
        loadBox.style.display = "block";
        clearTimeout(startLoading);
      }, 400);
      const finishLoading = setTimeout(() => {
        loadBox.style.display = "none";
        item.setAttribute("aria-checked", "active");
        checkBox.style.display = "block";
        clearTimeout(finishLoading);
        this.loadProgress();
        this.CheckerClicked = true;
        this.goToInActive();
      }, 600);
    });
  }
}

const Shopify = new Action();
