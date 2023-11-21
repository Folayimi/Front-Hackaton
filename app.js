// Your javascript goes here
BrandLogo = document.getElementById("brand-logo");

window.addEventListener("resize", () => {
  
  if (window.innerWidth < 768) {
    BrandLogo.src = "https://crushingit.tech/hackathon-assets/shopify-icon.svg";
  } else {
    BrandLogo.src =
      "https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg";
  }

});


