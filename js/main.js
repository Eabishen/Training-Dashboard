const dropdown = document.querySelector(".dropdownli");
const dropdownLists = document.querySelector(".subnavlist");
const firstNavItem = document.querySelector(".subnavlist a");

// Sidebar toggle
const hamburger = document.querySelector("#hamburger");
const body = document.querySelector("body");

// sidebar close dropdown
const mobileDroplistSidebar = document.querySelectorAll(".mobiledropdown");
const mobileDroplist = document.querySelectorAll(".mobiledroplist");

function dropdownToggler(active) {
  if (dropdown.classList.contains(active)) {
    if (!dropdownLists.classList.contains(active)) {
      dropdownLists.style.height = dropdownLists.scrollHeight + 10 + "px";
    }
  } else {
    dropdownLists.style.height = "0px";
  }
}

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
  dropdownToggler("active");
});

firstNavItem.addEventListener("focus", () => {
  if (!dropdown.classList.contains("active")) {
    dropdown.classList.add("active");
    dropdownToggler("active");
  } else {
  }
});

hamburger.addEventListener("click", () => {
  body.classList.toggle("sidebar__close");

  dropdownLists.style.height = "0px";
  if (body.classList.contains("sidebar__close")) {
    mobileDroplistSidebar.forEach((item) => {
      item.addEventListener("focus", () => {
        dropdownLists.style.display = "block";
      });
    });
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 991) {
    body.classList.add("sidebar__close");
  }
});
window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 991) {
    body.classList.add("sidebar__close");
  }

  document.getElementById("loading").classList.add("loadhide");
});
