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
const Plan = document.getElementById("trial-plan");
const Guide = document.getElementById("guide");
const Chevron = document.getElementById("chevron");
const ShowBrandMenu = false;
const ShowNotificationMenu = false;
let Progress = 0;

const PersonlizedGuide = [
  {
    title: "Customize your online store",
    description:
      "Choose a theme and add your logo, colors, and images to reflect your brand.",
    img: "https://crushingit.tech/hackathon-assets/customise-store.png",
    button1: "Customize theme",
    active: true,
  },
  {
    title: "Add your first product",
    description:
      "Write a description, add photos, and set pricing for the products you plan to sell.",
    img: "https://crushingit.tech/hackathon-assets/product.png",
    button1: "Add ptoduct",
    button2: "Import product",
    active: false,
  },
  {
    title: "Add a custom domain",
    description:
      "Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.",
    img: "https://crushingit.tech/hackathon-assets/website.png",
    button1: "Add domain",
    active: false,
  },
  {
    title: "Name your store",
    description:
      "Your temporary store name is currently Davii collections. The store name appears in your admin and your online store.",
    img: "https://crushingit.tech/hackathon-assets/name-store.png",
    button1: "Name store",
    active: false,
  },
  {
    title: "Set up a payment provider",
    description:
      "Choose a payment provider to start accepting payments. You’ll need to create an account with the payment provider and set it up with your Shopify store.",
    img: "https://crushingit.tech/hackathon-assets/payment.png",
    button1: "Set up payment",
    active: false,
  },
];

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
const createSVG = () => {
  // Create SVG element
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgElement.setAttribute("width", "24");
  svgElement.setAttribute("height", "24");
  svgElement.setAttribute("viewBox", "0 0 24 24");
  svgElement.setAttribute("fill", "none");

  // Create Circle element for the dashed circle
  const circleElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circleElement.setAttribute("cx", "12");
  circleElement.setAttribute("cy", "12");
  circleElement.setAttribute("r", "10");
  circleElement.setAttribute("stroke", "#8A8A8A");
  circleElement.setAttribute("stroke-width", "2");
  circleElement.setAttribute("stroke-dasharray", "4, 4");

  // Append Circle to SVG
  svgElement.appendChild(circleElement);

  return svgElement;
};

Bar.style.width = `${(Progress / 5) * 100}%`;

PersonlizedGuide.map((item, i) => {
  const guide_step = document.createElement("li");

  if (item.active) {
    guide_step.className = "guide-step-active";
    const title = document.createElement("p");
    title.innerHTML = item.title;
    const description = document.createElement("p");
    description.innerHTML = item.description;
    const img = document.createElement("img");
    img.src = item.img;
    const button1 = document.createElement("button");
    button1.innerHTML = item.button1;
    const button2 = document.createElement("button");
    button2.innerHTML = item.button2;
    guide_step.appendChild(createSVG());
    guide_step.appendChild(title);
    guide_step.appendChild(description);
    guide_step.appendChild(img);
    guide_step.appendChild(button1);
    guide_step.appendChild(button2);
  } else {
    guide_step.className = "guide-step";
    const title = document.createElement("p");
    title.innerHTML = item.title;
    guide_step.appendChild(createSVG());
    guide_step.appendChild(title);
  }

  Guide.appendChild(guide_step);
});
