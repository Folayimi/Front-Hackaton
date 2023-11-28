// Your javascript goes here
const BrandLogo = document.getElementById("brand-logo");
const Name = document.getElementById("nameCtn");
const NotificationBox = document.getElementById("notif-box");
const ProfileBox = document.getElementById("profile-box");
const Bar = document.getElementById("bar");
const Completed = document.getElementById("completed");
const Banner = document.getElementById("plan-banner");
const Cancel = document.getElementById("cancel");
const BrandMenu = document.getElementById("brand-menu");
const NotificationMenu = document.getElementById("notif-menu");
const Plan = document.getElementById("trial-plan");
const Guide = document.getElementById("guide");
var PersonlizedGuide = document
  .getElementById("guide")
  .getElementsByTagName("li");
const Chevron = document.getElementById("chevron");
const ShowBrandMenu = false;
const ShowNotificationMenu = false;
let Progress = 0;
let Track = 0;

if (window.innerWidth < 768) {
  Name.style.display = "none";
  BrandLogo.src = "https://crushingit.tech/hackathon-assets/shopify-icon.svg";
} else {
  Name.style.display = "block";
  BrandLogo.src =
    "https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg";
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    Name.style.display = "none";
    BrandLogo.src = "https://crushingit.tech/hackathon-assets/shopify-icon.svg";
  } else {
    Name.style.display = "block";
    BrandLogo.src =
      "https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg";
  }
});

NotificationBox.addEventListener("click", () => {
  if (NotificationMenu.style.display === "none") {
    NotificationMenu.style.display = "flex";
  } else {
    NotificationMenu.style.display = "none";
  }
  if (
    BrandMenu.style.display === "flex" &&
    NotificationMenu.style.display === "flex"
  ) {
    BrandMenu.style.display = "none";
  }
});

document.getElementById("brand-menu").addEventListener("keydown", function (e) {
  const focusableItems = document.querySelectorAll(
    '.cnt a[tabindex="0"], li[tabindex="0"]'
  );
  let currentIndex = Array.from(focusableItems).indexOf(document.activeElement);

  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % focusableItems.length;
  } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
    e.preventDefault();
    currentIndex =
      (currentIndex - 1 + focusableItems.length) % focusableItems.length;
  }

  focusableItems[currentIndex].focus();
});

ProfileBox.addEventListener("click", () => {
  if (BrandMenu.style.display === "none") {
    BrandMenu.style.display = "flex";
  } else {
    BrandMenu.style.display = "none";
  }
  if (
    NotificationMenu.style.display === "flex" &&
    BrandMenu.style.display === "flex"
  ) {
    NotificationMenu.style.display = "none";
  }
});

Cancel.addEventListener("click", () => {
  Banner.style.display = "none";
});

Plan.addEventListener("click", () => {
  window.open("https://www.shopify.com/pricing");
});

Chevron.addEventListener("click", () => {
  if (Guide.style.display === "none") {
    Guide.style.display = "flex";
    Chevron.style.transform = "rotate(180deg)";
  } else {
    Guide.style.display = "none";
    Chevron.style.transform = "rotate(-0deg)";
  }
});

const loadProgress = () => {
  Progress = 0;
  PersonlizedGuide.map((item) => {
    if (item.checked) {
      Progress++;
    }
  });
  Completed.innerHTML = `${Progress} / 5 completed`;
  Bar.style.width = `${(Progress / 5) * 100}%`;
};

const loadGuides = (Track) => {
  for (let i = 0; i < PersonlizedGuide.length; i++) {
    let listItem = PersonlizedGuide[i];
    const left = listItem.querySelector("#left");
    left.addEventListener("click", () => {
      Track = i;
      loadGuides(Track);
    });
    showGuide(listItem, i, Track);
  }
};

const goToInActive = () => {
  let inactive;
  for (let i = 0; i < PersonlizedGuide.length; i++) {
    let listItem = PersonlizedGuide[i];
    if (listItem.getAttribute("aria-checked") !== "active") {
      inactive = listItem;
      break;
    }
  }
  if (inactive !== undefined) {
    const number = inactive.getAttribute("step-tag");
    console.log(parseInt(number));
    loadGuides(parseInt(number));
  }
};

const commenceLoading = (content) => {
  console.log("work");
  const loader = document.createElement("img");
  loader.src = "https://crushingit.tech/hackathon-assets/icon-spinner.svg";
  loader.width = "100%";
  loader.className = "loader";
  content.replaceChildren();
  content.appendChild(loader);
};

const showGuide = (item, index, Track) => {
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
    right.style.display = "flex";
  } else {
    item.className = "guide-step";
    checker.style.display = "block";
    text.style.display = "block";
    leftContent.style.display = "none";
    right.style.display = "none";
  }

  if (item.getAttribute("aria-checked") !== "active") {
    console.log("Inactive");
    checkBox.style.display = "none";
    enclose.style.display = "flex";
    checker.addEventListener("click", () => {      
      loader.style.display = "block";
      checker.style.display = "none";
      setTimeout(() => {
        loader.style.display = "none";        
        loadBox.style.display = "block";
        setTimeout(() => {
          loadBox.style.display = "none";
          item.setAttribute("aria-checked", "active");
          checkBox.style.display = "block";
          goToInActive();
        }, 300);
      }, 500);
    });
  } else if (item.getAttribute("aria-checked") === "active") {
    console.log("active");
    checker.style.display = "none";
    // checkBox.style.display = "block";
    enclose.style.display = "block";
    checkBox.addEventListener("click", () => {
      console.log("checkbox");
      checkBox.style.display = "none";
      loader.style.display = "block";
      setTimeout(() => {
        loader.style.display = "none";
        item.setAttribute("aria-checked", false);
        console.log(item.getAttribute("aria-checked"));
        enclose.style.display = "none";
        checker.style.display = "block";
        showGuide(item, index, Track);
      }, 500);
    });
  }
};

loadGuides(Track);
