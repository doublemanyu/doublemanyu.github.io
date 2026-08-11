(function () {
  var storageKey = "theme";

  function preferredTheme() {
    try {
      var stored = localStorage.getItem(storageKey);
      if (stored === "dark" || stored === "light") {
        return stored;
      }
    } catch (e) {
      // Fall back to the browser preference when storage is unavailable.
    }

    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    var icon = document.getElementById("theme-icon");

    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      if (icon) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      }
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (icon) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      }
    }
  }

  applyTheme(preferredTheme());

  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(preferredTheme());

    var toggle = document.getElementById("theme-toggle");
    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      var nextTheme = document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";

      try {
        localStorage.setItem(storageKey, nextTheme);
      } catch (e) {
        // The current page can still switch themes without persistence.
      }

      applyTheme(nextTheme);
    });
  });
})();
