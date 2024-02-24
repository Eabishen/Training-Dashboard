const dropdowns = document.querySelectorAll(".lidrop");
const dropdownLists = document.querySelectorAll(".subnavlist");
const firstNavItem = document.querySelector(".subnavlist a");
const hamburger = document.querySelector("#hamburger");
const body = document.querySelector("body");
const mobileX = document.querySelector(".mobile_close");
const mobileDroplistSidebar = document.querySelectorAll(".mobiledropdown");
const mobileDroplist = document.querySelectorAll(".mobiledroplist");

function dropdownToggler(dropdown, active) {
  const dropdownList = dropdown.nextElementSibling; // Assuming dropdown and its list are siblings
  if (dropdown.classList.contains(active)) {
    if (!dropdownList.classList.contains(active)) {
      dropdownList.style.height = dropdownList.scrollHeight + 10 + "px";
    }
  } else {
    dropdownList.style.height = "0px";
  }
}

if (mobileX) {
  mobileX.addEventListener("click", () => {
    body.classList.remove("sidebar__open");
    body.classList.add("sidebar__close");
  });
}

dropdowns.forEach((dropdown, index) => {
  dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("active");
    dropdownToggler(dropdown, "active");
    // Close other dropdowns
    dropdowns.forEach((otherDropdown, otherIndex) => {
      if (index !== otherIndex && otherDropdown.classList.contains("active")) {
        otherDropdown.classList.remove("active");
        dropdownToggler(otherDropdown, "active");
      }
    });
  });
});

if (firstNavItem) {
  firstNavItem.addEventListener("focus", () => {
    if (!dropdowns[0].classList.contains("active")) {
      dropdowns[0].classList.add("active");
      dropdownToggler(dropdowns[0], "active");
    }
  });
}

if (hamburger) {
  hamburger.addEventListener("click", () => {
    body.classList.toggle("sidebar__close");
    body.classList.toggle("sidebar__open");

    dropdownLists.forEach((list) => {
      list.style.height = "0px";
    });

    if (body.classList.contains("sidebar__close")) {
      mobileDroplistSidebar.forEach((item) => {
        item.addEventListener("focus", () => {
          dropdownLists.forEach((list) => {
            list.style.display = "block";
          });
        });
      });
    }
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 991) {
    body.classList.add("sidebar__close");
    body.classList.remove("sidebar__open");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 991) {
    body.classList.remove("sidebar__open");
    body.classList.add("sidebar__close");

    window.addEventListener("click", (e) => {
      if (!e.target.closest(".sidebar") && !e.target.closest(".hamburger")) {
        body.classList.remove("sidebar__open");
        body.classList.add("sidebar__close");
      }
    });
  }
  document.getElementById("loading").classList.add("loadhide");
});
