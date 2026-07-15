
/* =========================================================
   Farma Âncora — script principal
   Sem dependências, sem framework.
   ========================================================= */

(function () {
  "use strict";

  function initNav() {
    var toggle = document.getElementById("navToggle");
    var menu = document.getElementById("navMenu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.addEventListener("click", function (event) {
      var target = event.target.closest("a");
      if (target && window.matchMedia("(max-width: 759px)").matches) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initNav);
})();