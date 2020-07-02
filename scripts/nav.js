let nav = document.createElement("nav");
nav.innerHTML = `
  <input id="hamburger" type="checkbox">
  <label for="hamburger" class="hamburger"><i class="fas fa-bars"></i></label>
  <div id="toggleTheme" class="switch">
    <label>
      <input type="checkbox" onclick="toggleTheme()">
      <span class="slider"></span>
    </label>
    <i class="fas fa-sun"></i>
  </div>
  <a href="">HOME</a>
  <a href="about">ABOUT</a>
  <a href="projects">PROJECTS</a>
  <a href="blog">BLOG</a>
  <a href="mailto:jakublukasiewicz@o2.pl">CONTACT</a>
`;
document.body.appendChild(nav);

window.onload = () => {
  if (document.querySelector("html").dataset.theme == "light") {
    document.querySelector("#toggleTheme input").checked = true;
  }
}

let style = document.createElement("style");
style.innerHTML = `
  nav > a[href='` + document.currentScript.getAttribute("page") + `'] {
    background-color: var(--bg);
    color: var(--color);
  }
`
document.body.appendChild(style);
