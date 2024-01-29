const dropdown = document.querySelector(".lidrop");
const dropdownLists = document.querySelector(".subnavlist");
const firstNavItem = document.querySelector(".subnavlist a");

// Sidebar toggle
const hamburger = document.querySelector("#hamburger");
const body = document.querySelector("body");
const mobileX = document.querySelector(".mobile_close");

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

mobileX.addEventListener("click", () => {
  body.classList.remove("sidebar__open");
  body.classList.add("sidebar__close");
});

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
  body.classList.toggle("sidebar__open");

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
    body.classList.remove("sidebar__open");
  }
});
window.addEventListener("DOMContentLoaded", (e) => {
  if (window.innerWidth < 991) {
    body.classList.remove("sidebar__open");
    body.classList.add("sidebar__close");

    window.addEventListener("click", (e) => {
      window.addEventListener("click", (e) => {
        if (!e.target.closest(".sidebar") && !e.target.closest(".hamburger")) {
          body.classList.remove("sidebar__open");
          body.classList.add("sidebar__close");
        }
      });
    });
  }
  document.getElementById("loading").classList.add("loadhide");
});

// Skills adding
const skillsInput = document.querySelector("#skills_in");
const skillsWrapper = document.querySelector("#addskills");
const courseForm = document.querySelector("#coursedetails");

courseForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
});

skillsInput.addEventListener("keyup", function (event) {
  const userInput = skillsInput.value.trim();
  const key = event.key;

  if (key === "," || key === "Enter") {
    // If user input is not empty, add it to the skillsWrapper
    if (userInput !== "") {
      const skillElement = document.createElement("div");
      const skillIcon = document.createElement("i");
      skillIcon.classList.add("ms-2", "text-danger", "fa-solid", "fa-xmark");
      skillIcon.setAttribute("role", "button");
      console.log(skillIcon);
      const trimmedInput = userInput.replace(/[, ]+$/, "");
      skillElement.innerHTML = `${trimmedInput}${skillIcon.outerHTML}`;
      skillElement.classList.add("single_table_skills");
      skillsWrapper.appendChild(skillElement);
      skillsInput.value = "";
    }
  }
});

// Skills adding
