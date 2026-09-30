/* English is the no-JavaScript fallback. Remember explicit language choices. */
(function () {
  "use strict";
  var root = document.documentElement;
  var toggle = document.getElementById("language-toggle");
  if (!toggle) return;

  function setLanguage(language) {
    var chinese = language === "zh";
    root.dataset.language = chinese ? "zh" : "en";
    root.lang = chinese ? "zh-CN" : "en";
    toggle.textContent = chinese ? "English" : "中文";
    toggle.lang = chinese ? "en" : "zh-CN";
    toggle.setAttribute("aria-label", chinese ? "Switch to English" : "切换到中文");
    document.title = chinese ? "杨珮茹 | Peiru Yang" : "Peiru Yang (杨珮茹)";
  }

  var preferred = "en";
  try { preferred = localStorage.getItem("homepage-language") || "en"; } catch (error) { /* Storage may be disabled. */ }
  setLanguage(preferred);
  toggle.hidden = false;
  toggle.addEventListener("click", function () {
    var language = root.dataset.language === "zh" ? "en" : "zh";
    setLanguage(language);
    try { localStorage.setItem("homepage-language", language); } catch (error) { /* Works without storage. */ }
  });
}());
