let nav = document.createElement("nav");
nav.innerHTML = `
  <nobr>
  <a href="">HOME</a>
  <a href="about">ABOUT</a>
  <a href="projects">PROJECTS</a>
  </nobr>
  <nobr>
  <a href="https://blog.joren.ga">BLOG</a>
  <a href="mailto:mail@joren.ga">CONTACT</a>
  </nobr>
`;
document.body.appendChild(nav);

let style = document.createElement("style");
style.innerHTML = `
  nav a[href='` + document.currentScript.getAttribute("page") + `'] {
    color: var(--color);
  }
`
document.body.appendChild(style);
