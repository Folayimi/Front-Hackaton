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
const Chevron = document.getElementById("chevron");
const ShowBrandMenu = false;
const ShowNotificationMenu = false;
let Progress = 0;
let Track = 0;

const PersonlizedGuide = [
  {
    id: 0,
    title: "Customize your online store",
    description:
      "Choose a theme and add your logo, colors, and images to reflect your brand.",
    img: "https://crushingit.tech/hackathon-assets/customise-store.png",
    button1: "Customize theme",
    circle: "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg",
    checked: false,
  },
  {
    id: 1,
    title: "Add your first product",
    description:
      "Write a description, add photos, and set pricing for the products you plan to sell.",
    img: "https://crushingit.tech/hackathon-assets/product.png",
    button1: "Add product",
    button2: "Import product",
    circle: "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg",
    checked: false,
  },
  {
    id: 2,
    title: "Add a custom domain",
    description:
      "Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.",
    img: "https://crushingit.tech/hackathon-assets/website.png",
    button1: "Add domain",
    circle: "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg",
    checked: false,
  },
  {
    id: 3,
    title: "Name your store",
    description:
      "Your temporary store name is currently Davii collections. The store name appears in your admin and your online store.",
    img: "https://crushingit.tech/hackathon-assets/name-store.png",
    button1: "Name store",
    circle: "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg",
    checked: false,
  },
  {
    id: 4,
    title: "Set up a payment provider",
    description:
      "Choose a payment provider to start accepting payments. You’ll need to create an account with the payment provider and set it up with your Shopify store.",
    img: "https://crushingit.tech/hackathon-assets/payment.png",
    button1: "Set up payment",
    circle: "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg",
    checked: false,
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

const loadGuides = () => {
  PersonlizedGuide.map((item, i) => {
    const guide_step = document.createElement("li");
    createGuide(item, i, Track, guide_step);
    Guide.appendChild(guide_step);
    guide_step.addEventListener("click", () => {
      const index = PersonlizedGuide.find((track) => track.checked === false);
      if (item.checked && index !== undefined) {
        Track = index.id;
      } else {
        Track = i;
      }
      Guide.replaceChildren();
      loadGuides();
    });
  });
};

const createGuide = (item, index, Track, guide_step) => {
  if (index === Track) {
    guide_step.className = "guide-step-active";
    const left = document.createElement("div");
    left.className = "left";
    const right = document.createElement("div");
    const left_content = document.createElement("div");
    left_content.className = "left-content";
    const title = document.createElement("h3");
    title.innerHTML = item.title;
    const description = document.createElement("p");
    description.innerHTML = item.description;
    const more = document.createElement("a");
    more.innerHTML = " Learn more";
    more.className = "learn-more";
    more.href = "https://help.shopify.com/en/manual/domains";
    description.appendChild(more);
    const button_comp = document.createElement("div");
    button_comp.className = "button-comp";
    const button1 = document.createElement("button");
    button1.className = "button1";
    button1.innerHTML = item.button1;
    left_content.appendChild(title);
    left_content.appendChild(description);
    button_comp.appendChild(button1);
    if (item.button2) {
      const button2 = document.createElement("button");
      button2.className = "button2";
      button2.innerHTML = item.button2;
      button_comp.appendChild(button2);
    }
    left_content.appendChild(button_comp);
    if (!item.checked) {
      loadProgress();
      const circle = document.createElement("button");
      circle.className = "dashed-circle";
      left.replaceChildren();
      left.appendChild(circle);
      left.appendChild(left_content);
      circle.addEventListener("click", () => {
        const itemToCheck = PersonlizedGuide.find(
          (track) => track.title === item.title
        );
        itemToCheck.checked = true;
      });
    } else {
      loadProgress();
      const check = document.createElement("img");
      check.src =
        "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg";
      check.className = "check-box";
      check.width = "100%";
      const checked = document.createElement("div");
      checked.className = "checked";
      checked.appendChild(check);
      left.replaceChildren();
      left.appendChild(checked);
      left.appendChild(left_content);
      checked.addEventListener("click", () => {
        const itemToUnCheck = PersonlizedGuide.find(
          (track) => track.title === item.title
        );
        itemToUnCheck.checked = false;
      });
    }
    const img = document.createElement("img");
    img.src = item.img;
    right.appendChild(img);
    guide_step.appendChild(left);
    guide_step.appendChild(right);
  } else {
    guide_step.className = "guide-step";
    const title = document.createElement("p");
    title.innerHTML = item.title;
    if (!item.checked) {
      const circle = document.createElement("div");
      circle.className = "dashed-circle";
      guide_step.replaceChildren();
      guide_step.appendChild(circle);
      circle.addEventListener("click", () => {
        const itemToCheck = PersonlizedGuide.find(
          (track) => track.title === item.title
        );
        itemToCheck.checked = true;
      });
    } else {
      const check = document.createElement("img");
      check.src =
        "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg";
      check.className = "check-box";
      check.width = "100%";
      const checked = document.createElement("div");
      checked.className = "checked";
      checked.appendChild(check);
      guide_step.replaceChildren();
      guide_step.appendChild(checked);
      check.addEventListener("click", () => {
        const itemToUnCheck = PersonlizedGuide.find(
          (track) => track.title === item.title
        );
        itemToUnCheck.checked = false;
      });
    }
    guide_step.appendChild(title);
  }
};

loadGuides();
