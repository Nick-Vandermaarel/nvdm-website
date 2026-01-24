document.addEventListener("DOMContentLoaded", function () {
  const year = new Date().getFullYear();
  document.getElementById("current-year").textContent = year;

  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function () {
      const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", !isExpanded);
      mobileMenu.classList.toggle("active");
      document.body.style.overflow = isExpanded ? "" : "hidden";
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        const href = link.getAttribute("href");

        if (href && href.startsWith("#") && !href.startsWith("#ai")) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            const headerHeight = document.querySelector("header").offsetHeight;
            const offsetTop = targetElement.offsetTop - headerHeight - 20;
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth"
            });
          }
        }

        hamburger.setAttribute("aria-expanded", "false");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
        hamburger.setAttribute("aria-expanded", "false");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }
});

