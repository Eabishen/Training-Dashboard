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

if (mobileX) {
  mobileX.addEventListener("click", () => {
    body.classList.remove("sidebar__open");
    body.classList.add("sidebar__close");
  });
}

if (dropdown) {
  dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("active");
    dropdownToggler("active");
  });
}
if (firstNavItem) {
  firstNavItem.addEventListener("focus", () => {
    if (!dropdown.classList.contains("active")) {
      dropdown.classList.add("active");
      dropdownToggler("active");
    } else {
    }
  });
}

if (hamburger) {
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
}

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

// let tagArray= [];
// const skillsInput = document.querySelector("#skills_in");
// const skillsWrapper = document.querySelector("#addskills");
// const hiddenInputBox = document.querySelector("#hidden_box");
// const courseForm = document.querySelector("#coursedetails");

// courseForm.addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent form submission
// });

// skillsInput.addEventListener("keyup", function (event) {
//   const userInput = skillsInput.value.trim();
//   const key = event.key;

//   if (key === "," || key === "Enter") {
//     // If user input is not empty, add it to the skillsWrapper
//     if (userInput !== "") {
//       const skillElement = document.createElement("div");
//       const skillIcon = document.createElement("i");
//       skillIcon.classList.add("ms-2", "text-danger", "fa-solid", "fa-xmark");
//       skillIcon.setAttribute("role", "button");
//       const trimmedInput = userInput.replace(/[, ]+$/, "");
//       skillElement.innerHTML = `${trimmedInput}${skillIcon.outerHTML}`;
//       skillElement.classList.add("single_table_skills");
//       skillsWrapper.appendChild(skillElement);
//       skillsInput.value = "";
//     }
//   }
// });

const under_training = document.querySelector("#under_training");
const endDate = document.querySelector("#enddate");

under_training.addEventListener("change", () => {
  if (under_training.checked) {
    endDate.disabled = true;
    endDate.type = "text";
    endDate.value = "Under training";
  } else {
    endDate.disabled = false;
    endDate.type = "date";
    endDate.value = "";
  }
});

// Skills adding

let tagArray = [];
const skillsInput = document.querySelector("#skills_in");
const skillsWrapper = document.querySelector("#addskills");
const hiddenInputBox = document.querySelector("#hidden_box");
const courseForm = document.querySelector("#coursedetails");

// Load existing tags from hidden input box to tagArray
// tagArray = hiddenInputBox.value.split(",");

// Function to update hidden input box value and tagArray
if (hiddenInputBox) {
  function updateHiddenInput() {
    hiddenInputBox.value = tagArray.join(",");
  }
}

// Function to remove a tag
function removeTag(tag) {
  const index = tagArray.indexOf(tag);
  if (index !== -1) {
    tagArray.splice(index, 1);
    updateHiddenInput();
  }
}

// courseForm.addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent form submission
// });

skillsInput.addEventListener("keyup", function (event) {
  const userInput = skillsInput.value.trim("").replace(/,$/, "");
  const key = event.key;

  if (key === "," || key === "Enter") {
    if (userInput !== "" && !tagArray.includes(userInput)) {
      const skillElement = document.createElement("div");
      const skillIcon = document.createElement("i");
      skillIcon.classList.add("ms-2", "text-danger", "fa-solid", "fa-xmark");
      skillIcon.setAttribute("role", "button");
      skillElement.textContent = userInput;
      skillElement.classList.add("single_table_skills");
      skillElement.appendChild(skillIcon);
      skillsWrapper.appendChild(skillElement);

      // Add the skill to tagArray and update hidden input
      tagArray.push(userInput);
      updateHiddenInput();

      // Clear the input
      skillsInput.value = "";

      // Add click event listener to remove the tag
      skillIcon.addEventListener("click", function () {
        removeTag(userInput);
        skillsWrapper.removeChild(skillElement);
      });
    } else {
      skillsInput.value = "";
    }
  }
});

if (tagArray.length > 0) {
  tagArray.forEach((tag) => {
    const skillElement = document.createElement("div");
    const skillIcon = document.createElement("i");
    skillIcon.classList.add("ms-2", "text-danger", "fa-solid", "fa-xmark");
    skillIcon.setAttribute("role", "button");
    skillElement.textContent = tag;
    skillElement.classList.add("single_table_skills");
    skillElement.appendChild(skillIcon);
    skillsWrapper.appendChild(skillElement);
  });
}
