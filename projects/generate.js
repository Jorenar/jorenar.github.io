let icons = {
  "C":      `<i   title="C"          class="devicon-c-plain"></i>`,
  "C++":    `<i   title="C++"        class="devicon-cplusplus-plain"></i>`,
  "CSS":    `<i   title="CSS"        class="devicon-css3-plain"></i>`,
  "HTML":   `<i   title="HTML"       class="devicon-html5-plain"></i>`,
  "JS":     `<i   title="JavaScript" class="devicon-javascript-plain"></i>`,
  "Less":   `<i   title="Less"       class="devicon-less-plain-wordmark"></i>`,
  "PHP":    `<i   title="PHP"        class="devicon-php-plain"></i>`,
  "Python": `<i   title="Python"     class="devicon-python-plain"></i>`,
  "Shell":  `<i   title="Shell"      class="devicon-bash-plain"></i>`,
  "SQLite": `<img title="SQLite"     class="icon" alt="SQLite" height="25em" src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg">`,
  "Vim":    `<i   title="Vim"        class="devicon-vim-plain"></i>`,
};

let main = document.querySelector("main");

Object.keys(projects).forEach((type) => {
  let h1 = document.createElement("h1");
  h1.innerText = type;
  main.appendChild(h1);

  Object.keys(projects[type]).forEach((n) => {
    let proj = projects[type][n];

    let details = document.createElement("details");
    if (proj.hasOwnProperty("long")) {
      details.innerHTML = proj.long;
    }


    let name = document.createElement("a");
    let desc = document.createElement("div");
    let tech = document.createElement("div");

    name.className = "name";
    desc.className = "desc";
    tech.className = "tech";

    name.innerText = n;
    if (proj.hasOwnProperty("desc")) {
      desc.innerHTML = proj.desc;
    }

    name.href = proj.url;

    if (proj.hasOwnProperty("tech")) {
      proj.tech.forEach((t) => {
        if (icons.hasOwnProperty(t)) {
          tech.innerHTML += icons[t];
        } else {
          let span = document.createElement("span");
          span.innerText = t;
          tech.appendChild(span);
        }
      });
    }

    let summary = document.createElement("summary");
    summary.append(name, desc, tech);

    details.appendChild(summary);
    main.appendChild(details);

  });

});
