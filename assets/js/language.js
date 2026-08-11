(function () {
  var storageKey = 'language';
  var defaultLanguage = 'en';

  function normalizeLanguage(language) {
    return language === 'zh' ? 'zh' : defaultLanguage;
  }

  function getQueryLanguage() {
    try {
      var language = new URLSearchParams(window.location.search).get('lang');
      return language === 'zh' || language === defaultLanguage ? language : null;
    } catch (e) {
      return null;
    }
  }

  function getStoredLanguage() {
    try {
      return normalizeLanguage(localStorage.getItem(storageKey));
    } catch (e) {
      return defaultLanguage;
    }
  }

  function storeLanguage(language) {
    try {
      localStorage.setItem(storageKey, language);
    } catch (e) {
      // Ignore storage failures; the current page still switches language.
    }
  }

  function updateLanguageBlocks(language) {
    var blocks = document.querySelectorAll('[data-lang-block]');

    blocks.forEach(function (block) {
      block.hidden = block.getAttribute('data-lang-block') !== language;
    });
  }

  function updateCurrentUrl(language) {
    if (!window.history || !window.history.replaceState) {
      return;
    }

    try {
      var url = new URL(window.location.href);

      if (language === 'zh' || url.searchParams.has('lang')) {
        url.searchParams.set('lang', language);
      }

      window.history.replaceState({}, '', url.toString());
    } catch (e) {
      // Ignore URL update failures; language switching still works on the page.
    }
  }

  function shouldCarryLanguage(link, url) {
    if (!link || link.getAttribute('href') === '#') {
      return false;
    }

    if (url.origin !== window.location.origin) {
      return false;
    }

    return !/\.(pdf|png|jpe?g|gif|svg|ico|css|js|xml|txt|zip)$/i.test(url.pathname);
  }

  function updateInternalLinks(language) {
    var links = document.querySelectorAll('a[href]');

    links.forEach(function (link) {
      try {
        var url = new URL(link.getAttribute('href'), window.location.href);

        if (!shouldCarryLanguage(link, url)) {
          return;
        }

        if (language === 'zh' || window.location.search.indexOf('lang=') !== -1) {
          url.searchParams.set('lang', language);
        } else {
          url.searchParams.delete('lang');
        }

        link.setAttribute('href', url.toString());
      } catch (e) {
        // Ignore malformed or non-standard links.
      }
    });
  }

  function updateToggle(language) {
    var label = document.getElementById('language-toggle-label');
    var toggle = document.querySelector('#language-toggle a');
    var options = document.querySelectorAll('.language-toggle__option');

    if (options.length) {
      options.forEach(function (option) {
        var isActive = option.classList.contains('language-toggle__option--zh') ? language === 'zh' : language !== 'zh';
        option.classList.toggle('is-active', isActive);
      });
    } else if (label) {
      label.textContent = language === 'zh' ? 'EN' : '中文';
    }

    if (toggle) {
      toggle.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
      toggle.setAttribute('title', language === 'zh' ? 'Switch to English' : '切换到中文');
    }
  }

  function setLanguage(language) {
    var nextLanguage = normalizeLanguage(language);

    document.documentElement.setAttribute('data-lang', nextLanguage);
    document.documentElement.setAttribute('lang', nextLanguage === 'zh' ? 'zh-CN' : 'en');
    storeLanguage(nextLanguage);
    updateLanguageBlocks(nextLanguage);
    updateCurrentUrl(nextLanguage);
    updateInternalLinks(nextLanguage);
    updateToggle(nextLanguage);
  }

  document.addEventListener('DOMContentLoaded', function () {
    setLanguage(getQueryLanguage() || getStoredLanguage());

    var toggle = document.querySelector('#language-toggle a');
    if (!toggle) {
      return;
    }

    toggle.addEventListener('click', function (event) {
      event.preventDefault();
      var currentLanguage = document.documentElement.getAttribute('data-lang') === 'zh' ? 'zh' : defaultLanguage;
      setLanguage(currentLanguage === 'zh' ? defaultLanguage : 'zh');
    });
  });
})();
