document.addEventListener("DOMContentLoaded", function () {
  setActiveNav();
  makeCardsClickable();
  makeCollapsibleRows();
  handleComingSoon(); // 👈 add this
});

function setActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

function makeCardsClickable() {
  const postCards = document.querySelectorAll(".post-card[data-link]");

  postCards.forEach((card) => {
    card.style.cursor = "pointer";

    card.addEventListener("click", function () {
      const targetLink = card.getAttribute("data-link");
      if (targetLink) {
        window.location.href = targetLink;
      }
    });

    card.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        const targetLink = card.getAttribute("data-link");
        if (targetLink) {
          window.location.href = targetLink;
        }
      }
    });
  });
}

function makeCollapsibleRows() {
  const collapsibleCards = document.querySelectorAll(".post-card.collapsible");

  collapsibleCards.forEach((card) => {
    const header = card.querySelector(".card-header");
    const body = card.querySelector(".card-body");

    if (!header || !body) {
      return;
    }

    header.addEventListener("click", () => {
      const expanded = card.classList.toggle("expanded");
      header.setAttribute("aria-expanded", expanded);
    });
  });
}

/* ✅ NEW FUNCTION */
function handleComingSoon() {
  const comingSoonCards = document.querySelectorAll(".coming-soon");

  comingSoonCards.forEach((card) => {
    card.style.cursor = "not-allowed";

    card.addEventListener("click", function (e) {
      e.preventDefault();
      alert("This post is coming soon 🚀");
    });
  });
}