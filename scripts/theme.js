function toggleTheme() {
  let h = document.querySelector("html");
  let t = h.dataset.theme;
  if (t == "dark") {
    t = "light";
  } else {
    t = "dark";
  }
  h.dataset.theme = t;
  localStorage.setItem("theme", t);
}

let x = localStorage.getItem("theme");
if (!x) {
  x = "dark";
}
document.querySelector("html").dataset.theme = x;
