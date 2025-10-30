// Load and toggle color theme
const themeBtn = document.getElementById("theme-toggle");
const root = document.documentElement;
const localTheme = localStorage.getItem("theme");

if (localTheme) {
  toggleTheme(localTheme);
} else if (globalThis.matchMedia("(prefers-color-scheme: dark)").matches) {
  toggleTheme("dark");
} else {
  toggleTheme("light");
}

if (themeBtn)
  themeBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    localStorage.setItem("theme", current === "dark" ? "light" : "dark");
    toggleTheme(current === "dark" ? "light" : "dark");
  });

function toggleTheme(theme) {
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
    root.style.setProperty("color-scheme", "dark");
    if (themeBtn) themeBtn.textContent = "☀️";
  } else {
    root.removeAttribute("data-theme");
    root.style.setProperty("color-scheme", "light");
    if (themeBtn) themeBtn.textContent = "🌙";
  }
}
