const windowLocation = window.location.href;
const navLinks = document.querySelectorAll(".mobiledropdown a");
const subNavLinks = document.querySelectorAll(".subnavlist a");
const dropdownmax = document.querySelectorAll(".dropdownli");

navLinks.forEach((link) => {
  if (link.href === windowLocation) {
    link.setAttribute("aria-current", "page");
  }
});

subNavLinks.forEach((linkx) => {
  if (linkx.href === windowLocation) {
    linkx.setAttribute("aria-current", "page");
  }
  const linkWithCurrentPage = linkx.querySelector(
    '.subnavlist a[aria-current="page"]'
  );

  if (linkWithCurrentPage) {
    console.log("asd");
    dropdownmax.classList.add("active");
    dropdownToggler(dropdownmax, "active");
  }
});

const subNavigation = () => {
  dropdownmax.forEach((nav, index) => {
    subNavLinks.forEach((links) => {
      const linkWithCurrentPage = nav.querySelector(
        '.subnavlist a[aria-current="page"]'
      );

      if (body.classList.contains("sidebar__close") && linkWithCurrentPage) {
        console.log("wro");
        nav.setAttribute("aria-current", "page");
      }
    });
  });
};

subNavigation();

hamburger.addEventListener("click", subNavigation);
