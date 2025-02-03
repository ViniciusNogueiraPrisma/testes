function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}

$(".titulosCentral").each(function () {
  $("#resultsTitle").append($(this));
});

document.addEventListener("DOMContentLoaded", function () {
  const isMobile = () => window.innerWidth < 992;
  const dropdowns = document.querySelectorAll(".nav-item.dropdown");

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");

    toggle.addEventListener("click", function (e) {
      if (isMobile()) {
        e.preventDefault();

        dropdowns.forEach((otherDropdown) => {
          if (otherDropdown !== dropdown) {
            otherDropdown
              .querySelector(".dropdown-menu")
              .classList.remove("show");
            otherDropdown
              .querySelector(".dropdown-toggle")
              .setAttribute("aria-expanded", "false");
          }
        });

        menu.classList.toggle("show");
        const isExpanded = menu.classList.contains("show");
        this.setAttribute("aria-expanded", isExpanded);
      }
    });
  });

  document.addEventListener("click", function (e) {
    if (isMobile() && !e.target.closest(".nav-item.dropdown")) {
      dropdowns.forEach((dropdown) => {
        dropdown.querySelector(".dropdown-menu").classList.remove("show");
        dropdown
          .querySelector(".dropdown-toggle")
          .setAttribute("aria-expanded", "false");
      });
    }
  });

  window.addEventListener("resize", function () {
    if (!isMobile()) {
      dropdowns.forEach((dropdown) => {
        dropdown.querySelector(".dropdown-menu").classList.remove("show");
        dropdown
          .querySelector(".dropdown-toggle")
          .setAttribute("aria-expanded", "false");
      });
    }
  });
});

// opens and closes the search box.
$(".open-searchbox, .close-searchbox").click(function () {
  $(".searchbox").toggleClass("active");
  $("body").toggleClass("open-menu");
});

// manages the status of the mobile menu.

$(".btn-open-menu").click(function () {
  $(".canais-menu").toggleClass("active");
  $(".header").toggleClass("open-menu");
  $("body").toggleClass("open-menu");
});

$(".button-mapa-site").click((e) => {
  $(".button-mapa-site").toggleClass("active");
});

AOS.init({
  once: true,
});

window.addEventListener(
  "scroll",
  debounce(() => {
    AOS.refresh();
  }, 200)
);

// Tooltip

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Contraste

function accessApplyTheme(theme) {
  localStorage.setItem("access_theme", theme);

  if (theme == "dark") {
    $("body").attr("data-theme", "dark");
  } else {
    $("body").attr("data-theme", "light");
  }
}

var access_theme = "light";

if (localStorage.getItem("access_theme")) {
  access_theme = localStorage.getItem("access_theme");
  accessApplyTheme(access_theme);
}

$("#contrast-toggle").on("click", function (e) {
  if (access_theme == "light") {
    access_theme = "dark";
  } else {
    access_theme = "light";
  }
  accessApplyTheme(access_theme);
});

const counterUp = window.counterUp.default;

const callback = (entries) => {
  entries.forEach((entry) => {
    const el = entry.target;
    if (entry.isIntersecting && !el.classList.contains("is-visible")) {
      counterUp(el, {
        duration: 2000,
        // delay: 16,
      });
      el.classList.add("is-visible");
    }
  });
};
