// Your javascript goes here
const BrandLogo = document.getElementById("brand-logo");
const Name = document.getElementById("nameCtn");
const NotificationBox = document.getElementById("notif-box");
const ProfileBox = document.getElementById("profile-box");
const Bar = document.getElementById("bar");
const Banner = document.getElementById("plan-banner");
const Cancel = document.getElementById("cancel");
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

NotificationBox.addEventListener("click", () => {
  NotificationBox.style.background = "var(--font-mid-2, #616161)";
  if (window.innerWidth >= 768) {
    NotificationBox.style.boxShadow =
      " 0px 0px 0px 3px #005bd3, 0px 0px 0px 1px #000";
  }
});

ProfileBox.addEventListener("click", () => {
  ProfileBox.style.background = "var(--font-mid-2, #616161)";
  if (window.innerWidth >= 768) {
    ProfileBox.style.boxShadow =
      " 0px 0px 0px 3px #005bd3, 0px 0px 0px 1px #000";
  } else {
    ProfileBox.style.border = "2px solid #616161";
  }
});

Cancel.addEventListener("click", () => {
  Banner.style.display = "none";
});
