let svgIcons = [
  "C", "C++", "CMake", "COBOL",
  "CSS", "HTML", "Less", "JS", "PHP",
  "Python", "Shell", "SQLite", "Vim"
];

let imgIcons = {
  "Jekyll": "https://jekyllrb.com/img/logo-2x.png",
};

let main = document.querySelector("main");

Object.keys(projects).forEach((type) => {
  let h1 = document.createElement("h1");
  h1.innerText = type;
  main.appendChild(h1);

  Object.keys(projects[type]).forEach((n) => {
    let proj = projects[type][n];

    let summary = document.createElement("summary");

    if (proj.url) {
      var name = document.createElement("a");
    name.href = proj.url;
    } else {
      var name = document.createElement("span");
    }
    name.className = "name";
    name.innerText = n;
    summary.appendChild(name);

    if (proj.hasOwnProperty("tech")) {
      let tech = document.createElement("div");
      tech.className = "tech";

      proj.tech.forEach((t) => {
        if (svgIcons.indexOf(t) !== -1) {
          tech.innerHTML += `<svg><use href="projects/icons.svg#${t}" /></svg>`;
        } else if (imgIcons.hasOwnProperty(t)) {
          let img = document.createElement("img");
          img.src = imgIcons[t];
          img.title = t;
          tech.appendChild(img);
        } else {
          let span = document.createElement("span");
          span.innerText = t;
          tech.appendChild(span);
        }
      });
      summary.appendChild(tech);
    }

    if (proj.hasOwnProperty("desc")) {
      let desc = document.createElement("div");
      desc.className = "desc";
      desc.innerHTML = proj.desc;
      summary.appendChild(desc);
    }

    let details = document.createElement("details");
    if (proj.hasOwnProperty("long")) {
      details.innerHTML = proj.long;
    }
    details.appendChild(summary);
    main.appendChild(details);

  });

});
