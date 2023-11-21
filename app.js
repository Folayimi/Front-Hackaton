// Your javascript goes here
BrandLogo = document.getElementById("brand-logo");
Name = document.getElementById("nameCtn");
NotificationBox = document.getElementById("notif-box");
ProfileBox = document.getElementById("profile-box");

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
  console.log("clicked");
  NotificationBox.style.background = "var(--font-mid-2, #616161)";
  NotificationBox.style.boxShadow =
    " 0px 0px 0px 3px #005bd3, 0px 0px 0px 1px #000";
});

ProfileBox.addEventListener("click", () => {
  console.log("clicked");
  ProfileBox.style.background = "var(--font-mid-2, #616161)";
  ProfileBox.style.boxShadow = " 0px 0px 0px 3px #005bd3, 0px 0px 0px 1px #000";
});
