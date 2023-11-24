// Your javascript goes here
const BrandLogo = document.getElementById("brand-logo");
const Name = document.getElementById("nameCtn");
const NotificationBox = document.getElementById("notif-box");
const ProfileBox = document.getElementById("profile-box");
const Bar = document.getElementById("bar");
const Banner = document.getElementById("plan-banner");
const Cancel = document.getElementById("cancel");
const BrandMenu = document.getElementById("brand-menu");
const NotificationMenu = document.getElementById("notif-menu");
const ShowBrandMenu = false;
const ShowNotificationMenu = false;
let Progress = 1;

Bar.style.width = `${(Progress / 5) * 100}%`;

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

NotificationBox.addEventListener("click", (e) => {
  //   if (NotificationBox.classList.contains("notif-box")) {
  //     NotificationBox.setAttribute("class", "notif-box-focus");
  //   } else {
  //     NotificationBox.setAttribute("class", "notif-box");
  //   }

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
  const focusableItems = document.querySelectorAll('.cnt li[tabindex="0"]');
  let currentIndex = Array.from(focusableItems).indexOf(document.activeElement);

  if (e.key === "ArrowDown") {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % focusableItems.length;
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    currentIndex =
      (currentIndex - 1 + focusableItems.length) % focusableItems.length;
  }

  focusableItems[currentIndex].focus();
});

ProfileBox.addEventListener("click", () => {
  //   if (window.innerWidth >= 768) {
  //     if (ProfileBox.classList.contains("profile-box")) {
  //       ProfileBox.setAttribute("class", "profile-box-focus");
  //     } else {
  //       ProfileBox.setAttribute("class", "profile-box");
  //     }
  //   }
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
